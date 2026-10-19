import { NavLink } from "react-router";
import styles from "./Item.module.css";
import type { MENU } from "../data/dBase";

export interface IT extends MENU {
    isOpen: boolean,
    to?: string
};

export const Item = ({ icon, text, to, isOpen }: IT) => {
    return (
        <NavLink
            to={to!}
            end
            aria-label={text}
            data-tooltip={!isOpen ? text : null}
            className={({ isActive }) => 
                `${styles.item} 
                ${isActive ? styles.active : ""}`
            }
        >
            <span 
                className={styles.icon}
                aria-hidden="true"
            >
                {icon}
            </span>
            {isOpen && <span>{text}</span>}
        </NavLink>
    );
};


