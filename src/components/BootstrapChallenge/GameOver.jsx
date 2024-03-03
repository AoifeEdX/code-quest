import React from 'react';
import { Button } from 'react-bootstrap';

const GameOver = ({ handleRestartGame }) => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center h-100">
            <h2 className="my-3">Game Over!</h2>
            <p className="mb-5 fs-5">You lost all your lives. Try again?</p>
            <Button variant="danger" onClick={handleRestartGame}>Restart Game</Button>
        </div>
    );
};

export default GameOver;
