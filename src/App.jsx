import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Stacks from "./pages/Stacks";
import StackDetail from "./pages/StackDetail";
import CategoryPage from "./pages/CategoryPage";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const [theme, setTheme] = useState('light');

  // Initialize theme from localStorage or prefers-color-scheme
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
        <Route path="/projects" element={<Projects theme={theme} setTheme={setTheme} />} />
        <Route path="/stacks" element={<Stacks theme={theme} setTheme={setTheme} />} />
        <Route path="/stacks/:stackId" element={<StackDetail theme={theme} setTheme={setTheme} />} />
        <Route path="/category/:category" element={<CategoryPage theme={theme} setTheme={setTheme} />} />
      </Routes>
    </Router>
  );
};

export default App;