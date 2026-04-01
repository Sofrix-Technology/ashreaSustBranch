const ResourceRequest = () => {
  return (
    <div className="w-full bg-[#f8f9fa] border-t border-gray-100 py-20 mt-10">
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        <div className="bg-[#f4f5f7] rounded-[2.5rem] p-10 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-[1.8rem] md:text-[2rem] font-medium text-[#0f1b29] mb-4">
              Can't find what you need?
            </h2>
            <p className="text-[#6b7280] text-[14px] leading-relaxed px-4 lg:px-0">
              Our student committee can help source specific technical documentation or research papers for your projects. Request a resource and we'll notify you when it's available.
            </p>
          </div>
          
          <div className="w-full lg:w-auto flex-shrink-0">
            <div className="flex flex-col sm:flex-row gap-3 w-full bg-white p-2 rounded-full shadow-sm">
              <input 
                type="email" 
                placeholder="Your University Email" 
                className="w-full sm:w-[280px] bg-transparent border-none rounded-full py-3.5 px-6 text-[14px] outline-none text-gray-700 placeholder-gray-400"
              />
              <button className="whitespace-nowrap bg-[#009245] hover:bg-[#007a38] text-white text-[14px] font-[600] py-3.5 px-8 rounded-full transition-colors shadow-sm">
                Request Resource
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceRequest;
