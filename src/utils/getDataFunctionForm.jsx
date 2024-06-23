export function getDataFunctionForm(formFunction, userNum1, userNum2, userNum3) {
	let delta
	let x1 // miejsce zerowe 1
	let x2 // miejsce zerowe 2
	let p // współrzędne wierzchołka 1
	let q // współrzędne wierzchołka 2

	switch (formFunction) {
		case '/postac-ogolna': {
			// delta: b**2 - 4*a*c
			delta = userNum2 ** 2 - 4 * userNum1 * userNum3
			x1 = (-userNum2 - Math.sqrt(delta)) / (2 * userNum1)
			x2 = (-userNum2 + Math.sqrt(delta)) / (2 * userNum1)
			let x0 = -((userNum2 / 2) * userNum1)

			p = -userNum2 / (2 * userNum1)
			q = -delta / (4 * userNum1)
			if (delta > 0) {
				return (
					<>
						<p>Delta wynosi = {delta}</p>
						<p>Delta jest większa od zera więc mamy 2 miejsca zerowe!</p>
						<p>x1 = {x1.toFixed(3)}</p>
						<p>x2 = {x2.toFixed(3)}</p>
						<p>p = {p}</p>
						<p>q = {q}</p>
						<p>
							Miejscami zerowymi są: x1 = {x1.toFixed(3)}, x2 = {x2.toFixed(3)}
						</p>
						<p>Współrzędne punktu przecięcia z osią OY: (0, {userNum3})</p>
						<p>
							Współrzędne wierzchołka W = ({p}, {q})
						</p>
					</>
				)
			} else if (delta === 0) {
				return (
					<>
						<p>Delta wynosi: {delta}</p>
						<p>Delta jest równa zero więc mamy 1 miejsce zerowe!</p>
						<p>x0: {x0.toFixed(3)}</p>
						<p>p = {p}</p>
						<p>q = {q}</p>
						<p>Współrzędne punktu przecięcia z osią OY: (0, {userNum3})</p>
						<p>
							Współrzędne wierzchołka W: ({p}, {q})
						</p>
						<p>
							Współrzędne wierzchołka W = ({p}, {q})
						</p>
					</>
				)
			} else {
				return (
					<>
						<p>Delta wynosi: {delta}</p>
						<p>Delta jest mniejsza od zero więc nie mamy miejsc zerowych!</p>
						<p>p = {p}</p>
						<p>q = {q}</p>
						<p>Współrzędne punktu przecięcia z osią OY: (0, {userNum3})</p>
						<p>
							Współrzędne wierzchołka W: ({p}, {q})
						</p>
					</>
				)
			}
		}
		case '/postac-iloczynowa':
			{
				// delta: a**2(x1 - x2)**2
				delta = userNum1 ** 2 * (userNum2 - userNum3) ** 2
				x1 = userNum2
				x2 = userNum3
				let b = -userNum1 * (x1 + x2)
				let c = userNum1 * x1 * x2

				p = -b / (2 * userNum1)
				q = -delta / (4 * userNum1)
				if (delta > 0) {
					return (
						<>
							<p>b wynosi: {b}</p>
							<p>c wynosi: {c}</p>
							<p>Delta wynosi = {delta}</p>
							<p>Delta jest większa od zera więc ma 2 miejsca zerowe!</p>
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
					return (
						<>
							<p>b wynosi: {b}</p>
							<p>c wynosi: {c}</p>
							<p>Delta wynosi = {delta}</p>
							<p>Delta jest równa zero więc mamy 1 miejsce zerowe!</p>
							<p>x1 = {x1}</p>
							<p>p = {p}</p>
							<p>q = {q}</p>
							<p>Miejscami zerowymi są: x1 = {x1}</p>
							<p>Współrzędne punktu przecięcia z osią OY: (0, {c})</p>
							<p>
								Współrzędne wierzchołka W = ({p}, {q})
							</p>
						</>
					)
				}
			}
			break
		case '/postac-kanoniczna': {
			// delta: 4*(a**2) * q - jakiś z dupy ten wzór jest lol (nie działa)

			let b = -2 * userNum2 * userNum1
			let c = userNum1 * userNum2 ** 2 + userNum3
			delta = b ** 2 - 4 * userNum1 * c

			x1 = (-b - Math.sqrt(delta)) / (2 * userNum1)
			x2 = (-b + Math.sqrt(delta)) / (2 * userNum1)
			let x0 = -((userNum2 / 2) * userNum1)

			p = userNum2
			q = userNum3
			if (delta > 0) {
				return (
					<>
						<p>b wynosi: {b}</p>
						<p>c wynosi: {c}</p>
						<p>Delta wynosi = {delta}</p>
						<p>Delta jest większa od zera więc ma 2 miejsca zerowe!</p>
						<p>x1 = {x1.toFixed(3)}</p>
						<p>x2 = {x2.toFixed(3)}</p>
						<p>p = {p}</p>
						<p>q = {q}</p>
						<p>
							Miejscami zerowymi są: x1 = {x1.toFixed(3)}, x2 = {x2.toFixed(3)}
						</p>
						<p>Współrzędne punktu przecięcia z osią OY: (0, {c})</p>
						<p>
							Współrzędne wierzchołka W = ({p}, {q})
						</p>
					</>
				)
			} else if (delta === 0) {
				return (
					<>
						<p>b wynosi: {b}</p>
						<p>c wynosi: {c}</p>
						<p>Delta wynosi = {delta}</p>
						<p>Delta jest równa zero więc mamy 1 miejsce zerowe!</p>
						<p>x1 = {x0.toFixed(3)}</p>
						<p>p = {p}</p>
						<p>q = {q}</p>
						<p>Miejscami zerowymi są: x1 = {x1.toFixed(3)}</p>
						<p>Współrzędne punktu przecięcia z osią OY: (0, {c})</p>
						<p>
							Współrzędne wierzchołka W = ({p}, {q})
						</p>
					</>
				)
			} else {
				return (
					<>
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
		}
	}
}
