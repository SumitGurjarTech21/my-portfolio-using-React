import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    id: 1,
    title: 'Bachelor of Computer Applications (BCA)',
    institution: 'Govt. Model Autonomous Holkar Science College, Indore',
    year: '2024 - 2027',
    status: 'Pursuing'
  },
  {
    id: 2,
    title: 'Higher Secondary (12th Class)',
    institution: 'Govt. S.R.N. Excellence Higher Secondary School, Khandwa',
    year: '2024',
    status: 'Completed'
  },
  {
    id: 3,
    title: 'High School (10th Class)',
    institution: 'Govt. High School, Kumthi',
    year: '2022',
    status: 'Completed'
  }
];

const Education = () => {
  return (
    <section id="education" className="education-section py-5">
      <Container>
        {/* Section Heading */}
        <div className="text-center mb-4">
          <h2 className="fw-bold fs-3 text-uppercase d-inline-block mb-1">
            <FaGraduationCap className="me-2 text-primary" /> My <span className="text-primary">Education</span>
          </h2>
          <div className="section-title-line mx-auto"></div>
        </div>

        {/* Education Cards Grid */}
        <Row className="g-4 justify-content-center">
          {educationData.map((edu) => (
            <Col key={edu.id} lg={4} md={6} sm={12}>
              <Card className="edu-card h-100 border-0 shadow-sm rounded-3 p-3">
                <Card.Body className="d-flex align-items-start gap-3">
                  <div className="edu-icon-box bg-primary bg-opacity-10 text-primary p-3 rounded-circle d-flex align-items-center justify-content-center">
                    <FaGraduationCap size={22} />
                  </div>
                  <div>
                    <span className="badge bg-primary bg-opacity-10 text-primary mb-2 fw-medium">
                      {edu.year} | {edu.status}
                    </span>
                    <h5 className="fw-bold mb-1 fs-6">{edu.title}</h5>
                    <p className="text-muted small mb-0">{edu.institution}</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Education;