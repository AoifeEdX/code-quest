import React from 'react';

const Lives = ({ lives }) => {
	const hearts = Array.from({ length: lives }, (_, index) => (
		<span key={index}>❤️</span>
	));

	return (
		<div className="d-flex justify-content-between text-danger fs-4 fw-bold">
			<p>Lives:</p>
			<p className="text-end">{hearts}</p>
		</div>

	);
};

export default Lives;