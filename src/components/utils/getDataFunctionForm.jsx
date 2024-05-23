export function getDataFunctionForm(formFunction, userNum1, userNum2, userNum3) {
	let delta
	let x1 // miejsce zerowe 1
	let x2 // miejsce zerowe 2
	let p // współrzędne wierzchołka 1
	let q // współrzędne wierzchołka 2

	switch (formFunction) {
		case '/postac-ogolna':
			// delta: b**2 - 4*a*c
			delta = userNum2 ** 2 - 4 * userNum1 * userNum3
			if (delta > 0) {
				x1 = (-userNum2 - Math.sqrt(delta)) / (2 * userNum1)
				x2 = (-userNum2 + Math.sqrt(delta)) / (2 * userNum1)

				p = -(userNum2) / (2 * userNum1)
				q = -(delta) / (4 * userNum1)
				return (
					<>
						<p>Delta wynosi = {delta}</p>
						<p>Delta jest większa od zera więc ma 2 miejsca zerowe!</p>
						<p>x1 = {x1}</p>
						<p>x2 = {x2}</p>
						<p>p: ={p}</p>
						<p>q = {q}</p>
						<p>
							Miejscami zerowymi są: x1 = {x1}, x2 = {x2}
						</p>
						<p>Współrzędne punktu przecięcia z osią OY: (0, {userNum3})</p>
						<p>
							Współrzędne wierzchołka W = ({p}, {q})
						</p>
					</>
				)
			} else if (delta === 0) {
				x1 = -(userNum2 / 2(userNum1))

				p = -((userNum2 / 2) * userNum1)
				q = -((delta / 4) * userNum1)
				return (
					<>
						<p>Delta wynosi: {delta}</p>
						<p>Delta jest równa zero więc mamy 1 miejsce zerowe!</p>
						<p>x0: {x1}</p>
						<p>Współrzędne punktu przecięcia z osią OY: (0, {userNum3})</p>
						<p>
							Współrzędne wierzchołka W: ({p}, {q})
						</p>
					</>
				)
			} else {
				p = -((userNum2 / 2) * userNum1)
				q = -((delta / 4) * userNum1)
				return (
					<>
						<p>Delta wynosi: {delta}</p>
						<p>Delta jest mniejsza od zero więc nie mamy miejsc zerowych!</p>
						<p>Współrzędne punktu przecięcia z osią OY: (0, {userNum3})</p>
						<p>
							Współrzędne wierzchołka W: ({p}, {q})
						</p>
					</>
				)
			}
		case '/postac-iloczynowa':
			// delta: a**2(x1 - x2)**2
			break
		case '/postac-kanoniczna':
			// delta: 4*(a**2) * q
			break
	}
}
