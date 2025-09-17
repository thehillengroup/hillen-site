import React from 'react';

/**
 * Picture component
 * Props:
 * - src (required), alt (required)
 * - sources: [{ srcSet, type, media, sizes }]
 * - width, height (numbers) OR aspect (string like "16/9", "3/2")
 * - imgClassName (string)
 * - priority (bool) => eager load, else lazy
 * - loading, decoding overrides
 */
export default function Picture({
  src,
  alt,
  sources = [],
  width,
  height,
  aspect,
  imgClassName = '',
  priority = false,
  loading,
  decoding,
  sizes, // optional: forwarded to <img> for responsive selection
  ...rest
}) {
  const imgLoading = loading || (priority ? 'eager' : 'lazy');
  const imgDecoding = decoding || 'async';

  const styleAspect =
    !width && !height && aspect
      ? { aspectRatio: aspect }
      : undefined;

  return (
    <picture {...rest}>
      {sources.map((s, i) => (
        <source
          key={i}
          srcSet={s.srcSet}
          type={s.type}
          media={s.media}
          sizes={s.sizes}
        />
      ))}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={imgLoading}
        decoding={imgDecoding}
        className={['w-full h-auto', imgClassName].join(' ')}
        style={styleAspect}
      />
    </picture>
  );
}
