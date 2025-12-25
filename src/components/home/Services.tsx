import { Pencil, Castle, HardHat, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Pencil size={32} />,
    title: 'Architectural Planning',
    desc: 'From initial sketches to blueprints, we design spaces that inspire and endure.'
  },
  {
    icon: <Castle size={32} />,
    title: 'Luxury Estate Sales',
    desc: 'Access an exclusive portfolio of high-end properties in the world’s most coveted locations.'
  },
  {
    icon: <HardHat size={32} />,
    title: 'Project Management',
    desc: 'End-to-end execution with uncompromising attention to detail and quality capability.'
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'Investment Consulting',
    desc: 'Strategic insights for maximizing value in the luxury real estate market.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-primary-off">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-accent-gold uppercase tracking-widest text-xs font-semibold">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif text-dark-900 mt-4">Curated Services</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-white border border-transparent hover:border-accent-gold/30 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(212,175,55,0.1)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-accent-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary-off rounded-full flex items-center justify-center text-dark-800 group-hover:bg-accent-gold group-hover:text-white transition-colors duration-500 mb-6">
                  {service.icon}
                </div>

                <h3 className="text-xl font-serif text-dark-900 mb-3 group-hover:translate-x-1 transition-transform duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.desc}
                </p>

                <div className="w-8 h-px bg-gray-200 mt-6 group-hover:w-full group-hover:bg-accent-gold transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
