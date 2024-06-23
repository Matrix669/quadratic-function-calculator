import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { GeneralForm } from './components/GeneralForm/GeneralForm.jsx'
import { FactoredForm } from './components/FactoredForm/FactoredForm.jsx'
import { CanonicalForm } from './components/CanonicalForm/CanonicalForm.jsx'
import { NotFound } from './components/NotFound/NotFound.jsx'
import { SelectFunction } from './components/SelectFunction/SelectFunction.jsx'

const router = createBrowserRouter([
	{
		element: <App />,
		path: '/',
    errorElement: <NotFound/>,
    children: [
      {
        element: <SelectFunction />,
        path: '',
        errorElement: <NotFound/>,
      },
      {
        element: <GeneralForm />,
        path: 'postac-ogolna',
        errorElement: <NotFound/>,
      },
      {
        element: <FactoredForm />,
        path: 'postac-iloczynowa',
        errorElement: <NotFound/>,
      },
      {
        element: <CanonicalForm />,
        path: 'postac-kanoniczna',
        errorElement: <NotFound/>,
      },
    ]
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
