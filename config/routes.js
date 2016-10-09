import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import HelloWorld from '../containers/HelloWorld';

export default (
	<Router history={hashHistory}>
		<Route path="/" component={ HelloWorld }/>
	</Router>
);
