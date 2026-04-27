import { useState, useEffect } from "react";
import AppRouter from "./routes/AppRouter";

export default function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return <AppRouter theme={theme} setTheme={setTheme} />;
}