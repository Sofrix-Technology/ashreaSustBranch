import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="px-5 py-16 md:py-24 w-full font-sans max-w-[1440px] mx-auto">
      <div 
        className="max-w-7xl mx-auto w-full bg-[#051525] rounded-[2rem] md:rounded-[3.5rem] py-20 px-6 md:py-28 md:px-12 text-center"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-white text-[2.5rem] md:text-[4.2rem] font-[800] leading-[1.1] tracking-tight mb-8">
            Start Your Engineering<br className="hidden sm:block"/> Journey Today.
          </h2>
          <p className="text-[#6c8299] text-[15px] md:text-[17px] leading-[1.8] mb-12 max-w-2xl mx-auto">
            Join a community of forward-thinkers committed to engineering a sustainable and<br className="hidden sm:block"/> efficient future for Sudan and the world.
          </p>
          
          <a 
            href="#" 
            className="inline-flex justify-center items-center bg-[#009245] hover:bg-[#007a38] text-white text-[16px] font-[600] py-4 px-10 rounded-full transition-colors shadow-sm"
          >
            Apply for Membership
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
