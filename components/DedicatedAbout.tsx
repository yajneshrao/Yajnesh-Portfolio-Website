import React from 'react';

const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const GlobeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>;
const LinkedinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;

const expertiseAreas = [
    { title: "Paid Media & Growth Analytics", skills: "ROAS optimisation, CAC/LTV tracking, Audience Segmentation, Campaign Attribution, Performance Insights (Google/Meta/TikTok)" },
    { title: "Digital & Web Analytics", skills: "GA4, Conversion Funnels, User Journey Optimisation, Behavioural Analysis, Channel Attribution" },
    { title: "CRO & UX Insight", skills: "A/B Testing, Landing Page Optimisation, Heatmaps & Session Replays (Hotjar/Clarity), Drop-off Reduction" },
    { title: "Content & Creative Strategy", skills: "Creative Performance Testing, Hook/Messaging Optimisation, Adobe Suite (Photoshop, Illustrator, Premiere Pro)" },
    { title: "eCommerce & CRM Funnels", skills: "Shopify Performance Monitoring, Checkout Optimisation, Remarketing/Segmentation for Nurture & Retention" },
];

const professionalExperience = [
    { role: "Data Analyst", company: "Astin IT Solutions, London", date: "Jul 2024 - Present", points: ["Delivered ~25% uplift in campaign performance through creative testing.", "Reduced reporting time from weekly to real-time via automated pipelines."] },
    { role: "Digital Marketing & CRM Analyst", company: "Queensbury School, London", date: "May 2023 - Jun 2025", points: ["Increased enrolment conversion 3x by optimising lead funnels.", "Generated 300+ qualified parent enquiries with an AI-driven chatbot."] },
    { role: "Web Developer and Strategist", company: "Zephyr Technologies, Mangalore", date: "Aug 2021 - Nov 2022", points: ["Increased site engagement by 25% using GA & UX heatmaps to identify drop-offs.", "Connected web analytics to Salesforce for behavioural segmentation."] },
    { role: "Social Media Manager (Freelance)", company: "FITQ Fitness, Mangalore", date: "Nov 2018 - Jul 2021", points: ["Improved engagement rate 2x in under a year through creative experimentation.", "Built data-backed content strategies aligned with audience behaviour."] },
];

const projects = [
    { title: "Local Lead Generation Campaign", outcome: "Achieved 7.2× ROAS & doubled school enrolments in 3 months.", category: "Marketing" },
    { title: "NHS A&E Wait Times Analysis", outcome: "Identified fixes to potentially help 200k+ patients annually.", category: "Data Analysis" },
    { title: "Crime Prediction Model", outcome: "Built model with R²=0.949 using Random Forest & Neural Networks.", category: "Machine Learning" },
    { title: "Lloyds Bank Brand Redesign", outcome: "Modernised a legacy logo to create a timeless, versatile identity.", category: "Design" },
    { title: "QSE Learning Brand Redesign", outcome: "Refreshed a 20-year-old brand, enhancing recognition.", category: "Design" },
    { title: "Covid Data Analysis Dashboard", outcome: "Generated actionable health insights using Python & Tableau.", category: "Data Viz" },
];

const education = [
    { degree: "Master’s in Data Science", university: "Middlesex University, UK", date: "2023 - 2024" },
    { degree: "Bachelor’s in Computer Science", university: "Shree Devi Institute of Technology, India", date: "2018 - 2022" },
];

const otherSkills = [ "Brand strategy", "Digital marketing optimisation", "Campaign analytics", "UX-focused design", "Content & visual storytelling", "Client-facing presentation", "Advanced Photoshop & Illustrator", "Stakeholder communication" ];
const certifications = [ "Fundamentals of Digital Marketing – Google", "ChatGPT's Operator: Automating Tasks with AI – LinkedIn" ];

