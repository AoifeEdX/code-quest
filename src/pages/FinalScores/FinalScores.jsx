import React, { useState } from 'react';
import Lives from '../../components/BootstrapChallenge/Lives';
import Points from '../../components/BootstrapChallenge/Points';
import Leaderboard from '../../components/Leaderboard';
import { Container, Button } from 'react-bootstrap'; 

const FinalScores = () => {
		{/* Need to update lives and points to use player's history */}
		const [lives] = useState(3);
		const [points] = useState(100);
    const [showLeaderboard, setShowLeaderboard] = useState(false);

    return (
        <div className="vh-100 text-center">
            <h1>Final Scores</h1>
						<p className="fs-3 mt-5">You made it to the end of the <strong>CodeQuest Chronicles</strong>!</p>
            <Container className="border border-0 rounded p-4 my-5">
						<Lives lives={lives} />
						<Points points={points} />
            </Container>
            <Button
                variant="warning"
                onClick={() => setShowLeaderboard(!showLeaderboard)}
            >
                {showLeaderboard ? 'Hide Leaderboard' : 'View Leaderboard'}
            </Button>
            {showLeaderboard && <Leaderboard />}
        </div>
    );
};

export default FinalScores;
