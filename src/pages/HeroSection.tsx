import React, { useState, useEffect } from "react";
import TooltipCursor from "../components/TooltipCursor";
import AshraeLogo from "../components/AshraeLogo";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return <span>{count}</span>;
};

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center overflow-hidden bg-slate-50">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url('/rendering-ventilation-system.jpg')` }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-white via-white/95 md:via-white/80 to-transparent z-0" />
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row justify-around items-center gap-12 md:gap-20">
          <div className="flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-none font-extrabold tracking-tight mb-4 uppercase">
              <span className="block text-[#004f90] mb-1">Engineered Excellence.</span>
              <span className="block text-[#70b942]">Build your future here.</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-slate-700 mb-8 max-w-lg leading-relaxed font-medium">
              Iteratively redesigned modern out version building engineering systems reality; and sustainable innovators.
            </p>
            <button className="bg-[#004f90] hover:bg-[#003666] text-white font-semibold py-3 px-8 rounded shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-0.5">
              Join Now
            </button>
          </div>

          <div className="mb-8 max-w-full overflow-hidden [&_svg]:max-w-full [&_svg]:h-auto">
            <TooltipCursor delay={200}>
              <AshraeLogo width="500px" height="auto" style={{ display: "block" }} />
            </TooltipCursor>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-[-1rem] flex h-24 md:h-32 z-20 overflow-hidden pr-4">
        <div className="w-6 md:w-10 bg-[#004f90] transform -skew-x-[25deg] origin-bottom translate-x-4"></div>
        <div className="bg-[#70b942] transform -skew-x-[25deg] origin-bottom px-10 md:px-20 flex items-center shadow-lg">
          <div className="transform skew-x-[25deg] flex items-center gap-3 text-white">
            <div className="text-5xl md:text-7xl font-bold tracking-tighter">
              <AnimatedCounter end={200} duration={2500} />+
            </div>
            <div className="text-sm md:text-base font-bold uppercase leading-tight tracking-wider">
              Active <br /> Members
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}