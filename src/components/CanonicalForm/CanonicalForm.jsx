import { BoxBtn } from "../BoxBtn/BoxBtn";


export function CanonicalForm() {
	return (
		<>
			<h2 className='title-fun'>Postać kanoniczna:</h2>
			<p className='template-fun'>
				wzór: y = a( x - p )<sup>2</sup> + q
			</p>

			<div>
				<p className='user-fun'>
					y = <input type='text' placeholder='a' />( x - <input type='text' placeholder='p' />)<sup>2</sup> + <input type='text' placeholder='q' />
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
			<BoxBtn/>
		</>
	)
}
