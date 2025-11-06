import React, { useState, useEffect } from 'react';

const ROLES = ['Data Analyst', 'Creative Designer', 'Digital Strategist'];
const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const PAUSE_DURATION = 1500;

const PRINCIPLES = [
  {
    title: "Insightful Analytics",
    description: "Transforming complexity into clarity. I dig deep into data to uncover actionable insights that drive intelligent decision-making."
  },
  {
    title: "Intuitive Design",
    description: "Crafting experiences that resonate. I build visually compelling and user-friendly designs that communicate ideas effectively."
  },
  {
    title: "Impactful Strategy",
    description: "Connecting brands with people. I develop data-informed digital strategies that build audiences and achieve business goals."
  }
];


const About: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = ROLES[roleIndex];
      const currentText = isDeleting
        ? currentRole.substring(0, text.length - 1)
        : currentRole.substring(0, text.length + 1);

      setText(currentText);

      if (!isDeleting && currentText === currentRole) {
        // Pause at the end of typing
        setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
      } else if (isDeleting && currentText === '') {
        // Move to the next role
        setIsDeleting(false);
        setRoleIndex((prevIndex) => (prevIndex + 1) % ROLES.length);
      }
    };

    const typingTimeout = setTimeout(
      handleTyping,
      isDeleting ? DELETING_SPEED : TYPING_SPEED
    );

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="about" className="py-20 lg:py-28 border-t border-neutral-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
            I'm Yajnesh Rao.
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-neutral-700 mb-10 h-12">
            A <span className="font-semibold text-accent typing-cursor">{text}</span>
          </h3>
          <p className="text-lg md:text-xl text-neutral-700 leading-relaxed max-w-3xl mx-auto">
            My work lives at the intersection of data, design, and digital strategy. I believe the most powerful solutions emerge where analytical precision meets creative intuition. It’s not just about what the data says, but how you bring it to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-left mt-16">
          {PRINCIPLES.map((principle, index) => (
            <div key={index}>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-accent font-black text-2xl tracking-tighter">{`0${index + 1}`}</span>
                <div className="w-full h-[1px] bg-neutral-300"></div>
              </div>
              <h4 className="text-xl font-bold mb-3">{principle.title}</h4>
              <p className="text-neutral-600 leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;