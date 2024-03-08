import React, { useState } from "react";
import { Button, Container, Row, Col } from 'react-bootstrap';
import IconButton from '@mui/material/IconButton';
import { Email, GitHub, LinkedIn, Phone } from "@mui/icons-material";

const Contact = () => {
const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: ''
});

const [errors, setErrors] = useState({
  name: null,
  email: null,
  message: null
});

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
  setErrors((prev) => ({
    ...prev,
    [name]: '',
  }));
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (validationErrors) {
      setErrors(validationErrors);
    } 
    // else {
    //   console.log("Form submitted:");
    // }
  };
  
  const validateForm = (data) => {
    const newErrors = {};
    if (!data.name.trim()) {
      newErrors.name = 'Please enter your name';
    }
    if (!data.email.trim() || !isValidEmail(data.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!data.message.trim()) {
      newErrors.message = 'Please enter your message';
    }
    return Object.keys(newErrors).length > 0 ? newErrors : null;
    // setErrors((prev) => ({...prev, name: newError.name}))
};

const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  console.log(emailRegex.test(email))
  return emailRegex.test(email);
}

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
                <a href="https://github.com/AoifeEdX/code-quest" target="_blank" className="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                  <IconButton className="text-warning me-4">
                    <GitHub />
                  </IconButton>
                  GitHub
                </a>
              </p>
              <p className="mt-4">
                <a href="https://www.linkedin.com" target="_blank" className="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
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
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                />{errors && errors.name ? <p className="text-danger fw-bolder">{errors.name}</p> : ''}
              </div>
              <div className="form-group my-3">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  // id="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />{errors && errors.email ? <p className="text-danger fw-bolder">{errors.email}</p> : ''}
              </div>
              <div className="form-group my-3">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  type="text"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>{errors && errors.message ? <p className="text-danger fw-bolder">{errors.message}</p> : ''}
              </div>
              <Button type="submit" className="my-3 btn rounded-pill gradient-bg-blue" style={{ width: "100%" }}>Submit</Button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
