import styles from './NotFound.module.scss'

import { NavLink } from "react-router-dom";

export function NotFound() {
    return (
        <div className={styles.errorBox}>
            <h1 className={styles.errorBoxTitle}>404 - Coś poszło kwadratowo nie tak.</h1>
            <p>Czyżby funkcja zaczęła się buntować?</p>
            <NavLink to={'/'} className={styles.backBtn}>Powrót</NavLink>
        </div>
    )
}