import questions from './questions.json'

export default function Challenge({ count, handleAnswerButton, handleNextQuestion }) {
  const question = questions[count].question || {};
  const answer_options = questions[count].options || [];

  return (
    <section className='page-section' id='work'>
      <h2>Challenge {CustomEvent }</h2>
      <p className='question'>{question}</p>
      <div className='options'>
        {answer_options.map((option) => (
          <button key={option} onClick={handleAnswerButton}>{option}</button>
        ))}
      </div>
      </section>
  );
}