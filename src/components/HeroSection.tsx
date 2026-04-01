import React, { useState, useEffect } from "react";

import TooltipCursor from "./TooltipCursor";
import AshraeLogo from "./AshraeLogo";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  formatZero?: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2000, formatZero }) => {
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

  const displayCount = formatZero && count < 10 ? `0${count}` : count;
  return <span>{displayCount}</span>;
};

export default function HeroSection() {
  return (
    <>
      <section className="relative w-full min-h-screen flex items-center bg-[#051320] overflow-hidden font-sans">
        {/* Background blueprint on the right side */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center md:bg-right bg-no-repeat opacity-30"
            style={{ backgroundImage: `url('/image.png')` }}
          />
        </div>

        {/* Dark solid block for the left side to cover background, mimicking the diagonal cut in the design */}
        <div
          className="absolute inset-y-0 left-0 w-full md:w-[75%] lg:w-[62%] bg-[#051320] z-10 hidden md:block"
          style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)' }}
        />

        {/* For mobile, a simpler solid background overlay */}
        <div className="absolute inset-y-0 left-0 w-full bg-[#051320]/95 z-10 md:hidden" />

        {/* Main Content */}
        <div className="relative z-20 w-full max-w-360 px-6 lg:px-12 py-20 md:py-32 flex flex-col md:flex-row mx-auto justify-between items-center gap-12 md:gap-20">
          <div className="max-w-xl md:max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#081f2b] border border-[#1b3445] mb-8">
              <span className="text-[#00d666] text-xs">★</span>
              <span className="text-[#00d666] text-[11px] font-bold tracking-widest uppercase">Empowering Innovation</span>
            </div>

            {/* Heading */}
            <h1 className="text-white text-[3.25rem] md:text-6xl lg:text-[5.5rem] font-medium leading-[1.05] tracking-tight mb-8">
              <span className="block mb-2">Building</span>
              <span className="block mb-2">Sudan's</span>
              <span className="block mb-2"><span className="text-[#00d666]">Future</span> in</span>
              <span className="block">HVAC&R</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[#849ab0] text-lg font-normal leading-relaxed mb-10 max-w-[480px]">
              The Sudan University of Science and Technology student branch is dedicated to advancing human well-being through sustainable technology and engineering excellence.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button className="bg-[#009245] hover:bg-[#007a38] text-white font-medium py-3 px-8 rounded-full transition-all duration-300 w-full sm:w-auto text-center">
                Join Now
              </button>
              <button className="bg-[#1e2e3d] hover:bg-[#25394a] text-white font-medium py-3 px-8 rounded-full transition-all duration-300 border border-transparent hover:border-white/10 w-full sm:w-auto text-center">
                Explore Activities
              </button>
            </div>
          </div>

          <div>
            <TooltipCursor delay={200}>
              <AshraeLogo width="500px" height="auto" style={{ display: 'block' }} />
            </TooltipCursor>
          </div>
        </div>
      </section>

      {/* Stats Section under Hero */}
      <section className="w-full bg-[#f8f9fa] py-14 border-b border-gray-200 font-sans">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:flex lg:flex-row justify-between items-stretch gap-y-12 lg:gap-y-0">

            {/* Stat 1 */}
            <div className="flex flex-col items-start text-left w-full lg:w-1/4 lg:border-r border-gray-200 lg:pr-8">
              <span className="text-[2.2rem] lg:text-[2.6rem] leading-none mb-1 font-medium text-[#0f1b29]">
                <AnimatedCounter end={250} />+
              </span>
              <span className="text-[10px] md:text-xs font-[600] text-gray-400 tracking-[0.15em] uppercase mt-2">
                Active Members
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-start text-left w-full lg:w-1/4 lg:border-r border-gray-200 lg:px-6">
              <span className="text-[2.2rem] lg:text-[2.6rem] leading-none mb-1 font-medium text-[#0f1b29]">
                <AnimatedCounter end={45} />+
              </span>
              <span className="text-[10px] md:text-xs font-[600] text-gray-400 tracking-[0.15em] uppercase mt-2">
                Events Hosted
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-start text-left w-full lg:w-1/4 lg:border-r border-gray-200 lg:px-6">
              <span className="text-[2.2rem] lg:text-[2.6rem] leading-none mb-1 font-medium text-[#0f1b29]">
                <AnimatedCounter end={12} />+
              </span>
              <span className="text-[10px] md:text-xs font-[600] text-gray-400 tracking-[0.15em] uppercase mt-2">
                Strategic Partners
              </span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-start text-left w-full lg:w-1/4 lg:pl-6">
              <span className="text-[2.2rem] lg:text-[2.6rem] leading-none mb-1 font-medium text-[#0f1b29]">
                <AnimatedCounter end={8} formatZero={true} duration={1500} />
              </span>
              <span className="text-[10px] md:text-xs font-[600] text-gray-400 tracking-[0.15em] uppercase mt-2">
                Awards Won
              </span>
            </div>

          </div>
        </div>
      </section>
    
    </>
  );
}
