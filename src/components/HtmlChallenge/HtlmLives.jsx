import React from 'react';

const HtmlLives = ({ displayedLives }) => {
	const fires = new Array(displayedLives).fill(null).map((_, index) => (
		<span key={index}>🔥</span>
	));

	return (
		<div className="d-flex justify-content-between text-danger fs-4 fw-bold bangers-text">
			<p>Lives:</p>
			<p className="text-end">{fires}</p>
		</div>
	);
};

export default HtmlLives;
