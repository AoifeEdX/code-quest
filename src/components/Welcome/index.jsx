import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';

const Welcome = ({startGame}) => {
    const [formData, setFormData] = useState({
        username: '',
        text: 'Player'
    });
    const [error, setError] = useState({
        username: null
    });

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
         <div className='d-flex flex-column justify-content-center align-items-center mt-3'>
                <div className='hero-img'>
                    <img src='/background.jpeg' alt='coding kingdom'></img>
                    
                </div>
                <div className='p-5 text-left text-content'>
                    <h1 className='mt-5 mb-3 text-left'>Welcome to CodeQuest: Front-end Chronicles!</h1>
                    <h4 className='mb-3 fw-bold h3 text-left'>As you embark on your journey, you'll be greeted with an immersive introduction to the digital realm of CodeQuest.</h4>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className='mb-3'>
                            <input className='form-label border-success rounded' type='text' name='username' placeholder='type your username' value={formData.username} onChange={handleInputChange}></input>{error && error.username ? <p className='text-danger fw-bolder'>{error.username}</p> : ''}
                        </Form.Group>
                        <button className='btn btn-outline-success mb-5' type='submit' onSubmit={startGame}>Submit</button>               
                        <p className='mt-5 h4'>Meet {formData.text}, the skilled front-end developer, and learn about the challanges plaguing the digital kingdom.</p>
                    </Form>
                    <Nav>
                        <Nav.Link className="nav-element" href="/game">Start Game</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className="nav-element" href="/level1">Level1</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className="nav-element" href="/level2">Level2</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className="nav-element" href="/level3">Level3</Nav.Link>

                    </Nav>
										<Nav>
                        <Nav.Link className="nav-element" href="/final-scores">Final Scores</Nav.Link>

                    </Nav>
                </div>

            </div>    
        
        
        </>
    )
}

export default Welcome;