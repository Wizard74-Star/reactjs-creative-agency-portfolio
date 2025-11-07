import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import OurWork from "../components/OurWork";
import Services from "../components/Services";
import Teams from "../components/Teams";
import TrustedBy from "../components/TrustedBy";

const Home = ({ theme, setTheme }) => {
  const location = useLocation();
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  // custom cursor position 
  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }
    document.addEventListener('mousemove', handleMouseMove)
    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1
      position.current.y += (mouse.current.y - position.current.y) * 0.1

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`

        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`
      }
      requestAnimationFrame(animate)
    }
    animate()
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="dark:bg-black relative" key={location.pathname}>
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero key={`hero-${location.pathname}`} />
      <Services key={`services-${location.pathname}`} />
      <OurWork key={`ourwork-${location.pathname}`} />
      <Teams key={`teams-${location.pathname}`} />
      <ContactUs key={`contact-${location.pathname}`} />
      <Footer theme={theme} />

      {/* Custom cursor ring */}
      <div ref={outlineRef} className="fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999]" style={{transition: 'transform 0.1s ease-out'}}></div>
      {/* Custom cursor dot */}
      <div ref={dotRef} className="fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999]" style={{transition: 'transform 0.1s ease-out'}}></div>
    </div>
  );
};

export default Home;

