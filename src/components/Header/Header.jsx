import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LeaderBoard from '../Leaderboard';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const restartPage = () => {
    window.location.reload();
  };

  return (
    <>
    
    <header>
      <Navbar expand="md" variant="light" expanded={expanded} className="bg-light p-3 full-width-navbar mb-5">
        <Container fluid>
          <Navbar.Brand href="#" className="fs-2">CodeQuest</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Button className="m-2" variant="outline-success" onClick={restartPage} >
                Restart
              </Button>
              <Button className="m-2" variant="outline-success" onClick={handleShow} >
                Leaderboard
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
    { show ? <LeaderBoard /> : null }
    {/* <div>
      {show ? (
        <Modal.Dialog show={Boolean(show)} onHide={handleClose}>
          <LeaderBoard />
        <Modal.Header closeButton>
          <Modal.Title>Leaderboard </Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <table className="table mt-5 border">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Player</th>
                        <th scope="col">Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr scope="row">
                        <td>1</td>
                        <td>Mark</td>
                        <td>200</td>
                    </tr>
                    <tr scope="row">
                        <td>2</td>
                        <td>Jacob</td>
                        <td>150</td>
                    </tr>
                </tbody>
            </table>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal.Dialog>

      ) : null }
      

</div> */}


    </>
  );
}

export default Header;
