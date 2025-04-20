import { ShowOnScroll } from "../ShowOnScroll";
import {
  ArrowLongRightIcon,
  BriefcaseIcon,
  TruckIcon,
  TicketIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/16/solid";
import { useLanguage } from "../LanguageContext";

export const Projects = () => {
  const { language } = useLanguage();

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <ShowOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-center text-4xl font-bold mb-8 bg-gradient-to-r from-[#15616D] to-[#6991ac] bg-clip-text text-transparent">
            {language === "en" ? "Projects" : "Proyectos"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="group [perspective:1000px]">
              <div className="p-5 rounded-xl border-[#372F30]/30 border relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ">
                <div className="inset-0 [backface-visibility:hidden]">
                  <h3 className="text-xl font-bold mb-2">Contrátame Ya</h3>
                  <p className="mb-4">
                    {language === "en"
                      ? "A web platform that allows professionals to create profiles, search and apply for jobs, and connect with companies. Employers can create company profiles, post job listings, and manage applications."
                      : "Plataforma web donde los profesionales pueden crear su perfil, buscar y postularse a ofertas laborales, así como conectarse con empresas. A su vez, las empresas pueden crear su perfil, publicar vacantes y gestionar las postulaciones recibidas."}
                  </p>
                  <BriefcaseIcon className="w-10 h-10" />
                </div>
                <div className="absolute inset-0 h-full w-full p-5 rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col">
                    <h3 className="text-xl font-bold mb-2">
                      {language === "en" ? "Skills" : "Habilidades"}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {[
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "Express",
                        "Node.js",
                        "MongoDB",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="bg-[#6991ac]/20 py-1 px-3 rounded-full text-sm hover:bg-[#6991ac]/40 transition"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <a
                        href="https://github.com/fchaconb/ContratameYa-Website"
                        target="_blank"
                        className="text-[#15616D] hover:text-[#6991ac] transition-colors my-4 font-bold"
                      >
                        {language === "en" ? "View Project" : "Ver Proyecto"}
                        <ArrowLongRightIcon className="w-6 h-6 inline" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group [perspective:1000px]">
              <div className="p-5 rounded-xl border-[#372F30]/30 border relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ">
                <div className="inset-0 [backface-visibility:hidden]">
                  <h3 className="text-xl font-bold mb-2">Tránsito 360</h3>
                  <p className="mb-4">
                    {language === "en"
                      ? "A web application for managing car infractions. Officers can issue tickets, users can view and pay their fines, and administrators can generate reports to monitor and analyze ticket data."
                      : "Aplicación web para la gestión de infracciones de tránsito. Los oficiales pueden emitir multas, los usuarios pueden consultarlas y pagarlas, y los administradores pueden generar reportes para monitorear y analizar los datos de las infracciones."}
                  </p>
                  <TicketIcon className="w-10 h-10" />
                </div>
                <div className="absolute inset-0 h-full w-full p-5 rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col">
                    <h3 className="text-xl font-bold mb-2">
                      {language === "en" ? "Skills" : "Habilidades"}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {[
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "Node.js",
                        "React",
                        "C#",
                        "Docker",
                        ".NET",
                        "SQL Server",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="bg-[#6991ac]/20 py-1 px-3 rounded-full text-sm hover:bg-[#6991ac]/40 transition"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <a
                        href="https://github.com/fchaconb/transito-360"
                        target="_blank"
                        className="text-[#15616D] hover:text-[#6991ac] transition-colors my-4 font-bold"
                      >
                        {language === "en" ? "View Project" : "Ver Proyecto"}
                        <ArrowLongRightIcon className="w-6 h-6 inline" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group [perspective:1000px]">
              <div className="p-5 rounded-xl border-[#372F30]/30 border relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ">
                <div className="inset-0 [backface-visibility:hidden]">
                  <h3 className="text-xl font-bold mb-2">Rum Rum</h3>
                  <p className="mb-4">
                    {language === "en"
                      ? "A car marketplace platform where users can create listings to sell their vehicles, including detailed information and images. Other users can browse, search, and explore available cars for sale."
                      : "Plataforma web de compra y venta de vehículos, donde los usuarios pueden crear publicaciones para vender sus autos, incluyendo información detallada e imágenes. Otros usuarios pueden explorar, buscar y revisar los autos disponibles para la venta."}
                  </p>
                  <TruckIcon className="w-10 h-10" />
                </div>
                <div className="absolute inset-0 h-full w-full p-5 rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col">
                    <h3 className="text-xl font-bold mb-2">
                      {language === "en" ? "Skills" : "Habilidades"}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {[
                        "React",
                        "Next.js",
                        "TailwindCSS",
                        "Express",
                        "TypeScript",
                        "Prisma ORM",
                        "Docker",
                        "Postgres",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="bg-[#6991ac]/20 py-1 px-3 rounded-full text-sm hover:bg-[#6991ac]/40 transition"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <a
                        href="https://github.com/fchaconb/rumrum"
                        target="_blank"
                        className="text-[#15616D] hover:text-[#6991ac] transition-colors my-4 font-bold"
                      >
                        {language === "en" ? "View Project" : "Ver Proyecto"}
                        <ArrowLongRightIcon className="w-6 h-6 inline" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group [perspective:1000px]">
              <div className="p-5 rounded-xl border-[#372F30]/30 border relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ">
                <div className="inset-0 [backface-visibility:hidden]">
                  <h3 className="text-xl font-bold mb-2">
                    {language === "en" ? "University" : "Universidad"}
                  </h3>
                  <p className="mb-4">
                    {language === "en"
                      ? "A university management system that allows the creation of careers, courses, and groups. Professors can be assigned to courses and groups, while students can enroll and access their academic information."
                      : "Sistema de gestión universitaria que permite la creación de carreras, cursos y grupos. Los profesores pueden ser asignados a cursos y grupos, mientras que los estudiantes pueden inscribirse y acceder a su información académica."}
                  </p>
                  <BuildingLibraryIcon className="w-10 h-10" />
                </div>
                <div className="absolute inset-0 h-full w-full p-5 rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col">
                    <h3 className="text-xl font-bold mb-2">
                      {language === "en" ? "Skills" : "Habilidades"}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {[
                        "Java",
                        "SpringBoot",
                        "HTML",
                        "CSS",
                        "Docker",
                        "MySQL",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="bg-[#6991ac]/20 py-1 px-3 rounded-full text-sm hover:bg-[#6991ac]/40 transition"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <a
                        href="https://github.com/fchaconb/proyecto-diseno-conceptual"
                        target="_blank"
                        className="text-[#15616D] hover:text-[#6991ac] transition-colors my-4 font-bold"
                      >
                        {language === "en" ? "View Project" : "Ver Proyecto"}
                        <ArrowLongRightIcon className="w-6 h-6 inline" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ShowOnScroll>
    </section>
  );
};
