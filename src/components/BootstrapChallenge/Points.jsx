import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Points = ({ points, totalQuestions, pointsPerQuestion }) => {
    const maxPoints = totalQuestions * pointsPerQuestion;
    const progress = (points / maxPoints) * 100;

    return (
        <div className="d-flex justify-content-between text-success fw-bold fs-4">
            <p>Points:</p>
            <ProgressBar
                animated
                now={progress}
                label={`${points}/${maxPoints}`}
                variant="success"
                className="w-50"
                style={{ height: '32px' }}
            />
        </div>
    );
};

export default Points;
