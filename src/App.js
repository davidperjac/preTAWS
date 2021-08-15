import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing.js';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
	return (
			<BrowserRouter>
				<Route path="/" />
				<Landing />
			</BrowserRouter>
	);
}

export default App;
