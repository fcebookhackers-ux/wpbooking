import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Credibility from './components/Credibility';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import AdvancedFeatures from './components/AdvancedFeatures';
import Comparison from './components/Comparison';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  // IntersectionObserver to animate content columns on screen entrance
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { 
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-bgLight flex flex-col font-sans tracking-tight antialiased text-ink selection:bg-primary/20">
      <Header />
      <main className="flex-1">
        <Hero />
        <Credibility />
        <Benefits />
        <HowItWorks />
        <AdvancedFeatures />
        <Comparison />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
