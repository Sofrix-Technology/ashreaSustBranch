import FeaturedProject from '../components/project/FeaturedProject';
import ProjectCTA from '../components/project/ProjectCTA';
import ShowcaseCard, { type ShowcaseItem } from '../components/project/ShowcaseCard';

const showcaseData: ShowcaseItem[] = [
  {
    id: 1,
    category: "Case Study",
    title: "Energy Efficiency Studies",
    description: "A comparative analysis of solar powered cooling versus traditional electrical vapor compression in arid climates.",
    tags: ["MATLAB", "EnergyPlus"],
    linkText: "View technical report",
    imageUrl: "/dashboard.jpg"
  },
  {
    id: 2,
    category: "Innovation",
    title: "Sustainability Solutions",
    description: "Development of passive cooling prototypes using locally sourced porous materials and evaporative principles.",
    tags: ["Prototype", "Thermal Imaging"],
    linkText: "Examine prototype",
    imageUrl: "/greenbuilding.jpg"
  },
  {
    id: 3,
    category: "Infrastructure",
    title: "District Cooling Analysis",
    description: "Feasibility study for a campus-wide district cooling network at SUST to reduce peak demand by 30%.",
    tags: ["Hydronic Calc", "LCA"],
    linkText: "Read feasibility study",
    imageUrl: "/scitch.jpg"
  }
];

export default function Projects() {
  return (
    <div className="space-y-24 py-12 px-6 max-w-360 mx-auto">
      <FeaturedProject />

      <div>
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Student Showcase</h2>
          <div className="flex gap-4 text-slate-400">
            <button className="hover:text-slate-900">←</button>
            <button className="hover:text-slate-900">→</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseData.map((item) => (
            <ShowcaseCard
              key={item.id}
              category={item.category}
              title={item.title}
              description={item.description}
              tags={item.tags}
              linkText={item.linkText}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>

      <ProjectCTA />
    </div>
  );
}