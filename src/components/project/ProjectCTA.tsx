const ProjectCTA = () => {
  return (
    <section className="bg-[#EAEAEA] rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="max-w-md">
        <h2 className="text-4xl font-black text-slate-900 mb-6 leading-[1.1]">
          Start your own project with ASHRAE.
        </h2>
        <p className="text-slate-600 mb-10">
          Gain access to international standards, mentoring from industry professionals, 
          and state-of-the-art simulation software.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <button className="bg-[#009245] hover:bg-[#007a38] text-white font-medium py-3 px-8 rounded-full transition-all duration-300 w-full sm:w-auto text-center">
            Submit Proposal
          </button>
          <button className="bg-[#1e2e3d] hover:bg-[#25394a] text-white font-medium py-3 px-8 rounded-full transition-all duration-300 border border-transparent hover:border-white/10 w-full sm:w-auto text-center">
            Browse Guidelines
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 aspect-video bg-[#0B1E33] rounded-[48px] flex items-center justify-center relative overflow-hidden">
        {/* The Drafting Compass Icon */}
        <img src="/image copy.webp" alt="" />
      </div>
    </section>
  );
};

export default ProjectCTA;