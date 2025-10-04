import { useEffect } from "react";
import assets from "../assets/assets";

const ThemeToggleBtn = ({ theme, setTheme }) => {
  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    // Only set theme if it's not already in localStorage
    const storedTheme = localStorage.getItem('theme');
    if (!storedTheme) {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      toggleTheme(prefersDarkMode ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <button>
      {theme === 'dark' ? (
        <img
          onClick={() => toggleTheme('light')}
          src={assets.sun_icon}
          className="size-8.5 p-1.5 border border-gray-500 rounded-full"
          alt="Toggle Sun Icon"
        />
      ) : (
        <img
          onClick={() => toggleTheme('dark')}
          src={assets.moon_icon}
          className="size-8.5 p-1.5 border border-gray-500 rounded-full"
          alt="Toggle Moon Icon"
        />
      )}
    </button>
  );
};

export default ThemeToggleBtn;
