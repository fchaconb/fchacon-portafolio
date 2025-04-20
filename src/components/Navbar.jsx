import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";

const aboutSections = [
  {
    name: "Work Experience and Education",
    href: "#about",
  },
  {
    name: "Certifications",
    href: "#certifications",
  },
  {
    name: "Technical and Soft Skills",
    href: "#skills",
  },
  {
    name: "Download CV",
    href: "#cv",
  },
];

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const [isAboutOpen, setIsAboutOpen] = useState(false);

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
            <PopoverGroup className="hidden md:flex items-center space-x-8 font-semibold">
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
              <Popover className="relative">
                <PopoverButton
                  className="flex items-center gap-x-1 text-[#372F30] hover:text-[#15616D] transition-colors"
                  onClick={() => setIsAboutOpen((prev) => !prev)}
                >
                  About
                  {isAboutOpen ? (
                    <ChevronUpIcon className="w-5 h-5 text-[#372F30]" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5 text-[#372F30]" />
                  )}
                </PopoverButton>

                <PopoverPanel className="absolute top-full left-1/2 z-10 mt-3 w-72 -translate-x-[58%] transform rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="px-3 py-2">
                    {aboutSections.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-4 rounded-lg px-3 py-2 text-sm hover:bg-[#6991ac]/40"
                      >
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </PopoverPanel>
              </Popover>
              <a
                href="#contact"
                className="text-[#372F30] hover:text-[#15616D] transition-colors"
              >
                Contact
              </a>
            </PopoverGroup>
          </div>
        </div>
      </div>
    </nav>
  );
};
