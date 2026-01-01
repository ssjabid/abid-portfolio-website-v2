import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function Credentials() {
  const ref = useScrollAnimation();

  const certifications = [
    {
      name: "Splunk Core Certified Consultant",
      image: "/badges/splunk-consultant.png",
    },
    {
      name: "Splunk Core Certified Advanced Power User",
      image: "/badges/splunk-power-user.png",
    },
    { name: "Splunk Core Certified Admin", image: "/badges/splunk-admin.png" },
    {
      name: "Splunk Certified Enterprise Architect",
      image: "/badges/splunk-architect.png",
    },
    {
      name: "Splunk IT Service Intelligence Certified Admin",
      image: "/badges/splunk-itsi-admin.png",
    },
    { name: "Splunk Core Certified User", image: "/badges/splunk-user.png" },
  ];

  const education = [
    {
      degree: "Master of Science",
      field: "Artificial Intelligence & Data Science",
      school: "Northeastern University London",
      year: "2025",
      logo: "/northeastern-university.png",
    },
    {
      degree: "Bachelor of Science",
      field: "Mathematics",
      school: "Kings College London",
      year: "2015",
      logo: "/kings-college-london.png",
    },
  ];

  return (
    <section
      id="credentials"
      ref={ref}
      className="py-16 md:py-24 px-6 relative z-10 border-t border-white/10"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-light tracking-widest mb-12 md:mb-16 animate-fade-in-up">
          Credentials
        </h2>

        {/* Education */}
        <div className="mb-16 md:mb-24">
          <h3 className="text-sm font-medium mb-8 md:mb-12 text-gray-300 tracking-widest uppercase animate-fade-in-up delay-100">
            Education
          </h3>
          <div className="space-y-6 md:space-y-8">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="border-l border-white/10 pl-6 md:pl-8 animate-fade-in-up"
                style={{ animationDelay: `${(idx + 2) * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="w-24 h-24 md:w-42 md:h-42 flex-shrink-0 flex items-center justify-center bg-white/5 rounded-lg border border-white/10 p-2 md:p-3">
                    <img
                      src={edu.logo}
                      alt={edu.school}
                      className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base md:text-lg font-medium text-white mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-sm md:text-base text-gray-300 font-light mb-2 md:mb-3">
                      {edu.field}
                    </p>
                    <p className="text-sm md:text-base text-gray-400 font-light mb-1 md:mb-2">
                      {edu.school}
                    </p>
                    <p className="text-sm md:text-base text-gray-500 font-light">
                      {edu.year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-sm font-medium mb-8 md:mb-12 text-gray-300 tracking-widest uppercase animate-fade-in-up delay-200">
            Certifications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="group relative animate-fade-in-up hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${(idx + 4) * 0.1}s` }}
              >
                <div className="bg-white/5 border border-white/10 hover:border-white/30 rounded-lg p-2 md:p-4 transition-all duration-300 h-32 md:h-48 flex items-center justify-center overflow-hidden group-hover:bg-white/10">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      if (e.currentTarget.parentElement) {
                        e.currentTarget.parentElement.innerHTML =
                          '<div className="text-2xl md:text-4xl">🏆</div>';
                      }
                    }}
                  />
                </div>
                <p className="text-xs md:text-sm text-gray-400 font-light mt-2 md:mt-4 text-center group-hover:text-gray-300 transition-colors duration-300">
                  {cert.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
