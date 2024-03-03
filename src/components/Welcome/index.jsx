import { useState } from 'react';
import { Container, Row, Col, Image, Form, Nav, Button }  from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Welcome = () => {
    const [formData, setFormData] = useState({
        username: '',
    });
    const [error, setError] = useState({
        username: null
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData( {
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        if (validationErrors) {
            setError(validationErrors);
            return;
        }
    };
    const validateForm = (data) => {
        console.log(data);
        const error = {};
        if (!data.username) {
            error.username = 'Please create your user name!';
            setError((prev) => ({
                ...prev,
                username: error.username,
                text: 'Player'
            }));
        } else {

            return error;
        }
    }
    const navigateToLevel1 = () => {
        navigate('/Game')
    }
    // let text = 'Player';
    // const handleTextChange = (data) => {
    //     console.log(text)
    //     let text = 'Player';
    //     if (data.username) {
    //         text = data.username; 
    //         console.log(text);
    //     } else {
    //         return text;
    //     }
    // }
    

    return (
        <>
        <Container className="vh-100">
            <Row className="justify-content-md-center">
                <Col md="4">
                    <Image src="/images/welcome-img.jpeg" alt="CodeQuest background" fluid></Image>
                </Col>
                <Col md="8" >
                    <h1>Welcome to CodeQuest: Front-end Chronicles!</h1>
                    <p className="mt-5 h4">As you embark on your journey, you&apos;ll be greeted with an immersive introduction to the digital realm of CodeQuest</p>
                </Col>
            </Row>
            <Row md="12" className="mt-5 mb-2">
                <div className="margin">

                    <Form className="d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit}>
                        <Form.Group className='d-flex flex-column justify-content-center align-items-center mb-3'>
                            <input className='form-label border-success rounded text-center' style={{height: '3em'}} type='text' name='username' placeholder='type your username' value={formData.username} onChange={handleInputChange}></input>{error && error.username ? <p className='text-danger fw-bolder'>{error.username}</p> : ''}
                        </Form.Group>
                        <button className='btn btn-outline-success mb-5' type='submit' onClick={null}>Submit</button>               
                        <p disabled={null} className='mt-2 h5'>Meet {formData.username}, the skilled front-end developer, and learn about the challanges plaguing the digital kingdom.</p>
                    </Form>
                </div>
            </Row>
            <Row className="m-5 vw-30">
                <Button variant="danger" type='submit' disabled={null} onClick={navigateToLevel1}>Start the Game</Button>
            </Row>
        </Container>
        

                    <Nav>
                        <Nav.Link className="nav-element" href="/level2">Level2</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className="nav-element" href="/level3">Level3</Nav.Link>

                    </Nav>
										<Nav>
                        <Nav.Link className="nav-element" href="/final-scores">Final Scores</Nav.Link>

                    </Nav>
        
        </>
    )
}

export default Welcome;