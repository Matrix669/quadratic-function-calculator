import styles from './BackBtn.module.scss'

import { NavLink } from "react-router-dom";

export function BackBtn() {
    return <NavLink to={'/'} className={styles.backBtn}>⬅ Powrót</NavLink>
}