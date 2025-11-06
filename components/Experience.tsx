import React from 'react';

const professionalExperience = [
  {
    logo: 'AIT',
    title: 'Data Analyst',
    company: 'Astin IT Solutions, London, UK',
    date: 'Jul 2024 - Present',
    description: 'leveraging data to provide actionable insights and drive business growth through advanced analytics and reporting.'
  },
  {
    logo: 'QS',
    title: 'Digital Marketing & CRM Analyst',
    company: 'Queensbury School, London, UK',
    date: 'May 2023 - June 2025',
    description: 'managed crm systems and executed data-driven digital marketing campaigns to increase student enrollment.'
  },
  {
    logo: 'ZT',
    title: 'Web Developer and Strategist',
    company: 'Zephyr Technologies, Mangalore, India',
    date: 'Aug 2021 - Nov 2022',
    description: 'developed and maintained client websites, focusing on user experience and performance optimization.'
  },
  {
    logo: 'FF',
    title: 'Social Media Manager (Freelance)',
    company: 'FITQ Fitness, Mangalore, India',
    date: 'Nov 2018 - Jul 2021',
    description: 'grew online presence and engagement across social platforms through strategic content creation and community management.'
  },
];

const education = [
    {
        logo: 'MU',
        university: 'Middlesex University, UK',
        degree: 'Master’s in Data Science',
        date: 'Jan 2023 - Apr 2024',
        description: 'specialized in machine learning, big data technologies, and statistical analysis to solve real-world problems.'
    },
    {
        logo: 'SDIT',
        university: 'Shree Devi Institute of Technology, India',
        degree: 'Bachelor’s in Computer Science',
        date: 'Jul 2018 - Jul 2022',
        description: 'focused on foundational computer science principles, software development, and database management.'
    }
]

const ExperienceItem: React.FC<{logo: string; title: string; subtitle: string; date: string; description: string;}> = ({ logo, title, subtitle, date, description }) => (
    <div className="flex gap-x-4 sm:gap-x-6 items-start relative">
        <div className="w-12 h-12 bg-neutral-100 text-neutral-500 font-bold flex items-center justify-center rounded-lg shadow-md border border-neutral-200 flex-shrink-0 bg-white z-10">{logo}</div>
        <div>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-neutral-600 font-medium">{subtitle}</p>
            <p className="text-sm text-neutral-500 mt-1">{date}</p>
            <p className="text-sm text-neutral-600 mt-2 lowercase">{description}</p>
        </div>
    </div>
);

const BookIcon = () => (
    <svg className="w-20 h-20 text-accent mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
    </svg>
);


const Experience: React.FC = () => {
  return (
    <section id="experience" className="pb-20 lg:pb-28">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Box 1: Experience */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-10">experience.</h2>
            <div className="space-y-8 relative">
              <div aria-hidden="true" className="absolute top-5 left-6 h-[calc(100%-2.5rem)] w-0.5 bg-neutral-200"></div>
              {professionalExperience.map((job, index) => (
                <ExperienceItem 
                    key={index}
                    logo={job.logo}
                    title={job.title}
                    subtitle={job.company}
                    date={job.date}
                    description={job.description}
                />
              ))}
            </div>
          </div>

          {/* Column 2: Education & Book */}
          <div className="flex flex-col gap-8 md:gap-12">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-10">education.</h2>
              <div className="space-y-8 relative">
                <div aria-hidden="true" className="absolute top-5 left-6 h-[calc(100%-2.5rem)] w-0.5 bg-neutral-200"></div>
                {education.map((edu, index) => (
                  <ExperienceItem 
                      key={index}
                      logo={edu.logo}
                      title={edu.university}
                      subtitle={edu.degree}
                      date={edu.date}
                      description={edu.description}
                  />
                ))}
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg flex flex-col items-center text-center">
                <BookIcon />
                <h3 className="text-3xl font-black tracking-tighter mb-2">nowhere to belong.</h3>
                <p className="text-neutral-600 max-w-xs mb-6">
                    A personal memoir exploring the journey of moving from India to the UK and the quest for identity.
                </p>
                <a 
                    href="https://amzn.eu/d/1i6z8CD"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-bold tracking-wider group bg-accent text-white px-6 py-3 hover:bg-neutral-900 transition-colors flex items-center"
                >
                    BUY ON AMAZON
                    <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;