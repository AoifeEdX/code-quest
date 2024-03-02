import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Points = ({ points }) => {
	return (
		<div className="d-flex justify-content-between text-success fw-bold fs-4">
			<p>Points:</p>
			<ProgressBar
				animated now={points}
				label={`${points}`}
				variant="success"
				className="w-50"
				style={{ height: '32px' }} />
		</div>
	);
};

export default Points;
