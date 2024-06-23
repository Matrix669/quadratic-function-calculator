import { NavLink } from 'react-router-dom'
import styles from './SelectFunction.module.scss'

export function SelectFunction({ onSelect }) {
	return (
		<>
			<h1 className={styles.title}>Wybierz postać funkcji kwadratowej</h1>
			<NavLink onClick={onSelect} className={styles.link} to={'/postac-ogolna'}>
				Postać ogólna
			</NavLink>
			<NavLink onClick={onSelect} className={styles.link} to={'postac-iloczynowa'}>
				Postać iloczynowa
			</NavLink>
			<NavLink onClick={onSelect} className={styles.link} to={'postac-kanoniczna'}>
				Postać kanoniczna
			</NavLink>
		</>
	)
}
