import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import {app} from './app/containers/app';
import {Home} from './app/components/Home';
import {About} from './app/components/About';
import {NotFound} from './app/components/NotFound';
import './index.scss';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={app}>
			<IndexRoute component={Home}/>
			<Route path="about" component={About}/>
			<Route path="*" component={NotFound}/>
		</Route>
	</Router>,
  document.getElementById('root')
);
