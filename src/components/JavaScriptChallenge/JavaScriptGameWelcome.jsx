import { useNavigate } from 'react-router-dom';
import { Container, Row, Button } from 'react-bootstrap';
import LevelWelcomeContent from "../LevelWelcomeContent/LevelWelcomeContent";
import questList from '../../databases/questList.json';
import '../../components/HtmlChallenge/HtmlGame.css';

const JavaScriptGameWelcome = () => {
    const navigate = useNavigate();

    const navigateToLevel1 = () => {
        navigate('/level1');
    };

    const level1Game = questList.find((game) => game.id === 1);

    return (
        <Container className="animated-container d-flex flex-column justify-content-center align-items-center">
            <Row className="d-flex justify-content-center align-items-center">
                {level1Game && (
                    <LevelWelcomeContent
                        id={level1Game.id}
                        key={level1Game.id}
                        name={level1Game.name}
                        image={level1Game.image}
                        description={level1Game.description}
                        instruction={level1Game.instruction}
                    />
                )}
            </Row>
            <Row className="justify-content-center" style={{ width: '20em' }}>
                <Button
                    className="btn gradient-bg-orange rounded-pill btn-lg bold-text text-white mt-5"
                    onClick={navigateToLevel1}
                >
                    ⚔️ Start ⚔️
                </Button>
            </Row>
        </Container>
    );
};

export default JavaScriptGameWelcome;
