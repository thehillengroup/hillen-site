// src/components/ui/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Picture from '../media/Picture';

function isExternal(link = '') {
  return /^https?:\/\//i.test(link);
}

export default function ProjectCard({
  id,
  title,
  description,
  image,
  link,
  tags = [],
  aosDelay = 0,
  animation = 'fade-up',
}) {
  const Inner = (
    <>
      <Picture
        alt={title}
        src={image}
        imgClassName="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {link ? (
          <span className="text-teal-600 font-medium hover:underline">
            View Project →
          </span>
        ) : null}
      </div>
    </>
  );

  const CardShellProps = {
    className:
      'block bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/70',
    'data-aos': animation,
    'data-aos-delay': aosDelay,
  };

  return (
    <li id={id}>
      {link ? (
        isExternal(link) ? (
          <a href={link} target="_blank" rel="noreferrer" {...CardShellProps}>
            {Inner}
          </a>
        ) : (
          <Link to={link} {...CardShellProps}>
            {Inner}
          </Link>
        )
      ) : (
        <div {...CardShellProps} aria-disabled="true">
          {Inner}
        </div>
      )}
    </li>
  );
}
