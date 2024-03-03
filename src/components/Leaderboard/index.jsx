import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const LeaderBoard = ({ onClose }) => {
    return (
        <>
            <Modal.Dialog className="border border-success rounded m-5" style={{boxShadow: "2px 2px 5px red"}}>
                <Modal.Header className='text-center'>
                <h2 className='modal-title w-100'>Leaderboard</h2>
                <button type="button" className="btn-close btn-close-white m-1" data-bs-dismiss="modal" aria-label="Close" onClick={() => onClose()}></button>
                </Modal.Header>
                <Modal.Body className="m-1 ">
                    <table className="table mt-2 border-0  table-dark p-2">
                        <thead>
                            <tr className="table-dark border-danger">
                                <th className="text-info" scope="col">#</th>
                                <th className="text-danger" scope="col">Player</th>
                                <th className="text-success" scope="col">Score</th>
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
                <Button className="m-2" variant="outline-success"  onClick={() => onClose()}>Close</Button>
                </Modal.Footer> 
            </Modal.Dialog>
        </>
    )

}

export default LeaderBoard;