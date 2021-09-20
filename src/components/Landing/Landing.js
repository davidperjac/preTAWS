//import FilterBar from './FilterBar';
//import ListPaper from './ListPaper';
import NavBar from './NavBar';
import Footer from './Footer';
import BodyContent from './BodyContent';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../../redux/store';
import { Error404 } from './Error404';

export const Landing = (props) => {
	return (
		<div>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<NavBar />
					<BodyContent />
					<Footer />
				</PersistGate>
			</Provider>
		</div>
	);
};

export default Landing;
