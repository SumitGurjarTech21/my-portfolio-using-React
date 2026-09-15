 import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt, FaCode, FaJava } from 'react-icons/fa';
import RPSImg from '../assets/Game.png';
import JavaImg from '../assets/Java.png'
import Jgimg from '../assets/JGuni.png';
import PortfolioImg from '../assets/Portfolio.png';

const projectsData = [
  {
    id: 1,
    title: 'JGuni Website Redesign',
    description: 'A modern redesign focused on clean UI/UX, responsive layouts, and smooth navigation.',
    techStack: ['React.js', 'Bootstrap', 'CSS3'],
    "image": Jgimg,
    github:'https://github.com/SumitGurjarTech21/jguni-redesign',
    demo: 'https://jguni-redesign-sigma.vercel.app/'
  
  },
  {
    id: 2,
    title: 'Personal Portfolio',
    description: 'Modern portfolio with dark mode toggle, typewriter effect, and interactive animated cards.',
    image:  PortfolioImg,
    techStack: ['React.js', 'Typewriter', 'CSS3'],
    github: 'https://github.com/SumitGurjarTech21/SG-Portfolio',
    demo: 'https://sg-portfolio-beryl.vercel.app/'
  },
  {
    id: 3,
    title: 'Web Games (Tic-Tac-Toe & RPS)',
    description: 'Interactive browser games with clean move tracking logic and dynamic scoreboards.',
    image: RPSImg,
    techStack: ['JavaScript', 'HTML5', 'CSS3'],
    github: 'https://github.com/SumitGurjarTech21/JavaScript-project',
    demo: 'https://java-script-project-omega.vercel.app/'
  },
  {
     
  id: 4,
  title: 'Java Console-Based Utilities',
  description: 'Collection of core Java applications including Smart Calculator, Income Tax Calculator, BMI Calculator, and Electricity Bill Calculator using OOPs logic.',
  image: JavaImg,
  techStack: ['Java', 'OOPs', 'Scanner CLI', 'Control Flow'],
  github: 'https://github.com/SumitGurjarTech21/Java-MiniProjects',
  demo: null
}
  
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section py-5">
      <Container>
        {/* Section Heading */}
        <div className="text-center mb-4">
          <h2 className="fw-bold fs-3 text-uppercase d-inline-block mb-1">
            <FaCode className="me-2 text-primary" /> Projects <span className="text-primary">Made</span>
          </h2>
          <div className="section-title-line mx-auto"></div>
        </div>

        {/* Projects Grid: 2 per row (lg={6}) */}
        <Row className="g-4 justify-content-center">
          {projectsData.map((project) => (
            <Col key={project.id} lg={6} md={6} sm={12}>
              <Card className="project-card h-100 border-0 shadow-sm rounded-3 overflow-hidden d-flex flex-column">
                
                {/* Image Container */}
                <div className="project-img-wrapper overflow-hidden">
                  <Card.Img 
                    variant="top" 
                    src={project.image} 
                    alt={project.title}
                    className="project-img" 
                  />
                </div>
                
                {/* Card Content Area */}
                <Card.Body className="d-flex flex-column p-3 flex-grow-1">
                  <Card.Title className="fw-bold fs-6 mb-2">{project.title}</Card.Title>
                  
                  <Card.Text className="text-muted small mb-3 project-desc flex-grow-1">
                    {project.description}
                  </Card.Text>

                  {/* Tech Stack Badges */}
                  <div className="tech-badges d-flex flex-wrap gap-1 mb-3">
                    {project.techStack.map((tech, index) => (
                      <Badge key={index} bg="primary" className="px-2 py-1 bg-opacity-10 text-primary fw-medium rounded-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Bottom Buttons */}
                  <div className="d-flex gap-2 mt-auto">
                    {project.demo ? (
                      <Button 
                        href={project.demo} 
                        target="_blank" 
                        variant="primary" 
                        size="sm" 
                        className="w-100 rounded-2 d-flex align-items-center justify-content-center gap-1 py-1 fw-medium"
                      >
                        <FaExternalLinkAlt size={12} /> Live Demo
                      </Button>
                    ) : (
                      <Button 
                        variant="secondary" 
                        size="sm" 
                        disabled
                        className="w-100 rounded-2 d-flex align-items-center justify-content-center gap-1 py-1 fw-medium"
                      >
                        <FaJava size={14} /> Console App
                      </Button>
                    )}

                    <Button 
                      href={project.github} 
                      target="_blank" 
                      variant="outline-secondary" 
                      size="sm" 
                      className="rounded-2 d-flex align-items-center justify-content-center px-2 py-1"
                      title="View GitHub Repository"
                    >
                      <FaGithub size={15} />
                    </Button>
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

export default Projects;