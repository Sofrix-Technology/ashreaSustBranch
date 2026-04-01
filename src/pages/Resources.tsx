import ResourceHero from '../components/ResourceHero';
import ResourceFilters from '../components/ResourceFilters';
import ResourceCard from '../components/ResourceCard';
import PremiumResourceCard from '../components/PremiumResourceCard';
import ResourceRequest from '../components/ResourceRequest';

const Resources = () => {
  const cardsData = [
    {
      iconType: 'calculator' as const,
      category: 'HVAC TOOLS',
      title: 'Psychrometric Calculator',
      description: 'Calculate atmospheric moisture properties including dew point, humidity ratio, and enthalpy for precise climate control designs.',
      footerLeft: 'Interactive Web Tool',
      footerActionType: 'link' as const,
      footerActionText: 'Open Tool'
    },
    {
      iconType: 'pdf' as const,
      category: 'PDFS & STANDARDS',
      title: 'ASHRAE Standard 62.1',
      description: 'Ventilation for Acceptable Indoor Air Quality. Essential guidelines for designing ventilation systems in commercial buildings.',
      footerLeft: 'PDF • 4.2 MB',
      footerActionType: 'download' as const,
    },
    {
      iconType: 'article' as const,
      category: 'ARTICLES',
      title: 'Solar Cooling in Sudan',
      description: 'A technical review of absorption chillers powered by solar thermal energy in high-temperature arid climates like Khartoum.',
      footerLeft: '12 Min Read',
      footerActionType: 'link' as const,
      footerActionText: 'Read More'
    },
    {
      iconType: 'video' as const,
      category: 'LEARNING MATERIALS',
      title: 'Fundamentals of VRF',
      description: 'Step-by-step video series and documentation on Variable Refrigerant Flow systems and their application in sustainable architecture.',
      footerLeft: 'Video Course',
      footerActionType: 'button' as const,
      footerActionText: 'Watch Now'
    },
    {
      iconType: 'tool' as const,
      category: 'HVAC TOOLS',
      title: 'Duct Sizing Chart',
      description: 'Interactive sizing charts for galvanized steel and flexible ducts based on friction loss and velocity standards.',
      footerLeft: 'Excel Template',
      footerActionType: 'download' as const,
    }
  ];

  return (
    <div className="w-full bg-white flex flex-col">
      <ResourceHero />
      <ResourceFilters />

      <div className="w-full max-w-360 mx-auto px-6 lg:px-12 py-10 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cardsData.map((data, idx) => (
            <ResourceCard key={idx} {...data} />
          ))}
          <PremiumResourceCard />
        </div>
      </div>

      <ResourceRequest />
    </div>
  );
};

export default Resources;
