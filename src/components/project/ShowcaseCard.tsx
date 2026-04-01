import { motion } from 'framer-motion';

export interface ShowcaseItem {
  id: number;
  category: string;
  title: string;
  description: string;
  tags: string[];
  linkText: string;
  imageUrl: string;
}

const ShowcaseCard = ({ category, title, description, tags, linkText, imageUrl }: Omit<ShowcaseItem, 'id'>) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="bg-white rounded-[2rem] p-6 flex flex-col h-full shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="w-full h-48 bg-slate-200 rounded-2xl mb-6 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>

      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-2">
        {category}
      </span>
      
      <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
        {title}
      </h3>
      
      <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="text-[10px] px-2 py-1 bg-slate-100 text-slate-600 rounded-md font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>

      <button className="flex items-center gap-2 text-emerald-600 font-bold text-sm group">
        {linkText} 
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </button>
    </motion.div>
  );
};

export default ShowcaseCard;