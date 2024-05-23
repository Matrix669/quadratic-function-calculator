import { BoxBtn } from '../BoxBtn/BoxBtn'

export function FactoredForm() {
	return (
		<>
			<h2 className='title-fun'>Postać iloczynowa:</h2>
			<p className='template-fun'>wzór: y = a( x - x1 ) * ( x - x2 )</p>

			<div>
				<p className='user-fun'>
					y = <input type='text' placeholder='a' />
					(x - <input type='text' placeholder='x1' />) * ( x - <input type='text' placeholder='x2' />)
				</p>
			</div>

			<div className='container-result'>
				<h3 className='title-result'>Wyniki:</h3>
				<p>&Delta; Delta = </p>
				<p>Komunikat o tym czy delta jest wieksza od zera itd</p>
				<p>x1 = </p>
				<p>x2 = </p>
				<p>p = </p>
				<p>q = </p>
				<p>Miejscami zerowymi są: </p>
				<p>Współrzędne punktu przecięcia z osią OY: (0; -2.0 )</p>
				<p>Współrzędne wierzchołka to W=( -0.5 , -2.5 )</p>
			</div>
			<BoxBtn />
		</>
	)
}
