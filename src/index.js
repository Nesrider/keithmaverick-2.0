import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, useRouterHistory, IndexRoute} from 'react-router';
import {app} from './app/containers/app';
import {Home2} from './app/components/Home2';
import {About2} from './app/components/About2';
import {CsSubject} from './app/components/CsSubject';
import {AdSubject} from './app/components/AdSubject';
import {ArchSubject} from './app/components/ArchSubject';
import {PhotoSubject} from './app/components/PhotoSubject';
import {NotFound} from './app/components/NotFound';
import {createHashHistory} from 'history';
import './index.scss';

const appHistory = useRouterHistory(createHashHistory)({queryKey: false});

ReactDOM.render(
	<Router history={appHistory}>
		<Route path="/" component={app}>
			<IndexRoute component={Home2}/>
			<Route path="about" component={About2}/>
			<Route path="cs(/:imageName)" component={CsSubject}/>
			<Route path="design(/:imageName)" component={AdSubject}/>
			<Route path="archi(/:imageName)" component={ArchSubject}/>
			<Route path="photo(/:imageName)" component={PhotoSubject}/>
			<Route path="*" component={NotFound}/>
		</Route>
	</Router>,
  document.getElementById('root')
);
