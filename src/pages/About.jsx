import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaBullseye, FaHandshake, FaLightbulb } from 'react-icons/fa';

const coreValues = [
  {
    icon: <FaBullseye />,
    title: 'Mission-Driven',
    desc: 'We focus on purposeful impact and measurable outcomes.',
  },
  {
    icon: <FaHandshake />,
    title: 'Collaborative',
    desc: 'We work hand-in-hand with clients to co-create solutions.',
  },
  {
    icon: <FaLightbulb />,
    title: 'Insightful',
    desc: 'Our recommendations are based on strategic clarity and experience.',
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <section className="py-20 bg-bg text-dark px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-4xl font-bold" data-aos="fade-up">About Us</h1>
        <p className="text-lg text-gray-600" data-aos="fade-up" data-aos-delay="100">
          The Hillen Group empowers organizations with communication and strategy solutions that drive clarity, impact, and long-term success.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          {coreValues.map((val, idx) => (
            <div key={val.title} className="p-6 bg-white rounded-lg shadow-md" data-aos="fade-up" data-aos-delay={idx * 150}>
              <div className="text-primary text-3xl mb-4">{val.icon}</div>
              <h3 className="text-xl font-semibold">{val.title}</h3>
              <p className="text-gray-600 mt-2">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
