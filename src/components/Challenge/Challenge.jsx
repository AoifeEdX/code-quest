import { v4 as uuidv4 } from 'uuid';
import questions from './../../assets/questions.json'
import './Challenge.css'


export default function Challenge({ count, handleAnswerButton }) {
  const question = questions[count].question || {};
  const answerOptions = questions[count].options || [];
  return (
    
    <div className="container challenge1">
      {/*<div className="container">
    <img src="./images/coding1.jpg" className="img-fluid" alt="coding"/>
  </div>*/}
    <div className='container challenge' id='challengeLevel1'>
        <h3 className='question'>{question}</h3>
      <div className='options'>
      <form onSubmit={handleAnswerButton}>
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
      <button type="submit" className="btn btn-warning mt-3 answerBtn">
        Submit
      </button>
    </form>
      </div>
    </div>
    </div>
  );
}