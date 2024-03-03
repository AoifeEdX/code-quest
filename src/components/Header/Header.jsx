import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useState } from 'react';
import LeaderBoard from '../Leaderboard/index';


const Header = () => {
  const [expanded, setExpanded] = useState(false);

  // handle leaderboard modal
  const [openModal, setOpenModal] = useState(false);
  const handleButtonClick = () => {
    console.log('close button clicked')
    setOpenModal(false)
  }


  const restartPage = () => {
    window.location.reload();
  };

  return (
    <>
    
    {/* <header> */}
      <Navbar expand="md" variant="dark" expanded={expanded} className="bg-dark p-3 full-width-navbar mb-5">
        <Container fluid>
          <Navbar.Brand href="/" className="fs-2">CodeQuest</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Button className="m-2" variant="outline-success" onClick={restartPage} >
                Restart
              </Button>
              <Button className="m-2" variant="outline-success" onClick={()=> setOpenModal(true)} >
                Leaderboard
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    {/* </header> */}


    { openModal && (<LeaderBoard onClose={handleButtonClick}/>)}
 
    </>
  );
}

export default Header;
