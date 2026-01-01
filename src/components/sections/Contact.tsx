import { useState } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import ContactForm from "../ContactForm";

export default function Contact() {
  const ref = useScrollAnimation();
  const [isFormOpen, setIsFormOpen] = useState(false);

  const links = [
    { label: "GitHub", href: "https://github.com/ssjabid", icon: "→" },
    { label: "LinkedIn", href: "https://linkedin.com/in/abidrakha", icon: "→" },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 md:py-24 px-6 relative z-10 border-t border-white/10"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-light tracking-widest mb-6 md:mb-8 animate-fade-in-up">
          Let's Connect
        </h2>

        <p className="text-gray-300 font-light text-sm md:text-base mb-12 md:mb-16 tracking-wider max-w-2xl mx-auto animate-fade-in-up delay-100">
          Always interested in discussing observability, AI, or finance. Reach
          out.
        </p>

        <div className="flex justify-center gap-6 md:gap-8 flex-wrap animate-fade-in-up delay-200">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-sm md:text-base font-light tracking-wider hover:text-gray-300 transition-colors duration-300 border-b border-transparent hover:border-gray-400"
            >
              {link.label}
              <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300">
                {link.icon}
              </span>
            </a>
          ))}

          <button
            onClick={() => setIsFormOpen(true)}
            className="group text-sm md:text-base font-light tracking-wider hover:text-gray-300 transition-colors duration-300 border-b border-transparent hover:border-gray-400"
          >
            Email
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </button>
        </div>

        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-white/10 animate-fade-in-up delay-300">
          <p className="text-sm md:text-base text-gray-400 font-light tracking-widest">
            © 2025 ABID RAKHA
          </p>
        </div>
      </div>

      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
}
