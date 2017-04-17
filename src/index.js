import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import {app} from './app/containers/app';
import {Home} from './app/components/Home';
import {About} from './app/components/About';
import {CsSubject} from './app/components/CsSubject';
import {AdSubject} from './app/components/AdSubject';
import {ArchSubject} from './app/components/ArchSubject';
import {PhotoSubject} from './app/components/PhotoSubject';
import {NotFound} from './app/components/NotFound';
import './index.scss';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={app}>
			<IndexRoute component={Home}/>
			<Route path="about" component={About}/>
			<Route path="cs(/:imageName)" component={CsSubject}/>
			<Route path="design(/:imageName)" component={AdSubject}/>
			<Route path="archi(/:imageName)" component={ArchSubject}/>
			<Route path="photo(/:imageName)" component={PhotoSubject}/>
			<Route path="*" component={NotFound}/>
		</Route>
	</Router>,
  document.getElementById('root')
);
