// Estilos Css
import { getImageUrl } from "../../utils/utils";
import styles from "./Button.module.css";

const Button = ({ link, description, imageUrl, altText, altLink }) => {
    return (
        <a
            href={link}
            target="_blank"
            alt={altLink}
            className={styles.contactBtn}
        >
            {description}
            <img src={getImageUrl(imageUrl)} alt={altText} loading="lazy" />
        </a>
    );
};

export default Button;
