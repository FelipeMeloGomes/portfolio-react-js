// Estilos Css
import styles from "./AboutItem.module.css";

// Utils
import { getImageUrl } from "../../utils/utils";

const AboutItem = ({ title, imgDescription, description, imageSrc }) => {
    return (
        <li className={styles.aboutItem}>
            <img
                src={getImageUrl(imageSrc)}
                alt={imgDescription}
                loading="lazy"
            />
            <div className={styles.aboutItemText}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </li>
    );
};

export default AboutItem;
