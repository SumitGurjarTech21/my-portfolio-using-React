 import React from "react";
 import {Container , Row ,Col ,Button} from 'react-bootstrap';
 import { FaGithub, FaLinkedin, FaEnvelope ,FaFileDownload}
 from 'react-icons/fa';
 import heroImg from '../assets/SUMIT.jpg'; // Apni image ka path verify kar lein
 import Typewriter from 'typewriter-effect';
 const Hero =()=>{

    return (
        <section id="home" className="hero-section min-vh-100 d-flex align-items-center pt-5">
            <Container>
                <Row className="align-items-center gy-4">
                    <Col lg={7} md={6}>
                    <div className = "hero-content">
                        <h3 className='text-primary fw-semibold mb-2'>Hi there!</h3>
                        <h1 className='fw-bold display-4 mb-2'>I'm <span className="text-highlight">Sumit Gurjar</span></h1>
                        <h4 className="fw-medium text-secondary mb-3 align-items-center gap-2">I am a <span className="text-primary fw-bold d-inline-block"><Typewriter 
                        options={{
                            strings:[ 'Web Developer','Frontend Developer','React.js Developer','Full Stack Developer','Java Developer'],
                            autoStart:true,
                            loop:true,
                            deleteSpeed:50,
                        }}/></span></h4>
                        <p className='text-secondary mb-4'>A passionate Frontend Developer with a strong foundation in web development and a keen eye for design. I specialize in creating responsive and user-friendly websites that deliver exceptional user experiences.</p>
                        <div className="d-flex flex-wrap gap-3 mb-4">
                            <Button href="#about" variant="primary" className="rounded-pill px-4 py-2 shadow-sm">About Me</Button>
                            <Button href="https://drive.google.com/file/d/1tnmKerqTDcLwLqWQkVyqkDJThyBMz3lw/view?usp=sharing" target="_blank" variant="outline-primary" className="rounded-pill px-4 py-2 fw-semibold d-flex align-items-center gap-2"><FaFileDownload /> Resume</Button>
                            </div>
                            <div className="social-icons d-flex align-items-center gap-3">
                                <a href="https://github.com/SumitGurjarTech21" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                    <FaGithub className="fs-4" />
                                </a>
                                <a href="https://www.linkedin.com/in/sumitgurjartech/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                    <FaLinkedin className="fs-4" />
                                </a>
                                <a href="mailto: sumitgurjar2105@gmail.com"className="text-decoration-none">
                                    <FaEnvelope className="fs-4" />
                                </a>
                            </div>
                    </div>
                    </Col>
                    <Col lg={4} md={6}>
                    <div className="hero-img-wrapper">
  <img 
    src={heroImg} 
    alt="Sumit Gurjar" 
    className="img-fluid rounded-4 hero-profile-img"
  />
</div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
 }
 export default Hero;