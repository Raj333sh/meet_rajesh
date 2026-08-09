import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import SocialLinks from "./SocialLinks";

const Connect = () => {
  return (
    <section
      id="contact"
      className="
        relative
        border-t border-white/10
        site-section
      "
    >
      <div
        className="
          mx-auto
          w-full
          site-container
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-8
            lg:grid-cols-[1.05fr_0.9fr_1.25fr_0.75fr]
            lg:gap-6
            xl:gap-8
          "
        >
          {/* LEFT INTRO */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-start"
          >
            <p
              className="
                text-[15px]
                uppercase
                tracking-[0.2em]
                text-cyan-400
              "
            >
              Let's Connect
            </p>

            <h2
              className="
                mt-3
                max-w-[260px]
                text-[26px]
                font-semibold
                leading-tight
                text-white
                
              "
            >
              Have a Project
              <br />
              or Opportunity?
            </h2>

            <p
              className="
                mt-5
                max-w-[280px]
                text-[15px]
                leading-[1.55]
                text-slate-400
              "
            >
              I'm always open to discussing new projects,
              collaborations or opportunities.
            </p>

            <a
              href="#contact-form"
              className="
                mt-5
                inline-flex
                w-fit
                items-center
                rounded-md
                bg-cyan-400
                px-4
                py-2
                text-[15px]
                font-semibold
                text-[#04101A]
                transition
                hover:bg-cyan-300
                hover:shadow-[0_0_25px_rgba(40,215,255,0.25)]
              "
            >
              Send a Message
            </a>
          </motion.div>

          {/* CONTACT INFORMATION */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ContactInfo />
          </motion.div>

          {/* FORM */}
          <motion.div
            id="contact-form"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>

          {/* SOCIALS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <SocialLinks />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Connect;