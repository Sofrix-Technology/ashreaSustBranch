import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/', isActive: false },
  { name: 'Activities', path: '/activities', isActive: true },
  { name: 'Projects', path: '/projects', isActive: false },
  { name: 'Resources', path: '/resources', isActive: false },
  { name: 'Team', path: '/team', isActive: false },
];

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full font-sans bg-white flex items-center justify-center border-b border-gray-100 relative z-50">
      <div className="max-w-360 mx-auto w-full flex items-center justify-between px-6 lg:px-12 h-20 gap-4 md:gap-0">

        {/* Logo Section */}
        <div className="flex-shrink-0 flex items-center justify-between w-full lg:w-auto">
          <a href="/" className="flex items-center gap-3">
            <img src="/Ashrae-Logo-H.webp" alt="Logo" className="h-9 md:h-11 object-contain" />
          </a>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#00508f] hover:text-[#003d6e] focus:outline-none p-2 bg-gray-50 rounded-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Center Navigation Links (Desktop) */}
        <nav className="hidden lg:flex flex-1 items-center justify-center space-x-9">
          {navLinks.map((link, idx) => (
            <NavLink
              key={idx}

              to={link.path}
              className={({ isActive }) => `text-[15px] font-[500] transition-colors py-1.5 border-b-2
                ${isActive
                  ? 'text-[#2563eb] border-[#2563eb]'
                  : 'text-[#6b7280] border-transparent hover:text-gray-900 hover:border-gray-200'
                }`}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Actions (Desktop) */}
        <div className="hidden lg:flex flex-shrink-0 items-center gap-7">
          <NavLink to="/contact" className="text-[#3b5b9c] hover:text-[#2a457d] text-[15px] font-[600] transition-colors">
            Contact
          </NavLink>
          <NavLink to="/join" className="bg-[#122338] hover:bg-[#1a3350] text-white text-[14px] font-[600] py-2.5 px-7 rounded-full transition-colors tracking-wide shadow-xs">
            Join Now
          </NavLink>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl 
        transition-all duration-300 ease-in-out overflow-hidden z-50 
        ${mobileMenuOpen ? 'max-h-screen border-t border-gray-100 py-2' : 'max-h-0'}`}
      >
        <div className="px-6 py-4 flex flex-col space-y-1">
          {navLinks.map((link, idx) => (
            <NavLink
              key={idx}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => `block text-[16px] font-[500] py-3 border-b border-gray-50 transition-colors
              ${isActive ? 'text-[#2563eb]' : 'text-gray-600 hover:text-gray-900'}`}
            >
              {link.name}
            </NavLink>
          ))}

          <div className="pt-5 pb-2 flex flex-col gap-3">
            <NavLink
              onClick={() => setMobileMenuOpen(false)}
              to="/contact"
              className="w-full text-center text-[#3b5b9c] font-[600] py-2">
              Contact
            </NavLink>

            <NavLink
              to="/join"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-[#122338] hover:bg-[#1a3350] text-white text-[15px] font-[600] py-3 rounded-full text-center transition-colors"
            >
              Join Now
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;