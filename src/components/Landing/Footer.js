import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

export const Footer = () => {
	return (
		<footer className="footer">
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
								<Link
									href="https://www.instagram.com/taws_espol/?hl=es"
									color="inherit"
								>
									<InstagramIcon className="icon" />
								</Link>
							</Box>
						</Grid>
						<Grid item xs={2} sm={1}>
							<Box>
								<Link
									href="https://es-la.facebook.com/tawsespol/"
									color="inherit"
								>
									<TwitterIcon />
								</Link>
							</Box>
						</Grid>
						<Grid item xs={2} sm={1}>
							<Box>
								<Link
									href="https://www.youtube.com/channel/UCirbJgZnFA9WV7p711w1DwQ"
									color="inherit"
								>
									<YouTubeIcon />
								</Link>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</footer>
	);
};

export default Footer;
