import React from 'react';
import { Link } from 'react-router-dom';

/**
 * items: [{ label, href?, to? }]
 * - Use `to` for internal <Link>
 * - Use `href` for external links
 */
export default function Breadcrumbs({ items = [] }) {
  if (!items.length) return null;

  return (
    <nav
      className="px-4 pt-4"
      aria-label="Breadcrumb"
    >
      <ol
        className="max-w-7xl mx-auto flex flex-wrap items-center gap-2 text-sm text-gray-600"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          const position = idx + 1;
          const content = item.to ? (
            <Link to={item.to} className="hover:text-primary" itemProp="item">
              <span itemProp="name">{item.label}</span>
            </Link>
          ) : item.href ? (
            <a href={item.href} className="hover:text-primary" itemProp="item">
              <span itemProp="name">{item.label}</span>
            </a>
          ) : (
            <span className="text-dark" itemProp="name">
              {item.label}
            </span>
          );

          return (
            <li
              key={`${item.label}-${idx}`}
              className="flex items-center gap-2"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              aria-current={isLast ? 'page' : undefined}
            >
              {content}
              <meta itemProp="position" content={String(position)} />
              {!isLast && <span className="text-gray-400">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
