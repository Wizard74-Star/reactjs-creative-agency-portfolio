import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useSearchParams } from "react-router-dom";
import { projects, projectCategories } from "../data/projects";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import assets from "../assets/assets";

const Projects = ({ theme, setTheme }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'All Projects');
  
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

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

  const filteredProjects = selectedCategory === 'All Projects' 
    ? projects 
    : projects.filter(project => {
        const categories = Array.isArray(project.category) ? project.category : [project.category];
        return categories.includes(selectedCategory);
      });

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'All Projects') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  return (
    <div className="dark:bg-black min-h-screen">
      <Navbar theme={theme} setTheme={setTheme} />
      
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: Math.random() * 200 + 50,
                height: Math.random() * 200 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 8 + 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 sm:px-12 lg:px-24 xl:px-40 py-20"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
            Our Projects
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
            Explore our portfolio of innovative solutions across different categories and technologies
          </p>
        </motion.div>
      </div>
      
      <div className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-20 pb-20 text-gray-700 dark:text-white">

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
          {filteredProjects.map((project, index) => (
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
            </motion.a>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
      <Footer theme={theme} />
      
      {/* Custom cursor ring */}
      <div ref={outlineRef} className="fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999]" style={{transition: 'transform 0.1s ease-out'}}></div>
      {/* Custom cursor dot */}
      <div ref={dotRef} className="fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999]" style={{transition: 'transform 0.1s ease-out'}}></div>
    </div>
  );
};

export default Projects;

