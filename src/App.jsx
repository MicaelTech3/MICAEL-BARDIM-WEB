import React, { useState, useEffect } from 'react';
import './App.css';
import Dock from './components/Dock';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    // 1. Observer para indicar a seção ativa no menu Dock
    const sectionIds = ['inicio', 'sobre', 'projetos', 'skills', 'contato'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-35% 0px -45% 0px' }
    );

    sections.forEach((s) => navObserver.observe(s));

    // 2. Observer para animações de entrada fluida no Scroll (Reveal)
    const revealEls = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    );

    revealEls.forEach((el) => revealObserver.observe(el));

    return () => {
      navObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Dock activeSection={activeSection} />
      <Hero />
      <main className="wrap">
        <About />
        <Projects />
      </main>
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
