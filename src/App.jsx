import { motion, AnimatePresence } from 'framer-motion'

import { Outlet } from 'react-router-dom'
import { CalculatorLayout } from './components/CalculatorLayout/CalculatorLayout'
import { LineSVG } from './components/LineSVG/LineSVG'

function App() {
	return (
		// <CalculatorLayout>
		// <AnimatePresence>
		// 	<motion.div
		// 		key={location.pathname}
		// 		// initial={{ x: '100%', opacity: 0 }}
		// 		// animate={{ x: '0', opacity: 1 }}
		// 		// exit={{ x: '-100%', scale: 0, opacity: 0 }}
		// 		// transition={{ duration: 0.3, ease: 'easeIn', delay: 0.3 }}
		// 		>
		// 		{location.pathname === '/' ? <SelectFunction /> : <Outlet />}
		// 	</motion.div>
		// </AnimatePresence>
		// </CalculatorLayout>
		<>
			<div className='background-box'>
				<p className='bg-text bg-x2'>
					x <sup>2</sup>
				</p>
				<p className='bg-text bg-fx'>f(x) = y</p>
			</div>
			<CalculatorLayout>
				<Outlet />
			</CalculatorLayout>
			<LineSVG />
		</>
	)
}

export default App
