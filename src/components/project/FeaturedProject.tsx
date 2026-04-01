const FeaturedProject = () => {
  const tags = ["Revit MEP", "Carrier HAP", "ASHRAE 90.1"];

  return (
    <section className="relative w-full overflow-hidden rounded-3xl bg-slate-900 min-h-[400px] flex items-center p-8 md:p-16">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="/hvac-projects.jpg" 
          alt="HVAC Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-2xl">
        <div className="flex items-center gap-2 text-emerald-400 mb-4">
          <span className="text-xl">★</span>
          <span className="text-xs font-bold uppercase tracking-widest">Featured Project</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          HVAC System Designs
        </h2>
        
        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
          Comprehensive mechanical design for a net-zero educational facility in Khartoum, 
          focusing on high-efficiency chilled water systems and thermal storage.
        </p>

        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;