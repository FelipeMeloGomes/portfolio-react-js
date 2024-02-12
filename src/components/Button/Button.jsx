// Estilos Css
import styles from "./Button.module.css";

const Button = ({ link, description}) => {
    return (
        <a href={link} target="_blank" className={styles.contactBtn}>
            {description}
        </a>
    );
};

export default Button;
