import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import { Search, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import BuildingModel from '../3d/BuildingModel';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">

      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [5, 5, 10], fov: 35 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <Environment preset="city" />
          <Suspense fallback={null}>
            <BuildingModel />
          </Suspense>
          <ContactShadows position={[0, -3, 0]} opacity={0.4} scale={10} blur={2.5} far={4} color="#D4AF37" />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-block">
            <span className="text-accent-gold uppercase tracking-[0.2em] text-sm font-semibold border-b border-accent-gold pb-1.5">
              The pinnacle of urban living
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-serif font-medium leading-[1.1] text-dark-900">
            Build Your <br />
            <span className="italic relative">
              Legacy
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent-gold/30 rounded-full"></span>
            </span>
          </h1>

          <p className="text-lg text-gray-500 max-w-lg leading-relaxed font-light">
            We craft architectural landmarks that redefine skylines and investment portfolios. Experience the fusion of minimalist design and timeless luxury.
          </p>

          {/* Search Bar */}
          <div className="bg-white/80 backdrop-blur-md p-2 rounded-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/40 flex items-center max-w-md group focus-within:ring-1 focus-within:ring-accent-gold/50 transition-all">
            <Search className="text-gray-400 ml-3" size={20} />
            <input
              type="text"
              placeholder="Find your next landmark project..."
              className="bg-transparent border-none outline-none flex-grow px-4 py-3 text-dark-800 placeholder-gray-400"
            />
            <button className="bg-dark-900 hover:bg-accent-gold text-white p-3 rounded-sm transition-colors duration-300">
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div>
              <p className="text-3xl font-serif text-dark-900">150+</p>
              <p className="text-xs uppercase tracking-wider text-gray-400 mt-1">Projects Completed</p>
            </div>
            <div className="w-px h-10 bg-gray-300"></div>
            <div>
              <p className="text-3xl font-serif text-dark-900">$2B+</p>
              <p className="text-xs uppercase tracking-wider text-gray-400 mt-1">Asset Value</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
