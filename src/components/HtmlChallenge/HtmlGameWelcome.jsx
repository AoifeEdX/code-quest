import {Button, Container } from 'react'
import { useNavigate } from 'react-router-dom';
import LevelWelcomeContent from "../LevelWelcomeContent/LevelWelcomeContent";
import questList from '../../../questList.json';
import './HtmlGame.css';

const HtmlGameWelcome = () => {
    const navigate = useNavigate();
    const navigateToLevel2 = () => {
        navigate('/level2')
    }
    return (
        <>
        <section className="animated-container d-flex flex-column justify-content-center align-items-center ms-5 me-5" >
        <div className="row d-flex justify-content-center align-items-center bangers-text tracking-widest">
            {questList.map((game) => {
                if (game.id === 2) {
                    return (                      
                        <LevelWelcomeContent
                            id={game.id}
                            key={game.id}
                            name={game.name}
                            image={game.image}
                            description={game.description}
                            instruction={game.instruction}       
                        />                       
                    )
                }
            })}           
        </div>
        <div className="row" style={{width: '20em'}}>
            <button className="btn btn-info btn-lg bangers-text" style={{fontWeight: 'bold', color: 'grey'}}onClick={navigateToLevel2}>💥  <span className="bangers-text">Start</span>  💥</button>
        </div>
        </section>
        </>
    )
}

export default HtmlGameWelcome;
