import React from 'react';
import { Button, Image } from 'react-bootstrap';
import characterData from "./bootstrapCharacter.json";

const ProgressModule = ({ message, questionAnswered, handleNextQuestion, gameOver, handleRestartGame }) => {
  const getCharacterImage = () => {
    if (gameOver) {
      const gameOverCharacter = characterData.find(character => character.id === "gameOverCharacter");
      return <Image src={gameOverCharacter.image} alt="gameOverCharacter" fluid />;
    }

    const character = characterData.find(character =>
      (character.id === "winCharacter" && message.startsWith("Correct")) ||
      (character.id === "loseCharacter" && message !== 'Answer the questions to progress.') ||
      (character.id === "readyCharacter" && message === 'Answer the questions to progress.')
    );

    return <Image src={character.image} alt={character.id} fluid />;
  };

	return (    
		<div>
			{getCharacterImage()}
			{message && !gameOver && (
				<>
					<p className="mt-3 text-success fw-bold">{message}</p>
					<Button
						variant={message.startsWith("Correct") ? "success" : "secondary"}
						onClick={handleNextQuestion}
						disabled={!questionAnswered || gameOver}
					>
						Next Question
					</Button>
				</>
			)}
			{gameOver && (
				<div className="text-center">
					<p className="mt-3 text-danger fw-bold">{message}</p>
					<Button variant="danger" onClick={handleRestartGame}>Restart Game</Button>
				</div>
			)}
		</div>
);
};

export default ProgressModule;