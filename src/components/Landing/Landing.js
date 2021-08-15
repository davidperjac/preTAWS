import FilterBar from './FilterBar';
import ListPaper from './ListPaper';
import NavBar from './NavBar';
import Footer from './Footer';
import { Provider } from 'react-redux';
import store from '../../redux/store';



export const Landing = () => {

	

	return (
		<div>
			<Provider store={store}>
				<NavBar />
				<FilterBar />
				<ListPaper />
				<Footer />
			</Provider>
			
		</div>
	);
};

export default Landing;
