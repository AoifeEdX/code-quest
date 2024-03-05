import { Container, Navbar, Nav, Button } from 'react-bootstrap';
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
      <Container className="py-4 mb-5">
        <Navbar variant="dark" expand="lg">
          <Navbar.Brand href="/" className="fs-2 me-auto">CodeQuest</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-end text-end fs-5">
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

      {openModal && (<LeaderBoard onClose={handleButtonClick}/>)}
    </>
  );
}

export default Header;
