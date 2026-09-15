import React from 'react';
import { Container } from 'react-bootstrap';
import { FaCode, FaLaptopCode, FaJava, FaReact } from 'react-icons/fa';

const Footer = () => {
  const marqueeItems = [
    { text: 'Full Stack Developer', icon: <FaCode className="text-warning me-2" /> },
    { text: 'Web Developer', icon: <FaLaptopCode className="text-info me-2" /> },
    { text: 'Java Developer', icon: <FaJava className="text-danger me-2" /> },
    { text: 'React.js Developer', icon: <FaReact className="text-primary me-2" /> },
  ];

  return (
    <div className="fixed-bottom bg-dark text-white border-top border-primary py-2 overflow-hidden shadow-lg z-3">
      <div className="marquee-track d-flex align-items-center">
        
        {/* Infinite Scroll loop ke liye content 2 baar render kiya hai */}
        {[1, 2].map((group) => (
          <div key={group} className="marquee-group d-flex align-items-center gap-4 text-uppercase fw-bold text-nowrap px-3">
            {marqueeItems.map((item, index) => (
              <React.Fragment key={index}>
                <span className="d-flex align-items-center fs-6">
                  {item.icon} {item.text}
                </span>
                <span className="text-primary fs-5">•</span>
              </React.Fragment>
            ))}
          </div>
        ))}

      </div>
    </div>
  );
};

export default Footer;