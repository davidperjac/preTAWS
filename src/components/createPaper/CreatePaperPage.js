import NavBar from '../Landing/NavBar';
import Footer from '../Landing/Footer';
import CreatePaperForm from './CreatePaperForm';
import { Provider } from 'react-redux';
import store from '../../redux/store';

export const CreatePaperPage = () => {
	return (
		<div>
			<Provider store={store}>
				<NavBar />
				<CreatePaperForm />
				<Footer />
			</Provider>
		</div>
	);
};

export default CreatePaperPage;
