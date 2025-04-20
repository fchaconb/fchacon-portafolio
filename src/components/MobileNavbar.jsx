import { useEffect } from "react";
import { useLanguage } from "../components/LanguageContext";

export const MobileNavbar = ({ menuOpen, setMenuOpen }) => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  return (
    <div
      className={`fixed top left-0 w-full bg-[#f6f6f4] z-40 flex flex-col items-center justify-center
                transition-all duration-300 ease-in-out
                ${
                  menuOpen
                    ? "h-screen opacity-100 pointer-events-auto"
                    : "h-0 opacity-0 pointer-events-none"
                }
                `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-4 right-6 text-[#15616D] text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>
      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-[#372F30] hover:text-[#15616D] my-4 transform transition-transform duration-300
                    ${
                      menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-100 translate-y-5"
                    }
          `}
      >
        {language === "en" ? "Home" : "Inicio"}
      </a>
      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-[#372F30] hover:text-[#15616D] my-4 transform transition-transform duration-300
          ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-100 translate-y-5"
          }
        `}
      >
        {language === "en" ? "Projects" : "Proyectos"}
      </a>
      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-[#372F30] hover:text-[#15616D] my-4 transform transition-transform duration-300
          ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-100 translate-y-5"
          }
        `}
      >
        {language === "en" ? "About Me" : "Sobre Mí"}
      </a>
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-[#372F30] hover:text-[#15616D] my-4 transform transition-transform duration-300
          ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-100 translate-y-5"
          }
        `}
      >
        {language === "en" ? "Contact" : "Contacto"}
      </a>
      <button
        onClick={() => {
          setMenuOpen(false);
          toggleLanguage();
        }}
        className={`text-2xl font-semibold text-[#372F30] hover:text-[#15616D] my-4 transform transition-transform duration-300
          ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-100 translate-y-5"
          }
        `}
      >
        {language === "en" ? "ES" : "EN"}
      </button>
    </div>
  );
};
