import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ShowOnScroll } from "../ShowOnScroll";
import { useLanguage } from "../LanguageContext";
import cvEnglish from "../../assets/cvs/cvEnglish.pdf";
import cvSpanish from "../../assets/cvs/cvSpanish.pdf";

export const About = () => {
  const { language } = useLanguage();

  const techSkills = [
    "Java",
    "JavaScript",
    "C#",
    "React",
    "Node.js",
    "TailwindCSS",
    "AWS",
    "Azure",
    "Docker",
    "Jenkins",
    "Linux",
    "MongoDB",
    "PL/SQL",
  ];

  const softSkills = {
    en: [
      "Communication",
      "Problem-solving",
      "Empathy",
      "Teamwork",
      "Adaptability",
      "Time Management",
      "Attention to Detail",
      "Stress Management",
    ],
    es: [
      "Comunicación",
      "Resolución de problemas",
      "Empatía",
      "Trabajo en equipo",
      "Adaptabilidad",
      "Gestión del tiempo",
      "Atención al detalle",
      "Manejo del estrés",
    ],
  };

  const cvDownload = () => {
    const pdfUrl = language === "en" ? cvEnglish : cvSpanish;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV Fabián Chacón.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="minh-h-screen flex items-center justify-center py-20"
    >
      <ShowOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-center text-4xl font-bold mb-8 bg-gradient-to-r from-[#15616D] to-[#6991ac] bg-clip-text text-transparent">
            {language === "en" ? "About Me" : "Sobre Mí"}
          </h2>

          <section
            id="experience-education"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
          >
            <div className="p-5 rounded-xl border-[#372F30]/30 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                {language === "en" ? "Work Experience" : "Experiencia Laboral"}
              </h3>
              <div className="pb-4">
                <h4 className="font-semibold">
                  {language === "en"
                    ? "Qradar Product Engineer (2024 – Present)"
                    : "Ingeniero de Producto Qradar (2024 – Presente)"}
                </h4>
                <p>
                  {language === "en"
                    ? "Assist Support Engineers and clients in critical cases, identify and raise defects with the development team for resolution. Develop, commit, and release interim fixes for public use."
                    : "Asistir a ingenieros de soporte y clientes en casos críticos, identificar y reportar defectos al equipo de desarrollo para su resolución. Desarrollar y liberar nuevas versiones del producto para uso público."}
                </p>
              </div>
              <div className="pb-4">
                <h4 className="font-semibold">
                  {language === "en"
                    ? "Qradar L2 Support Engineer (2021 – 2024)"
                    : "Ingeniero de Soporte L2 Qradar (2021 – 2024)"}
                </h4>
                <p>
                  {language === "en"
                    ? "Troubleshoot Qradar issues, handle customer tickets, meetings, and knowledge sharing."
                    : "Resolver problemas de Qradar, gestionar tickets de clientes, reuniones y compartir conocimientos."}
                </p>
              </div>
              <div className="pb-4">
                <h4 className="font-semibold">
                  {language === "en"
                    ? "Splunk Tech Support Engineer (2020 – 2021)"
                    : "Ingeniero de Soporte Técnico Splunk (2020 – 2021)"}
                </h4>
                <p>
                  {language === "en"
                    ? "Design, build, support, and maintain Splunk infrastructure across Linux and Windows platforms."
                    : "Diseñar, construir, soportar y mantener la infraestructura de Splunk en plataformas Linux y Windows."}
                </p>
              </div>
              <div>
                <h4 className="font-semibold">
                  {language === "en"
                    ? "Collaboration Support Agent (2019 – 2020)"
                    : "Agente de Soporte de Colaboración (2019 – 2020)"}
                </h4>
                <p>
                  {language === "en"
                    ? "Support Cisco users across various collaboration tools (Telepresence, Webex, Jabber, etc)."
                    : "Soporte a usuarios de Cisco en diversas herramientas de colaboración (Telepresence, Webex, Jabber, etc)."}
                </p>
              </div>
            </div>
            <div className="p-5 rounded-xl border-[#372F30]/30 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                {language === "en" ? "Education" : "Educación"}
              </h3>
              <div className="pb-4">
                <h4 className="font-semibold">
                  {language === "en"
                    ? "Cenfotec University "
                    : "Universidad Cenfotec "}{" "}
                  (2022 – Present)
                </h4>
                <p>
                  {language === "en"
                    ? "Bachelor's degree in Software Development."
                    : "Bachillerato en Desarrollo de Software."}
                </p>
              </div>
              <div className="pb-8">
                <h4 className="font-semibold">
                  {language === "en"
                    ? "Don Bosco Technical High School (2015 – 2018)"
                    : "Colegio Técnico Don Bosco (2015 – 2018)"}
                </h4>
                <p>
                  {language === "en"
                    ? "Electromechanics High School Level Technician."
                    : "Técnico Medio en Electromecánica."}
                </p>
              </div>
              <h3 className="text-xl font-bold mb-4">
                {language === "en" ? "Courses" : "Cursos"}
              </h3>
              <div>
                <h4 className="font-semibold">
                  {language === "en"
                    ? "Docker Administration"
                    : "Administración de Docker"}
                  (2024)
                </h4>
                <p>
                  {language === "en"
                    ? "Cenfotec University "
                    : "Universidad Cenfotec "}
                  (
                  <span>
                    <a
                      href="https://www.acreditta.com/credential/30976387-16d1-45c2-b3b2-07fdbcf89d0a?utm_source=copy&resource_type=badge&resource=30976387-16d1-45c2-b3b2-07fdbcf89d0a"
                      target="_blank"
                      className="underline hover:font-bold"
                    >
                      {language === "en" ? "Verify" : "Verificar"}
                    </a>
                  </span>
                  )
                </p>
              </div>
            </div>
          </section>

          <section
            id="certifications"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 rounded-xl p-8 border-[#372F30]/30 border hover:-translate-y-1 transition-all"
          >
            <div>
              <h3 className="text-xl font-bold mb-4">
                {language === "en" ? "Certifications" : "Certificaciones"}
              </h3>
              <div className="pb-4">
                <h4 className="font-semibold">
                  Red Had Certified System Administrator (2022)
                </h4>
                <p>
                  {language === "en" ? "Issued by" : "Emitida por"} Red Hat. (
                  <span>
                    <a
                      href="https://www.credly.com/badges/542de772-65b0-4a1d-8155-e4e683ecf793"
                      target="_blank"
                      className="underline hover:font-bold"
                    >
                      {language === "en" ? "Verify" : "Verificar"}
                    </a>
                  </span>
                  )
                </p>
              </div>
              <div className="pb-4">
                <h4 className="font-semibold">ITILv4 Foundation (2020)</h4>
                <p>{language === "en" ? "Issued by" : "Emitida por"} Axelos.</p>
              </div>
              <div>
                <h4 className="font-semibold">
                  Linux Essentials 010-160 (2019)
                </h4>
                <p>
                  {language === "en" ? "Issued by" : "Emitida por"} Linux
                  Professional Institute. (
                  <span>
                    <a
                      href="https://cs.lpi.org/caf/Xamman/certification/verify/LPI000437262/fxcgv5u2lt"
                      target="_blank"
                      className="underline hover:font-bold"
                    >
                      {language === "en" ? "Verify" : "Verificar"}
                    </a>
                  </span>
                  )
                </p>
              </div>
            </div>
            <div>
              <DotLottieReact
                src="https://lottie.host/7ef68adf-aac4-4b79-b1c9-be6565f3e27b/RZOeNUkSep.lottie"
                loop
                autoplay
              />
            </div>
          </section>

          <section
            id="skills"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
          >
            <div className="p-5 rounded-xl border-[#372F30]/30 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                {language === "en"
                  ? "Technical  Skills"
                  : "Habilidades Técnicas"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#6991ac]/20 py-1 px-3 rounded-full text-sm hover:bg-[#6991ac]/40 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-5 rounded-xl border-[#372F30]/30 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                {language === "en" ? "Soft Skills" : "Habilidades Blandas"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills[language].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#6991ac]/20 py-1 px-3 rounded-full text-sm hover:bg-[#6991ac]/40 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section id="cv" className="flex justify-center space-x-4 mt-8">
            <button
              onClick={cvDownload}
              className="w-full bg-[#15616D] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
            hover:-translate-y-0.5 hover:shadow-[0_0_15px_#6991ac]"
            >
              {language === "en" ? "Download CV" : "Descargar CV"}
            </button>
          </section>
        </div>
      </ShowOnScroll>
    </section>
  );
};
