import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
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
