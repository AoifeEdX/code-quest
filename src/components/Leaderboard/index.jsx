import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const LeaderBoard = ({ onClose }) => {
    const [savedUser, setSavedUser] = useState(null);

    useEffect(() => {
        const storedUserName = localStorage.getItem('username');
        if (storedUserName) {
            setSavedUser(storedUserName);
        }
    }, []);
    return (
        <>
        <div className="d-flex justify-content-center" >

            <Modal.Dialog scrollable className="border border-danger border-3 rounded m-5 " style={{maxWidth: '50em'}}>
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
                                <td>{savedUser}</td>
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
        </div>
        </>
    )

}

export default LeaderBoard;