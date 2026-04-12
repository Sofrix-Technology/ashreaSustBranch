import React from 'react';
import {
  Calculator,
  FileText,
  AlignLeft,
  GraduationCap,
  Wrench,
  ArrowRight,
  Download,
} from 'lucide-react';

export interface ResourceCardProps {
  iconType: 'calculator' | 'pdf' | 'article' | 'video' | 'tool';
  category: string;
  title: string;
  description: string;
  footerLeft: string;
  footerActionType: 'link' | 'download' | 'button';
  footerActionText?: string;
}

const iconMap: Record<ResourceCardProps['iconType'], { icon: React.ReactNode; bg: string; color: string }> = {
  calculator: {
    icon: <Calculator size={22} />,
    bg: 'bg-[#f4f7fa]',
    color: 'text-[#4a5f8b]',
  },
  pdf: {
    icon: <FileText size={22} />,
    bg: 'bg-[#fff0f0]',
    color: 'text-[#e53e3e]',
  },
  article: {
    icon: <AlignLeft size={22} />,
    bg: 'bg-[#ebfcf1]',
    color: 'text-[#187e41]',
  },
  video: {
    icon: <GraduationCap size={22} />,
    bg: 'bg-[#fdf5ed]',
    color: 'text-[#f59e0b]',
  },
  tool: {
    icon: <Wrench size={22} />,
    bg: 'bg-[#f4f5f7]',
    color: 'text-[#1f2937]',
  },
};

const ResourceCard: React.FC<ResourceCardProps> = ({
  iconType, category, title, description, footerLeft, footerActionType, footerActionText
}) => {
  const { icon, bg, color } = iconMap[iconType];

  const getFooterAction = () => {
    if (footerActionType === 'link') {
      return (
        <a href="#" className="inline-flex items-center gap-1 text-[#009245] text-xs font-[700] hover:text-[#007a38] transition-colors">
          {footerActionText}
          <ArrowRight size={13} />
        </a>
      );
    } else if (footerActionType === 'download') {
      return (
        <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors">
          <Download size={15} />
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
      <div className={`w-[50px] h-[50px] rounded-full ${bg} ${color} flex items-center justify-center mb-6`}>
        {icon}
      </div>
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
