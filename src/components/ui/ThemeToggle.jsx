import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.className = dark ? "dark" : "light";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      className="btn btn-sm btn-outline-primary"
      onClick={() => setDark(!dark)}
    >
      {dark ? "☀ Light" : "🌙 Dark"}
    </button>
  );
}