import React from 'react';

const ExternalLinkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>;

const SELECTED_PROJECTS = [
  {
    title: "QSE Learning | Local Lead Generation Campaign",
    description: "Ran a 30-day Google Ads & Meta funnel, achieving a 7.2× ROAS and doubling total school enrolments within 3 months.",
    category: "Marketing",
    tags: ["Paid Media", "Google Ads", "CRO"],
    linkText: "View Report",
    imageUrl: "/images/project-qse-leadgen.jpg"
  },
  {
    title: "Lloyds Bank | Brand Identity Redesign",
    description: "Redesigned a legacy logo to retain heritage while modernising its visual identity for a timeless and versatile look.",
    category: "Design",
    tags: ["Branding", "Logo Design", "Visual Identity"],
    linkText: "View Presentation",
    imageUrl: "/images/project-lloyds-bank.jpg"
  },
  {
    title: "NHS A&E Wait Times Analysis 2025",
    description: "Built KPI dashboards that identified critical breaches, creating a roadmap to potentially help 200k+ patients annually.",
    category: "Data",
    tags: ["Data Analysis", "Dashboard", "Healthcare"],
    linkText: "View Kaggle Notebook",
    imageUrl: "/images/project-nhs-wait-times.jpg"
  },
  {
    title: "Hopps Coffee | Full Brand Identity",
    description: "Developed a complete brand identity for a new artisanal coffee shop, from logo and packaging to in-store menus.",
    category: "Design",
    tags: ["Branding", "Packaging", "Identity"],
    linkText: "View Case Study",
    imageUrl: "/images/project-hopps-coffee.jpg"
  },
  {
    title: "Crime Prediction Model",
    description: "Built a predictive model using Random Forest and neural networks (R² = 0.949) for accurate crime forecasting.",
    category: "Data",
    tags: ["Machine Learning", "Python", "Prediction"],
    linkText: "View Report",
    imageUrl: "/images/project-crime-prediction.jpg"
  },
  {
    title: "Covid Data Analysis Dashboard",
    description: "Analyzed sanitation infrastructure effectiveness using Python and Tableau to generate actionable health insights.",
    category: "Data",
    tags: ["Data Viz", "Tableau", "Python"],
    linkText: "View Visualisation",
    imageUrl: "/images/project-covid-dashboard.jpg"
  },
];

interface WorksProps {
  onNavigate: (page: string) => void;
}

const Works: React.FC<WorksProps> = ({ onNavigate }) => {
  return (
    <section id="works" className="py-20 lg:py-32 border-t border-neutral-300 overflow-hidden">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Selected Works</h2>
        <button 
            onClick={() => onNavigate('works')}
            className="hidden md:flex items-center text-sm font-bold tracking-wider group bg-white border border-neutral-300 px-6 py-3 hover:bg-neutral-100 transition-colors"
        >
            VIEW ALL PROJECTS
            <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
      </div>
      
      <div className="flex space-x-8 pb-4 -mx-6 md:-mx-12 lg:-mx-24 px-6 md:px-12 lg:px-24 overflow-x-auto horizontal-scrollbar">
        {SELECTED_PROJECTS.map((project, index) => (
          <div 
              key={`${project.title}-${index}`} 
              className="bg-white rounded-lg border border-neutral-200 flex flex-col group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex-shrink-0 w-[90vw] max-w-sm md:w-96"
          >
              <div className="relative h-48 w-full overflow-hidden">
                  <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                  <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-neutral-600 text-sm leading-relaxed mb-4">{project.description}</p>
                  </div>
                  <div className="mt-auto">
                     <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map(tag => (
                              <span key={tag} className="text-xs font-semibold bg-accent/10 text-accent px-2 py-1 rounded-full">{tag}</span>
                          ))}
                      </div>
                      <a href="#" className="font-bold text-sm text-accent flex items-center gap-2 group-hover:text-black transition-colors duration-300">
                          {project.linkText} <ExternalLinkIcon />
                      </a>
                  </div>
              </div>
          </div>
        ))}
      </div>
       <button 
            onClick={() => onNavigate('works')}
            className="flex md:hidden items-center justify-center text-sm font-bold tracking-wider group bg-white border border-neutral-300 px-6 py-3 hover:bg-neutral-100 transition-colors w-full mt-8"
        >
            VIEW ALL PROJECTS
            <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
    </section>
  );
};

export default Works;