import React, { useState } from 'react';
import Plot from './Plot';
 
const Game = () => {
    const [scenario, setScenario] = useState(0);
    const [gameResult, setGameResult] = useState(null);
 
    const handleChoice = (choice) => {
        if (choice.nextScenario !== undefined) {
            setScenario(choice.nextScenario);
        } else {
            console.error('Not an option!');
        }
    };
 
    const restartGame = () => {
        setScenario(0);
        setGameResult(null);
    };
 
    const handleGameResult = (result) => {
        setGameResult(result);
    };
 
    return (
        <div>
            {gameResult === 'win' && <img src="" alt="Victory!" />}
            {gameResult === 'lose' && <img src="" alt="You lose! Sorry." />}
            {gameResult ? (
                <center>
                    <button onClick={restartGame}>Restart Game</button>
                </center>
            ) : (
                <Story scenario={scenario} onChoice={handleChoice} onGameResult={handleGameResult} />
            )}
        </div>
    );
};
 
export default Game;