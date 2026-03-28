import React, { useState } from 'react';

// Sample dropdown items to illustrate hover functionality
const dropdownItems = [
  { label: 'Overview', href: '#' },
  { label: 'Leadership', href: '#' },
  { label: 'History', href: '#' },
  { label: 'Policies', href: '#' },
];

const navLinks = [
  { name: 'About', hasDropdown: true },
  { name: 'Technical Resources', hasDropdown: true },
  { name: 'Professional Development', hasDropdown: true, isActive: true },
  { name: 'Conferences', hasDropdown: true },
  { name: 'Communities', hasDropdown: true },
  { name: 'Membership', hasDropdown: true },
];

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full font-sans bg-white flex items-center justify-center border-b border-gray-100 relative z-50">
      <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between px-4 md:px-8 py-3.5 gap-4 md:gap-0">

        {/* Logo Section */}
        <div className="flex-shrink-0 flex justify-between items-center w-full lg:w-auto">
          <a href="/" className="flex items-center gap-3">
            <img src="/Ashrae-Logo-H.png" alt="Logo" className="h-10 md:h-12 object-contain" />
          </a>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#00508f] hover:text-[#003d6e] focus:outline-none p-2 bg-gray-50 rounded-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
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
        <nav className="hidden lg:flex flex-1 items-center justify-center space-x-10">
          {navLinks.map((link, idx) => (
            <div key={idx} className="group relative py-2">
              <a href="#" className="flex items-center gap-1.5 text-[15px] font-medium text-gray-700 hover:text-gray-900 transition-colors">
                {link.name}
                {link.hasDropdown && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 mt-0.5 text-gray-500 group-hover:text-gray-800 transition-transform group-hover:-rotate-180 duration-200">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                )}
              </a>

              {/* Dropdown Menu */}
              {link.hasDropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-48 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden transform group-hover:translate-y-0 translate-y-2">
                  <div className="py-2">
                    {dropdownItems.map((item, i) => (
                      <a key={i} href={item.href} className="block px-5 py-2.5 text-[14px] font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Actions (Desktop) */}
        <div className="flex-shrink-0 flex items-center gap-3">
          <a className="bg-[#005596] hover:bg-[#00427a] text-white text-[14px] font-bold uppercase py-2.5 px-4 rounded-[4px] text-center shadow-sm">
            Bookstore
          </a>
          <a className="bg-[#65a31a] hover:bg-[#528614] text-white text-[14px] font-bold uppercase py-2.5 px-4 rounded-[4px] text-center shadow-sm">
            Log In
          </a>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out overflow-hidden z-50 ${mobileMenuOpen ? 'max-h-[800px] border-t border-gray-100' : 'max-h-0'}`}
      >
        <div className="px-6 py-6 flex flex-col space-y-2">
          {navLinks.map((link, idx) => (
            <a key={idx} href="#" className="flex items-center justify-between text-[16px] font-medium text-gray-700 py-3 border-b border-gray-100 hover:text-gray-900 transition-colors">
              {link.name}
              {link.hasDropdown && (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-[18px] h-[18px] text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              )}
            </a>
          ))}

          <div className="flex-shrink-0 flex items-center gap-3">
            <a className="bg-[#005596] hover:bg-[#00427a] text-white text-[14px] font-bold uppercase py-2.5 px-4 rounded-[4px] text-center shadow-sm">
              Bookstore
            </a>
            <a className="bg-[#65a31a] hover:bg-[#528614] text-white text-[14px] font-bold uppercase py-2.5 px-4 rounded-[4px] text-center shadow-sm">
              Log In
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;