import { useEffect, useRef } from 'react';
import Hero from '../components/Hero/Hero'
import Cta from '../components/CTA/Cta'
import Noticias from '../components/Noticias/Noticias'
import BloqueServicios from '../components/BloqueServicios/BloqueServicios'
import QuienesSomos from '../components/QuienesSomos/QuienesSomos'
import Productos from '../components/Productos/Productos'
import Proyectos from '../components/Proyectos/Proyectos'
import Logotipos from '../components/Logotipos/Logotipos'
import './Home.css'

function Home() {
    const sectionRefs = useRef([]);
  
    useEffect(() => {
      const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.3 
      };
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, observerOptions);
  
      sectionRefs.current.forEach(section => {
        if (section) observer.observe(section);
      });
  
      return () => {
        sectionRefs.current.forEach(section => {
          if (section) observer.unobserve(section);
        });
      };
    }, []);
  
    const addToRefs = (el) => {
      if (el && !sectionRefs.current.includes(el)) {
        sectionRefs.current.push(el);
      }
    };
  
    return (
      <div className='home-content'>
        <div ref={addToRefs} className="fade-in-section">
          <Hero />
        </div>
        <div ref={addToRefs} className="fade-in-section">
          <Cta />
        </div>
        <div ref={addToRefs} className="fade-in-section">
          <Noticias />
        </div>
        <div ref={addToRefs} className="fade-in-section">
          <BloqueServicios />
        </div>
        <div ref={addToRefs} className="fade-in-section">
          <QuienesSomos />
        </div>
        <div ref={addToRefs} className="fade-in-section">
          <Productos />
        </div>
        <div ref={addToRefs} className="fade-in-section">
          <Proyectos />
        </div>
        <div ref={addToRefs} className="fade-in-section">
          <Logotipos />
        </div>
      </div>
    );
  }
  
  export default Home;