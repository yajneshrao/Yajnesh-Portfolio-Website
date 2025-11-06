
import React from 'react';

const SKILLS_DATA = {
  'Data & Analytics': [
    'Python (Pandas, NumPy)',
    'SQL & Databases',
    'Power BI',
    'Tableau',
    'Excel (Advanced)',
    'Google Analytics',
    'Statistical Analysis',
    'A/B Testing',
    'Machine Learning Concepts',
  ],
  'Design & Creative': [
    'Figma',
    'Adobe Creative Suite',
    'Canva Pro',
    'Branding & Identity',
    'UI/UX Principles',
    'Visual Design',
    'Content Strategy',
    'Copywriting',
    'Presentation Design',
  ],
  'Tools & Technologies': [
    'Webflow & WeWeb',
    'JavaScript (React)',
    'HTML5 & CSS3',
    'Git & GitHub',
    'Automation (Zapier)',
    'Notion',
    'Microsoft Office Suite',
    'Agile Methodologies',
    'Jira & Confluence',
  ],
};

const Skills: React.FC = () => {
  const categories = Object.keys(SKILLS_DATA) as (keyof typeof SKILLS_DATA)[];
  const directions = ['down', 'up', 'down'];

  return (
    <section id="skills" className="bg-[#1a1a1a] text-white overflow-hidden">
        <div className="py-20 lg:py-32 border-y border-neutral-800">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">My Toolkit</h2>
                    <p className="text-lg text-neutral-400 max-w-2xl mx-auto">A selection of skills and technologies I use to bring ideas to life.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 scrolling-wrapper">
                    {categories.map((category, index) => (
                        <div key={category} className="space-y-4">
                            <h3 className="text-2xl font-bold text-center text-accent mb-6 tracking-wider">{category}</h3>
                            <div className="relative h-80 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
                                <div className={`scrolling-column ${directions[index] === 'up' ? 'scroll-up' : 'scroll-down'}`}>
                                    {[...SKILLS_DATA[category], ...SKILLS_DATA[category]].map((skill, skillIndex) => (
                                        <div key={skillIndex} className="bg-neutral-800 text-center py-4 px-6 rounded-md mb-4 border border-neutral-700">
                                            <p className="text-lg text-neutral-300 font-light">{skill}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Skills;