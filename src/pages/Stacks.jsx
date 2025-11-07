import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { stacks, stackCategories } from "../data/stacks";
import StackIcon from "../components/StackIcon";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Stacks = ({ theme, setTheme }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Stacks');
  
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

  const filteredStacks = selectedCategory === 'All Stacks'
    ? stacks
    : stacks.filter(stack => stack.category === selectedCategory);

  return (
    <div className="dark:bg-black min-h-screen">
      <Navbar theme={theme} setTheme={setTheme} />
      
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: Math.random() * 150 + 30,
                height: Math.random() * 150 + 30,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 80 - 40],
                y: [0, Math.random() * 80 - 40],
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.25, 0.1],
              }}
              transition={{
                duration: Math.random() * 6 + 6,
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
            Technology Stacks
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build powerful, scalable solutions. Click on any stack to see projects we've built with it.
          </p>
        </motion.div>
      </div>
      
      <div className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-20 pb-20 text-gray-700 dark:text-white">

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {stackCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
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

        {/* Stacks Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-7xl">
          {filteredStacks.map((stack, index) => (
            <Link key={stack.id} to={`/stacks/${stack.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl hover:shadow-xl transition-all cursor-pointer group border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <StackIcon stack={stack} size={80} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{stack.name}</h3>
                    <p className="text-sm opacity-70 leading-relaxed">
                      {stack.description}
                    </p>
                  </div>
                  <div className="mt-2">
                    <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {stack.projects.length} Projects
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {filteredStacks.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No stacks found in this category.
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

export default Stacks;

