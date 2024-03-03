import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const LeaderBoard = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    return (
        <>
            <div>
 {/* {show ? ( */}
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

    
      


      {/* <Modal.Dialog> */}
        {/* <Modal.Header>
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
        </Modal.Footer> */}
      {/* </Modal.Dialog> */}
    </div>


            
        
        </>
    )

}

export default LeaderBoard;