const ResourceHero = () => {
  return (
    <section className="px-4 sm:px-6 md:px-8 pt-6 w-full max-w-[1500px] mx-auto">
      <div className="relative w-full bg-[#0c1928] overflow-hidden rounded-[2rem] md:rounded-[3.5rem] text-left">
        
        {/* Background Overlay */}
        <div className="absolute inset-y-0 right-0 w-[150%] md:w-[65%] lg:w-[55%]">
           <div 
             className="absolute inset-0 bg-cover bg-right bg-no-repeat opacity-[0.35]"
             style={{ backgroundImage: `url('/hvac-resources.jpg')` }}
           />
           {/* Gradient mask to blend the image perfectly into the dark blue on the left */}
           <div className="absolute inset-0 bg-gradient-to-r from-[#0c1928] via-[#0c1928]/50 to-transparent" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 w-full px-8 lg:px-16 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="max-w-2xl mt-4">
            <div className="inline-block bg-[#162a3f] px-4 py-1.5 rounded-full mb-8">
              <span className="text-[#4ade80] text-[11px] font-[700] tracking-[0.15em] uppercase shadow-sm">
                Knowledge Hub
              </span>
            </div>
            <h1 className="text-white text-[3rem] md:text-[4.5rem] lg:text-[5rem] font-[500] leading-[1.05] mb-6 tracking-tight">
              Technical<br/> Library
            </h1>
            <p className="text-[#7c93ab] text-[15px] md:text-[17px] leading-[1.8] max-w-[500px]">
              Access specialized HVAC tools, engineering standards, and research materials curated for the next generation of sustainability leaders in Sudan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceHero;
