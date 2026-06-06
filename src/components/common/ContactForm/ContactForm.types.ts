import type { Dayjs } from 'dayjs';
import type { ContactFormSubmitValues } from '@/hooks/useContactForm';

export interface ContactFormValues {
    name: string;
    email: string;
    phone: string;
    birthDate: Dayjs | null;
    subject: string;
    message: string;
}

export interface ContactFormProps {
    onSubmit?: (values: ContactFormSubmitValues) => Promise<void>;
    className?: string;
}
