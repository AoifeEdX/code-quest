import React, { useState, useEffect } from 'react';
import { Container, Button, Row, Col, Image } from 'react-bootstrap';
import Points from '../../components/BootstrapChallenge/Points';
import Leaderboard from '../../components/Leaderboard';
import cheeringCharacter from '/images/cheeringCharacter.png'; 

const FinalScores = () => {
    const [finalScores, setFinalScores] = useState(null);
    const [showLeaderboard, setShowLeaderboard] = useState(false);
    const handleButtonClick = () => {
        setShowLeaderboard(false)
    }

    useEffect(() => {
        const storedUserData = localStorage.getItem('currentUser');
        const parsedData = storedUserData ? JSON.parse(storedUserData) : { name: '', points: 0 };
        setFinalScores(parsedData);
    }, []);

    if (!finalScores) {
        return <div>No scores recorded – have you completed all levels?</div>;
    }

    const { points } = finalScores;

    return (
        <Container>
            <Row className="justify-content-center align-items-center">
                <Col md="6">
                    <Image className="pe-md-5" src={cheeringCharacter} alt="CodeQuest background" fluid rounded />
                </Col>
                <Col md="6" className="my-5 px-5">
                    <h1>Final Scores</h1>
                    <p className="fs-3 mt-5">You made it to the end of the <strong>CodeQuest Chronicles</strong>!</p>                    
                    <Points points={points} />
                    <Button
                        className="my-5 rounded-pill gradient-bg-orange text-white btn-lg px-5"
                        variant="warning"
                        onClick={() => setShowLeaderboard(!showLeaderboard)}
                    >
                        {showLeaderboard ? 'Hide Leaderboard' : 'View Leaderboard'}
                    </Button>
                    {showLeaderboard && <Leaderboard onClose={handleButtonClick} />}
                </Col>
            </Row>
        </Container>
    );
};

export default FinalScores;
