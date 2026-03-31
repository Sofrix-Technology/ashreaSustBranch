import TooltipCursor from "../components/TooltipCursor";
import AshraeLogo from "../components/AshraeLogo";

export default function HeroSection() {
  return (
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
  );
}