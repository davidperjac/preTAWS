import { Container, makeStyles, Grid, Box } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

const UseStyles = makeStyles((theme) => ({
	footer: {
		position: 'fixed',
		bottom: 0,
		width: '100%',
		marginTop: '2rem',
	},
}));

export const Footer = () => {
	const classes = UseStyles();
	return (
		<footer className={classes.footer}>
			<Box
				px={{ xs: 1, sm: 2 }}
				py={{ xs: 1, sm: 2 }}
				bgcolor="info.main"
				color="white"
			>
				<Container maxWidth="lg">
					<Grid
						container
						spacing={3}
						justifyContent="center"
						alignItems="center"
					>
						<Grid item xs={2} sm={1}>
							<Box>
								<a href="https://www.instagram.com/taws_espol/?hl=es">
									<InstagramIcon />
								</a>
							</Box>
						</Grid>
						<Grid item xs={2} sm={1}>
							<Box>
								<a href="https://twitter.com/tawsespol?lang=es">
									<TwitterIcon />
								</a>
							</Box>
						</Grid>
						<Grid item xs={2} sm={1}>
							<Box>
								<a href="https://www.youtube.com/channel/UCirbJgZnFA9WV7p711w1DwQ">
									<YouTubeIcon />
								</a>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</footer>
	);
};

export default Footer;
