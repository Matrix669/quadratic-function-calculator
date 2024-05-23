import { Outlet, useLocation } from 'react-router-dom'
import { CalculatorLayout } from './components/CalculatorLayout/CalculatorLayout'
import { SelectFunction } from './components/SelectFunction/SelectFunction'

function App() {
	const location = useLocation()

	return <CalculatorLayout>{location.pathname === '/' ? <SelectFunction /> : <Outlet />}</CalculatorLayout>
}

export default App
