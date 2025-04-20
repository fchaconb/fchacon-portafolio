import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileNavbar } from "./components/MobileNavbar";
import { Home } from "./components/sections/Home";
import { Projects } from "./components/sections/Projects";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import "./App.css";
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-[#f6f6f4] text-black`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileNavbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <Projects />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;
