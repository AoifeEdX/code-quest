import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { getAllDataFromSupabase } from '../../utils/Supabase';
import toast from 'react-hot-toast';

const LeaderBoard = ({ onClose }) => {
    const [playersData, setPlayersData] = useState([]);

   async function getPlayersData() {
     try {
       const data = await getAllDataFromSupabase();
       const sortedData = [...data].sort((a, b) => b.score - a.score).slice(0, 10);
       setPlayersData(sortedData);
     } catch (error) {
       toast.error(error.message);
    }
    }
    
    useEffect(() => {
        getPlayersData();
    }, []);

    // useEffect(() => {
    //     const storedLeaderboard = localStorage.getItem('leaderboard');
    //     const leaderboardData = storedLeaderboard ? JSON.parse(storedLeaderboard) : [];
    //     setPlayersData(leaderboardData);
    // }, []);

    return (
        <>
        <div className="d-flex justify-content-center" >

            <Modal.Dialog scrollable className="border border-info border-3 rounded m-5 p-5" style={{maxWidth: '50em'}}>
                <Modal.Header className='text-center'>
                <h2 className='modal-title w-100 h3 me-5 text-warning' >Leaderboard</h2>
                <button type="button" className="btn-close btn-close-white m-1" data-bs-dismiss="modal" aria-label="Close" onClick={() => onClose()}></button>
                </Modal.Header>
                <Modal.Body className="m-1 ">
                    <table className="table mt-2 border-0  table-dark bg-secondary">
                        <thead className='p-2'>
                            <tr className="table-dark border-danger">
                                <th className="text-info" scope="col">#</th>
                                <th className="text-danger p-3" scope="col">Player</th>
                                <th className="text-success p-3" scope="col">Score</th>
                            </tr>
                        </thead>
                            <tbody>
                                {playersData.map(({ name, score, id }, index) => (
                                  <tr key={id} scope="row">
                                   <td>{index + 1}</td>
                                   <td>{name}</td>
                                   <td>{score}</td>
                                  </tr>)
                                )}
                        </tbody>
                    </table>
                </Modal.Body>
                <Modal.Footer>
                <Button className="m-2" variant="outline-warning"  onClick={() => onClose()}>Close</Button>
                </Modal.Footer> 
            </Modal.Dialog>
        </div>
        </>
    )

}

export default LeaderBoard;