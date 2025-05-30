import { useState, ChangeEvent, FormEvent } from 'react';

interface UseFormProps<T> {
    initialValues: T;
    onSubmit: (values: T) => void | Promise<void>;
    validate?: (values: T) => Partial<Record<keyof T, string>>;
}

interface UseFormReturn<T> {
    values: T;
    errors: Partial<Record<keyof T, string>>;
    touched: Partial<Record<keyof T, boolean>>;
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    handleBlur: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    reset: () => void;
    isSubmitting: boolean;
}

export function useForm<T extends Record<string, any>>({
    initialValues,
    onSubmit,
    validate,
}: UseFormProps<T>): UseFormReturn<T> {
    const [values, setValues] = useState<T>(initialValues);
    const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
    const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleBlur = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name } = e.target;
        setTouched((prev) => ({
            ...prev,
            [name]: true,
        }));

        if (validate) {
            const validationErrors = validate(values);
            setErrors(validationErrors);
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (validate) {
            const validationErrors = validate(values);
            setErrors(validationErrors);

            if (Object.keys(validationErrors).length > 0) {
                setIsSubmitting(false);
                return;
            }
        }

        try {
            await onSubmit(values);
        } catch (error) {
            console.error('Form submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const reset = () => {
        setValues(initialValues);
        setErrors({});
        setTouched({});
        setIsSubmitting(false);
    };

    return {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        reset,
        isSubmitting,
    };
} 