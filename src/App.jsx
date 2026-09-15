 import React from 'react'
 import NavbarComponent from './components/NavbarComponent.jsx'
 import Hero from './components/Hero.jsx'
 import About from './components/About.jsx'
 import Skills from './components/Skills.jsx'
 import Projects from './components/Projects.jsx'
 import Education from './components/Education.jsx'
 import Contact from './components/Contact.jsx'
 import Footer from './components/Footer.jsx'
 const App = () => {
   return (
     <div>
      <NavbarComponent />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />

       </div>
   )
 }
 
 export default App