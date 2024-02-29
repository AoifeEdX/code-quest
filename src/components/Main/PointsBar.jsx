// pointsBar.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const pointsBar = ({ points }) => {
	return (
		<div>
			<p className="text-info fw-bold fs-1">
				Points: {points}
			</p>
		</div>
	)
};

export default pointsBar;
