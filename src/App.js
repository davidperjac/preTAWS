import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing.js';
import LoginPage from './components/logginSession/LoginPage.js';
import Register from './components/logginSession/Register.js';
import CreatePaperPage from './components/createPaper/CreatePaperPage.js';
import MiCuentaPage from './components/miCuenta/MiCuentaPage.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { AuthProvider } from './contexts/AuthContext';

function App() {
	return (
		<Router>
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route exact path="/login" component={LoginPage} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/:usuario" component={Landing} />
				</Switch>
		</Router>
	);
}

export default App;
