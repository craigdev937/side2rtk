import React from "react";
import styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa";
import { menuItems } from "../data/dBase";
import { Item } from "./Item";

export const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <menu>
            <section
                className={`
                    ${styles.sidebar} 
                    ${isOpen ? styles.open : ""}
            `}>
                <button
                    type="button"
                    aria-expanded={isOpen}
                    className={styles.toggle}
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-label={isOpen ? "Collapse sidebar" : 
                        "Expand sidebar"}
                >
                    <FaBars />
                </button>
                <nav
                    className={`
                        ${styles.navigation} 
                        ${!isOpen ? styles.noScrollbar : ""}
                    `}
                >
                    {menuItems.map((item) => (
                        <Item 
                            key={item.id}
                            icon={item.icon}
                            toolTip={item.toolTip}
                            to={item.path}
                            isOpen={isOpen}         
                        />
                    ))}
                </nav>
            </section>
        </menu>
    );
};


