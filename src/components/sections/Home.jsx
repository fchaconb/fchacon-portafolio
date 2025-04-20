export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#15616D] to-[#6991ac] bg-clip-text text-transparent leading-right">
          Hi! I'm Fabian Chacon
        </h1>
        <p className="text-black text-lg mb-8 max-w-lg mx-auto">
          Software developer with experience in security and system
          administration. Specialized in bux fixing, code optimization and user
          support to ensure stability and efficiency.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-[#15616D] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
            hover:-translate-y-0.5 hover:shadow-[0_0_15px_#6991ac]"
          >
            View Projects
          </a>
          <a
            href="#about"
            className="bg-[#15616D] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
            hover:-translate-y-0.5 hover:shadow-[0_0_15px_#6991ac]"
          >
            About Me
          </a>
          <a
            href="#contact"
            className="bg-[#15616D] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
            hover:-translate-y-0.5 hover:shadow-[0_0_15px_#6991ac]"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
