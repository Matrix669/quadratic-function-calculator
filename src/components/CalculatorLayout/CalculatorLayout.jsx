import styles from './CalculatorLayout.module.scss'

export function CalculatorLayout({ children }) {
	return <div className={styles.calculatorLayout}>{children}</div>
}
