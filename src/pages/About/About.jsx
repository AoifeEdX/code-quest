import { Container, Row, Col } from 'react-bootstrap';
import fireGif from '/images/fireGif.gif';

function About() {
  return (
    <>
      <div className="about-page">
        <Container>
          <Row>
            <Col md={6} className="order-md-2 d-flex flex-column justify-content-center">
              <div className="about ps-md-5 text-center">
                <img src={fireGif} alt="" className="img-fluid" />
              </div>
            </Col>
            <Col md={6} className="order-md-1">
              <h2 className="mt-5 pt-3">About <span className="bold-text text-danger">CodeQuest</span></h2>
              <hr />
              <div className="my-5 fs-5">
                <p className="mt-5">
                  Welcome to <span className="bold-text text-warning">CodeQuest</span>, a website designed to help players learn to code through fun and engaging games. Our mission is to make coding education accessible and enjoyable for everyone, regardless of their experience level.
                </p>
                <p className="mt-5">
                  Whether you're a beginner just starting your coding journey or an experienced developer looking to enhance your skills, <span className="bold-text text-warning">CodeQuest</span> offers a wide range of interactive challenges and tutorials to suit your needs. Join us on this exciting quest to master the art of coding!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default About;
