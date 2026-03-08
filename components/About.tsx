/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#EBE7DE]">
      
      {/* Introduction / Story */}
      <div className="py-24 px-6 md:px-12 max-w-[1800px] mx-auto flex flex-col md:flex-row items-start gap-16 md:gap-32">
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-6xl font-serif text-[#2C2A26] leading-tight">
            Born from the mind, <br/> built for the soul.
          </h2>
        </div>
        <div className="md:w-2/3 max-w-2xl">
          <p className="text-lg md:text-xl text-[#5D5A53] font-light leading-relaxed mb-8">
            Aura was founded on a simple but radical premise: knowledge should be accessible, beautiful, and distraction-free. It should feel like a quiet conversation with a brilliant mind.
          </p>
          <p className="text-lg md:text-xl text-[#5D5A53] font-light leading-relaxed mb-8">
            In an age of infinite noise, we curate digital books that respect your attention. We select works that deepen your understanding—from design philosophy to sustainable living—creating a digital library that enriches your life without cluttering your space.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1200" 
            alt="Digital Reading Space" 
            className="w-full h-[400px] object-cover grayscale contrast-[0.9] brightness-110 mt-12"
          />
          <p className="text-sm font-medium uppercase tracking-widest text-[#A8A29E] mt-4">
            The Aura Library, Digital
          </p>
        </div>
      </div>

      {/* Philosophy Blocks (Formerly Features) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="order-2 lg:order-1 relative h-[500px] lg:h-auto overflow-hidden group">
           <img 
             src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=1200" 
             alt="Abstract Paper Texture" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
           />
        </div>
        <div className="order-1 lg:order-2 flex flex-col justify-center p-12 lg:p-24 bg-[#D6D1C7]">
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#5D5A53] mb-6">Curation</span>
           <h3 className="text-4xl md:text-5xl font-serif mb-8 text-[#2C2A26] leading-tight">
             Ideas that stand <br/> the test of time.
           </h3>
           <p className="text-lg text-[#5D5A53] font-light leading-relaxed mb-12 max-w-md">
             We reject the ephemeral. Every Aura ebook is chosen for its lasting value. These are not just files; they are tools for thought, designed to be revisited, annotated, and cherished.
           </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="flex flex-col justify-center p-12 lg:p-24 bg-[#2C2A26] text-[#F5F2EB]">
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] mb-6">The Experience</span>
           <h3 className="text-4xl md:text-5xl font-serif mb-8 text-[#F5F2EB] leading-tight">
             Instant access.
           </h3>
           <p className="text-lg text-[#A8A29E] font-light leading-relaxed mb-12 max-w-md">
             Our platform respects your time. No shipping delays, no physical waste. Just immediate access to transformative ideas, formatted beautifully for any device you choose.
           </p>
        </div>
        <div className="relative h-[500px] lg:h-auto overflow-hidden group">
           <img 
             src="https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=1200" 
             alt="Person reading on tablet" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 brightness-90"
           />
        </div>
      </div>
    </section>
  );
};

export default About;