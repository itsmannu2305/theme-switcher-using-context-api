import React, { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("dark", "light");
    html.classList.add(themeMode);
  }, [themeMode]);

  const themeModeHandle = () => {
    if (themeMode === "dark") {
      setThemeMode("light");
    } else {
      setThemeMode("dark");
    }
  };

  return (
    <div>
      <ThemeContext.Provider value={{ themeMode, themeModeHandle }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};

export default ThemeProvider;
