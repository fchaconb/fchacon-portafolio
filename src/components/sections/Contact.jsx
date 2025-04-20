import { useState } from "react";
import { ShowOnScroll } from "../ShowOnScroll";
import emailjs from "emailjs-com";
import { useLanguage } from "../LanguageContext";
import github from "../../assets/github-mark.svg";
import linkedin from "../../assets/linkedin.svg";
import whatsapp from "../../assets/whatsapp.svg";

export const Contact = () => {
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Something went wrong. Please try again!"));
  };
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <ShowOnScroll>
        <div className="px-4 w-150">
          <h2 className="text-center text-4xl font-bold mb-8 bg-gradient-to-r from-[#15616D] to-[#6991ac] bg-clip-text text-transparent">
            {language === "en" ? "Social Media" : "Redes Sociales"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pb-15">
            <div className="flex flex-col justify-center items-center text-center p-5 rounded-xl border-[#372F30]/30 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">GitHub</h3>
              <a href="https://github.com/fchaconb" target="_blank">
                <img
                  src={github}
                  alt="Github logo"
                  className="items-center justify-center w-20 h-20"
                />
              </a>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-5 rounded-xl border-[#372F30]/30 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/fabian-chacon-brenes126/"
                target="_blank"
              >
                <img
                  src={linkedin}
                  alt="LinkedIn logo"
                  className="items-center justify-center w-20 h-20"
                />
              </a>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-5 rounded-xl border-[#372F30]/30 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">WhatsApp</h3>
              <a href="https://wa.me/50689097590" target="_blank">
                <img
                  src={whatsapp}
                  alt="WhatsApp logo"
                  className="items-center justify-center w-20 h-20"
                />
              </a>
            </div>
          </div>
          <h2 className="text-center text-4xl font-bold mb-8 bg-gradient-to-r from-[#15616D] to-[#6991ac] bg-clip-text text-transparent">
            {language === "en" ? "Get in Touch!" : "¡Ponte en contacto!"}
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <label htmlFor="name" className="font-medium">
                {language === "en" ? "Your name:" : "Tu nombre:"}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full border border-[#15616D] rounded px-4 py-3 transition focus:outline-none focus:border-[#372F30] focus:bg-[#6991ac]/10 "
                placeholder="John Doe"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              ></input>
            </div>

            <div className="relative">
              <label htmlFor="email" className="font-medium">
                {language === "en" ? "Your email:" : "Tu correo:"}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full border border-[#15616D] rounded px-4 py-3 transition focus:outline-none focus:border-[#372F30] focus:bg-[#6991ac]/10 "
                placeholder="jdoe@email.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              ></input>
            </div>

            <div className="relative">
              <label htmlFor="message" className="font-medium">
                {language === "en"
                  ? "Write your message:"
                  : "Escribe tu mensaje:"}
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                rows={5}
                className="w-full border border-[#15616D] rounded px-4 py-3 transition focus:outline-none focus:border-[#372F30] focus:bg-[#6991ac]/10 "
                placeholder={
                  language === "en" ? "Your message:" : "Tu mensaje:"
                }
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#15616D] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_#6991ac]"
            >
              {language === "en" ? "Send Message" : "Enviar Mensaje"}
            </button>
          </form>
        </div>
      </ShowOnScroll>
    </section>
  );
};
