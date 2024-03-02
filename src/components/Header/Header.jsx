import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useState } from 'react';

const Header = () => {
	const [expanded, setExpanded] = useState(false);

	const restartPage = () => {
		window.location.reload();
	};

	return (
		<header>
			<Container>
				<Navbar expand="md" variant="dark" expanded={expanded} className="p-3 full-width-navbar mb-5 pb-5">
					<Navbar.Brand href="/" className="fs-2">CodeQuest</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbar-nav" onClick={() => setExpanded(!expanded)} />
					<Navbar.Collapse id="navbar-nav">
						<Nav className="me-auto"></Nav>
						<Nav>
							<Button className="m-2" variant="outline-success" onClick={restartPage} >
								Restart
							</Button>
							<Button className="m-2" variant="outline-success" href="leaderboard.html" >
								Leaderboard
							</Button>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Container>
		</header>
	);
};

export default Header;
