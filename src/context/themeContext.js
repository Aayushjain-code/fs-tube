import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const localStorageTheme = localStorage.getItem("data-theme");
  const [theme, setTheme] = useState(localStorageTheme ?? "light");

  const toggleLightDarkTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    // document.documentElement.setAttribute("data-theme", theme);

    switch (theme) {
      case "light":
        document.body.classList.add("active");
        break;
      case "dark":
      default:
        document.body.classList.remove("active");
        break;
    }
    localStorage.setItem("data-theme", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleLightDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => useContext(ThemeContext);

export { useThemeContext, ThemeProvider };
