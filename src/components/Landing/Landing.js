import FilterBar from './FilterBar';
import ListPaper from './ListPaper';
import NavBar from './NavBar';
import Footer from './Footer';

export const Landing = () => {
	return (
		<div>
			<NavBar />
			<FilterBar />
			<ListPaper />
			<Footer />
		</div>
	);
};

export default Landing;
