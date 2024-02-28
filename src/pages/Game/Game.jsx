import { useState } from 'react';
import Challenge from "../../components/Challenge/Challenge";



export default function Game() {
  const [lives, setLives] = useState(3);
  const [points, setPoints] = useState(0);
  const [count, setCount] = useState(0);
  
  const handleAnswerButton = (event) => {
    console.log(event);
  }

  return (
    <section className='page-section' id='work'>
        <h2>Projects</h2>
        <div className='work-list info-wrapper'>
        {workData.map((data) => (<ProjectCard data={data} key={ data.id} />))}
        </div>
      </section>
  );
}