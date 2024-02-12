// Estilos Css
import styles from "./Contact.module.css";

// Utils
import { getImageUrl } from "../../utils/utils";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contato</h2>
                <p>Sinta-se à vontade para entrar em contato!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/felipemelog/"
                    >
                        <img
                            src={getImageUrl("contact/linkedinIcon.webp")}
                            alt="LinkedIn icon"
                            loading="lazy"
                        />
                        FelipeMelo
                    </a>
                </li>
                <li className={styles.link}>
                    <a
                        target="_blank"
                        href="https://github.com/FelipeMeloGomes"
                    >
                        <img
                            src={getImageUrl("contact/githubIcon.webp")}
                            alt="Github icon"
                            loading="lazy"
                        />
                        FelipeMelo
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Contact;
