// Estilos Css
import styles from "./Hero.module.css";

// Components
import { getImageUrl } from "../../utils/utils";
import Button from "../Button/Button";

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Olá eu sou Felipe Melo</h1>
                <p className={styles.description}>
                    Desenvolvedor Front-end React.js
                </p>
                <div className={styles.containerBtn}>
                    <Button
                        link={`https://api.whatsapp.com/send?phone=64992600637&text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20seu%20Portf%C3%B3lio`}
                        imageUrl={"contact/whatsappIcon.webp"}
                        altText={"Whatssap"}
                        altLink={"WhatssapIcon"}
                    />
                    <Button
                        link={`https://www.linkedin.com/in/felipemelog/`}
                        imageUrl={"contact/linkedinIcon.webp"}
                        altLink={"LinkedinIcon"}
                        altText={"Linkedin"}
                    />
                    <Button
                        link={`https://github.com/FelipeMeloGomes`}
                        imageUrl={"contact/githubIcon.webp"}
                        altText={"GitHub"}
                        altLink={"GitHubIcon"}
                    />
                </div>
            </div>
            <img
                className={styles.heroImg}
                src={getImageUrl("hero/heroImage.webp")}
                alt="Foto do perfil"
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};

export default Hero;
