import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Offcanvas } from 'react-bootstrap';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';
import logoImg from '../assets/logo.png'; // Path verify kar lein

const NavbarComponent = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  // Theme toggle handler
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  };

  // Sidebar handlers (Out of toggleTheme scope)
  const handleClose = () => setShowSidebar(false);
  const handleShow = () => setShowSidebar(true);

  return (
    <Navbar 
      expand="md" 
      fixed="top" 
      className={`custom-navbar py-2 ${isDarkMode ? 'bg-dark navbar-dark' : 'bg-white navbar-light'}`}
    >
      <Container>
        {/* Three dots button + Brand Logo */}
        <div className="d-flex align-items-center gap-2">
          <Button 
            variant="link" 
            onClick={handleShow} 
            className="p-1 border-0 text-decoration-none sidebar-trigger-btn"
            title="Open Menu"
          >
            <FaBars size={22} className={isDarkMode ? 'text-light' : 'text-dark'} />
          </Button>

          <Navbar.Brand href="#home" className="fw-bold fs-4 d-flex align-items-center gap-2">
            
            <span>SumitGurjar</span>
          </Navbar.Brand>
        </div>

        {/* Desktop Navigation Links */}
        <Navbar.Collapse id="navbar-scroll">
          <Nav className="mx-auto align-items-center gap-4">
            <Nav.Link href="#home" className="nav-item-link">Home</Nav.Link>
            <Nav.Link href="#about" className="nav-item-link">About</Nav.Link>
            <Nav.Link href="#skills" className="nav-item-link">Skills</Nav.Link>
            <Nav.Link href="#education" className="nav-item-link">Education</Nav.Link>
             <Nav.Link href="#projects" className="nav-item-link">Projects</Nav.Link>
            <Nav.Link href="#contact" className="nav-item-link">Contact</Nav.Link>
          </Nav>

          <Button 
            variant={isDarkMode ? "outline-warning" : "outline-dark"} 
            onClick={toggleTheme}
            className="theme-toggle-btn rounded-circle d-flex align-items-center justify-content-center p-2 ms-2"
            title="Toggle Theme"
          >
            {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </Button>
        </Navbar.Collapse>

        {/* Slide-out Sidebar Drawer */}
        <Offcanvas 
          show={showSidebar} 
          onHide={handleClose} 
          placement="start"
          className={isDarkMode ? 'bg-dark text-white' : 'bg-white text-dark'}
        >
          <Offcanvas.Header closeButton closeVariant={isDarkMode ? 'white' : undefined}>
            <Offcanvas.Title className="fw-bold d-flex align-items-center gap-2">
              <img src={logoImg} alt="Logo" width="30" height="30" className="rounded-circle" />
              SumitGurjar
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body className="d-flex flex-column justify-content-between py-4">
            <Nav className="flex-column gap-3 fs-5">
              <Nav.Link href="#home" onClick={handleClose} className="nav-item-link">Home</Nav.Link>
              <Nav.Link href="#about" onClick={handleClose} className="nav-item-link">About</Nav.Link>
              <Nav.Link href="#skills" onClick={handleClose} className="nav-item-link">Skills</Nav.Link>
              <Nav.Link href="#education" onClick={handleClose} className="nav-item-link">Education</Nav.Link>
              <Nav.Link href="#projects" onClick={handleClose} className="nav-item-link">Projects</Nav.Link>
              <Nav.Link href="#contact" onClick={handleClose} className="nav-item-link">Contact</Nav.Link>
            </Nav>

            <div className="pt-4 border-top d-flex align-items-center justify-content-between">
              <span>Switch Mode</span>
              <Button 
                variant={isDarkMode ? "outline-warning" : "outline-dark"} 
                onClick={toggleTheme}
                className="theme-toggle-btn rounded-4 p-2 text-align-center "
              >
                {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
              </Button>
            </div>
          </Offcanvas.Body>
        </Offcanvas>

      </Container>
    </Navbar>
  );
};

export default NavbarComponent;