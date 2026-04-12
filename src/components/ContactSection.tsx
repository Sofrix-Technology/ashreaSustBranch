import React from 'react';
import { Mail, MapPin, Globe, Users, Share2 } from 'lucide-react';
import ContactForm from './ContactForm';

const ContactSection: React.FC = () => {


  const socials = [
    { label: 'Website', href: 'https://www.ashrae.org/', icon: <Globe size={18} /> },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/ashrae-sust-branch/', icon: <Users size={18} /> },
    { label: 'Facebook', href: 'https://www.facebook.com/p/Ashrae-Sust-Branch-61569962309429/', icon: <Share2 size={18} /> },
  ];
  
  return (
    <section id="contact" className="bg-white py-20 font-sans">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="mb-14">
          <h2 className="text-4xl font-bold text-[#122338] tracking-tight mb-3">Reach Out</h2>
          <p className="text-[#5f7385] text-base leading-relaxed max-w-md">
            Have questions about our HVAC&amp;R research or looking to join the SUST student branch?
            Our team in Khartoum is ready to collaborate.
          </p>
        </div>

        {/* ── Two-column grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ── LEFT ── */}
          <div>
            {/* Email card */}
            <a
              href="mailto:sustbranchashrae@gmail.com"
              className="flex items-center gap-4 bg-[#f8f9fb] border border-[#e9ecf0] rounded-2xl px-6 py-5 mb-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 no-underline"
            >
              <div className="w-11 h-11 rounded-xl bg-[#1a2e44] text-white flex items-center justify-center shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-[#8a9bb0] mb-0.5">Email Us</p>
                <p className="text-sm font-semibold text-[#122338]">sustbranchashrae@gmail.com</p>
              </div>
            </a>

            {/* Location card */}
            <a
              href="https://www.google.com/maps?q=15.560283,32.539111"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#f8f9fb] border border-[#e9ecf0] rounded-2xl px-6 py-5 mb-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <div className="w-11 h-11 rounded-xl bg-[#1a6b45] text-white flex items-center justify-center shrink-0">
                <MapPin size={18} />
              </div>

              <div>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-[#8a9bb0] mb-0.5">
                  Location
                </p>

                <p className="text-sm font-semibold text-[#122338]">
                  Sudan University of Science and Technology
                </p>

                <p className="text-xs text-[#7a8fa3] mt-0.5">
                  College of Engineering - Mechanical Engineering Department, Khartoum, Sudan
                </p>
              </div>
            </a>

            {/* Social icons */}
            <p className="text-[10px] font-semibold tracking-widest uppercase text-[#8a9bb0] mt-7 mb-3">
              Follow Our Progress
            </p>
            <div className="flex gap-2.5">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-[#dde3ea] bg-white flex items-center justify-center text-[#4a6275] hover:bg-[#122338] hover:border-[#122338] hover:text-white hover:-translate-y-0.5 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* OpenStreetMap embed */}
            <div className="mt-7 rounded-2xl overflow-hidden border border-[#dde3ea] h-52">
              <iframe
                title="SUST Khartoum Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=32.535%2C15.557%2C32.543%2C15.563&layer=mapnik&marker=15.560283%2C32.539111"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* ── RIGHT: form ── */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;