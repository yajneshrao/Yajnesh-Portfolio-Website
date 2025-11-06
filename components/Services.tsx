
import React from 'react';

const SERVICES = [
  {
    title: 'Data Analytics & Dashboarding',
    description: 'Building clean, interactive dashboards using Power BI and Python for decision-making.'
  },
  {
    title: 'Digital Marketing Strategy',
    description: 'Helping brands grow with content, SEO, and social media strategy.'
  },
  {
    title: 'Branding & Graphic Design',
    description: 'Designing logos, marketing visuals, and presentation materials.'
  },
  {
    title: 'Web Development & Optimization',
    description: 'Building simple, effective web solutions using tools like Webflow and WeWeb.'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-32 border-t border-neutral-300">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12 text-center">What I Offer</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES.map((service, index) => (
          <div key={index} className="border border-neutral-300 p-6 transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-2">
            <div className="w-12 h-12 bg-accent text-white flex items-center justify-center mb-4 text-2xl font-bold">{`0${index + 1}`}</div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-neutral-600 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;