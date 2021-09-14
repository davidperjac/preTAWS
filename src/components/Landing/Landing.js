import FilterBar from './FilterBar';
import ListPaper from './ListPaper';
import NavBar from './NavBar';
import Footer from './Footer';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store , persistor} from '../../redux/store';

export const Landing = () => {
	return (
		<div>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<NavBar />
					<FilterBar />
					<ListPaper />
					<Footer />
				</PersistGate>
			</Provider>
		</div>
	);
};

export default Landing;
