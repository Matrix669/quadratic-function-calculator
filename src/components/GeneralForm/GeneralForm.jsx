import { useEffect, useState } from 'react'
import { BoxBtn } from '../BoxBtn/BoxBtn'
import { CalculateBtn } from '../CalculateBtn/CalculateBtn'
import { useLocation } from 'react-router-dom'
import { getDataFunctionForm } from '../../utils/getDataFunctionForm'

export function GeneralForm() {
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
		<>
			<h2 className='title-fun'>Postać ogólna:</h2>
			<p className='template-fun'>
				wzór: y = ax<sup>2</sup> + bx + c
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
					x<sup>2</sup> +{' '}
					<input
						type='number'
						placeholder='b'
						value={inputData2}
						onChange={event => getDataInput(setInputData2, event)}
					/>{' '}
					x +{' '}
					<input
						type='number'
						placeholder='c'
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
	)
}
