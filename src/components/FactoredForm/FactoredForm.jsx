import { useState } from 'react'
import { BoxBtn } from '../BoxBtn/BoxBtn'
import { CalculateBtn } from '../CalculateBtn/CalculateBtn'
import { XYChart } from '../XYChart/XYChart'
import { DeltaResult } from '../DeltaResult/DeltaResult'

export function FactoredForm() {
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
	const [inputDataX1, setInputDataX1] = useState('')
	const [inputDataX2, setInputDataX2] = useState('')

	const [isChartShown, setIsChartShown] = useState(false)
	const [isResultsShown, setIsResultsShown] = useState(false)
	const [inputsValues, setInputValues] = useState([])

	let delta
	let x1 // miejsce zerowe 1
	let x2 // miejsce zerowe 2
	let p // współrzędne wierzchołka 1
	let q // współrzędne wierzchołka 2
	let x0 // miejsce zerowe 0
	let b
	let c

	function getDataInput(data, event) {
		const inputValue = event.target.value
		const numsData = Number(inputValue)
		data(numsData)
	}

	function handleResult() {
		if (
			inputDataA === 0 ||
			inputDataA === '' ||
			inputDataX1 === 0 ||
			inputDataX1 === '' ||
			inputDataX2 === 0 ||
			inputDataX2 === ''
		) {
			setError(true)
			setIsChartShown(false)
			setIsResultsShown(false)
			setErrorMsg('Błąd')
		} else {
			setError(false)
			setErrorMsg(null)
			setIsChartShown(true)

			// delta: a**2(x1 - x2)**2
			delta = inputDataA ** 2 * (inputDataX1 - inputDataX2) ** 2
			x1 = inputDataX1
			x2 = inputDataX2
			x0 = x1

			b = -inputDataA * (x1 + x2)
			c = inputDataA * x1 * x2

			p = -b / (2 * inputDataA)
			q = -delta / (4 * inputDataA)

			setInputValues([inputDataA])
			setDeltaValue(delta)
			setInputDataB(b)
			setInputDataC(c)
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
		setInputDataX1('')
		setInputDataX2('')
		setIsResultsShown(false)
		setErrorMsg(null)
		setIsChartShown(false)
	}

	return (
		<>
			<h2 className='title-fun'>Postać iloczynowa:</h2>
			<p className='template-fun'>wzór: y = a( x - x1 ) * ( x - x2 )</p>

			<div>
				<p className='user-fun'>
					y ={' '}
					<input
						type='number'
						placeholder='a'
						value={inputDataA}
						onChange={event => getDataInput(setInputDataA, event)}
					/>
					(x -{' '}
					<input
						type='number'
						placeholder='x1'
						value={inputDataX1}
						onChange={event => getDataInput(setInputDataX1, event)}
					/>
					) * ( x -{' '}
					<input
						type='number'
						placeholder='x2'
						value={inputDataX2}
						onChange={event => getDataInput(setInputDataX2, event)}
					/>
					)
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
								b={inputDataB}
								c={inputDataC}
							/>
						)}
					</div>
					{isChartShown && (
						<div className='canvasBox'>
							<XYChart a={inputsValues[0]} b={inputDataB} c={inputDataC} />
						</div>
					)}
				</div>
			</div>
			<BoxBtn onHandleReset={handleReset} />
		</>
	)
}
