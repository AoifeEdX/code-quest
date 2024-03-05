import React, { useState } from "react";
import { Button, Container, Row, Col } from 'react-bootstrap';
import IconButton from '@mui/material/IconButton';
import { Email, GitHub, LinkedIn, Phone } from "@mui/icons-material";

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <Container>
        <Row className="mt-3 pt-3">
          <Col md={12} className="mt-3 pt-3">
            <h2>Contact <span className="bold-text text-danger">CodeQuest</span></h2>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col md={7}>
            <p className="my-5 fs-5">
              If you have any inquiries or feedback for <span className="bold-text text-warning">CodeQuest</span>, please feel free to reach out to us. We're here to help and provide assistance with any questions you may have.
            </p>
            <div className="fs-5">
              <p className="mt-5 text-warning ">
                <IconButton href="tel:+440123456789" className="text-warning me-4">
                  <Phone />
                </IconButton>
                +44 01 2345 6789
              </p>
              <p className="mt-4">
                <a href="mailto:info@codequest.com" className="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                  <IconButton className="text-warning me-4">
                    <Email />
                  </IconButton>
                  info@codequest.com
                </a>
              </p>
              <p className="mt-4">
                <a href="https://github.com/CodeQuest" className="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                  <IconButton className="text-warning me-4">
                    <GitHub />
                  </IconButton>
                  GitHub
                </a>
              </p>
              <p className="mt-4">
                <a href="https://www.linkedin.com/company/codequest" className="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                  <IconButton className="text-warning me-4">
                    <LinkedIn />
                  </IconButton>
                  LinkedIn
                </a>
              </p>
            </div>
          </Col>
          <Col md={5} className="p-5">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <Button type="submit" className="my-3 btn rounded-pill gradient-bg-blue" style={{ width: "100%" }}>Submit</Button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
//export function
export default Contact;
