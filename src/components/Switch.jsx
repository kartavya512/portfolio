import React, { useState } from "react";
import useDarkSide from "../Hook/useDarkside";
import darkMode from "../assets/darkMode.png"
import lightMode from "../assets/lightMode.png"



const Switch = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === "light"); 

  const toggleDarkMode = (checked) => {
    setTheme(checked ? "dark" : "light");
    setDarkSide(checked);
  };

  return (
    <label className="lg:relative lg:inline-block">
    <input
      type="checkbox"
      className="hidden"
      checked={darkSide}
      onChange={(e) => toggleDarkMode(e.target.checked)}
    
    />
    <img
      src={darkSide ? darkMode : lightMode}
      alt="Toggle Dark Mode"
      className="cursor-pointer h-8 rounded-full"
    />
  </label>
);
};
export default Switch;
