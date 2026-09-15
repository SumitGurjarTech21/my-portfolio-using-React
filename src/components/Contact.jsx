import React, { useRef, useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaUser, FaPhoneAlt, FaHeadset } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import ContactImg from 'src/assets/contact.png';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ show: false, message: '', variant: 'success' });
  const [loading, setLoading] = useState(false);

   const sendEmail = (e) => {
  e.preventDefault();
  setLoading(true);

  emailjs.sendForm(
    'service_7uufuza',
    'template_lpfxwmk',
    e.target,
    { publicKey: 'RHG8HLBBw1iKQie3Y' }
  )
  .then(() => {
    setLoading(false);
    setStatus({ show: true, message: 'Message sent successfully!', variant: 'success' });
    e.target.reset();
  })
  .catch((error) => {
    setLoading(false);
    console.error('EmailJS Detailed Error:', error.text || error);
    setStatus({ show: true, message: 'Failed to send message.', variant: 'danger' });
  });
};
  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        {/*  Style Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold fs-3 text-uppercase d-inline-block mb-1">
            <FaHeadset className="me-2 text-primary" /> Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="section-title-line mx-auto"></div>
        </div>

        <div className="contact-container-box p-4 p-md-5 rounded-4 shadow-lg border-0">
          <Row className="g-4 align-items-center">
            
            {/* Left Side: Contact Art / Details */}
            <Col lg={5} md={12}>
              <div className="contact-left-content text-center text-lg-start pe-lg-3">
                <div className="contact-illustration mb-4 d-none d-lg-block">
                  <img 
                    src={ContactImg}
                    alt="Contact Illustration" 
                    className="img-fluid rounded-4 shadow-sx"
                    style={{ maxHeight: '240px', width: '100%', objectFit: 'cover' }}
                  />
                </div>
                <h4 className="fw-bold mb-2">Feel Free to Contact Me!</h4>
                <p className="text-muted small mb-4">
                  Open for web development projects, freelance opportunities, or just a friendly tech chat.
                </p>

                <div className="contact-info-list d-flex flex-column gap-3">
                  <div className="d-flex align-items-center gap-3">
                    <div className="contact-icon-btn">
                      <FaEnvelope />
                    </div>
                    <div>
                      <span className="d-block text-muted small">Email Me</span>
                      <strong className="fs-6">sumitgurjar2105@gmail.com</strong>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3">
                    <div className="contact-icon-btn">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <span className="d-block text-muted small">Location</span>
                      <strong className="fs-6">Indore, M.P., India</strong>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            {/* Right Side: Contact Form */}
            <Col lg={7} md={12}>
              <div className="contact-form-wrapper p-3 p-md-4 rounded-3">
                {status.show && (
                  <Alert variant={status.variant} onClose={() => setStatus({ ...status, show: false })} dismissible>
                    {status.message}
                  </Alert>
                )}

                <Form ref={form} onSubmit={sendEmail}>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group controlId="user_name">
                        <div className="input-group">
                          <span className="input-group-text bg-light border-end-0 text-muted">
                            <FaUser />
                          </span>
                          <Form.Control 
                            type="text" 
                            name="user_name" 
                            placeholder="Name" 
                            className="border-start-0 bg-light"
                            required 
                          />
                        </div>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group controlId="user_email">
                        <div className="input-group">
                          <span className="input-group-text bg-light border-end-0 text-muted">
                            <FaEnvelope />
                          </span>
                          <Form.Control 
                            type="email" 
                            name="user_email" 
                            placeholder="Email" 
                            className="border-start-0 bg-light"
                            required 
                          />
                        </div>
                      </Form.Group>
                    </Col>

                    <Col md={12}>
                      <Form.Group controlId="phone">
                        <div className="input-group">
                          <span className="input-group-text bg-light border-end-0 text-muted">
                            <FaPhoneAlt />
                          </span>
                          <Form.Control 
                            type="text" 
                            name="phone" 
                            placeholder="Phone Number (Optional)" 
                            className="border-start-0 bg-light"
                          />
                        </div>
                      </Form.Group>
                    </Col>

                    <Col md={12}>
                      <Form.Group controlId="message">
                        <Form.Control 
                          as="textarea" 
                          rows={4} 
                          name="message" 
                          placeholder="Your Message..." 
                          className="bg-light"
                          required 
                        />
                      </Form.Group>
                    </Col>

                    <Col md={12}>
                      <Button 
                        variant="primary" 
                        type="submit" 
                        disabled={loading} 
                        className="w-100 py-2 d-flex align-items-center justify-content-center gap-2 fw-bold text-uppercase shadow-sm"
                      >
                        {loading ? 'Sending Message...' : <>Submit <FaPaperPlane /></>}
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>

          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Contact;