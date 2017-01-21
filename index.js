import {Router, Route, Link, browserHistory} from 'react-router';
import React from 'react';
import {ReactDom, render} from 'react-dom';
import App from './modules/app'

render(

	<Router history={browserHistory}>
		<Route path= "/" component={App}/>
	</Router>,

	document.getElementById('root')
)
