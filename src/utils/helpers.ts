/**
 * Collection of common utility functions
 */

/**
 * Safely access nested object properties
 */
export const get = (obj: any, path: string, defaultValue: any = undefined) => {
    const travel = (regexp: RegExp) =>
        String.prototype.split
            .call(path, regexp)
            .filter(Boolean)
            .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj);
    const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
    return result === undefined || result === obj ? defaultValue : result;
};

/**
 * Format date to locale string
 */
export function formatDate(date: Date | string, locale: string = 'en-US'): string {
    const d = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(d);
}

/**
 * Debounce function
 */
export const debounce = <T extends (...args: any[]) => any>(
    func: T,
    wait: number
): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
};

/**
 * Capitalize first letter of a string
 */
export const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * Check if running on client side
 */
export const isClient = typeof window !== 'undefined';

/**
 * Check if running on server side
 */
export const isServer = typeof window === 'undefined';

interface ValidationRule {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    message?: string;
}

interface ValidationRules {
    [key: string]: ValidationRule;
}

interface ValidationErrors {
    [key: string]: string;
}

export function validateForm(values: Record<string, string>, rules: ValidationRules): ValidationErrors {
    const errors: ValidationErrors = {};

    Object.keys(rules).forEach((field) => {
        const value = values[field];
        const rule = rules[field];

        if (rule.required && !value) {
            errors[field] = rule.message || 'This field is required';
        }

        if (value && rule.minLength && value.length < rule.minLength) {
            errors[field] = rule.message || `Minimum length is ${rule.minLength} characters`;
        }

        if (value && rule.maxLength && value.length > rule.maxLength) {
            errors[field] = rule.message || `Maximum length is ${rule.maxLength} characters`;
        }

        if (value && rule.pattern && !rule.pattern.test(value)) {
            errors[field] = rule.message || 'Invalid format';
        }
    });

    return errors;
} 