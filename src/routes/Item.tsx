import { NavLink } from "react-router";
import styles from "./Item.module.css";

export interface IT {
    isOpen: boolean,
    to?: string,
    text: string,
    icon: React.JSX.Element,
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