const DedicatedAbout: React.FC = () => {
    return (
        <div className="py-20 lg:py-28 antialiased">
            <header className="mb-16">
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-center">Yajnesh Rao</h1>
                <p className="text-center text-lg md:text-xl text-neutral-600 mt-2">Digital Growth Analyst | Paid Media | Performance Marketing | CRO & Analytics</p>
                <div className="flex justify-center items-center gap-x-4 mt-6 text-sm text-neutral-700">
                    <a href="tel:+447909212521" className="flex items-center gap-2 hover:text-accent transition-colors"><PhoneIcon /> UK Phone</a>
                    <span className="text-neutral-300">|</span>
                    <a href="mailto:contactyajneshrao@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors"><MailIcon /> Email</a>
                    <span className="text-neutral-300">|</span>
                    <a href="https://theyajneshrao.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors"><GlobeIcon /> Website</a>
                    <span className="text-neutral-300">|</span>
                    <a href="https://www.linkedin.com/in/theyajneshrao/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors"><LinkedinIcon /> LinkedIn</a>
                </div>
            </header>

            <div className="space-y-16">
                {/* Profile Section */}
                <section>
                    <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-4">[ Profile Summary ]</h2>
                    <p className="text-lg text-neutral-700 leading-relaxed bg-white p-6 rounded-lg border border-neutral-200">
                        Digital Growth Analyst with 4+ years of experience driving performance across paid media, CRM funnels, and web analytics. Skilled at turning marketing data into ROI improvements through CRO, attribution modelling, and campaign optimisation. Experience across healthcare, education, and retail/e-commerce, blending analytical insight with creative testing to scale acquisition, engagement, and conversions.
                    </p>
                </section>

                {/* Expertise Section */}
                <section>
                    <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-4">[ Areas of Expertise ]</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {expertiseAreas.map(area => (
                            <div key={area.title} className="bg-white p-6 rounded-lg border border-neutral-200 hover:shadow-xl hover:-translate-y-1 transition-all">
                                <h3 className="font-bold text-accent">{area.title}</h3>
                                <p className="text-sm text-neutral-600 mt-2">{area.skills}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Experience Timeline */}
                <section>
                    <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-6">[ Career Trajectory ]</h2>
                    <div className="relative border-l-2 border-accent/20 pl-8 space-y-12">
                        {professionalExperience.map((job, index) => (
                            <div key={index} className="relative">
                                <div className="absolute -left-[38px] top-1 w-4 h-4 bg-accent rounded-full border-4 border-[#F8F9FA]"></div>
                                <p className="text-xs text-neutral-500 font-semibold absolute -top-5">{job.date}</p>
                                <h3 className="font-bold text-lg">{job.role} <span className="text-neutral-500 font-normal">at {job.company}</span></h3>
                                <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-neutral-600">
                                    {job.points.map(point => <li key={point}>{point}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Projects Showcase */}
                <section>
                    <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-4">[ Project Highlights ]</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map(project => (
                            <div key={project.title} className="bg-white p-6 rounded-lg border border-neutral-200 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all">
                                <div>
                                    <span className="text-xs font-semibold bg-accent/10 text-accent px-2 py-1 rounded-full">{project.category}</span>
                                    <h3 className="font-bold mt-3">{project.title}</h3>
                                </div>
                                <p className="text-lg font-semibold text-neutral-800 mt-4">“{project.outcome}”</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Publications Section */}
                <section>
                    <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-4">[ Publications ]</h2>
                    <div className="bg-white p-6 rounded-lg border border-neutral-200 hover:shadow-xl hover:-translate-y-1 transition-all flex items-start sm:items-center gap-6">
                        <div className="flex-shrink-0">
                            <svg className="w-12 h-12 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Nowhere to Belong</h3>
                            <p className="text-sm text-neutral-600 mt-1">A personal memoir exploring the intricate journey of moving from India to the UK, navigating cultural shifts, and the universal quest for identity and a place to call home.</p>
                            <a href="https://amzn.eu/d/1i6z8CD" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-accent mt-3 inline-flex items-center gap-2 group">
                                View on Amazon
                                <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Combined Grid for Education, Skills, Certs */}
                 <section>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg border border-neutral-200">
                             <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-4">[ Education ]</h2>
                             <div className="space-y-4">
                                {education.map(edu => (
                                    <div key={edu.degree}>
                                        <h3 className="font-bold">{edu.degree}</h3>
                                        <p className="text-sm text-neutral-600">{edu.university} &middot; {edu.date}</p>
                                    </div>
                                ))}
                             </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg border border-neutral-200">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-4">[ Skills & Certifications ]</h2>
                            <div>
                                <h4 className="font-semibold text-neutral-700">Core Competencies:</h4>
                                <p className="text-sm text-neutral-600 mt-1 leading-relaxed">{otherSkills.join(' / ')}</p>
                            </div>
                            <div className="mt-4">
                                <h4 className="font-semibold text-neutral-700">Certifications:</h4>
                                <ul className="text-sm text-neutral-600 mt-1 list-disc list-inside">
                                    {certifications.map(cert => <li key={cert}>{cert}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                 </section>
            </div>
        </div>
    );
};

export default DedicatedAbout;