import { Container, Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import { RestartAlt, EmojiEvents } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LeaderBoard from '../Leaderboard/index';

const Header = () => {
	const [openModal, setOpenModal] = useState(false);
	const navigate = useNavigate();

	const handleButtonClick = () => {
		setOpenModal(false);
	}

	return (
		<>
			<Container className="py-4 mb-5 sticky-top" style={{ backgroundColor: '#022047' }}>
				<Navbar variant="dark" expand="lg">
					<Navbar.Brand href="/" className="fs-2 me-auto">CodeQuest</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbar-nav" />
					<Navbar.Collapse id="navbar-nav" className="justify-content-end text-end fs-5">
						<NavDropdown title="Levels" id="basic-nav-dropdown" className="me-5">
								<NavDropdown.Item href="/level1welcome">Level 1</NavDropdown.Item>
								<NavDropdown.Item href="/level2welcome">Level 2</NavDropdown.Item>
								<NavDropdown.Item href="/level3welcome">Level 3</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="/final-scores">Final Scores</NavDropdown.Item>
							</NavDropdown>
						<Nav>							
							<Nav.Link href="/about" className="me-3">About</Nav.Link>
							<Nav.Link href="/contact" className="mx-3">Contact</Nav.Link>							
						</Nav>
						<Nav>
							<Button
								className="m-2 rounded-pill gradient-bg-blue"
								href="/"
							>
								<RestartAlt /> Restart
							</Button>
							<Button
								className="btn m-2 rounded-pill gradient-bg-blue"
								onClick={() => setOpenModal(true)}
							>
								<EmojiEvents /> Leaderboard
							</Button>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Container>

			{openModal && (<LeaderBoard onClose={handleButtonClick} />)}
		</>
	);
}

export default Header;
