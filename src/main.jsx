import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { GeneralForm } from './components/GeneralForm/GeneralForm.jsx'
import { FactoredForm } from './components/FactoredForm/FactoredForm.jsx'
import { CanonicalForm } from './components/CanonicalForm/CanonicalForm.jsx'

const router = createBrowserRouter([
	{
		element: <App />,
		path: '/',
    children: [
      {
        element: <GeneralForm />,
        path: 'postac-ogolna'
      },
      {
        element: <FactoredForm />,
        path: 'postac-iloczynowa'
      },
      {
        element: <CanonicalForm />,
        path: 'postac-kanoniczna'
      },
    ]
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
