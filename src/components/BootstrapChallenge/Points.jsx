import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Points = ({ points }) => {
		const progress = (points / 120) * 100;

    return (
        <div className="d-flex justify-content-between text-success fw-bold fs-4">
            <p>Points: {points}</p>
            <ProgressBar
                animated
                now={progress}
                label={`${points}`}
                variant="success"
                className="w-50"
                style={{ height: '32px' }}
            />
        </div>
    );
};

export default Points;
