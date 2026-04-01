import React from 'react';

export interface ResourceCardProps {
  iconType: 'calculator' | 'pdf' | 'article' | 'video' | 'tool';
  category: string;
  title: string;
  description: string;
  footerLeft: string;
  footerActionType: 'link' | 'download' | 'button';
  footerActionText?: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  iconType, category, title, description, footerLeft, footerActionType, footerActionText
}) => {
  const getIcon = () => {
    switch(iconType) {
      case 'calculator':
        return (
          <div className="w-[50px] h-[50px] rounded-full bg-[#f4f7fa] flex items-center justify-center text-[#21355b] mb-6">
             <svg className="w-6 h-6 text-[#4a5f8b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <rect x="4" y="2" width="16" height="20" rx="3" />
              <path strokeLinecap="round" d="M8 6h8M8 10h8M8 14h2m4 0h2M8 18h2m4 0h2" />
             </svg>
          </div>
        );
      case 'pdf':
        return (
          <div className="w-[50px] h-[50px] rounded-full bg-[#fff0f0] flex items-center justify-center text-[#e53e3e] mb-6">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        );
      case 'article':
        return (
          <div className="w-[50px] h-[50px] rounded-full bg-[#ebfcf1] flex items-center justify-center text-[#187e41] mb-6">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h8" />
            </svg>
          </div>
        );
      case 'video':
        return (
          <div className="w-[50px] h-[50px] rounded-full bg-[#fdf5ed] flex items-center justify-center text-[#f59e0b] mb-6">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </div>
        );
      case 'tool':
        return (
          <div className="w-[50px] h-[50px] rounded-full bg-[#f4f5f7] flex items-center justify-center text-[#1f2937] mb-6">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
        );
      default: return null;
    }
  };

  const getFooterAction = () => {
    if (footerActionType === 'link') {
      return (
        <a href="#" className="inline-flex items-center text-[#009245] text-xs font-[700] hover:text-[#007a38] transition-colors">
          {footerActionText} <svg className="ml-1 w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      );
    } else if (footerActionType === 'download') {
      return (
        <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
        </button>
      );
    } else if (footerActionType === 'button') {
      return (
        <button className="px-5 py-2 bg-[#f4f5f7] hover:bg-[#e5e7eb] rounded-full text-xs font-[700] text-[#111827] transition-colors shadow-sm">
          {footerActionText}
        </button>
      );
    }
  };

  return (
    <div className="bg-white rounded-[2rem] p-8 md:p-10 flex flex-col h-full border border-gray-100 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] group">
      {getIcon()}
      <h4 className="text-[#009245] text-[9.5px] font-[800] tracking-widest uppercase mb-3">
        {category}
      </h4>
      <h3 className="text-[1.35rem] font-medium text-[#0f1b29] mb-3 leading-tight group-hover:text-[#009245] transition-colors">
        {title}
      </h3>
      <p className="text-[#6b7280] text-[13px] leading-[1.7] mb-12 flex-grow">
        {description}
      </p>
      
      <div className="flex items-center justify-between pt-5 mt-auto">
        <span className="text-[11px] font-[600] text-[#9ca3af]">
          {footerLeft}
        </span>
        {getFooterAction()}
      </div>
    </div>
  );
};

export default ResourceCard;
