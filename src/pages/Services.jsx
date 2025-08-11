import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// import the icons you want
import {
  FaLaptopCode,
  FaMobileAlt,
  FaProjectDiagram,
  FaPaintBrush,
  FaPencilRuler,
  FaCloud,
} from 'react-icons/fa';

const services = [
  {
    Icon: FaLaptopCode,
    title: 'Web Application Development & Services',
    description:
      'Custom, scalable web applications built with React, Node.js, and modern frameworks—designed for performance and maintainability.',
  },
  {
    Icon: FaMobileAlt,
    title: 'Mobile Application Development',
    description:
      'Native and cross-platform apps for iOS and Android, crafted to deliver a seamless user experience on every device.',
  },
  {
    Icon: FaProjectDiagram,
    title: 'Project Planning & Management',
    description:
      'End-to-end project roadmaps, agile workflows, and milestone tracking that keep your initiatives on time and on budget.',
  },
  {
    Icon: FaPaintBrush,
    title: 'Web Design & Maintenance',
    description:
      'Ongoing site updates, security patches, and UX/UI refinements to ensure your web presence stays fresh and reliable.',
  },
  {
    Icon: FaPencilRuler,
    title: 'UI/UX Design & Prototyping',
    description:
      'User-centered design, interactive wireframes, and high-fidelity prototypes that validate concepts before you build.',
  },
  {
    Icon: FaCloud,
    title: 'Cloud Integration & DevOps',
    description:
      'Automated CI/CD pipelines, container orchestration, and cloud architecture (AWS, Azure, GCP) for maximum uptime and scalability.',
  },
];

export default function Services() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <section className="py-20 px-4 bg-white text-dark">
      <div className="max-w-7xl mx-auto">
        {/* Page Heading */}
        <h1
          className="text-4xl font-bold text-center mb-12"
          data-aos="fade-up"
        >
          Our IT Services
        </h1>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ Icon, title, description }, idx) => (
            <div
              key={title}
              className="p-6 border rounded-lg shadow hover:shadow-xl transition duration-300 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={100 + idx * 100}
            >
              <div className="flex items-center mb-4">
                <Icon className="text-primary text-3xl mr-3 flex-shrink-0" />
                <h2 className="text-2xl font-semibold">{title}</h2>
              </div>
              <p className="text-gray-600 flex-grow">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
