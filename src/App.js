import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing.js';

function App() {
	return (
		<BrowserRouter>
			<Route path="/" />
			<Landing />
		</BrowserRouter>
	);
}

export default App;
