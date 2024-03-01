import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const LeaderBoard = () => {
    return (
        <>
            <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
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
          <Button variant="secondary">Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>


            
        
        </>
    )

}

export default LeaderBoard;