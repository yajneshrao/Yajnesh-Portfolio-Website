import React, { useState, useMemo } from 'react';

const ExternalLinkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>;

const ALL_PROJECTS = [
  {
    title: "QSE Learning | Local Lead Generation Campaign",
    description: "Ran 30-day Google Ads + Meta funnel for 11+ tuition; achieved £15.6 CPL, 7.2× ROAS, and 4 enrolments from £500 spend. Scaled to £1,200/month and doubled total school enrolments within 3 months.",
    category: "Marketing",
    tags: ["Paid Media", "Google Ads", "Meta Ads", "CRO"],
    linkText: "View Report",
    imageUrl: "/images/project-qse-leadgen.jpg"
  },
  {
    title: "Lloyds Bank | Brand Identity Redesign",
    description: "Redesigned legacy logo to retain heritage while modernising the visual identity. Used negative space and a custom typeface for a cleaner, timeless, and more versatile look.",
    category: "Design",
    tags: ["Branding", "Logo Design", "Visual Identity"],
    linkText: "View Presentation",
    imageUrl: "/images/project-lloyds-bank.jpg"
  },
  {
    title: "Hopps Coffee | Full Brand Identity",
    description: "Developed a complete brand identity for a new artisanal coffee shop, from logo and packaging to in-store menus and digital assets, creating a cohesive and inviting brand experience.",
    category: "Design",
    tags: ["Branding", "Logo Design", "Packaging", "Identity"],
    linkText: "View Case Study",
    imageUrl: "/images/project-hopps-coffee.jpg"
  },
  {
    title: "NHS A&E Wait Times Analysis 2025",
    description: "Built KPI dashboards & simulations; identified top trusts driving ~40% of breaches. Roadmap showed fixing top 20 trusts could raise KPI by +5pp and help 200k+ patients.",
    category: "Data",
    tags: ["Data Analysis", "Dashboard", "KPIs", "Healthcare"],
    linkText: "View Kaggle Notebook",
    imageUrl: "/images/project-nhs-wait-times.jpg"
  },
  {
    title: "ACSIS Association | Logo & Identity Design",
    description: "Designed a modern and professional logo for the Association of Computer Science and Information Science, reflecting its mission of innovation and community in the tech field.",
    category: "Design",
    tags: ["Logo Design", "Branding", "Non-Profit"],
    linkText: "View Design",
    imageUrl: "/images/project-acsis-logo.jpg"
  },
  {
    title: "Crime Prediction Model",
    description: "Built a predictive model using Random Forest and neural networks (R² = 0.949) incorporating socioeconomic indicators for crime forecasting.",
    category: "Data",
    tags: ["Machine Learning", "Python", "Prediction"],
    linkText: "View Report",
    imageUrl: "/images/project-crime-prediction.jpg"
  },
    {
    title: "QSE Learning | Brand Identity & Logo Redesign",
    description: "Redesigned a 20-year-old brand identity, modernising its look while preserving its legacy and educational impact; delivered a refreshed, cohesive visual system enhancing brand recognition.",
    category: "Design",
    tags: ["Branding", "Logo Design", "Strategy"],
    linkText: "View Brand Pack",
    imageUrl: "/images/project-qse-brand.jpg"
  },
  {
    title: "Covid Data Analysis Dashboard",
    description: "Analyzed effectiveness of sanitation infrastructure using Python, Tableau, and ML models to generate actionable health insights.",
    category: "Data",
    tags: ["Data Viz", "Tableau", "Python", "Dashboard"],
    linkText: "View Tableau Visualisation",
    imageUrl: "/images/project-covid-dashboard.jpg"
  },
  {
    title: "BMI and Obesity Trends in Africa",
    description: "Conducted a multi-year statistical study with Tableau & Power BI to visualize regional health disparities and inform public health strategies.",
    category: "Data",
    tags: ["Data Viz", "Tableau", "Power BI", "Statistics"],
    linkText: "View Study",
    imageUrl: "/images/project-bmi-trends.jpg"
  },
];

const FILTER_CATEGORIES = ['All', 'Data', 'Design', 'Marketing'];

const DedicatedWorks: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredProjects = useMemo(() => {
        if (activeFilter === 'All') {
            return ALL_PROJECTS;
        }
        return ALL_PROJECTS.filter(p => p.category === activeFilter);
    }, [activeFilter]);

    return (
        <div className="py-20 lg:py-28 antialiased">
            <header className="text-center mb-16">
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter">Project Showcase</h1>
                <p className="text-lg text-neutral-600 mt-2 max-w-2xl mx-auto">
                    A curated selection of my work, demonstrating a blend of data-driven analysis, strategic marketing, and creative design.
                </p>
            </header>

            <div className="flex justify-center items-center gap-2 md:gap-4 mb-12 border-b border-neutral-300 pb-4">
                {FILTER_CATEGORIES.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveFilter(category)}
                        className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                            activeFilter === category
                                ? 'bg-accent text-white shadow'
                                : 'bg-transparent text-neutral-600 hover:bg-neutral-200'
                        }`}
                    >
                        {category} ({category === 'All' ? ALL_PROJECTS.length : ALL_PROJECTS.filter(p => p.category === category).length})
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                    <div 
                        key={`${project.title}-${index}`} 
                        className="bg-white rounded-lg border border-neutral-200 flex flex-col group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
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
                                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
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
        </div>
    );
};

export default DedicatedWorks;