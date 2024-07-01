import { useState } from 'react'
import { BoxBtn } from '../BoxBtn/BoxBtn'
import { CalculateBtn } from '../CalculateBtn/CalculateBtn'
import { XYChart } from '../XYChart/XYChart'
import { DeltaResult } from '../DeltaResult/DeltaResult'

export function GeneralForm() {
	const [error, setError] = useState(false)
	const [errorMsg, setErrorMsg] = useState(null)

	const [inputDataA, setInputDataA] = useState('')
	const [inputDataB, setInputDataB] = useState('')
	const [inputDataC, setInputDataC] = useState('')
	const [deltaValue, setDeltaValue] = useState('')
	const [valueX1, setValueX1] = useState('')
	const [valueX2, setValueX2] = useState('')
	const [valueX0, setValueX0] = useState('')
	const [valueP, setValueP] = useState('')
	const [valueQ, setValueQ] = useState('')

	const [isChartShown, setIsChartShown] = useState(false)
	const [isResultsShown, setIsResultsShown] = useState(false)
	const [inputsValues, setInputValues] = useState([])

	let delta
	let x1 // miejsce zerowe 1
	let x2 // miejsce zerowe 2
	let p // współrzędne wierzchołka 1
	let q // współrzędne wierzchołka 2
	let x0 // miejsce zerowe 0

	function getDataInput(data, event) {
		const inputValue = event.target.value
		const numsData = Number(inputValue)
		data(numsData)
	}

	function handleResult() {
		if (
			inputDataA === 0 ||
			inputDataA === '' ||
			inputDataB === 0 ||
			inputDataB === '' ||
			inputDataC === 0 ||
			inputDataC === ''
		) {
			setError(true)
			setIsChartShown(false)
			setIsResultsShown(false)
			setErrorMsg('Błąd')
		} else {
			setError(false)
			setErrorMsg(null)
			setIsChartShown(true)

			// delta: b**2 - 4*a*c
			delta = inputDataB ** 2 - 4 * inputDataA * inputDataC
			x1 = (-inputDataB - Math.sqrt(delta)) / (2 * inputDataA)
			x2 = (-inputDataB + Math.sqrt(delta)) / (2 * inputDataA)
			x0 = -((inputDataB / 2) * inputDataA)

			p = -inputDataB / (2 * inputDataA)
			q = -delta / (4 * inputDataA)

			setInputValues([inputDataA, inputDataB, inputDataC])
			setDeltaValue(delta)
			setValueX0(x0.toFixed(3))
			setValueX1(x1.toFixed(3))
			setValueX2(x2.toFixed(3))
			setValueP(p.toFixed(3))
			setValueQ(q.toFixed(3))
			setIsResultsShown(true)
		}
	}

	function handleReset() {
		setInputDataA('')
		setInputDataB('')
		setInputDataC('')
		setIsResultsShown(false)
		setErrorMsg(null)
		setIsChartShown(false)
	}

	return (
		<>
			<h2 className='title-fun'>Postać ogólna:</h2>
			<p className='template-fun'>
				wzór: y = ax<sup>2</sup> + bx + c
			</p>

			<div>
				<p className='user-fun'>
					y =
					<input
						type='number'
						placeholder='a'
						value={inputDataA}
						onChange={event => getDataInput(setInputDataA, event)}
					/>
					x<sup>2</sup> +
					<input
						type='number'
						placeholder='b'
						value={inputDataB}
						onChange={event => getDataInput(setInputDataB, event)}
					/>
					x +
					<input
						type='number'
						placeholder='c'
						value={inputDataC}
						onChange={event => getDataInput(setInputDataC, event)}
					/>
				</p>
			</div>
			<CalculateBtn onHandleResult={handleResult} />

			<div className='container-result'>
				<h3 className='title-result'>Wyniki:</h3>
				<div className='container-result__results'>
					<div className='textBox'>
						{error && <p className='error-msg'>{errorMsg}</p>}
						{isResultsShown && (
							<DeltaResult
								delta={deltaValue}
								x1={valueX1}
								x2={valueX2}
								x0={valueX0}
								p={valueP}
								q={valueQ}
								a={inputsValues[0]}
								b={inputsValues[1]}
								c={inputsValues[2]}
							/>
						)}
					</div>
					{isChartShown && (
						<div className='canvasBox'>
							<XYChart a={inputsValues[0]} b={inputsValues[1]} c={inputsValues[2]} />
						</div>
					)}
				</div>
			</div>
			<BoxBtn onHandleReset={handleReset} />
		</>
	)
}
