import { motion } from 'framer-motion';

const ComingSoonCard = () => {
  return (
    <div className="w-full max-w-2xl mx-auto max-h-screen relative mt-10 mb-10 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] p-8 min-h-[400px] overflow-hidden group">
      
      <div 
        className=" flex flex-col items-center justify-center text-center"
      >
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '20px 20px' }}>
        </div>

        <div className="relative z-10">
          <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-emerald-600">
              <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>

          <h3 className="text-2xl font-bold text-slate-800 mb-2">
            New Features Coming Soon
          </h3>
          
          <p className="text-slate-500 max-w-[220px] mx-auto text-sm leading-relaxed">
            We're currently working on exciting new features to enhance your experience. Stay tuned for updates!
          </p>

          <div className="mt-8 w-40 h-1.5 bg-slate-200 rounded-full mx-auto overflow-hidden">
            <motion.div 
              animate={{ x: [-40, 160] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="w-10 h-full bg-emerald-500 rounded-full"
            />
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default ComingSoonCard;