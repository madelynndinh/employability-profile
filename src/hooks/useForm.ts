import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
    [key: string]: string;
}

interface UseFormProps {
    initialValues: FormData;
    onSubmit: (values: FormData) => void | Promise<void>;
    validate?: (values: FormData) => FormData;
}

export function useForm({ initialValues, onSubmit, validate }: UseFormProps) {
    const [values, setValues] = useState<FormData>(initialValues);
    const [errors, setErrors] = useState<FormData>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setValues(prev => ({ ...prev, [name]: value }));
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
            setValues(initialValues);
        } catch (error) {
            if (error instanceof Error) {
                setErrors({ submit: error.message });
            } else {
                setErrors({ submit: 'An unknown error occurred' });
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        values,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit,
    };
} 