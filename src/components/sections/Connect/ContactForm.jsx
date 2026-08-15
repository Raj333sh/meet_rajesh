import { useState } from "react";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio enquiry from ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href =
      `mailto:raj333sh@gmail.com?subject=${subject}&body=${body}`;
  };

  const inputClass = `
    w-full
    rounded-md
    border border-white/10
    bg-[#050B14]/80
    px-3
    py-2.5
    text-[15px]
    text-white
    outline-none
    placeholder:text-white/35
    transition
    focus:border-cyan-400/50
    focus:bg-[#07111d]
  `;

  return (
    <form
      onSubmit={handleSubmit}
      className="
        rounded-xl
        border border-white/10
        bg-[#08121E]/60
        p-5
        sm:p-6
        backdrop-blur-xl
      "
    >
      <div className="space-y-3">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className={inputClass}
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className={inputClass}
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows={4}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="
          mt-3
          inline-flex
          shrink-0
          items-center
          justify-center
          gap-2
          rounded-md
          bg-cyan-400

          min-h-[44px]
          px-7
          py-3

          sm:min-h-[46px]
          sm:px-8
          sm:py-3.5

          md:min-h-[48px]
          md:px-9
          md:py-4

          lg:min-h-[50px]
          lg:px-10
          lg:py-4

          xl:px-11
          xl:py-4.5

          text-[15px]
          font-semibold
          leading-none
          text-[#04101A]
          transition-all
          duration-300
          hover:bg-cyan-300
          hover:shadow-[0_0_25px_rgba(40,215,255,0.25)]
        "
      >
        Send Message
        <Send size={13} />
      </button>
    </form>
  );
};

export default ContactForm;