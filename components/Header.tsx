import React, { useState } from 'react';
import { WorkFilter } from '../App.tsx';

interface HeaderProps {
  onNavigate: (page: string, id?: string, filter?: WorkFilter) => void;
}

const NAV_LINKS = [
  { name: 'ABOUT', page: 'about' },
  { name: 'WORK', page: 'works' },
  { name: 'CONTACT', page: 'home', id: 'connect' },
];

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const YoutubeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
);

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const SOCIAL_LINKS = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/theyajneshrao/', icon: <LinkedinIcon /> },
  { name: 'YouTube', href: 'https://www.youtube.com/@YajneshRao', icon: <YoutubeIcon /> },
  { name: 'Instagram', href: 'https://www.instagram.com/theyajneshrao/', icon: <InstagramIcon /> },
];

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (page: string, id?: string) => {
    onNavigate(page, id);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F8F9FA]/80 backdrop-blur-md">
      <div className="px-6 md:px-12 lg:px-24 py-4 flex justify-between items-center border-b border-neutral-300">
        <button className="font-bold text-lg tracking-wider hover:text-accent transition-colors duration-300" onClick={() => onNavigate('home')}>YAJNESH RAO</button>
        
        <div className="flex items-center gap-x-6 lg:gap-x-8">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-x-6 lg:gap-x-8">
            {NAV_LINKS.map(link => (
                <button key={link.name} onClick={() => handleLinkClick(link.page, link.id)} className="text-sm font-medium tracking-widest hover:text-accent transition-colors duration-300">
                [ {link.name} ]
                </button>
            ))}
            </nav>
            
            <div className="hidden md:flex items-center gap-x-4">
                {SOCIAL_LINKS.map(link => (
                    <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="text-neutral-600 hover:text-accent transition-colors duration-300">
                    {link.icon}
                    </a>
                ))}
            </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none z-10 relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#F8F9FA] border-b border-neutral-300 flex flex-col items-center py-8 space-y-6">
          {NAV_LINKS.map(link => (
            <button key={link.name} onClick={() => handleLinkClick(link.page, link.id)} className="text-lg font-medium tracking-widest hover:text-accent transition-colors duration-300">
              [ {link.name} ]
            </button>
          ))}
          <div className="flex items-center gap-x-6 pt-4">
             {SOCIAL_LINKS.map(link => (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="text-neutral-600 hover:text-accent transition-colors duration-300">
                  {React.cloneElement(link.icon, { width: 24, height: 24 })}
                </a>
              ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;