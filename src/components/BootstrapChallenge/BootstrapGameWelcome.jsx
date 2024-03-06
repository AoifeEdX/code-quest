import { useNavigate } from 'react-router-dom';
import LevelWelcomeContent from "../LevelWelcomeContent/LevelWelcomeContent";
import questList from '../../../questList.json';
import '../HtmlChallenge/HtmlGame.css'

const BootstrapGameWelcome = () => {
    const navigate = useNavigate();
    const navigateToLevel3 = () => {
        navigate('/level3')
    }
    return (
        <>				
        <section className="animated-container d-flex flex-column justify-content-center align-items-center ms-5 me-5" >
        <div className="row d-flex justify-content-center align-items-center">
            {questList.map((game) => {
                if (game.id === 3) {
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
            <button className="m-2 gradient-bg-blue p-2 rounded-pill btn-lg bold-text" onClick={navigateToLevel3}>⚔️  Start  ⚔️</button>
        </div>
        </section>
        </>
    )
}

export default BootstrapGameWelcome;
