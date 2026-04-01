import React from 'react';

const Partners: React.FC = () => {
  // التعديل الأساسي هنا: زيادة العرض بشكل كبير واستخدام min-w لضمان عدم الانكماش
  const logoContainerClasses = `
    flex items-center justify-center 
    min-w-[180px] h-[50px] 
    md:min-w-[280px] md:h-[100px] 
    transition-all duration-300 cursor-pointer
    px-4
  `;

  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="w-full max-w-360 mx-auto">

        <h2 className="text-center text-xs md:text-sm font-medium text-gray-500 mb-16 tracking-[0.4em] uppercase">
          STRATEGIC PARTNERS & AFFILIATES
        </h2>

        {/* Infinite Carousel Container */}
        <div className="flex w-full group [mask-image:_linear-gradient(to_right,transparent_0,_black_10%_90%,transparent_100%)]">

          {[0, 1].map((idx) => (
            <div
              key={idx}
              className="flex animate-infinite-scroll items-center gap-16 md:gap-24 shrink-0 px-8 group-hover:[animation-play-state:paused]"
              aria-hidden={idx === 1}
            >

              <div className={logoContainerClasses}>
                <img src="/engx.png" alt="Engex Logo" className="max-w-full max-h-full object-contain block" />
              </div>

              {/* --- Logo 3 (Sudan Chapter) --- */}
              <div className={logoContainerClasses}>
                <img src="/sudanchapter.jpg" alt="Sudan Chapter" className="max-w-full max-h-full object-contain block" />
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
    </section >
  );
};

export default Partners;