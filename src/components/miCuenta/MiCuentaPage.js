import NavBar from '../Landing/NavBar';
import Footer from '../Landing/Footer';
import MiCuentaForm from './MiCuentaForm';
import { Provider } from 'react-redux';
import {store} from '../../redux/store';

export const MiCuentaPage = () => {
	return (
		<div>
			<Provider store={store}>
				<NavBar />
				<MiCuentaForm />
				<Footer />
			</Provider>
		</div>
	);
};

export default MiCuentaPage;
