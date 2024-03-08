import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { insertDataIntoTable } from '../../utils/Supabase';

const LevelComplete = () => {
    const navigate = useNavigate();

    const navigateToFinalScores = () => {
        insertDataIntoTable();
        navigate('/final-scores');
    };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center h-100">
            <h2 className="my-3">Level Complete!</h2>
            <p className="mb-5 fs-5">Well done, you completed the Bootstrap Battle.</p>
            <Button variant="outline-warning" size="lg" className="rounded-pill gradient-bg-orange text-white btn-lg px-5" onClick={navigateToFinalScores}>
                Final Scores
            </Button>
        </div>
    );
};

export default LevelComplete;
