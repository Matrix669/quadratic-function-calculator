import { motion } from 'framer-motion'

import { useState } from 'react'
import { BoxBtn } from '../BoxBtn/BoxBtn'
import { CalculateBtn } from '../CalculateBtn/CalculateBtn'
import { XYChart } from '../XYChart/XYChart'
import { DeltaResult } from '../DeltaResult/DeltaResult'

export function CanonicalForm() {
	const [error, setError] = useState(false)
	const [errorMsg, setErrorMsg] = useState(null)

	const [inputDataA, setInputDataA] = useState('')
	const [inputDataB, setInputDataB] = useState('')
	const [inputDataC, setInputDataC] = useState('')
	const [inputDataP, setInputDataP] = useState('')
	const [inputDataQ, setInputDataQ] = useState('')
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
			inputDataP === 0 ||
			inputDataP === '' ||
			inputDataQ === 0 ||
			inputDataQ === ''
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
			b = -2 * inputDataP * inputDataA
			c = inputDataA * inputDataP ** 2 + inputDataQ

			delta = b ** 2 - 4 * inputDataA * c
			x1 = (-b - Math.sqrt(delta)) / (2 * inputDataA)
			x2 = (-b + Math.sqrt(delta)) / (2 * inputDataA)
			x0 = -((inputDataP / 2) * inputDataA)

			p = inputDataP
			q = inputDataQ

			setInputValues([inputDataA, inputDataP, inputDataQ])
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
		setInputDataP('')
		setInputDataQ('')
		setIsResultsShown(false)
		setResult(null)
		setErrorMsg(null)
		setIsChartShown(false)
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
						value={inputDataA}
						onChange={event => getDataInput(setInputDataA, event)}
					/>
					( x -{' '}
					<input
						type='number'
						placeholder='p'
						value={inputDataP}
						onChange={event => getDataInput(setInputDataP, event)}
					/>
					)<sup>2</sup> +{' '}
					<input
						type='number'
						placeholder='q'
						value={inputDataQ}
						onChange={event => getDataInput(setInputDataQ, event)}
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
								b={inputDataB}
								c={inputDataC}
							/>
						)}
					</div>
					{isChartShown && (
						<div className='canvasBox'>
							<XYChart a={inputsValues[0]} b={inputDataB} c={inputDataC} />{' '}
						</div>
					)}
				</div>
			</div>
			<BoxBtn onHandleReset={handleReset} />
		</>
		// </motion.div>
	)
}
