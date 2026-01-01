import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function Experience() {
  const ref = useScrollAnimation();

  const experiences = [
    {
      role: "Senior Splunk Engineer",
      company: "Bank of England",
      period: "2020 - Present",
      highlights: [
        "Architecting observability solutions for critical banking infrastructure",
        "Optimizing Splunk environments handling millions of events daily",
        "Led disaster recovery and resilience strategies ensuring minimal downtime",
        "Integrated Splunk with Remedy automating alert management and incident response",
      ],
    },
    {
      role: "Splunk Consultant",
      company: "ECS Consulting (Lloyds Banking Group)",
      period: "2019 - 2020",
      highlights: [
        "Led migration of payment monitoring systems to Splunk ITSI",
        "Optimized complex queries reducing data processing by 10x",
        "Designed multi-site clustered environments handling 7+ TB daily",
        "Built demo systems showcasing Splunk ITSI for strategic pitches",
      ],
    },
  ];

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/AbidSplunkEngineerShortCV2024.pdf";
    link.download = "Abid_Rakha_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="py-16 md:py-24 px-6 relative z-10 border-t border-white/10"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-light tracking-widest animate-fade-in-up">
            Experience
          </h2>
          <button
            onClick={downloadCV}
            className="text-sm font-light tracking-wider border border-white/50 hover:border-white hover:bg-white/5 px-4 md:px-6 py-2 md:py-3 rounded transition-all duration-300 animate-fade-in-up delay-100"
          >
            <span className="hidden md:inline">Download CV</span>
            <span className="md:hidden">CV</span>
            <svg
              className="w-4 h-4 inline-block ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </button>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative flex gap-6 md:gap-8 animate-fade-in-up"
              style={{ animationDelay: `${(idx + 1) * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-white rounded-full mt-1.5 md:mt-3 relative z-10"></div>
                {idx < experiences.length - 1 && (
                  <div className="w-px h-32 md:h-40 bg-gradient-to-b from-white/20 to-transparent mt-4"></div>
                )}
              </div>

              {/* Content */}
              <div className="pb-4 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-base md:text-lg font-medium tracking-wider">
                      {exp.role}
                    </h3>
                    <p className="text-sm md:text-base text-gray-300 font-light tracking-wider">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-sm md:text-base text-gray-400 font-light tracking-wider whitespace-nowrap px-3 py-1 border border-transparent hover:border-white/30 hover:bg-white/5 rounded transition-all duration-300">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2 md:space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-gray-200 font-light text-sm md:text-base leading-relaxed flex gap-3"
                    >
                      <span className="text-gray-500 flex-shrink-0">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
