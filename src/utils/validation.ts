import dayjs from 'dayjs';

export const nameRules = [
    { required: true, message: 'Please enter your name' },
    { min: 2, message: 'Name must be at least 2 characters' },
    { max: 50, message: 'Name must be less than 50 characters' },
    { pattern: /^[a-zA-Z\s'-]+$/, message: 'Please enter a valid name' },
] as const;

export const emailRules = [
    { required: true, message: 'Please enter your email' },
    { type: 'email' as const, message: 'Please enter a valid email' },
    { max: 100, message: 'Email must be less than 100 characters' },
] as const;

export const phoneRules = [
    { required: true, message: 'Please enter your phone number' },
    {
        pattern: /^\+?[\d\s-()]{10,20}$/,
        message: 'Please enter a valid phone number',
    },
] as const;

export const subjectRules = [
    { required: true, message: 'Please enter the subject' },
    { min: 3, message: 'Subject must be at least 3 characters' },
    { max: 100, message: 'Subject must be less than 100 characters' },
] as const;

export const messageRules = [
    { required: true, message: 'Please enter your message' },
    { min: 10, message: 'Message must be at least 10 characters' },
    { max: 1000, message: 'Message must be less than 1000 characters' },
] as const;

export const birthDateValidator = (_: unknown, value: dayjs.Dayjs | null) => {
    // Если значение не выбрано, required rule уже покажет ошибку
    if (!value) {
        return Promise.resolve();
    }

    const today = dayjs();
    const minDate = today.subtract(100, 'year');
    const maxDate = today.subtract(14, 'year');

    if (!value.isValid()) {
        return Promise.reject(new Error('Please enter a valid date'));
    }

    if (value.isBefore(minDate)) {
        return Promise.reject(
            new Error('Date cannot be more than 100 years ago')
        );
    }

    if (value.isAfter(maxDate)) {
        return Promise.reject(new Error('You must be at least 14 years old'));
    }

    if (value.isAfter(today)) {
        return Promise.reject(new Error('Date cannot be in the future'));
    }

    return Promise.resolve();
};
