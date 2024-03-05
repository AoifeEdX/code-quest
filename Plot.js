// Story.js

import React from "react";

const Plot = ({ scenario, onChoice, onGameResult }) => {
    const scenarios = [
        {
            id: 0,
            text: "You're at a crossroad. The crossroad is called 'Boolean'. Do you wish to go down the path named 'Truthy' or the one named 'Falsy'?",
            choices: [
                { text: "Truthy", nextScenario: 1 },
                { text: "Falsy", nextScenario: 2 },
            ],
        },
        {
            id: 1,
            text: "Truthy. Now, what is the name of our code overlord?",
            choices: [
                { text: "Laura", nextScenario: 3 },
                { text: "Liz", nextScenario: 4 },
            ],
        },
        {
            id: 2,
            text: "One FALSE move has cost you everything.",
            choices: [],
        },
        {
            id: 3,
            text: "That was easy. Everyone should know the name of our ruler. Which of these fictional characters is her favourite?",
            choices: [
                { text: "Buffy Summers", nextScenario: 5 },
                { text: "Dana Scully", nextScenario: 6 },
            ],
        },
        {
            id: 4,
            text: "Error message 405: wrong answer.",
            choices: [{ text: "Go back", nextScenario: 1 }],
        },
        {
            id: 5,
            text: '"The slayer? I thought you were a myth!"."Well, you were myth-taken.". ----- Game over.',
            choices: [],
        },
        {
            id: 6,
            text: "The first string in an array has what index number?",
            choices: [
                { text: "0", nextScenario: 7 },
                {
                    text: "1",
                    nextScenario: 8,
                },
            ],
        },
        {
            id: 7,
            text: "You've prevailed. Well done.",
            choices: [],
        },
        {
            id: 8,
            text: "Epic fail. Back to square 1 - also known as index '0'.",
            choices: [],
        },
    ];

    const currentScenario = scenarios.find((s) => s.id === scenario);

    const handleChoice = (choice) => {
        const nextScenario = choice.nextScenario;
        onChoice(choice);

        if (nextScenario === 7) {
            alert("You win. Congratulations.");
            onGameResult("win");
        } else if (nextScenario === 5 || nextScenario === 2) {
            onGameResult("lose");
        }
    };

    return (
        <div className="card mx-auto mt-5" style={{ maxWidth: "500px" }}>
            <div className="card-body">
                <p className="card-text">{currentScenario.text}</p>
                <ul className="list-group">
                    {currentScenario.choices.map((choice, index) => (
                        <li key={index} className="list-group-item">
                            <button
                                className="btn btn-primary btn-block"
                                onClick={() => handleChoice(choice)}
                            >
                                {choice.text}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Plot;
