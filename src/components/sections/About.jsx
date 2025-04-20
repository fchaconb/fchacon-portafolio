import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import cvEnglish from "../../../public/cvEnglish.pdf";

export const About = () => {
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

  const softSkills = [
    "Communication",
    "Problem-solving",
    "Empathy",
    "Teamwork",
    "Adaptability",
    "Time Management",
    "Attention to Detail",
    "Stress Management",
  ];

  const cvDownload = () => {
    const pdfUrl = cvEnglish;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV Fabián Chacón English.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="minh-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-8 bg-gradient-to-r from-[#15616D] to-[#6991ac] bg-clip-text text-transparent">
          About Me
        </h2>

        <section
          id="experience-education"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
        >
          <div className="p-5 rounded-xl border-[#372F30]/30 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Work Experience</h3>
            <div className="pb-4">
              <h4 className="font-semibold">
                Qradar Product Engineer (2024 – Present)
              </h4>
              <p>
                Assist Support Engineers and clients in critical cases, identify
                and raise defects with the development team for resolution.
                Develop, commit, and release interim fixes for public use.
              </p>
            </div>
            <div className="pb-4">
              <h4 className="font-semibold">
                Qradar L2 Support Engineer (2021 – 2024)
              </h4>
              <p>
                Troubleshoot Qradar issues, handle customer tickets, meetings,
                and knowledge sharing.
              </p>
            </div>
            <div className="pb-4">
              <h4 className="font-semibold">
                Splunk Tech Support Engineer (2020 – 2021)
              </h4>
              <p>
                Design, build, support, and maintain Splunk infrastructure
                across Linux and Windows platforms.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">
                Collaboration Support Agent (2019 – 2020)
              </h4>
              <p>
                Support Cisco users across various collaboration tools
                (Telepresence, Webex, Jabber, etc).
              </p>
            </div>
          </div>
          <div className="p-5 rounded-xl border-[#372F30]/30 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <div className="pb-4">
              <h4 className="font-semibold">
                Cenfotec University (2022 – Present)
              </h4>
              <p>Bachelor's degree in Software Development.</p>
            </div>
            <div className="pb-8">
              <h4 className="font-semibold">
                Don Bosco Technical High School (2015 – 2018)
              </h4>
              <p>Electromechanics High School Level Technician.</p>
            </div>
            <h3 className="text-xl font-bold mb-4">Courses</h3>
            <div>
              <h4 className="font-semibold">Docker Administration (2024)</h4>
              <p>
                Cenfotec University (
                <span>
                  <a
                    href="https://www.acreditta.com/credential/30976387-16d1-45c2-b3b2-07fdbcf89d0a?utm_source=copy&resource_type=badge&resource=30976387-16d1-45c2-b3b2-07fdbcf89d0a"
                    target="_blank"
                    className="underline hover:font-bold"
                  >
                    Verify
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
            <h3 className="text-xl font-bold mb-4">Certifications</h3>
            <div className="pb-4">
              <h4 className="font-semibold">
                Red Had Certified System Administrator (2022)
              </h4>
              <p>
                Issued by Red Hat. (
                <span>
                  <a
                    href="https://www.credly.com/badges/542de772-65b0-4a1d-8155-e4e683ecf793"
                    target="_blank"
                    className="underline hover:font-bold"
                  >
                    Verify
                  </a>
                </span>
                )
              </p>
            </div>
            <div className="pb-4">
              <h4 className="font-semibold">ITILv4 Foundation (2020)</h4>
              <p>Issued by Axelos.</p>
            </div>
            <div>
              <h4 className="font-semibold">Linux Essentials 010-160 (2019)</h4>
              <p>
                Issued by Linux Professional Institute. (
                <span>
                  <a
                    href="https://cs.lpi.org/caf/Xamman/certification/verify/LPI000437262/fxcgv5u2lt"
                    target="_blank"
                    className="underline hover:font-bold"
                  >
                    Verify
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
            <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
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
            <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((tech, key) => (
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
            className="bg-[#15616D] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
            hover:-translate-y-0.5 hover:shadow-[0_0_15px_#6991ac]"
          >
            Download CV
          </button>
        </section>
      </div>
    </section>
  );
};
