const CorePillars = () => {
  return (
    <section className="py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-14">
          <h3 className="text-[#009245] font-bold text-[11px] tracking-[0.15em] uppercase mb-4">
            Our Core Pillars
          </h3>
          <h2 className="text-[2.6rem] md:text-[3rem] lg:text-5xl font-medium text-[#0f1b29] leading-[1.15] max-w-2xl">
            Shaping Expertise through Practice.
          </h2>
        </div>

        {/* Top Grid: 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          
          {/* Technical Sessions */}
          <div className="bg-[#f8f9fa] rounded-3xl p-8 md:p-12 relative overflow-hidden group flex flex-col justify-between min-h-[380px]">
             {/* Compass Watermark */}
             <div className="absolute -right-4 top-16 opacity-5 pointer-events-none scale-150">
               <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/><path d="M12 14v7"/><circle cx="12" cy="14" r="2"/><path d="m12 14-4-4"/>
               </svg>
             </div>
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-8 shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#009245" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <h3 className="text-[1.6rem] md:text-[1.8rem] font-bold text-[#0f1b29] tracking-tight mb-4">Technical Sessions</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed max-w-sm mb-8">
                Deep dives into HVAC design, thermodynamics, and energy modeling led by industry veterans and academic experts.
              </p>
            </div>
            
            <div className="relative z-10">
              <a href="#" className="inline-flex items-center text-[#009245] font-semibold hover:text-[#007a38] transition-colors">
                Learn more
                <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Site Visits */}
           <div 
             className="bg-[#1b2b3b] rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-between min-h-[380px]"
           >
             <div 
               className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-40"
               style={{ backgroundImage: `url('/rendering-ventilation-system.jpg')` }}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0e1722]/95 via-[#1b2b3b]/70 to-[#1b2b3b]/60 mix-blend-multiply" />
            
             <div className="relative z-10">
              <h3 className="text-[1.6rem] md:text-[1.8rem] text-white tracking-tight mb-4">Site Visits</h3>
              <p className="text-[#a1b3c6] text-[15px] leading-relaxed max-w-[18rem]">
                Bridging the gap between classroom theory and real-world industrial implementation.
              </p>
             </div>

             <div className="relative z-10 mt-12">
               <p className="text-[#657d96] text-[10px] font-bold tracking-[0.15em] uppercase mb-1.5">Upcoming Visit:</p>
               <p className="text-white font-medium text-[1.1rem]">Khartoum North Power Station</p>
             </div>
           </div>
        </div>

        {/* Bottom Grid: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Training Programs */}
          <div className="bg-[#e0fce9] rounded-3xl p-8 md:p-10 flex flex-col h-full">
            <svg className="w-6 h-6 text-[#009245] mb-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
            </svg>
            <h4 className="text-xl font-bold tracking-tight text-[#0f1b29] mb-3">Training Programs</h4>
            <p className="text-[#204a32] text-[14px] leading-[1.6]">
              Certified workshops in Revit MEP, HAP software, and Sustainable Design principles.
            </p>
          </div>

          {/* Competitions */}
          <div className="bg-white border hover:border-gray-300 border-gray-100 shadow-sm rounded-3xl p-8 md:p-10 flex flex-col h-full transition-all duration-300">
            <svg className="w-6 h-6 text-[#0f1b29] mb-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
               <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
            </svg>
            <h4 className="text-xl font-bold tracking-tight text-[#0f1b29] mb-3">Competitions</h4>
            <p className="text-[#4b5563] text-[14px] leading-[1.6]">
              Engage in regional and global design challenges focused on zero-energy buildings.
            </p>
          </div>

          {/* Networking */}
          <div className="bg-white border-2 border-dashed border-[#e5e7eb] rounded-3xl p-8 md:p-10 flex flex-col h-full">
            <svg className="w-6 h-6 text-[#6b7280] mb-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <h4 className="text-xl font-bold tracking-tight text-[#0f1b29] mb-3">Networking</h4>
            <p className="text-[#6b7280] text-[14px] leading-[1.6]">
              Connect with our vast alumni network spread across international engineering firms.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CorePillars;
