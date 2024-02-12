// Estilos Css
import styles from "./ProjectCard.module.css";

// Utils
import { getImageUrl } from "../../utils/utils";

export const ProjectCard = ({
    project: { title, imageSrc, description, skills, demo, source },
}) => {
    return (
        <div className={styles.container}>
            <img
                src={getImageUrl(imageSrc)}
                alt={`Image of ${title}`}
                className={styles.image}
            />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((skill, id) => {
                    return (
                        <li key={id} className={styles.skill}>
                            {skill}
                        </li>
                    );
                })}
            </ul>
            <div className={styles.links}>
                <a target="_blank" href={demo} className={styles.link}>
                    Projeto
                </a>
                <a target="_blank" href={source} className={styles.link}>
                    Github
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
