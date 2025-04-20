import { useState } from "react";
import { ShowOnScroll } from "../ShowOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
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
            Get in Touch!
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <label htmlFor="name" className="font-medium">
                Your name:
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
                Your email:
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
                Write your message:
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                rows={5}
                className="w-full border border-[#15616D] rounded px-4 py-3 transition focus:outline-none focus:border-[#372F30] focus:bg-[#6991ac]/10 "
                placeholder="Your Message"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#15616D] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_#6991ac]"
            >
              Send Message
            </button>
          </form>
        </div>
      </ShowOnScroll>
    </section>
  );
};
