export const VALIDATION = {
    MIN_TODO_LENGTH: 1,
    MAX_TODO_LENGTH: 500,
    MIN_PASSWORD_LENGTH: 8,
    MAX_PASSWORD_LENGTH: 128,
} as const;

export const ERROR_MESSAGES = {
    VALIDATION_ERROR: 'Please check your input and try again.',
    UNKNOWN_ERROR: 'An unexpected error occurred.',
} as const;