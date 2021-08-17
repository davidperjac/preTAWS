import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Landing from './components/Landing/Landing.js';
import LoginPage from './components/logginSession/LoginPage.js';

function App() {
	return (
			<Router>
				<Switch>
					<Route exact path="/" component={Landing}/>
					<Route exact path="/login" component={LoginPage}/>
					<Route exact path="/:usuario" component={Landing}/>
				</Switch>
			</Router>
	);
}

export default App;
