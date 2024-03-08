import { v4 as uuidv4 } from 'uuid';
import questions from '../../databases/javascriptQuestions.json'
import './JavaScriptChallange.css'

export default function JavaScriptChallenge({ count, handleAnswerButton, isFormDisabled, handleRadioChange, selectedOption }) {
	const question = questions[count].question || {};
	const answerOptions = questions[count].options || [];

	return (

		<div className="container challenge1">
			<div className='container challenge' id='challengeLevel1'>
				<h3 className='question'>{question}</h3>
				<div className='options'>
					<form onSubmit={handleAnswerButton} disabled={isFormDisabled}>
						{answerOptions.map((option, index) => (
							<div key={uuidv4()} className="form-check">
								<input
									type="radio"
									className="form-check-input"
									name="answer"
									id={`option${index}`}

									value={option}

								/>
								<label className="form-check-label" htmlFor={`option${index}`}>
									{option}
								</label>
							</div>
						))}
						<button type="submit" className="btn btn-warning mt-3 answerBtn" disabled={isFormDisabled}>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}