import React from 'react';

const JoinSection: React.FC = () => {
  return (
    <section className="py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#122338] rounded-[2rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
          {/* لمسة تصميمية خلفية (دوائر خفيفة) */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-[#2563eb] font-bold tracking-widest uppercase text-sm">Become a Member</span>
            <h2 className="text-white text-3xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
              Ready to Shape the Future of Engineering?
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Join our community of professionals and students to gain access to exclusive resources, networking, and projects.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-900/20 w-full sm:w-auto">
                Join Now
              </button>
              <button className="bg-transparent border border-gray-600 hover:border-white text-white px-10 py-4 rounded-full font-bold text-lg transition-all w-full sm:w-auto">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;