import { GraduationCap, ArrowRight, Target, Trophy, Users } from 'lucide-react';

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
            <div className="absolute -right-4 top-16 opacity-5 pointer-events-none scale-150 text-[#009245]">
              <Target size={200} strokeWidth={0.8} />
            </div>
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-8 shadow-sm text-[#009245]">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-[1.6rem] md:text-[1.8rem] font-bold text-[#0f1b29] tracking-tight mb-4">Technical Sessions</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed max-w-sm mb-8">
                Deep dives into HVAC design, thermodynamics, and energy modeling led by industry veterans and academic experts.
              </p>
            </div>
            
            <div className="relative z-10">
              <a href="#" className="inline-flex items-center gap-2 text-[#009245] font-semibold hover:text-[#007a38] transition-colors">
                Learn more
                <ArrowRight size={16} />
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
            <Target size={24} className="text-[#009245] mb-5" />
            <h4 className="text-xl font-bold tracking-tight text-[#0f1b29] mb-3">Training Programs</h4>
            <p className="text-[#204a32] text-[14px] leading-[1.6]">
              Certified workshops in Revit MEP, HAP software, and Sustainable Design principles.
            </p>
          </div>

          {/* Competitions */}
          <div className="bg-white border hover:border-gray-300 border-gray-100 shadow-sm rounded-3xl p-8 md:p-10 flex flex-col h-full transition-all duration-300">
            <Trophy size={24} className="text-[#0f1b29] mb-5" />
            <h4 className="text-xl font-bold tracking-tight text-[#0f1b29] mb-3">Competitions</h4>
            <p className="text-[#4b5563] text-[14px] leading-[1.6]">
              Engage in regional and global design challenges focused on zero-energy buildings.
            </p>
          </div>

          {/* Networking */}
          <div className="bg-white border-2 border-dashed border-[#e5e7eb] rounded-3xl p-8 md:p-10 flex flex-col h-full">
            <Users size={24} className="text-[#6b7280] mb-5" />
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
