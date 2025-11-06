import React from 'react';

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const YoutubeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
);

const Connect: React.FC = () => {
  return (
    <section id="connect" className="py-20 lg:py-32 border-t border-neutral-300 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 text-[20rem] font-black text-neutral-200/50 select-none pointer-events-none z-0 opacity-20" aria-hidden="true">
            @
        </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        
        {/* Left Column: Text Content */}
        <div className="text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4">Have an idea?</h2>
          <p className="text-lg text-neutral-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
            Whether it's a data challenge, a design project, or a digital strategy question—I'm here to help. Let's start a conversation.
          </p>
          <div className="mt-8">
            <h3 className="font-bold tracking-widest text-sm uppercase text-neutral-500 mb-2">Based In</h3>
            <p className="text-xl">London, United Kingdom</p>
          </div>
        </div>

        {/* Right Column: Contact Actions */}
        <div className="flex flex-col items-center lg:items-start space-y-10">
            <div>
                <h3 className="font-bold tracking-widest text-sm uppercase text-neutral-500 mb-4 text-center lg:text-left">Start with an Email</h3>
                <a 
                    href="mailto:contactyajneshrao@gmail.com" 
                    className="group block text-2xl md:text-3xl font-medium border-2 border-neutral-300 p-6 hover:border-accent hover:bg-accent hover:text-white transition-all duration-300 relative"
                >
                    <span className="relative z-10">contactyajneshrao@gmail.com</span>
                    <span className="absolute top-1/2 right-6 -translate-y-1/2 text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-0 translate-x-4">→</span>
                </a>
            </div>

            <div>
                 <h3 className="font-bold tracking-widest text-sm uppercase text-neutral-500 mb-4 text-center lg:text-left">Or Find Me Here</h3>
                <div className="flex items-center justify-center lg:justify-start gap-6">
                    <a href="https://www.instagram.com/theyajneshrao/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-neutral-600 hover:text-accent transition-colors duration-300"><InstagramIcon /></a>
                    <a href="https://www.linkedin.com/in/theyajneshrao/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-neutral-600 hover:text-accent transition-colors duration-300"><LinkedinIcon /></a>
                    <a href="https://www.youtube.com/@YajneshRao" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-neutral-600 hover:text-accent transition-colors duration-300"><YoutubeIcon /></a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;