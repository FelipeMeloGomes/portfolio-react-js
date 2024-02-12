// Estilos Css
import styles from "./Projects.module.css";

// Components
import Title from "../Title/Title";

// Data json
import projects from "../../data/projects.json";

// Component
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    return (
        <section className={styles.container} id="projects">
            <Title title="Projetos" />
            <div className={styles.projects}>
                {projects.map((project, id) => {
                    return <ProjectCard key={id} project={project} />;
                })}
            </div>
        </section>
    );
};

export default Projects;
