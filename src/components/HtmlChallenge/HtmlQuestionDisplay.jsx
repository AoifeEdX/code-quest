import htmlQuestionList from '../../../htmlQuestionsList.json'
import ChallengeHero from '../ChallengeHero/ChallengeHero'
import HtmlQuestionCard from './HtmlQuestionCard'

const HtmlChallenge = () =>{
  return (
    <>
    <div>

    </div>
      <div>
        <div>
          {htmlQuestionList.map((quest) => {
            return (
              <HtmlQuestionCard
              id={quest.id}
              key={quest.id}
              question={quest.question} />

            )
          })}
        </div>
      </div>
    </>
  )
}
export default HtmlChallenge;


// export default function Challenge({handleAnswerButton, handleNextQuestion }) {
//   const question = htmlQuestionList[count].question || {};
//   const answer_options = htmlQuestionList[count].options || [];

//   return (
//     <section className='page-section' id='challenge'>
//       <h2>Congratulation, and welcome in HTML Forge {count + 1}</h2>
//       <img></img>
//       <p>You are one step closer to save our Digital World from impending chaos. Armed with your coding skills, each of your correct answer comes to life and helps to save our World. Embrace the true magic of HTML Forge!</p>
//       <p className='question'>{question}</p>
//       <div className='options'>
//         {answer_options.map((option) => (
//           <button key={option} name={option} onClick={handleAnswerButton}>{option}</button>
//         ))}
//       </div>
//       </section>
//   );
// }