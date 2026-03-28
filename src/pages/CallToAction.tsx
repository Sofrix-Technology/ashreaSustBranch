import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="px-4 py-8 md:py-16 w-full font-sans">
      <div 
        className="max-w-[1200px] mx-auto bg-[#143d6a] rounded-[32px] py-16 px-6 md:py-24 md:px-12 text-center relative overflow-hidden"
      >
        {/* Subtle geometric overlay approximations using blur & position */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[80%] bg-[#1a4a7d] rounded-full opacity-40 blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[70%] bg-[#0c2340] rounded-full opacity-60 blur-[100px] pointer-events-none"></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[50%] bg-[#1a4a7d] rounded-full opacity-30 blur-[60px] pointer-events-none"></div>

        <div className="relative z-10">
          <h2 className="text-white text-[32px] md:text-[48px] lg:text-[54px] font-extrabold tracking-tight mb-5 drop-shadow-sm">
            Ready to start your journey?
          </h2>
          <p className="text-[#d8e6f4] text-[15px] md:text-[17px] max-w-[650px] mx-auto mb-10 leading-relaxed drop-shadow-sm">
            Connect with over 50,000 members worldwide and gain the competitive edge in<br className="hidden md:block"/> your engineering career
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
            <a 
              href="#" 
              className="w-full sm:w-auto inline-flex justify-center bg-[#257318] hover:bg-[#1b5811] text-white text-[16px] font-bold py-3.5 px-8 rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              Become a Member
            </a>
            <a 
              href="#" 
              className="w-full sm:w-auto inline-flex justify-center bg-white hover:bg-gray-50 text-[#143d6a] text-[16px] font-bold py-3.5 px-8 rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
