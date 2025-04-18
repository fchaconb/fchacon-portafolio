import { useEffect } from "react";
import logo from "../assets/logo.svg";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[#f6f6f4] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="w-14 h-10">
            <img src={logo} alt="Logo Fabian Chacon" />
          </a>
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-[#15616D] font-bold"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8 font-semibold">
            <a
              href="#home"
              className="text-[#372F30] hover:text-[#15616D] transition-colors"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-[#372F30] hover:text-[#15616D] transition-colors"
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-[#372F30] hover:text-[#15616D] transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-[#372F30] hover:text-[#15616D] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
