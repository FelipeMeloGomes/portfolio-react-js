// Estilos Css
import styles from "./About.module.css";

// Components
import Title from "../Title/Title";

// Utils
import { getImageUrl } from "../../utils/utils";
import AboutItem from "../AboutItem/AboutItem";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <Title title="Sobre" />
            <div className={styles.content}>
                <img
                    src={getImageUrl("about/aboutImg.webp")}
                    alt="Me sitting with a laptop"
                    className={styles.aboutImage}
                    loading="lazy"
                />
                <ul className={styles.aboutItems}>
                    <AboutItem
                        imgDescription={"cursorIcon"}
                        title={"Front-End Developer"}
                        imageSrc={"about/cursorIcon.webp"}
                        description={`Sou Desenvolvedor Front-end com experiência na construção de sites responsivos e otimizados`}
                    />
                    <AboutItem
                        imgDescription={"backendIcon"}
                        title={"Backend Developer"}
                        imageSrc={"about/serverIcon.webp"}
                        description={`Tenho experiência em desenvolvimento rápido e
                        otimizado sistemas back-end e APIs`}
                    />
                    <AboutItem
                        imgDescription={"uiIcon"}
                        title={"UI Designer"}
                        imageSrc={"about/uiIcon.webp"}
                        description={`Eu projetei várias páginas de destino e também
                        criou sistemas de design`}
                    />
                </ul>
            </div>
        </section>
    );
};

export default About;
