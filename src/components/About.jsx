import React from "react";
import {Container , Row ,Col ,Button} from 'react-bootstrap';
import {FaUser ,  FaFileDownload } from 'react-icons/fa';

const About = () =>{
    return(
        <section id="about" className="about-section py-5">
            <Container>
                {/* Section Heading */}
                <div className="text-center mb-5">
                    <h2 className="fw-bold display-6 text-uppercse d-inline-block position-realtive">
                        <FaUser className="me-2 text-primry"/>About <span className="text-primary">Me</span></h2>
                        <div className="section-title-line mx-auto mt-2"></div>
                </div>
                <Row className="align-items-center gy-4">
                    {/* Left Side : Photo */}
                    <Col lg={4} md={12} className="text-center">
                    <div className="about-img-box">
                        <img 
                        src="src/assets/sumit1.jpg"
                        alt="SumitGurjar"
                        className="img-fluid rounded-5 about-img"/>
                        </div></Col>

                        {/* Right Side : DEtails and Info */}
                        <Col lg={7} md={12}>
                    <div className="about-info-content ps-lg-4">
                        <h3 className="fw-bold mb-1">I'm Sumit Gurjar</h3>
                        <p className="text-primary fw-semibold mb-3">Full Stack Developer</p>
                        <p className="text-muted mb-4 leading-relaxed"> I am passionate about improving my coding skills & developing web applications. I build Websites using HTML, CSS, JavaScript, React.js, and Bootstrap. I love creating innovative solutions and building scalable applications.</p>
                        {/* Personal Info Grid  */}
                        <div className="info-grid mb-4">
                            <Row className="g-3">
                                <Col sm={6}>
                                <p className="mb-1 fw-bold">
                                    <span className="text-primary">Email :</span>
                                    <span className="text-muted fw-normal">sumitgurjar2105@gmail.com
    
                                    </span>
                                </p>
                                </Col>
                                <Col sm={6}>
                    <p className="mb-1 fw-bold">
                      <span className="text-primary">Place: </span> 
                      <span className="text-muted fw-normal">Indore[M.P.]</span>
                    </p>
                  </Col>
                            </Row>
                        </div>
                        {/* Resume Button */}
                        <Button href="https://drive.google.com/file/d/1tnmKerqTDcLwLqWQkVyqkDJThyBMz3lw/view?usp=sharing" target="_blank"
                        variant="primary"
                        size="lg"
                        className="px-4 py-2 rounded-3 fw0semibold d-inline-flex align-items-center gap-2 shadow">Resume<FaFileDownload /></Button>
                        </div></Col>
                </Row>
            </Container>
        </section>
    )
}
export default About;