import React from 'react';

const Partners: React.FC = () => {
  // Common classes for the logo containers to keep the JSX dry
  const logoContainerClasses = `
    flex items-center justify-center 
    w-[100px] h-[60px] md:w-[150px] md:h-[80px] 
    opacity-60 grayscale hover:opacity-100 hover:grayscale-0 
    transition-all duration-300 cursor-pointer
  `;

  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Infinite Carousel Container with Gradient Mask */}
        <div className="flex w-full group [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] py-4">
          
          {[0, 1].map((idx) => (
            <div 
              key={idx} 
              className="flex animate-infinite-scroll min-w-full justify-around items-center gap-8 md:gap-12 shrink-0 px-6 group-hover:[animation-play-state:paused]"
              aria-hidden={idx === 1}
            >
              
              {/* --- Logo 1 (Engex) --- */}
              <div className={logoContainerClasses}>
                <img src="/engx.png" alt="Engex Logo" className="max-w-full max-h-full object-contain block" />
              </div>

              {/* --- Logo 2 (Partner Text) --- */}
              <div className={logoContainerClasses}>
                 <span className="font-bold text-lg md:text-2xl text-gray-800 tracking-widest">PARTNER</span>
              </div>

              {/* --- Logo 3 (Sudan Chapter) --- */}
              <div className={logoContainerClasses}>
                <img src="/sudanchapter.jpg" alt="Sudan Chapter" className="max-w-full max-h-full object-contain block" />
              </div>

              {/* --- Logo 4 (Adobe - SVG) --- */}
              <div className={`${logoContainerClasses} gap-2`}>
                <svg className="h-1/2 md:h-2/3 w-auto text-gray-800" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15 3L24 21H18L15 15.5L12 21H3L12 3H15ZM15 11L13.5 14H16.5L15 11Z" />
                </svg>
                <span className="font-bold text-lg md:text-2xl tracking-tight text-gray-800">Adobe</span>
              </div>

              {/* --- Logo 5 (Ain Shams) --- */}
              <div className={logoContainerClasses}>
                <img src="/ainshams.png" alt="Ain Shams" className="max-w-full max-h-full object-contain block" />
              </div>

              {/* --- Logo 6 (UOK) --- */}
              <div className={logoContainerClasses}>
                <img src="/uok.jpg" alt="UOK" className="max-w-full max-h-full object-contain block" />
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Partners;