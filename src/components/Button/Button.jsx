// Estilos Css
import { getImageUrl } from "../../utils/utils";
import styles from "./Button.module.css";

const Button = ({ link, description, imageUrl }) => {
    return (
        <a href={link} target="_blank" className={styles.contactBtn}>
            {description}
            <img src={getImageUrl(imageUrl)} alt={""} loading="lazy" />
        </a>
    );
};

export default Button;
