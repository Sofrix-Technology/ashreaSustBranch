const StudentResearch = () => {
  return (
    <section className="py-24 bg-[#f8f9fa] font-sans w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h3 className="text-[#009245] font-bold text-[11px] tracking-[0.15em] uppercase mb-4">
              Student Research
            </h3>
            <h2 className="text-[2.6rem] md:text-[3rem] lg:text-5xl font-medium text-[#0f1b29] leading-[1.15] tracking-tight">
              High-Impact Projects.
            </h2>
          </div>
          <button className="whitespace-nowrap px-6 py-3 rounded-full border border-gray-300 text-[#0f1b29] font-[600] text-[14px] hover:bg-gray-100 transition-colors">
            View Project Archive
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
          
          {/* Card 1 */}
          <div className="group cursor-pointer flex flex-col">
             {/* Note: Added placeholder image from Unsplash for visual fidelity */}
            <div className="relative w-full h-[320px] md:h-[400px] mb-6 overflow-hidden rounded-[2.5rem]">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200')" }}
              />
              <div className="absolute inset-0 bg-[#0f1b29]/10" />
              <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                <span className="bg-[#009245] text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  Sustainability
                </span>
                <span className="bg-[#0f1b29] text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  HVAC
                </span>
              </div>
            </div>
            
            <h3 className="text-2xl md:text-[1.7rem] font-bold text-[#0f1b29] mb-3 leading-tight group-hover:text-[#009245] transition-colors">
              Solar-Powered Cold Storage for Rural Sudan
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-lg">
              An innovative refrigeration system designed to reduce post-harvest losses in Sudanese agricultural sectors using decentralized solar energy.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group cursor-pointer flex flex-col">
            <div className="relative w-full h-[320px] md:h-[400px] mb-6 overflow-hidden rounded-[2.5rem]">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/rendering-ventilation-system.jpg')" }}
              />
              <div className="absolute inset-0 bg-[#0f1b29]/20" />
              <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                <span className="bg-[#009245] text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  Energy Modeling
                </span>
                <span className="bg-[#0f1b29] text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  Research
                </span>
              </div>
            </div>
            
            <h3 className="text-2xl md:text-[1.7rem] font-bold text-[#0f1b29] mb-3 leading-tight group-hover:text-[#009245] transition-colors">
              Passive Cooling Strategies in Desert Climates
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-lg">
              A technical analysis of ancient architectural techniques integrated with modern computational fluid dynamics to minimize energy demand.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StudentResearch;
