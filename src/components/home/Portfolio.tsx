import { useRef } from 'react';

const projects = [
  {
    bg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2670",
    title: "The Vertex Tower",
    loc: "Dubai, UAE"
  },
  {
    bg: "https://images.unsplash.com/photo-1460317442991-0ec2aa2498a2?auto=format&fit=crop&q=80&w=2548",
    title: "Eco Horizon",
    loc: "Singapore"
  },
  {
    bg: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80&w=2670",
    title: "Azure Heights",
    loc: "Miami, USA"
  },
  {
    bg: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2674",
    title: "Sanctuary Villa",
    loc: "Bali, Indonesia"
  },
  {
    bg: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2710",
    title: "Obsidian Loft",
    loc: "New York, USA"
  }
];

const Portfolio = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Note: For a true horizontal scroll effect driven by vertical scroll, 
  // one would typically use a sticky container with useScroll. 
  // For simplicity and mobile UX, we'll implement a clean horizontal overflow with snap.

  return (
    <section id="portfolio" className="py-24 bg-dark-900 border-t border-white/5 relative overflow-hidden">

      {/* Background Decorative */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-gold to-transparent opacity-30" />

      <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <span className="text-accent-gold uppercase tracking-widest text-xs font-semibold">Selected Works</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">Signature Projects</h2>
        </div>
        <div className="hidden md:flex gap-4">
          <div className="flex gap-2 text-white/50 text-sm items-center">
            <span>Scroll</span>
            <div className="w-12 h-px bg-white/20"></div>
          </div>
        </div>
      </div>

      <div
        ref={containerRef}
        className="flex overflow-x-auto gap-8 px-6 md:pl-[calc((100vw-1280px)/2+24px)] pb-12 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollBehavior: 'smooth' }}
      >
        {projects.map((project, i) => (
          <div
            key={i}
            className="min-w-[85vw] md:min-w-[600px] h-[500px] relative shrink-0 snap-center group cursor-pointer overflow-hidden rounded-sm"
          >
            <img
              src={project.bg}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-3xl font-serif text-white mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{project.title}</h3>
              <p className="text-accent-gold uppercase tracking-wider text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 text-shadow">{project.loc}</p>
            </div>

            {/* Gold Border Effect */}
            <div className="absolute inset-0 border border-accent-gold/0 group-hover:border-accent-gold/50 transition-colors duration-500 pointer-events-none md:m-4 m-2" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
