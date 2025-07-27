import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaComments, FaChartLine, FaUsers } from 'react-icons/fa';

const services = [
  {
    icon: <FaComments />,
    title: 'Strategic Communication',
    desc: 'Messaging strategies that align your voice and goals across all platforms.',
  },
  {
    icon: <FaChartLine />,
    title: 'Organizational Strategy',
    desc: 'From growth planning to operational refinement, we elevate your core.',
  },
  {
    icon: <FaUsers />,
    title: 'Stakeholder Engagement',
    desc: 'Designing dialogues and processes that foster alignment and buy-in.',
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <section className="py-20 bg-white text-dark px-4">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h1 className="text-4xl font-bold" data-aos="fade-up">Our Services</h1>
        <p className="text-lg text-gray-600" data-aos="fade-up" data-aos-delay="100">
          We offer tailored services to help your organization achieve its mission through clarity, engagement, and action.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="p-6 bg-bg rounded-lg shadow hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="text-primary text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
