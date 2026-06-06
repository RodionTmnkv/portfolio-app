import type { ContactFormValues } from '@/components/common/ContactForm';

export const submitContactForm = async (data: ContactFormValues) => {
    const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Failed to submit form');
    }

    return response.json();
};
