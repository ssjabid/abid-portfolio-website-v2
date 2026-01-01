import { useEffect, useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const colorLayerRef = useRef<HTMLImageElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const colorLayer = colorLayerRef.current;

    if (!container || !colorLayer) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      colorLayer.style.clipPath = `circle(100px at ${x}px ${y}px)`;
    };

    const handleMouseLeave = () => {
      colorLayer.style.clipPath = "circle(0px at 50% 50%)";
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleCharacterHover = (e: React.MouseEvent<HTMLSpanElement>) => {
    const span = e.currentTarget;
    if (span.textContent === " ") return;

    span.style.animation = `charPop 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`;
  };

  const handleCharacterLeave = (e: React.MouseEvent<HTMLSpanElement>) => {
    const span = e.currentTarget;
    span.style.animation = "none";
    span.style.transform = "scale(1) translateY(0)";
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative z-10 py-20">
      <style>{`
        @keyframes charPop {
          0% {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
          40% {
            transform: scale(1.15) translateY(-6px);
          }
          100% {
            transform: scale(1.1) translateY(-4px);
            opacity: 1;
          }
        }
      `}</style>
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h1
              ref={nameRef}
              className="text-4xl md:text-7xl font-light tracking-widest mb-6 leading-tight animate-fade-in-up"
            >
              {["A", "b", "i", "d"].map((letter, idx) => (
                <span
                  key={`first-${idx}`}
                  className="inline-block cursor-pointer transition-none"
                  onMouseEnter={handleCharacterHover}
                  onMouseLeave={handleCharacterLeave}
                >
                  {letter}
                </span>
              ))}
              <span className="inline-block mx-1 md:mx-2"> </span>
              {["R", "a", "k", "h", "a"].map((letter, idx) => (
                <span
                  key={`second-${idx}`}
                  className="inline-block cursor-pointer transition-none"
                  onMouseEnter={handleCharacterHover}
                  onMouseLeave={handleCharacterLeave}
                >
                  {letter}
                </span>
              ))}
            </h1>

            <p className="text-base md:text-lg text-gray-300 font-light tracking-wider mb-8 leading-relaxed animate-fade-in-up delay-100">
              Observability Engineer exploring AI, quantitative finance, and
              building in public.
            </p>

            <div className="flex gap-4 flex-wrap mb-12 animate-fade-in-up delay-200">
              <a
                href="#projects"
                className="px-6 py-3 border border-white/50 hover:border-white hover:bg-white/5 transition-all duration-300 text-sm font-light tracking-wider group"
              >
                View Projects
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 text-sm font-light tracking-wider"
              >
                Connect
              </a>
            </div>
          </div>

          {/* Photo with Spotlight Effect */}
          <div className="order-1 md:order-2 flex justify-center">
            <div
              ref={containerRef}
              className="relative w-full max-w-sm md:max-w-lg group animate-fade-in-down overflow-hidden rounded-lg"
            >
              {/* Grayscale base image */}
              <img
                src="/abid.jpg"
                alt="Abid Rakha"
                className="relative w-full grayscale rounded-lg shadow-2xl"
              />

              {/* Color overlay (revealed on hover) */}
              <img
                ref={colorLayerRef}
                src="/abid.jpg"
                alt="Abid Rakha"
                className="absolute inset-0 w-full h-full grayscale-0 rounded-lg shadow-2xl transition-all duration-100"
                style={{
                  clipPath: "circle(0px at 50% 50%)",
                }}
              />

              {/* Glow and border */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-lg blur-2xl group-hover:blur-3xl transition-all duration-500 pointer-events-none"></div>
              <div className="absolute inset-0 rounded-lg border border-white/10 group-hover:border-white/20 transition-all duration-500 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
