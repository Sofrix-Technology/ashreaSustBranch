import { Search } from 'lucide-react';

const ResourceFilters = () => {
  const categories = [
    { name: 'All Resources',      active: true  },
    { name: 'Articles',           active: false },
    { name: 'PDFs & Standards',   active: false },
    { name: 'Learning Materials', active: false },
    { name: 'HVAC Tools',         active: false },
  ];

  return (
    <div className="w-full max-w-360 mx-auto px-6 lg:px-12 py-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
      <div className="flex flex-wrap items-center gap-3">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={`px-5 py-2.5 rounded-full text-[13px] font-[600] transition-colors ${
              cat.active
                ? 'bg-[#50f296] text-[#064e27]'
                : 'bg-[#f4f5f7] text-[#4b5563] hover:bg-[#e5e7eb]'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="w-full lg:w-auto">
        <div className="relative w-full lg:w-[320px]">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400">
            <Search size={16} />
          </div>
          <input
            type="text"
            className="w-full bg-[#f4f5f7] rounded-full py-3.5 pl-11 pr-5 text-[14px] outline-none focus:ring-2 focus:ring-[#009245] transition-all placeholder-gray-500 font-medium text-gray-800"
            placeholder="Search documentation..."
          />
        </div>
      </div>
    </div>
  );
};

export default ResourceFilters;
