// src/components/ui/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Picture from '../media/Picture';

export default function ProjectCard({
  id,
  title,
  description,
  image,
  link,
  tags = [],
  animation = 'fade-up',
  aosDelay = 0,
}) {
  const isExternal = typeof link === 'string' && /^https?:\/\//i.test(link);

  const CardInner = (
    <article className="rounded-2xl overflow-hidden border bg-white shadow-sm hover:shadow-md transition">
      {/* Media: fixed aspect to prevent tall/oversized first image */}
      <div className="relative bg-gray-100">
        <div className="aspect-[16/9] w-full overflow-hidden">
          <Picture
            src={image}
            alt={title}
            imgClassName="h-full w-full object-cover portfolio-hero"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        {description && <p className="text-gray-600 mb-4">{description}</p>}

        {Array.isArray(tags) && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <span
                key={`${id || title}-tag-${i}`}
                className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {link && (
          <div className="text-teal-600 font-medium hover:underline">
            View Project →
          </div>
        )}
      </div>
    </article>
  );

  return (
    <div
      id={id}
      data-aos={animation}
      data-aos-delay={aosDelay}
      className="block"
    >
      {link ? (
        isExternal ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open project: ${title}`}
            className="block"
          >
            {CardInner}
          </a>
        ) : (
          <Link to={link} aria-label={`Open project: ${title}`} className="block">
            {CardInner}
          </Link>
        )
      ) : (
        CardInner
      )}
    </div>
  );
}
