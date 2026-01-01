import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function About() {
  const ref = useScrollAnimation();

  const coreStack = ["Splunk", "Python", "TypeScript", "React", "Node.js"];
  const focusAreas = [
    "LLMs",
    "Quantitative Finance",
    "Data Visualization",
    "System Design",
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-16 md:py-24 px-6 relative z-10 border-t border-white/10"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-light tracking-widest mb-8 md:mb-12 animate-fade-in-up">
          About
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-5 text-gray-300 font-light leading-relaxed animate-fade-in-up delay-100">
            <p className="text-sm md:text-base">
              Observability Engineer exploring the intersection of data,
              infrastructure, and AI. 5+ years optimizing large-scale monitoring
              systems. Currently diving deep into quantitative finance and LLMs.
            </p>
            <p className="text-sm md:text-base">
              Vibe coding projects exploring generative AI, data visualization,
              and financial tech. Building in public, learning fast, shipping
              frequently. Master's in AI/Data Science.
            </p>
          </div>

          <div className="space-y-6 md:space-y-8 animate-fade-in-up delay-200">
            <div>
              <p className="text-white font-medium mb-3 md:mb-4 text-xs md:text-sm tracking-widest uppercase">
                Core Stack
              </p>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-3">
                {coreStack.map((tech, i) => (
                  <div
                    key={i}
                    className="border border-white/20 hover:border-white/50 bg-white/2 hover:bg-white/10 rounded px-3 py-2 md:px-4 md:py-3 transition-all duration-300 flex items-center justify-center text-center min-h-[50px] md:min-h-[60px]"
                  >
                    <span className="text-xs md:text-base text-gray-300 font-light tracking-wider">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-white font-medium mb-3 md:mb-4 text-xs md:text-sm tracking-widest uppercase">
                Focus Areas
              </p>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-3">
                {focusAreas.map((area, i) => (
                  <div
                    key={i}
                    className="border border-white/20 hover:border-white/50 bg-white/2 hover:bg-white/10 rounded px-3 py-2 md:px-4 md:py-3 transition-all duration-300 flex items-center justify-center text-center min-h-[50px] md:min-h-[60px]"
                  >
                    <span className="text-xs md:text-base text-gray-300 font-light tracking-wider leading-tight">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
