import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Provider from './components/Provider'
import { Router } from 'react-router'
import createHistory from 'history/createBrowserHistory'

let history = createHistory()

ReactDOM.render(
	<Provider>
		<Router history={history}>
				<App />
		</Router>
	</Provider>,
	document.getElementById('root')
)
