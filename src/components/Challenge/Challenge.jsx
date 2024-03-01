import questions from './../../assets/questions.json'
import'./Challenge.css'

export default function Challenge({ count, handleAnswerButton, handleNextQuestion }) {
  const question = questions[count].question || {};
  const answerOptions = questions[count].options || [];

  return (
    <div className="container-fluid challenge1">
    <div className="container">
    <img src="./images/coding1.jpg" className="img-fluid" alt="coding"/>
    </div>
    <div className='container questionHeader' id='challenge'>
      <h3 className='question'>{question}</h3>
      <div className='options'>
      <form onSubmit={handleAnswerButton}>
      {answerOptions.map((option, index) => (
        <div key={index} className="form-check">
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
      <button type="submit" className="btn btn-primary mt-3">
        Submit
      </button>
    </form>
      </div>
    </div>
    </div>
  );
}