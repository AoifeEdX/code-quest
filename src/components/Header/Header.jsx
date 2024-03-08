import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import { RestartAlt, EmojiEvents } from '@mui/icons-material';
import LeaderBoard from '../Leaderboard/index';

const Header = () => {
	const [openModal, setOpenModal] = useState(false);

	// Function to handle closing modal
	const handleButtonClick = () => {
		setOpenModal(false);
	}

	// Effect to add scroll event listener
	useEffect(() => {
		const handleScroll = () => {
			const header = document.querySelector('.header-container');
			if (header) {
				if (window.scrollY > 0) {
					header.classList.add('scrolled');
				} else {
					header.classList.remove('scrolled');
				}
			}
		};

		window.addEventListener('scroll', handleScroll);

		// Clean up
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<Navbar variant="dark" expand="lg" className="sticky-top header-container">
				<div className="container">
					<Navbar.Brand href="/" className="fs-2 my-3">CodeQuest</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbar-nav" />
					<Navbar.Collapse id="navbar-nav" className="justify-content-end text-end my-3">
						<NavDropdown title="Levels" id="basic-nav-dropdown" className="mx-3">
							<NavDropdown.Item href="/level1welcome">Level 1</NavDropdown.Item>
							<NavDropdown.Item href="/level2welcome">Level 2</NavDropdown.Item>
							<NavDropdown.Item href="/level3welcome">Level 3</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="/final-scores">Final Scores</NavDropdown.Item>
						</NavDropdown>
						<Nav>
							<Nav.Link href="/about" className="mx-2">About</Nav.Link>
							<Nav.Link href="/contact" className="mx-2">Contact</Nav.Link>							
							<Nav.Link href="/ghexplorer" className="mx-2">GitHub Explorer</Nav.Link>
						</Nav>
						<Nav>
							{/* <Button
								className="m-2 rounded-pill gradient-bg-blue"
								href="/"
							>
								<RestartAlt /> Restart
	</Button> */}
							<Button
								className="btn m-2 rounded-pill gradient-bg-blue"
								onClick={() => setOpenModal(true)}
							>
								<EmojiEvents /> Leaderboard
							</Button>
						</Nav>
					</Navbar.Collapse>
				</div>
			</Navbar>
			{openModal && (<LeaderBoard onClose={handleButtonClick} />)}
		</>
	);
}

export default Header;
