import { NavLink } from "react-router";
import styles from "./Item.module.css";

export interface IT {
    isOpen: boolean,
    to: string,
    toolTip: string,
    icon: React.JSX.Element,
};

export const Item = ({ icon, toolTip, to, isOpen }: IT) => {
    return (
        <NavLink
            to={to}
            end
            aria-label={toolTip}
            data-tooltip={!isOpen ? toolTip : null}
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
            {isOpen && <span>{toolTip}</span>}
        </NavLink>
    );
};


