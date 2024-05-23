import { useState } from 'react'
import { BoxBtn } from '../BoxBtn/BoxBtn'
import { CalculateBtn } from '../CalculateBtn/CalculateBtn'
import { useLocation } from 'react-router-dom'
import { getDataFunctionForm } from '../utils/getDataFunctionForm'

export function GeneralForm() {
	const location = useLocation()
	const [inputData1, setinputData1] = useState('')
	const [inputData2, setinputData2] = useState('')
	const [inputData3, setinputData3] = useState('')
	const [result, setResult] = useState(null)

	function getInputData1(event) {
		setinputData1(event.target.value)
	}

	function getInputData2(event) {
		setinputData2(event.target.value)
	}
	function getInputData3(event) {
		setinputData3(event.target.value)
	}

	function handleResult() {
		const result = getDataFunctionForm(location.pathname, inputData1, inputData2, inputData3)
		setResult(result)
	}

	function handleReset() {
		setinputData1('')
		setinputData2('')
		setinputData3('')
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
					y = <input type='text' placeholder='a' value={inputData1} onChange={getInputData1} />x<sup>2</sup> +{' '}
					<input type='text' placeholder='b' value={inputData2} onChange={getInputData2} /> x +{' '}
					<input type='text' placeholder='c' value={inputData3} onChange={getInputData3} />
				</p>
			</div>
			<CalculateBtn onHandleResult={handleResult} />

			<div className='container-result'>
				<h3 className='title-result'>Wyniki:</h3>
				{result}
				{/* <p>&Delta; Delta = </p>
				<p>Komunikat o tym czy delta jest wieksza od zera itd</p>
				<p>x1 = </p>
				<p>x2 = </p>
				<p>p = </p>
				<p>q = </p>
				<p>Miejscami zerowymi są: </p>
				<p>Współrzędne punktu przecięcia z osią OY: (0; -2.0 )</p>
				<p>Współrzędne wierzchołka to W=( -0.5 , -2.5 )</p> */}
			</div>
			<BoxBtn onHandleReset={handleReset}/>
		</>
	)
}
