import React from 'react';

const Partners: React.FC = () => {
  return (
    <section className="w-full bg-[#fcfcfc] py-16 md:py-24 overflow-hidden border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Infinite Carousel Container */}
        {/* The mask-image creates a nice fade effect at the left and right edges */}
        <div className="flex w-full group [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] py-4">
          
          {[0, 1].map((idx) => (
            <div 
              key={idx} 
              className="flex animate-infinite-scroll min-w-full justify-around items-center gap-10 md:gap-16 lg:gap-24 shrink-0 px-6 sm:px-12 group-hover:[animation-play-state:paused]"
              aria-hidden={idx === 1}
            >
              
              {/* National Bank */}
              <div className="flex items-center gap-2.5 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all cursor-pointer duration-300">
                <div className="flex">
                  <div className="w-3 h-5 bg-gray-800 transform skew-y-12"></div>
                  <div className="w-4 h-6 bg-gray-800 -ml-0.5 -mt-1 transform skew-y-12"></div>
                </div>
                <div className="flex flex-col leading-tight -ml-1 text-gray-800">
                  <span className="font-[900] text-[10px] tracking-wide uppercase">National</span>
                  <span className="font-[900] text-[10px] tracking-wide uppercase">Bank</span>
                </div>
              </div>

              {/* mattered */}
              <div className="flex items-center opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all cursor-pointer duration-300 text-gray-800">
                <span className="font-medium text-xl tracking-tight">mattered</span>
                <div className="w-1.5 h-1.5 bg-gray-800 rounded-sm -mr-2 mt-2 -ml-0.5 origin-bottom-left transform -skew-x-[30deg]"></div>
              </div>

              {/* Coca Cola */}
              <div className="flex items-center opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all cursor-pointer duration-300 text-gray-800">
                <span className="font-serif italic font-bold text-2xl tracking-tighter" style={{ fontFamily: "Georgia, serif" }}>Coca-Cola</span>
              </div>

              {/* Adobe */}
              <div className="flex items-center gap-2 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all cursor-pointer duration-300 text-gray-800">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15 3L24 21H18L15 15.5L12 21H3L12 3H15ZM15 11L13.5 14H16.5L15 11Z" />
                </svg>
                <span className="font-bold text-[22px] tracking-tight">Adobe</span>
              </div>

              {/* Subway */}
              <div className="flex items-center opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all cursor-pointer duration-300 text-gray-800 relative">
                <span className="font-black text-[22px] tracking-[-0.05em] italic uppercase whitespace-nowrap">Subway</span>
                <div className="absolute top-0 -left-1 w-1.5 h-1.5 border-t-2 border-l-2 border-gray-800 transform rotate-45"></div>
                <div className="absolute top-0 -right-1.5 w-1.5 h-1.5 border-t-2 border-r-2 border-gray-800 transform rotate-45"></div>
              </div>

              {/* Codecademy */}
              <div className="flex items-center opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all cursor-pointer duration-300 text-gray-800">
                <div className="border-[2px] border-gray-800 px-1.5 py-0 mr-0.5">
                  <span className="font-bold text-[17px] leading-tight">code</span>
                </div>
                <span className="font-medium text-[17px] tracking-tight">cademy</span>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Partners;
