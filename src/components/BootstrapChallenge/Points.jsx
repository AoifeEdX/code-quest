import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Points = ({ points, totalQuestions, pointsPerQuestion }) => {
    const maxPoints = totalQuestions * pointsPerQuestion;
		const progress = (points / 60) * 100;
    // const progress = (points / maxPoints) * 100; – will reinstate this once I figure out how to get the question code to the Final Scores page

    return (
        <div className="d-flex justify-content-between text-success fw-bold fs-4">
            <p>Points:</p>
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
