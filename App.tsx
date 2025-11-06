import React, { useState } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import DedicatedAbout from './components/DedicatedAbout.tsx';
import DedicatedWorks from './components/DedicatedWorks.tsx';
import Experience from './components/Experience.tsx';
import Works from './components/Works.tsx';
import Services from './components/Services.tsx';
import Skills from './components/Skills.tsx';
import Connect from './components/Connect.tsx';
import Footer from './components/Footer.tsx';
import Cursor from './components/Cursor.tsx';

export type WorkFilter = 'all' | 'data' | 'design';

const App: React.FC = () => {
  const [page, setPage] = useState('home');

  const handleNavigation = (targetPage: string, id?: string) => {
    setPage(targetPage);

    // Use a timeout to ensure the DOM has updated before trying to scroll
    setTimeout(() => {
        if (targetPage === 'home') {
            if (id) {
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } else {
             window.scrollTo({ top: 0, behavior: 'auto' });
        }
    }, 50);
  };

  return (
    <div className="bg-[#F8F9FA] text-[#1a1a1a] min-h-screen">
      <Cursor />
      <Header onNavigate={handleNavigation} />
      <main>
        {page === 'home' && (
          <>
            <Hero onNavigate={handleNavigation} />
            <div className="px-6 md:px-12 lg:px-24">
              <About />
              <Experience />
            </div>
            <Skills />
            <div className="px-6 md:px-12 lg:px-24">
              <Works onNavigate={handleNavigation} />
              <Services />
              <Connect />
            </div>
          </>
        )}
        {page === 'about' && (
          <div className="px-6 md:px-12 lg:px-24">
            <DedicatedAbout />
          </div>
        )}
        {page === 'works' && (
            <div className="px-6 md:px-12 lg:px-24">
                <DedicatedWorks />
            </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;