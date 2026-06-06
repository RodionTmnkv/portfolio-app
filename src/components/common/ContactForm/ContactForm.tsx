import { Form, Input, Button, DatePicker } from 'antd';
import {
    MailOutlined,
    UserOutlined,
    MessageOutlined,
    PhoneOutlined,
    CalendarOutlined,
} from '@ant-design/icons';
import dayjs from 'dayjs';
import { useContactForm } from '@/hooks/useContactForm';
import {
    nameRules,
    emailRules,
    phoneRules,
    subjectRules,
    messageRules,
    birthDateValidator,
} from './ContactForm.validation';
import type { ContactFormProps } from './ContactForm.types';
import styles from './ContactForm.module.scss';

const { TextArea } = Input;

const ContactForm = ({ onSubmit, className = '' }: ContactFormProps) => {
    const { form, loading, handleSubmit } = useContactForm({ onSubmit });

    const disabledDate = (current: dayjs.Dayjs) => {
        if (!current) {
            return false;
        }

        const today = dayjs();
        const tooOld = current.isBefore(today.subtract(100, 'year'), 'day');
        const tooYoung = current.isAfter(today.subtract(14, 'year'), 'day');

        return tooOld || tooYoung;
    };

    return (
        <Form
            className={`${styles.form} ${className}`}
            form={form}
            layout="vertical"
            requiredMark="optional"
            onFinish={handleSubmit}
        >
            <div className={styles.formRow}>
                <Form.Item
                    className={styles.formItem}
                    label="Full Name"
                    name="name"
                    rules={[...nameRules]}
                >
                    <Input
                        placeholder="John Doe"
                        prefix={<UserOutlined />}
                        size="large"
                    />
                </Form.Item>

                <Form.Item
                    className={styles.formItem}
                    label="Email"
                    name="email"
                    rules={[...emailRules]}
                >
                    <Input
                        placeholder="john@example.com"
                        prefix={<MailOutlined />}
                        size="large"
                    />
                </Form.Item>
            </div>

            <div className={styles.formRow}>
                <Form.Item
                    className={styles.formItem}
                    label="Phone Number"
                    name="phone"
                    rules={[...phoneRules]}
                >
                    <Input
                        placeholder="+1 (555) 123-4567"
                        prefix={<PhoneOutlined />}
                        size="large"
                    />
                </Form.Item>

                <Form.Item
                    className={styles.formItem}
                    label="Birth Date"
                    name="birthDate"
                    rules={[
                        {
                            required: true,
                            message: 'Please select your birth date',
                        },
                        { validator: birthDateValidator },
                    ]}
                >
                    <DatePicker
                        defaultPickerValue={dayjs().subtract(25, 'year')}
                        disabledDate={disabledDate}
                        format="DD.MM.YYYY"
                        inputReadOnly={true}
                        placeholder="Select your birth date"
                        size="large"
                        style={{ width: '100%' }}
                        suffixIcon={<CalendarOutlined />}
                    />
                </Form.Item>
            </div>

            <Form.Item label="Subject" name="subject" rules={[...subjectRules]}>
                <Input
                    placeholder="What is this about?"
                    prefix={<MessageOutlined />}
                    size="large"
                />
            </Form.Item>

            <Form.Item label="Message" name="message" rules={[...messageRules]}>
                <TextArea
                    showCount
                    maxLength={1000}
                    placeholder="Tell me about your project or idea..."
                    rows={6}
                    size="large"
                />
            </Form.Item>

            <Form.Item>
                <Button
                    block
                    htmlType="submit"
                    loading={loading}
                    size="large"
                    type="primary"
                >
                    Send Message
                </Button>
            </Form.Item>
        </Form>
    );
};

export default ContactForm;
