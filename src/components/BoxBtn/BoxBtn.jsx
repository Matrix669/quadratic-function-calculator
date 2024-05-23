import styles from './BoxBtn.module.scss'

import { BackBtn } from '../BackBtn/BackBtn'
import { ResetBtn } from '../ResetBtn/ResetBtn'

export function BoxBtn({ onHandleReset }) {
	return (
		<div className={styles.boxBtn}>
			<BackBtn />
			<ResetBtn onHandleReset={onHandleReset} />
		</div>
	)
}
