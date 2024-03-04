import React from 'react';
import { Container} from 'react-bootstrap';

const LevelWelcomeContent = (props) => {
    return (
        <>
        <Container className="col-xxl-8 px-4 py-5 d-flex justify-content-center align-items-center">
            <div className="row flex-lg-row-reverse align-items-center justify-content-center">
                <div className="d-flex justify-content-center col-10 col-sm-8 col-lg-6">
                    <img className="d-block mx-lg-auto img-fluid border border-2 rounded p-5" style={{maxWidth: '700', height: '500', margin: 'auto'}} src={props.image}></img>
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