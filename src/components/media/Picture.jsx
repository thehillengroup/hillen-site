// src/components/media/Picture.jsx
import React from 'react';

/**
 * <Picture>
 * - Outputs AVIF + WebP + fallback <img>
 * - Lazy by default, supports sizes/srcSet for responsive loading
 *
 * Props:
 *  alt (required), src (fallback), sources?: [{ type: 'image/avif'|'image/webp', srcSet: string }]
 *  width?, height?, loading?, decoding?, sizes?, className?, imgClassName?, priority?
 */
export default function Picture({
  alt,
  src,
  sources = [],
  width,
  height,
  loading = 'lazy',
  decoding = 'async',
  sizes,
  className = '',
  imgClassName = 'w-full h-auto',
  priority = false, // if true -> eager load + high fetch priority
  ...imgProps
}) {
  const loadingMode = priority ? 'eager' : loading;
  const fetchPriority = priority ? 'high' : undefined;

  return (
    <picture className={className}>
      {sources.map((s) => (
        <source key={s.type} type={s.type} srcSet={s.srcSet} sizes={s.sizes || sizes} />
      ))}
      <img
        alt={alt}
        src={src}
        width={width}
        height={height}
        loading={loadingMode}
        decoding={decoding}
        fetchPriority={fetchPriority}
        className={imgClassName}
        sizes={sizes}
        {...imgProps}
      />
    </picture>
  );
}
