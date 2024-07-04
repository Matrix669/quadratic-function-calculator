import styles from './BackgroundBox.module.scss'

export function BackgroundBox() {
	return (
		<div>
			<p className={`${styles['bg-text']} ${styles['bg-x2']}`}>
				x <sup>2</sup>
			</p>
			<p className={`${styles['bg-text']} ${styles['bg-fx']}`}>f(x) = y</p>
		</div>
	)
}
