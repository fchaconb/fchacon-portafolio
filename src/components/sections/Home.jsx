import { useLanguage } from "../LanguageContext";

export const Home = () => {
  const { language } = useLanguage();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#15616D] to-[#6991ac] bg-clip-text text-transparent leading-right">
          {language === "en"
            ? "Hi! I'm Fabian Chacon"
            : "¡Hola! Soy Fabian Chacon"}
        </h1>
        <p className="text-black text-lg mb-8 max-w-xl mx-auto">
          {language === "en"
            ? "Software developer with experience in security and system administration. Specialized in bux fixing, code optimization and user support to ensure stability and efficiency."
            : "Desarrollador de software con experiencia en seguridad y mantenimiento de sistemas. Especializado en la resolución de errores, optimización de código y atención a usuarios para garantizar estabilidad y eficiencia."}
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-[#15616D] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
            hover:-translate-y-0.5 hover:shadow-[0_0_15px_#6991ac]"
          >
            {language === "en" ? "View Projects" : "Ver Proyectos"}
          </a>
          <a
            href="#about"
            className="bg-[#15616D] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
            hover:-translate-y-0.5 hover:shadow-[0_0_15px_#6991ac]"
          >
            {language === "en" ? "About Me" : "Sobre Mí"}
          </a>
          <a
            href="#contact"
            className="bg-[#15616D] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
            hover:-translate-y-0.5 hover:shadow-[0_0_15px_#6991ac]"
          >
            {language === "en" ? "Contact Me" : "Contáctame"}
          </a>
        </div>
      </div>
    </section>
  );
};
