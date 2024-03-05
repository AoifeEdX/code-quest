import React from 'react';
// import { Image } from 'react-bootstrap';
import htmlAnswerChar from "./htmlAnswerChar.json";

const HtmlAnswerCharacter = ({ alertMessage = '', gameOver, allQuestionsAnswered }) => {
    const getImageId = () => {
        if (gameOver) return "gameOverCharacter";
        if (allQuestionsAnswered) return "gameWonCharacter";
            return alertMessage && alertMessage.startsWith("Correct") ? "sessionWinCharacter" :
                    alertMessage && alertMessage.startsWith("Incorrect") ? "sessionLoseCharacter" :
                    "readyCharacter";
        };

        const character = htmlAnswerChar.find(char => char.id === getImageId());
        console.log(character.image)
    return (
        <div>
            {character && <img className="d-block border-2 rounded img-fluid" style={{maxWidth: "10em"}} src={character.image} alt={character.id} />}
           
        </div>
    );
};

export default HtmlAnswerCharacter;