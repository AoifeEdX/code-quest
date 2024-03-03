import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const GameOver = ({ handleRestartGame, points, handleBuyLife }) => {
    const handleBuyLifeClick = () => {
        handleBuyLife();
    };

    const [showGameOver, setShowGameOver] = useState(false);

    const handleNoClick = () => {
        setShowGameOver(true);
				
    };

    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center h-100">
                {points > 0 && !showGameOver && (
                    <div>
                        <h2 className="my-3">Out of lives! </h2>
                        <p className="mb-5 fs-5">Buy another life for 10 points?</p>
                        <Button variant="success" className="me-3" onClick={handleBuyLifeClick}>Yes</Button>
                        <Button variant="danger" onClick={handleNoClick}>No</Button>
                    </div>
                )}
                {(points === 0 || showGameOver) && (
                    <div className="mb-3">
                        <h2 className="my-3">Game Over!</h2>
                        <p className="mb-5 fs-5">You lost all your lives.</p>
                        <Button variant="danger" onClick={handleRestartGame}>Restart Game</Button>
                    </div>
                )}
            </div>
        </>
    );
};

export default GameOver;
