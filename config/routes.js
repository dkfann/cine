import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import MainContainer from '../containers/MainContainer';

export default (
	<Router history={hashHistory}>
		<Route path="/" component={ MainContainer }/>
	</Router>
);
