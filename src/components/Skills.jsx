import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaBootstrap, 
  FaGitAlt, 
  FaGithub, 
  FaNodeJs, 

} from 'react-icons/fa';
import { FaJava, FaPython } from 'react-icons/fa';
import { SiC, SiCplusplus } from 'react-icons/si';

const skillsData = [
     { name: 'C Language', icon: <SiC className="text-primary" /> },
      { name: 'C++', icon: <SiCplusplus className="text-primary" /> },
       { name: 'Java Language', icon: <FaJava className="text-primary" /> },
        { name: 'Python', icon: <FaPython className="text-primary" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-danger" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-primary" /> },
  { name: 'JavaScript', icon: <FaJs className="text-warning" /> },
  { name: 'React.js', icon: <FaReact className="text-info" /> },
  
  { name: 'Bootstrap', icon: <FaBootstrap style={{ color: '#7952b3' }} /> },
  ,
  { name: 'Node.js', icon: <FaNodeJs className="text-success" /> },
   
  { name: 'Git', icon: <FaGitAlt className="text-danger" /> },
  { name: 'GitHub', icon: <FaGithub /> }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section py-5">
      <Container>
        {/* Section Title */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6 text-uppercase d-inline-block">
            Skills & <span className="text-primary">Abilities</span>
          </h2>
          <div className="section-title-line mx-auto mt-2"></div>
        </div>

        {/* Skills Cards Grid */}
        <Row className="g-4 justify-content-center">
          {skillsData.map((skill, index) => (
            <Col key={index} lg={2} md={3} sm={4} xs={6}>
              <Card className="skill-card text-center p-3 h-100 border-0 shadow-sm rounded-4">
                <Card.Body className="p-2 d-flex flex-column align-items-center justify-content-center">
                  <div className="skill-icon mb-3 fs-1">
                    {skill.icon}
                  </div>
                  <Card.Title className="fs-6 fw-semibold mb-0">
                    {skill.name}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;