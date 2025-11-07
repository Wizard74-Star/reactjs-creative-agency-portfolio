import { useParams, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { projects } from "../data/projects";
import { stacks } from "../data/stacks";
import StackIcon from "../components/StackIcon";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import assets from "../assets/assets";
import { decodeCategoryFromURL } from "../utils/categoryUrl";

const categoryConfig = {
  'Full-Stack': {
    title: 'Full-Stack Development',
    subtitle: 'End-to-End Digital Solutions',
    description: 'We build complete, scalable applications from frontend to backend, delivering seamless user experiences with robust server infrastructure.',
    gradient: 'from-blue-600 via-purple-600 to-pink-600',
    color: '#6366F1',
    icon: '🚀'
  },
  'Web Application': {
    title: 'Web Applications',
    subtitle: 'Powerful & Responsive Web Solutions',
    description: 'Creating modern web applications with cutting-edge technologies, responsive design, and exceptional user experiences.',
    gradient: 'from-cyan-500 via-blue-500 to-indigo-600',
    color: '#3B82F6',
    icon: '🌐'
  },
  'Mobile App': {
    title: 'Mobile Applications',
    subtitle: 'Native & Cross-Platform Excellence',
    description: 'Developing high-performance mobile apps for iOS and Android with native features and cross-platform efficiency.',
    gradient: 'from-green-500 via-emerald-500 to-teal-600',
    color: '#10B981',
    icon: '📱'
  },
  'Blockchain': {
    title: 'Blockchain Solutions',
    subtitle: 'Decentralized & Secure Applications',
    description: 'Engineering secure blockchain applications, smart contracts, and DeFi platforms with cutting-edge Web3 technologies.',
    gradient: 'from-yellow-500 via-orange-500 to-red-600',
    color: '#F59E0B',
    icon: '⛓️'
  },
  'AI Automation': {
    title: 'AI Automation',
    subtitle: 'Intelligent Workflow Solutions',
    description: 'Building intelligent automation systems that streamline processes, enhance productivity, and transform business operations.',
    gradient: 'from-purple-500 via-pink-500 to-rose-600',
    color: '#A855F7',
    icon: '🤖'
  },
  'AI Agent / Chatbot': {
    title: 'AI Agents & Chatbots',
    subtitle: 'Conversational AI Excellence',
    description: 'Developing advanced conversational AI agents and chatbots that provide intelligent, context-aware interactions.',
    gradient: 'from-indigo-500 via-purple-500 to-violet-600',
    color: '#8B5CF6',
    icon: '💬'
  }
};

const CategoryPage = ({ theme, setTheme }) => {
  const { category } = useParams();
  // Properly decode the category name from URL (handles forward slashes and special characters)
  const decodedCategory = decodeCategoryFromURL(category);
  const config = categoryConfig[decodedCategory] || categoryConfig['Full-Stack'];
  const categoryProjects = projects.filter(p => p.category === decodedCategory);
  
  // Get unique stacks used in category projects
  const usedStackNames = new Set();
  categoryProjects.forEach(project => {
    project.stacks.forEach(stackName => {
      usedStackNames.add(stackName);
    });
  });
  
  const categoryStacks = stacks.filter(s => 
    usedStackNames.has(s.name) || 
    s.projects.some(projectId => categoryProjects.some(p => p.id === projectId))
  );

  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
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

  return (
    <div className="dark:bg-black min-h-screen relative overflow-hidden">
      <Navbar theme={theme} setTheme={setTheme} />
      
      {/* Hero Section with Parallax */}
      <motion.div
        ref={heroRef}
        style={{ opacity, scale }}
        className={`relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br ${config.gradient}`}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 200 - 100],
                y: [0, Math.random() * 200 - 100],
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-12 lg:px-24 xl:px-40 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="text-6xl sm:text-8xl mb-4 inline-block">{config.icon}</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight"
          >
            {config.title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-white/90 mb-6"
          >
            {config.subtitle}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-white/80 max-w-3xl mx-auto mb-12"
          >
            {config.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="#stacks"
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg shadow-2xl hover:shadow-white/50 transition-all"
              >
                Explore Stacks
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="#projects"
                className="px-8 py-4 bg-white/10 backdrop-blur-lg text-white border-2 border-white/30 rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
              >
                View Projects
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Stacks Section */}
      <section id="stacks" className="py-20 px-4 sm:px-12 lg:px-24 xl:px-40 bg-gray-50 dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technology Stacks
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Cutting-edge technologies powering our {category.toLowerCase()} solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {categoryStacks.map((stack, index) => (
            <motion.div
              key={stack.id}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -10 }}
              className="group"
            >
              <Link to={`/stacks/${stack.id}`}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group-hover:border-primary">
                  <div className="flex flex-col items-center gap-4">
                    <StackIcon stack={stack} size={60} />
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white text-center">
                      {stack.name}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-12 lg:px-24 xl:px-40 bg-white dark:bg-black">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of {category.toLowerCase()} projects
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {categoryProjects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.url || '#'}
              target={project.url ? "_blank" : undefined}
              rel={project.url ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-white/90 text-sm mb-4 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.stacks.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.stacks.length > 3 && (
                          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                            +{project.stacks.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-semibold">
                      {project.category}
                    </span>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-primary font-semibold text-sm flex items-center gap-2"
                    >
                      View Details
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-12 lg:px-24 xl:px-40 bg-gradient-to-r from-primary via-purple-600 to-pink-600">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how we can bring your {category.toLowerCase()} vision to life
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/#contact-us"
              className="inline-block px-8 py-4 bg-white text-primary rounded-full font-semibold text-lg shadow-2xl hover:shadow-white/50 transition-all"
            >
              Get Started Today
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer theme={theme} />
      
      {/* Custom cursor */}
      <div ref={outlineRef} className="fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999]" style={{transition: 'transform 0.1s ease-out'}}></div>
      <div ref={dotRef} className="fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999]" style={{transition: 'transform 0.1s ease-out'}}></div>
    </div>
  );
};

export default CategoryPage;

