import React from 'react';
import { Container} from 'react-bootstrap';

const LevelWelcomeContent = (props) => {
    return (
        <>
        <Container className="col-xxl-8 d-flex justify-content-center align-items-center">
            <div className="row flex-lg-row-reverse align-items-center g-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img className="d-block mx-lg-auto img-fluid p-5" src={props.image}></img>
                </div>
                <div className="col-lg-6">
                    <h2 className="fw-bold mb-3">{props.name}</h2>
                    <p className="mt-5">{props.description}</p>
                    <p>{props.instruction}</p>
                </div>
                </div>
        </Container>        
        </>
    )
    

}
export default LevelWelcomeContent;