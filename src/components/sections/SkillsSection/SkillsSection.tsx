import { Typography } from 'antd';
import { ToolOutlined } from '@ant-design/icons';
import SkillItem from '@/components/common/SkillItem';
import { skills } from '@/data/skills';
import styles from './SkillsSection.module.scss';

const { Title } = Typography;

const SkillsSection: React.FC = () => (
    <section className={styles.section}>
        <Title className={styles.title} level={2}>
            <ToolOutlined /> Technical Skills
        </Title>
        <div className={styles.container}>
            {skills.map((skill) => (
                <SkillItem key={skill.id} {...skill} size="large" />
            ))}
        </div>
    </section>
);

export default SkillsSection;
