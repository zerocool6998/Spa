/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 32;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      try {
        window.history.pushState(null, '', `#${targetId}`);
      } catch (err) {
        // Ignore SecurityError in restricted environments
      }
    }
  };

  return (
    <section className="px-5 md:px-12 pb-10">
      <div className="relative w-full h-[540px] md:h-[760px] overflow-hidden bg-[#d4d0c6]">
        <img
          src="https://images.unsplash.com/photo-1513690277738-c9bc7eb2a992?auto=format&fit=crop&q=80&w=2200"
          alt="Textured concrete wall with natural shadows"
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-[#5f5a50]/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.5),rgba(0,0,0,0.24))]" />

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-[58px] md:text-[120px] leading-[0.95] font-serif font-normal text-[#1f1d1a] tracking-[-0.02em] mb-6">
            Curated wisdom.
          </h1>
          <p className="text-[20px] md:text-[52px] leading-tight text-[#5f5a51] font-normal mb-8 md:mb-12">
            A digital sanctuary for timeless ideas. Silence by default.
          </p>

          <a
            href="#products"
            onClick={(e) => handleNavClick(e, 'products')}
            className="inline-block px-10 py-4 md:px-16 md:py-5 rounded-2xl bg-gradient-to-b from-[#38342f] to-[#1f1d1b] text-[#efeee9] text-sm md:text-[38px] tracking-[0.1em] uppercase"
          >
            Acquire wisdom
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
