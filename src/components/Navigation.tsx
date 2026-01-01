import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    if (saved) {
      setTheme(saved);
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);

      if (newTheme === "light") {
        document.documentElement.classList.add("light-mode");
      } else {
        document.documentElement.classList.remove("light-mode");
      }

      return newTheme;
    });
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  if (!isMounted) return null;

  return (
    <nav className="fixed top-0 w-full bg-black/95 border-b border-white/10 z-50 animate-fade-in-down transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-medium tracking-widest hover:opacity-70 transition-opacity duration-300"
        >
          ABID
        </a>

        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-light tracking-wider hover:text-gray-400 transition-colors duration-300 animate-fade-in-down"
              style={{ animationDelay: `${0.1 + idx * 0.1}s` }}
            >
              {link.label}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 border border-white/20 hover:border-white/50 rounded transition-all duration-300 flex items-center justify-center"
            title="Toggle dark/light mode"
          >
            {theme === "dark" ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
                <path
                  d="M12 2v4m0 12v4M4.22 4.22l2.83 2.83m4.24 4.24l2.83 2.83M2 12h4m12 0h4m-4.22-7.78l2.83 2.83m-4.24 4.24l2.83 2.83M4.22 19.78l2.83-2.83m4.24-4.24l2.83-2.83"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 border border-white/20 hover:border-white/50 rounded transition-all duration-300 flex items-center justify-center"
          >
            {theme === "dark" ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
                <path
                  d="M12 2v4m0 12v4M4.22 4.22l2.83 2.83m4.24 4.24l2.83 2.83M2 12h4m12 0h4m-4.22-7.78l2.83 2.83m-4.24 4.24l2.83 2.83M4.22 19.78l2.83-2.83m4.24-4.24l2.83-2.83"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-6 h-6 flex flex-col justify-between"
          >
            <span
              className={`h-px w-full bg-current transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-current transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-current transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 px-6 py-4 space-y-4 animate-fade-in-up">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-sm font-light tracking-wider hover:text-gray-400 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
