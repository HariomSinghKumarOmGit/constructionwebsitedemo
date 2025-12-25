import { type ReactNode, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Smooth dampening could be added here, but direct mapping works for the 'ray' feel
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-primary-white relative overflow-hidden flex flex-col">
      {/* Ray-Traced Light Leak Effect */}
      <div
        className="pointer-events-none fixed inset-0 z-[1] opacity-40 mix-blend-soft-light transition-transform duration-75 ease-out"
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(212, 175, 55, 0.15), transparent 80%)`
        }}
      />

      <Navbar />

      <main className="flex-grow z-10">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
