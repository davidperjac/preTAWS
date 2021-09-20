//import FilterBar from './FilterBar';
//import ListPaper from './ListPaper';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar';
import Footer from './Footer';
import BodyContent from './BodyContent';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store , persistor} from '../../redux/store';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh'
	},
}));

export const Landing = (props) => {

	const classes = useStyles();

	return (
		<div>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
						<NavBar />
						<BodyContent/>
						<Footer />
				</PersistGate>
			</Provider>
		</div>
	);
};



export default Landing;
