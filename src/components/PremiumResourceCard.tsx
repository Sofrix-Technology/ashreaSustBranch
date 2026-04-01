import React from 'react';

const PremiumResourceCard = () => {
  return (
    <div className="bg-[#051320] rounded-[2rem] p-8 md:p-10 flex flex-col h-full relative overflow-hidden group">
      <div className="absolute -right-12 -bottom-12 opacity-[0.05] w-64 h-64 pointer-events-none group-hover:scale-110 transition-transform duration-700">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 22h20L12 2z" />
          <path d="M12 6L4 20h16L12 6z" fill="#fff"/>
        </svg>
      </div>

      <div className="relative z-10 flex-grow">
        <div className="inline-block bg-[#005c2a] px-3.5 py-1.5 rounded-full mb-7 relative">
          <span className="text-white text-[9px] font-[800] tracking-[0.15em] uppercase relative z-10">
            New Release
          </span>
          <div className="absolute inset-0 bg-[#009245] blur-sm rounded-full opacity-50"></div>
        </div>
        
        <h3 className="text-white text-[1.45rem] font-medium leading-[1.2] mb-5 pr-4">
          Sustainability Handbook<br/>2024
        </h3>
        <p className="text-[#849ab0] text-[13px] leading-[1.7] mb-10">
          The comprehensive guide to implementing net-zero cooling solutions in East African urban environments.
        </p>
      </div>
      
      <div className="relative z-10 mt-auto">
        <button className="w-full bg-white hover:bg-gray-50 text-[#0f1b29] text-[13px] font-[700] py-3.5 px-6 rounded-full transition-colors shadow-sm text-center">
          Download Premium Resource
        </button>
      </div>
    </div>
  );
};

export default PremiumResourceCard;
