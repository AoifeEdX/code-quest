import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import Lives from '../../components/BootstrapChallenge/Lives';
import Points from '../../components/BootstrapChallenge/Points';
import Leaderboard from '../../components/Leaderboard';

const FinalScores = () => {
    const [finalScores, setFinalScores] = useState(null);		
    const [showLeaderboard, setShowLeaderboard] = useState(false);
		const handleButtonClick = () => {
      setShowLeaderboard(false)
    }

    useEffect(() => {
        const savedScores = localStorage.getItem('finalScores');
        if (savedScores) {
            setFinalScores(JSON.parse(savedScores));
        }
    }, []);

    if (!finalScores) {
        return <div>No scores recorded – have you completed all levels?</div>;
    }

    const { lives, points } = finalScores;

    return (
        <div className="text-center">
            <h1>Final Scores</h1>
						<p className="fs-3 mt-5">You made it to the end of the <strong>CodeQuest Chronicles</strong>!</p>
            <Container className="border border-2 rounded p-5 my-5">
                <Lives lives={lives} />
                <Points points={points} />
            </Container>
						<Button
                variant="warning"
                onClick={() => setShowLeaderboard(!showLeaderboard)}
            >
                {showLeaderboard ? 'Hide Leaderboard' : 'View Leaderboard'}
            </Button>
						{showLeaderboard && <Leaderboard onClose={handleButtonClick}/>}
        </div>
    );
};

export default FinalScores;