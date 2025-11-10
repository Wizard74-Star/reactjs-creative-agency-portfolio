import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import assets from '../assets/assets';
import ThemeToggleBtn from './ThemeToggleBtn';
import { projectCategories } from '../data/projects';
import { encodeCategoryForURL, decodeCategoryFromURL } from '../utils/categoryUrl';

const Navbar = ({theme, setTheme}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isProjectsPage = location.pathname === '/projects' || location.pathname.startsWith('/projects');
  const isCategoryPage = location.pathname.startsWith('/category/');
  const isStacksPage = location.pathname === '/stacks' || location.pathname.startsWith('/stacks/');
  // Properly decode category, handling forward slashes in category names
  const currentCategory = isCategoryPage 
    ? decodeCategoryFromURL(location.pathname.split('/category/')[1]) 
    : null;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  // Close dropdown when route changes
  useEffect(() => {
    setDropdownOpen(false);
    setSidebarOpen(false);
  }, [location.pathname]);

  // Check if a category is active
  const isCategoryActive = (category) => {
    return currentCategory === category;
  };

  return (
    <motion.div 
      initial={{opacity: 0, y: -50}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.6, ease: 'easeOut'}}
      className="flex justify-between items-center px-4 sm:px-12 lg:px-24 py-4 sticky top-0 z-50 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70 border-b border-gray-200/50 dark:border-gray-800/50"
    >
      <Link to="/" onClick={() => setSidebarOpen(false)}>
        <img src={theme === 'dark' ? assets.logo_dark : assets.logo} className='w-32 sm:w-40' alt="Logo" />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex items-center gap-6 text-gray-700 dark:text-white text-sm">
        <Link 
          to="/" 
          className={`hover:border-b-2 border-primary transition-all ${isHomePage ? 'border-b-2 border-primary text-primary font-semibold' : ''}`}
        >
          Home
        </Link>
        
        {/* Our Work Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <div
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            className="relative"
          >
            <button
              type="button"
              aria-label="Our Work menu"
              aria-expanded={dropdownOpen}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`hover:border-b-2 border-primary transition-all flex items-center gap-1 ${
                isProjectsPage || isCategoryPage 
                  ? 'border-b-2 border-primary text-primary font-semibold' 
                  : ''
              }`}
            >
              Our Work
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 z-[100] overflow-hidden"
                >
                <Link
                  to="/projects"
                  className={`block px-4 py-3 transition-all ${
                    isProjectsPage && !isCategoryPage
                      ? 'bg-primary text-white font-semibold'
                      : 'hover:bg-primary hover:text-white text-gray-700 dark:text-gray-300'
                  }`}
                  onClick={() => setDropdownOpen(false)}
                >
                  <div className="flex items-center justify-between">
                    <span>All Projects</span>
                    {isProjectsPage && !isCategoryPage && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </Link>
                <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
                {projectCategories.slice(1).map((category) => {
                  const isActive = isCategoryActive(category);
                  return (
                    <Link
                      key={category}
                      to={`/category/${encodeCategoryForURL(category)}`}
                      className={`block px-4 py-3 transition-all ${
                        isActive
                          ? 'bg-primary text-white font-semibold'
                          : 'hover:bg-primary hover:text-white text-gray-700 dark:text-gray-300'
                      }`}
                      onClick={() => setDropdownOpen(false)}
                    >
                      <div className="flex items-center justify-between">
                        <span>{category}</span>
                        {isActive && (
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </Link>
                  );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <Link 
          to="/stacks" 
          className={`hover:border-b-2 border-primary transition-all ${isStacksPage ? 'border-b-2 border-primary text-primary font-semibold' : ''}`}
        >
          Technologies
        </Link>

        {isHomePage ? (
          <a href="#services" className='hover:border-b-2 border-primary transition-all'>
            Services
          </a>
        ) : (
          <Link to="/#services" className='hover:border-b-2 border-primary transition-all'>
            Services
          </Link>
        )}

        {isHomePage ? (
          <a href="#contact-us" className='hover:border-b-2 border-primary transition-all'>
            Contact
          </a>
        ) : (
          <Link to="/#contact-us" className='hover:border-b-2 border-primary transition-all'>
            Contact
          </Link>
        )}
      </nav>

      {/* Mobile Navigation */}
      <div className={`sm:hidden fixed inset-0 z-50 transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="absolute inset-0 bg-black/50" onClick={() => setSidebarOpen(false)}></div>
        <div className="absolute right-0 top-0 bottom-0 w-64 bg-primary text-white p-6 overflow-y-auto">
          <button 
            type="button"
            aria-label="Close menu"
            onClick={() => setSidebarOpen(false)}
            className='absolute right-4 top-4 w-8 h-8 flex items-center justify-center'
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <nav className="flex flex-col gap-4 mt-12">
            <Link 
              to="/" 
              onClick={() => setSidebarOpen(false)}
              className={`text-lg font-semibold py-2 ${isHomePage ? 'border-b-2 border-white' : ''}`}
            >
              Home
            </Link>

            <div>
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`text-lg font-semibold py-2 flex items-center justify-between w-full ${
                  isProjectsPage || isCategoryPage ? 'border-b-2 border-white' : ''
                }`}
              >
                Our Work
                <svg 
                  className={`w-5 h-5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {dropdownOpen && (
                <div className="mt-2 pl-4 space-y-2">
                  <Link
                    to="/projects"
                    onClick={() => {
                      setSidebarOpen(false);
                      setDropdownOpen(false);
                    }}
                    className={`block py-2 text-sm ${isProjectsPage && !isCategoryPage ? 'font-semibold underline' : 'opacity-90'}`}
                  >
                    • All Projects
                  </Link>
                  {projectCategories.slice(1).map((category) => {
                    const isActive = isCategoryActive(category);
                    return (
                      <Link
                        key={category}
                        to={`/category/${encodeCategoryForURL(category)}`}
                        onClick={() => {
                          setSidebarOpen(false);
                          setDropdownOpen(false);
                        }}
                        className={`block py-2 text-sm ${isActive ? 'font-semibold underline' : 'opacity-90'}`}
                      >
                        • {category}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link 
              to="/stacks" 
              onClick={() => setSidebarOpen(false)}
              className={`text-lg font-semibold py-2 ${isStacksPage ? 'border-b-2 border-white' : ''}`}
            >
              Technologies
            </Link>

            {isHomePage ? (
              <a 
                href="#services" 
                onClick={() => setSidebarOpen(false)}
                className='text-lg font-semibold py-2'
              >
                Services
              </a>
            ) : (
              <Link 
                to="/#services" 
                onClick={() => setSidebarOpen(false)}
                className='text-lg font-semibold py-2'
              >
                Services
              </Link>
            )}

            {isHomePage ? (
              <a 
                href="#contact-us" 
                onClick={() => setSidebarOpen(false)}
                className='text-lg font-semibold py-2'
              >
                Contact
              </a>
            ) : (
              <Link 
                to="/#contact-us" 
                onClick={() => setSidebarOpen(false)}
                className='text-lg font-semibold py-2'
              >
                Contact
              </Link>
            )}
          </nav>
        </div>
      </div>

      <div className='flex items-center gap-2 sm:gap-4'>
        <ThemeToggleBtn theme={theme} setTheme={setTheme}/>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setSidebarOpen(true)}
          className='w-8 h-8 sm:hidden flex items-center justify-center'
        >
          <img src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} alt="Nav Icon" className='w-full h-full' />
        </button>

        {isHomePage ? (
          <a 
            href="#contact-us" 
            className='hidden sm:flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all shadow-lg'
          >
            Contact <img src={assets.arrow_icon} width={14} alt="icon" />
          </a>
        ) : (
          <Link 
            to="/" 
            className='hidden sm:flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all shadow-lg'
          >
            Home <img src={assets.arrow_icon} width={14} alt="icon" />
          </Link>
        )}
      </div>
    </motion.div>
  )
}

export default Navbar
