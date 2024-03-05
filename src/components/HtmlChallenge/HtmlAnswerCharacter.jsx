import React from 'react';
// import { Image } from 'react-bootstrap';
import htmlAnswerChar from "./htmlAnswerChar.json";

const HtmlAnswerCharacter = ({ alertMessage="Start!" }) => {
    const getImageId = () => {
        switch (alertMessage) {
            case 'Correct!': return "sessionWinCharacter";
            case 'Wrong!': return "sessionLoseCharacter";
            case 'Start!': return "readyCharacter";
            case 'Game Over!': return "gameOverCharacter";
            case 'Well done! Hurray!': return "gameWonCharacter";
            default: return null;
        }
    }
    console.log(alertMessage)
        const character = htmlAnswerChar.find(char => char.id === getImageId());
        console.log(character)
    return (
        <div>
            {character && <img className="d-block border-2 rounded img-fluid" style={{maxWidth: "10em"}} src={character.image} alt={character.id} />}
           
        </div>
    );

};

export default HtmlAnswerCharacter;