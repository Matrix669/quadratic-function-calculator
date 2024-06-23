import { motion } from 'framer-motion'

import { useLocation } from 'react-router-dom'
import { BoxBtn } from '../BoxBtn/BoxBtn'
import { useState } from 'react'
import { getDataFunctionForm } from '../../utils/getDataFunctionForm'
import { CalculateBtn } from '../CalculateBtn/CalculateBtn'

export function CanonicalForm() {
	const location = useLocation()
	const [error, setError] = useState(false)
	const [errorMsg, setErrorMsg] = useState(null)
	const [inputData1, setInputData1] = useState('')
	const [inputData2, setInputData2] = useState('')
	const [inputData3, setInputData3] = useState('')
	const [result, setResult] = useState(null)

	function getDataInput(data, event) {
		const inputValue = event.target.value
		const numsData = Number(inputValue)
		data(numsData)
	}

	function handleResult() {
		if (
			inputData1 === 0 ||
			inputData1 === '' ||
			inputData2 === 0 ||
			inputData2 === '' ||
			inputData3 === 0 ||
			inputData3 === ''
		) {
			setError(true)
			return setErrorMsg(<p className={'error-msg'}>Błąd!</p>)
		} else {
			setError(false)
			setErrorMsg(null)

			const result = getDataFunctionForm(location.pathname, inputData1, inputData2, inputData3)
			setResult(result)
		}
	}

	function handleReset() {
		setInputData1('')
		setInputData2('')
		setInputData3('')
		setResult(null)
	}

	return (
		// <motion.div
		// 	// initial={{ x: '100%', scale: 0, opacity: 0 }}
		// 	// animate={{ x: '0', scale: 1, opacity: 1 }}
		// 	// exit={{ x: '-100%', scale: 0, opacity: 0 }}
		// 	// transition={{ duration: 0.3, ease: 'easeIn', delay: .3 }}
		// 	// initial={{ scale: 0 }}
		// 	// animate={{ scale: 1 }}
		// 	// exit={{ scale: 0 }}
		// 	// transition={{ duration: 0.3, delay: 0.1 }}
		// 	>
		<>
			<h2 className='title-fun'>Postać kanoniczna:</h2>
			<p className='template-fun'>
				wzór: y = a( x - p )<sup>2</sup> + q
			</p>

			<div>
				<p className='user-fun'>
					y ={' '}
					<input
						type='number'
						placeholder='a'
						value={inputData1}
						onChange={event => getDataInput(setInputData1, event)}
					/>
					( x -{' '}
					<input
						type='number'
						placeholder='p'
						value={inputData2}
						onChange={event => getDataInput(setInputData2, event)}
					/>
					)<sup>2</sup> +{' '}
					<input
						type='number'
						placeholder='q'
						value={inputData3}
						onChange={event => getDataInput(setInputData3, event)}
					/>
				</p>
			</div>

			<CalculateBtn onHandleResult={handleResult} />

			<div className='container-result'>
				<h3 className='title-result'>Wyniki:</h3>
				{error ? errorMsg : result}
			</div>
			<BoxBtn onHandleReset={handleReset} />
		</>
		// </motion.div>
	)
}
