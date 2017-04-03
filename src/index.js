import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {app} from './app/containers/app';

import './index.scss';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={app}/>
	</Router>,
  document.getElementById('root')
);
