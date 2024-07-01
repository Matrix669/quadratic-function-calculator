export function DeltaResult({ delta, x1, x2, x0, p, q, a, b, c }) {
	let deltaResult

	if (delta > 0) {
		deltaResult = (
			<>
				<p>a wynosi: {a}</p>
				<p>b wynosi: {b}</p>
				<p>c wynosi: {c}</p>
				<p>Delta wynosi = {delta}</p>
				<p>Delta jest większa od zera więc mamy 2 miejsca zerowe!</p>
				<p>x1 = {x1}</p>
				<p>x2 = {x2}</p>
				<p>p = {p}</p>
				<p>q = {q}</p>
				<p>
					Miejscami zerowymi są: x1 = {x1}, x2 = {x2}
				</p>
				<p>Współrzędne punktu przecięcia z osią OY: (0, {c})</p>
				<p>
					Współrzędne wierzchołka W = ({p}, {q})
				</p>
			</>
		)
	} else if (delta === 0) {
		deltaResult = (
			<>
				<p>a wynosi: {a}</p>
				<p>b wynosi: {b}</p>
				<p>c wynosi: {c}</p>
				<p>Delta wynosi: {delta}</p>
				<p>Delta jest równa zero więc mamy 1 miejsce zerowe!</p>
				<p>x0: {x0}</p>
				<p>p = {p}</p>
				<p>q = {q}</p>
				<p>Współrzędne punktu przecięcia z osią OY: (0, {c})</p>
				<p>
					Współrzędne wierzchołka W: ({p}, {q})
				</p>
				<p>
					Współrzędne wierzchołka W = ({p}, {q})
				</p>
			</>
		)
	} else {
		deltaResult = (
			<>
				<p>a wynosi: {a}</p>
				<p>b wynosi: {b}</p>
				<p>c wynosi: {c}</p>
				<p>Delta wynosi: {delta}</p>
				<p>Delta jest mniejsza od zero więc nie mamy miejsc zerowych!</p>
				<p>p = {p}</p>
				<p>q = {q}</p>
				<p>Współrzędne punktu przecięcia z osią OY: (0, {c})</p>
				<p>
					Współrzędne wierzchołka W: ({p}, {q})
				</p>
			</>
		)
	}
	return deltaResult
}
