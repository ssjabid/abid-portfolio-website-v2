import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function Projects() {
  const ref = useScrollAnimation();

  const projects = [
    {
      title: "Investment Portfolio - Frontend",
      description:
        "Real-time portfolio tracking with live stock/crypto prices. GitHub-synced data, beautiful UI with performance analytics.",
      tags: ["React", "TypeScript", "GitHub API", "Finnhub"],
      link: "https://github.com/ssjabid",
      featured: true,
      image: "📊",
    },
    {
      title: "Investment Admin Dashboard",
      description:
        "Backend admin tool for managing investments, syncing to GitHub, and visualizing performance metrics.",
      tags: ["React", "Node.js", "GitHub API", "MongoDB"],
      link: "https://github.com/ssjabid",
      featured: true,
      image: "⚙️",
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="py-16 md:py-24 px-6 relative z-10 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-light tracking-widest mb-12 md:mb-16 animate-fade-in-up">
          Projects
        </h2>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg border border-white/10 hover:border-white/30 bg-white/2 hover:bg-white/5 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${(idx + 1) * 0.2}s` }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Image placeholder */}
              <div className="h-32 md:h-40 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-4xl md:text-5xl border-b border-white/10 group-hover:border-white/20 transition-colors">
                {project.image}
              </div>

              <div className="relative z-10 p-4 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-base md:text-lg font-medium tracking-wider group-hover:text-gray-100 transition-colors duration-300 max-w-xs">
                    {project.title}
                  </h3>
                  <svg
                    className="w-4 md:w-5 h-4 md:h-5 opacity-40 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>

                <p className="text-gray-300 font-light text-xs md:text-base mb-4 md:mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs md:text-sm text-gray-300 font-light tracking-wider border border-white/20 hover:border-white/50 px-2 md:px-3 py-1 md:py-1.5 rounded transition-all duration-300 hover:bg-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Exploring Section */}
        <div
          className="border-t border-white/10 pt-12 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <h3 className="text-sm font-medium tracking-widest mb-6 md:mb-8 uppercase text-gray-300">
            Currently Exploring
          </h3>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="border border-white/10 rounded-lg p-4 md:p-6 hover:border-white/20 hover:bg-white/2 transition-all duration-300">
              <h4 className="text-base md:text-lg font-medium tracking-wider mb-2 md:mb-3">
                LLM Applications
              </h4>
              <p className="text-gray-300 font-light text-sm md:text-base mb-3 md:mb-4">
                Experimenting with generative AI and large language models in
                various domains.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs md:text-sm text-gray-300 font-light tracking-wider border border-white/20 hover:border-white/50 px-2 md:px-3 py-1 md:py-1.5 rounded transition-all duration-300 hover:bg-white/10">
                  Python
                </span>
                <span className="text-xs md:text-sm text-gray-300 font-light tracking-wider border border-white/20 hover:border-white/50 px-2 md:px-3 py-1 md:py-1.5 rounded transition-all duration-300 hover:bg-white/10">
                  LLMs
                </span>
              </div>
            </div>
            <div className="border border-white/10 rounded-lg p-4 md:p-6 hover:border-white/20 hover:bg-white/2 transition-all duration-300">
              <h4 className="text-base md:text-lg font-medium tracking-wider mb-2 md:mb-3">
                Quantitative Finance
              </h4>
              <p className="text-gray-300 font-light text-sm md:text-base mb-3 md:mb-4">
                Building tools and strategies at the intersection of data
                science and finance.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs md:text-sm text-gray-300 font-light tracking-wider border border-white/20 hover:border-white/50 px-2 md:px-3 py-1 md:py-1.5 rounded transition-all duration-300 hover:bg-white/10">
                  Python
                </span>
                <span className="text-xs md:text-sm text-gray-300 font-light tracking-wider border border-white/20 hover:border-white/50 px-2 md:px-3 py-1 md:py-1.5 rounded transition-all duration-300 hover:bg-white/10">
                  Finance
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
