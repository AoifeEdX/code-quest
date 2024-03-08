import React from 'react';
import htmlAnswerChar from "../../databases/htmlAnswerChar.json";

const HtmlAnswerCharacter = ({ alertMessage }) => {
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
	const character = htmlAnswerChar.find(char => char.id === getImageId());
	return (
		<div>

			{character && <img className="d-block border-2 rounded img-fluid" style={{ maxWidth: "10em" }} src={character.image} alt={character.id} />}

		</div>
	);

};

export default HtmlAnswerCharacter;