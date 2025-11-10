import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { stacks } from "../data/stacks";
import { projects } from "../data/projects";
import StackIcon from "../components/StackIcon";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const StackDetail = ({ theme, setTheme }) => {
  const { stackId } = useParams();
  const stack = stacks.find(s => s.id === stackId);
  
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  // Custom cursor position
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    document.addEventListener('mousemove', handleMouseMove);
    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1;
      position.current.y += (mouse.current.y - position.current.y) * 0.1;

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`;
        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`;
      }
      requestAnimationFrame(animate);
    };
    animate();
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  if (!stack) {
    return (
      <div className="dark:bg-black min-h-screen flex items-center justify-center relative">
        <Navbar theme={theme} setTheme={setTheme} />
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-700 dark:text-white mb-4">Stack Not Found</h1>
          <Link to="/stacks" className="text-primary hover:underline">
            Back to Stacks
          </Link>
        </div>
        {/* Custom cursor ring */}
        <div ref={outlineRef} className="fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999]" style={{transition: 'transform 0.1s ease-out'}}></div>
        {/* Custom cursor dot */}
        <div ref={dotRef} className="fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999]" style={{transition: 'transform 0.1s ease-out'}}></div>
      </div>
    );
  }

  const stackProjects = projects.filter(project => 
    stack.projects.includes(project.id)
  );

  return (
    <div className="dark:bg-black min-h-screen">
      <Navbar theme={theme} setTheme={setTheme} />
      
      <div className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 pb-20 text-gray-700 dark:text-white">
        {/* Stack Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-6 mb-12"
        >
          <StackIcon stack={stack} size={120} />
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{stack.name}</h1>
            <p className="text-lg opacity-80 max-w-3xl leading-relaxed">
              {stack.description}
            </p>
            <div className="mt-4 flex items-center justify-center gap-4">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">
                {stack.category}
              </span>
            </div>
          </div>
        </motion.div>

        <Title 
          title={`Projects Built with ${stack.name}`}
          desc={`Explore our portfolio of projects leveraging ${stack.name} to deliver exceptional results.`}
        />

        {/* Projects Grid */}
        {stackProjects.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
            {stackProjects.map((project, index) => (
              <motion.a
                key={project.id}
                href={project.url || '#'}
                target={project.url ? "_blank" : undefined}
                rel={project.url ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="hover:scale-102 duration-500 transition-all cursor-pointer group block"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src={project.image} 
                    className="w-full rounded-xl transition-transform duration-500 group-hover:scale-110" 
                    alt={project.title} 
                  />
                </div>
                <h3 className="mt-3 mb-2 text-lg font-semibold">{project.title}</h3>
                <p className="text-sm opacity-60 w-5/6">{project.description}</p>
                <div className="mt-2">
                  <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded">
                    {project.category}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found for this stack.
            </p>
          </div>
        )}

        <Link 
          to="/stacks" 
          className="mt-12 px-6 py-3 bg-primary text-white rounded-full hover:scale-105 transition-all"
        >
          ← Back to All Stacks
        </Link>
      </div>
      <Footer theme={theme} />
      
      {/* Custom cursor ring */}
      <div ref={outlineRef} className="fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999]" style={{transition: 'transform 0.1s ease-out'}}></div>
      {/* Custom cursor dot */}
      <div ref={dotRef} className="fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999]" style={{transition: 'transform 0.1s ease-out'}}></div>
    </div>
  );
};

export default StackDetail;

