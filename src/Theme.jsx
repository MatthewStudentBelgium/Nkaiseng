import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import "./Theme.css";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // On component mount, check if the body already has dark mode
  useEffect(() => {
    const isDark = document.body.classList.contains("dark-mode");
    setDarkMode(isDark);
  }, []);

  // Handle toggle click
  const handleToggle = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.classList.toggle("dark-mode", newMode);
  };

  return (
    <button className="toggle" onClick={handleToggle}>
      {darkMode ? <Sun size={22} /> : <Moon size={22} />}
    </button>
  );
};

export default ThemeToggle;

