import { Router, Route, Switch } from 'react-router-dom';
import Landing from './components/home/index.js';

export default function home() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" render={<Landing/>} />
			</Switch>
		</Router>
	);
}
