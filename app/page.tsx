'use client';

import { useEffect, useState } from 'react';
import AnimatedSection from './components/AnimatedSection';
import LoadingSpinner from './components/LoadingSpinner';
import { useScrollAnimation } from './hooks/useScrollAnimation';

type Particle = { id: number; x: number; y: number; size: number; delay: number };
type Feature = { title: string; desc: string };
type Plan = { name: string; price: string; color: string; features: string[] };

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const scrollY = useScrollAnimation();

  useEffect(() => {
    try {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePos({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      
      // Generate floating particles
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 8
      }));
      setParticles(newParticles);
      
      // Simulate loading
      setTimeout(() => setIsLoading(false), 1500);
      
      return () => window.removeEventListener('mousemove', handleMouseMove);
    } catch (err) {
      setError('Failed to initialize page');
      setIsLoading(false);
    }
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 to-black text-white">
        <div className="text-center">
          <h1 className="text-4xl font-['Orbitron'] mb-4 text-red-400">SYSTEM ERROR</h1>
          <p className="text-red-200">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 rounded transition-colors"
          >
            RESTART MISSION
          </button>
        </div>
      </div>
    );
  }

  const features: Feature[] = [
    { title: 'RETRO ARCADE', desc: 'Classic 8-bit gameplay with modern cosmic twists' },
    { title: 'SPACE EXPLORATION', desc: 'Navigate through infinite galaxies and discover new worlds' },
    { title: 'NEON POWER-UPS', desc: 'Collect glowing energy cores to enhance your abilities' }
  ];

  const plans: Plan[] = [
    { name: 'EARTH', price: 'FREE', color: 'from-green-400 to-blue-500', features: ['Basic Missions', 'Limited Lives', 'Standard Ship'] },
    { name: 'MARS', price: '$9.99', color: 'from-red-400 to-orange-500', features: ['Advanced Missions', 'Unlimited Lives', 'Upgraded Ship', 'Bonus Levels'] },
    { name: 'NEBULA', price: '$19.99', color: 'from-purple-400 to-pink-500', features: ['All Missions', 'Infinite Lives', 'Elite Ship', 'Exclusive Content', 'Priority Support'] }
  ];

  const Starfield = () => {
    const stars = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 2
    }));

    return (
      <div className="starfield">
        {stars.map(star => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              transform: `translate(${mousePos.x * 0.01 + scrollY * 0.02}px, ${mousePos.y * 0.01}px)`
            }}
          />
        ))}
      </div>
    );
  };

  const OrbitingIcon = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
    <div 
      className="absolute orbit"
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <main className="min-h-screen relative scanlines">
        <Starfield />
      
      {/* Navbar */}
      <header className="w-full px-6 py-4 relative z-10">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-['Orbitron'] font-bold glow-text text-cyan-400">
            GALACTIC ARCADE
          </h1>
          <div className="flex gap-6">
            {['HOME', 'MISSIONS', 'LEADERBOARD', 'CONTACT'].map(item => (
              <a 
                key={item}
                href="#" 
                className="font-['Orbitron'] text-sm hover:text-pink-400 transition-colors duration-300 hover:glow-text"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl relative">


          {/* Main Planet with Pulsing Rings */}
          <div className="float mb-8 relative">
            {/* Pulsing Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="pulse-ring absolute w-32 h-32 border-2 border-cyan-400 rounded-full"></div>
              <div className="pulse-ring absolute w-32 h-32 border-2 border-pink-400 rounded-full" style={{animationDelay: '1s'}}></div>
            </div>
            
            {/* Rotating Ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rotate-slow w-40 h-40 border border-purple-400 rounded-full opacity-30"></div>
            </div>
            
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 rounded-full relative overflow-hidden neon-box text-cyan-400">
              <div className="absolute inset-2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-70"></div>
              <div className="absolute top-4 left-6 w-4 h-4 bg-cyan-300 rounded-full opacity-80 float"></div>
              <div className="absolute bottom-6 right-4 w-6 h-6 bg-pink-300 rounded-full opacity-60 float" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
          
          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {particles.map(particle => (
              <div
                key={particle.id}
                className="particle"
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  animationDelay: `${particle.delay}s`
                }}
              />
            ))}
          </div>

          <h1 
            className="font-['Orbitron'] text-6xl md:text-8xl font-black mb-6 glow-text bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent glitch"
            data-text="GALACTIC QUEST"
          >
            GALACTIC QUEST
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-cyan-100 font-light typing border-cyan-400">
            Enter the ultimate fusion of retro arcade action and cosmic adventure
          </p>
          <button className="pixel-button px-8 py-4 text-xl font-['Orbitron'] font-bold text-white rounded-lg hover:scale-105 transition-all duration-300 relative overflow-hidden group">
            <span className="relative z-10">START MISSION</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:animate-pulse"></div>
          </button>
        </div>
      </section>

      {/* Features Section */}
      <AnimatedSection animation="fadeUp" delay={200}>
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-['Orbitron'] font-bold text-center mb-16 glow-text text-cyan-400">
            COSMIC FEATURES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <AnimatedSection key={i} animation="fadeUp" delay={i * 100}>
                <div className="cosmic-card p-6 rounded-lg hover:scale-105 transition-all duration-300 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h3 className="font-['Orbitron'] text-xl font-bold mb-3 text-pink-400 relative z-10 group-hover:glow-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-cyan-100 relative z-10">{feature.desc}</p>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Pricing Section */}
      <AnimatedSection animation="fadeUp" delay={400}>
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-['Orbitron'] font-bold text-center mb-16 glow-text text-cyan-400">
            CHOOSE YOUR PLANET
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <AnimatedSection key={i} animation="scale" delay={i * 150}>
                <div className="cosmic-card p-8 rounded-lg text-center relative overflow-hidden group hover:neon-box hover:text-cyan-400 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${plan.color} rounded-full float relative`}>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent group-hover:animate-spin"></div>
                  </div>
                  <h3 className="font-['Orbitron'] text-2xl font-bold mb-2 text-pink-400 relative z-10">{plan.name}</h3>
                  <div className="text-3xl font-bold mb-6 glow-text text-cyan-400 relative z-10">{plan.price}</div>
                  <ul className="space-y-2 mb-8 relative z-10">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="text-cyan-100 hover:text-pink-300 transition-colors duration-300">✨ {feature}</li>
                    ))}
                  </ul>
                  <button className="pixel-button w-full py-3 font-['Orbitron'] font-bold text-white rounded-lg relative z-10 hover:shadow-lg hover:shadow-cyan-500/50">
                    SELECT PLANET
                  </button>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse"></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Footer */}
      <footer className="border-t border-cyan-800 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-['Orbitron'] text-2xl font-bold glow-text text-cyan-400 mb-4 md:mb-0 hover:scale-110 transition-transform duration-300 cursor-pointer">
              GALACTIC ARCADE
            </div>
            <div className="text-cyan-200 text-sm">
              © 2025 Galactic Arcade. All rights reserved across the universe.
            </div>
          </div>
          <div className="mt-8 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        </div>
      </footer>
      </main>
    </>
  );
}
