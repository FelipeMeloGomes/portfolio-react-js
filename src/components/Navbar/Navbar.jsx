// React Hooks
import { useState } from "react";

// Estilos Css
import styles from "./Navbar.module.css";

// Utils
import { getImageUrl } from "../../utils/utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">
                Portfolio
            </a>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={
                        menuOpen
                            ? getImageUrl("nav/closeIcon.webp")
                            : getImageUrl("nav/menuIcon.webp")
                    }
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul
                    className={`${styles.menuItems} ${
                        menuOpen && styles.menuOpen
                    }`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <a href="#about">Sobre</a>
                    </li>
                    <li>
                        <a href="#experience">Experiência</a>
                    </li>
                    <li>
                        <a href="#projects">Projetos</a>
                    </li>
                    <li>
                        <a href="#about">Contato</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
