import { useNavigate } from 'react-router-dom';
import LevelWelcomeContent from "../LevelWelcomeContent/LevelWelcomeContent";
import questList from '../../../questList.json';
import '../HtmlChallenge/HtmlGame.css'

const LivesGameWelcome = () => {
    const navigate = useNavigate();
    const navigateToLevel1 = () => {
        navigate('/level1')
    }
    return (
        <>
        <section className="animated-container d-flex flex-column justify-content-center align-items-center ms-5 me-5" >
        <div className="row d-flex justify-content-center align-items-center">
            {questList.map((game) => {
                if (game.id === 1) {
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
            <button className="btn btn-info btn-lg" style={{fontWeight: 'bold', color: 'grey'}}onClick={navigateToLevel1}>⚔️  Start  ⚔️</button>
        </div>
        </section>
        </>
    )
}

export default LivesGameWelcome;
