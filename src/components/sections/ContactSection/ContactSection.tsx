import { Typography } from 'antd';
import { MobileOutlined } from '@ant-design/icons';
import ContactForm from '@/components/common/ContactForm';
import type { ContactFormSubmitValues } from '@/hooks/useContactForm';
import styles from './ContactSection.module.scss';

const { Title } = Typography;

interface ContactSectionProps {
    onSubmit?: (values: ContactFormSubmitValues) => Promise<void>;
}

const ContactSection = ({ onSubmit }: ContactSectionProps) => (
    <section className={styles.section}>
        <Title className={styles.title} level={2}>
            <MobileOutlined /> Get In Touch
        </Title>
        <ContactForm onSubmit={onSubmit} />
    </section>
);

export default ContactSection;
