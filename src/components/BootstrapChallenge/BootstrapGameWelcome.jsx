import { useNavigate } from 'react-router-dom';
import { Container, Row, Button } from 'react-bootstrap';
import LevelWelcomeContent from "../LevelWelcomeContent/LevelWelcomeContent";
import questList from '../../databases/questList.json';
import '../HtmlChallenge/HtmlGame.css';

const BootstrapGameWelcome = () => {
    const navigate = useNavigate();

    const navigateToLevel3 = () => {
        navigate('/level3');
    };

    const level3Game = questList.find((game) => game.id === 3);

    return (
        <Container className="animated-container d-flex flex-column justify-content-center align-items-center">
            <Row className="d-flex justify-content-center align-items-center">
                {level3Game && (
                    <LevelWelcomeContent
                        id={level3Game.id}
                        key={level3Game.id}
                        name={level3Game.name}
                        image={level3Game.image}
                        description={level3Game.description}
                        instruction={level3Game.instruction}
                    />
                )}
            </Row>
            <Row style={{ width: '20em' }}>
                <Button
                    className="btn gradient-bg-orange rounded-pill btn-lg bold-text text-white mt-5"
                    onClick={navigateToLevel3}
                >
                    ⚔️ Start ⚔️
                </Button>
            </Row>
        </Container>
    );
};

export default BootstrapGameWelcome;
