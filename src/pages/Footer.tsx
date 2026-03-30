import React from 'react';

const resources = [
  { title: "ASHRAE Global", url: "/ashrae-global" },
  { title: "Technical Standards", url: "/technical-standards" },
  { title: "Job Board", url: "/job-board" },
  { title: "Branch", url: "/branch" },

];

const branch = [
  { title: "About Us", url: "/about-us" },
  { title: "Our Team", url: "/our-team" },
  { title: "Contact Us", url: "sustbranchashrae@gmail.com" },
  { title: "Facebook", url: "https://www.facebook.com/p/Ashrae-Sust-Branch-61569962309429/" },
  { title: "YouTube", url: "https://www.youtube.com/@ASHRAESUSTBRANCH" }
]

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center  bg-[#f6f6f6] py-16 px-6 md:px-12 lg:px-24 w-full font-sans">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-8">
        {/* Brand Section */}
        <div className="flex flex-col md:max-w-xs lg:max-w-sm space-y-4">
          <img src="/Ashrae-Logo-H.png" alt="Ashrae SUST Branch Logo" />
          <p className="text-[#8492a6] text-[14px] leading-relaxed pr-4">
            Developing sustainable building technology and promoting healthy
            indoor environments for all
          </p>
        </div>

        {/* Links Sections */}
        <div className="flex flex flex-row md:flex-between md:gap-36 gap-12">
          <div>
            {resources.map((resource, index) => (
              <div key={index}>
                <ul className="space-y-4">
                  <li>
                    <a href={resource.url} className="text-[#8492a6] hover:underline text-[12px] font-semibold uppercase tracking-wider hover:text-[#153465] transition-colors">
                      {resource.title}
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <div>
            {branch.map((branch, index) => (
              <div key={index}>
                <ul className="space-y-4">
                  <li>
                    <a href={branch.url}  target="_blank" rel="noopener noreferrer" className="text-[#8492a6] hover:underline text-[12px] font-semibold uppercase tracking-wider hover:text-[#153465] transition-colors">
                      {branch.title}
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#ebecf0] text-center">
        <p className="text-[#8492a6] text-[12px] font-semibold uppercase tracking-wider">
          &copy; {new Date().getFullYear()} ASHRAE SUST Student Branch. Engineering Sustainable Futures
        </p>
      </div>
    </footer>
  );
};

export default Footer;