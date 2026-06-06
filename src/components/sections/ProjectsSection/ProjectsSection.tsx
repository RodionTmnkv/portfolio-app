import { Row, Col, Typography } from 'antd';
import { CodeOutlined } from '@ant-design/icons';
import ProjectCard from '@/components/common/ProjectCard';
import { projects } from '@/data/projects';
import styles from './ProjectsSection.module.scss';

const { Title } = Typography;

const ProjectsSection: React.FC = () => (
    <section className={styles.section}>
        <Title className={styles.title} level={2}>
            <CodeOutlined /> Featured Projects
        </Title>
        <Row gutter={[24, 24]}>
            {projects.map((project) => (
                <Col key={project.id} lg={8} sm={12} xs={24}>
                    <ProjectCard {...project} />
                </Col>
            ))}
        </Row>
    </section>
);

export default ProjectsSection;
