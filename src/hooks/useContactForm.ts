import { useState, useCallback } from 'react';
import { Form, message } from 'antd';
import type { ContactFormValues } from '@/components/common/ContactForm/ContactForm.types';
import { formatDate } from '@/utils/date';

export interface ContactFormSubmitValues {
    name: string;
    email: string;
    phone: string;
    birthDate: string;
    subject: string;
    message: string;
}

interface UseContactFormOptions {
    onSubmit?: (values: ContactFormSubmitValues) => Promise<void>;
}

export const useContactForm = ({ onSubmit }: UseContactFormOptions = {}) => {
    const [form] = Form.useForm<ContactFormValues>();
    const [loading, setLoading] = useState(false);

    const handleSubmit = useCallback(
        async (values: ContactFormValues) => {
            setLoading(true);
            try {
                const formattedValues: ContactFormSubmitValues = {
                    ...values,
                    birthDate: formatDate(values.birthDate),
                };

                if (onSubmit) {
                    await onSubmit(formattedValues);
                } else {
                    await new Promise((resolve) => setTimeout(resolve, 1000));

                    if (process.env.NODE_ENV === 'development') {
                        console.warn('Form submitted:', formattedValues);
                    }
                }

                message.success('Message sent successfully!');
                form.resetFields();
            } catch (error) {
                message.error('Failed to send message. Please try again.');
                console.error('Submit error:', error);
            } finally {
                setLoading(false);
            }
        },
        [onSubmit, form]
    );

    return {
        form,
        loading,
        handleSubmit,
    };
};
