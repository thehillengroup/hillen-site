// src/utils/imageVariants.js
// Build responsive <source> srcSets for AVIF/WebP given a base image path.

export function buildPictureSources(basePath, widths = [480, 768, 1200, 1600]) {
  if (!basePath || typeof basePath !== 'string') return [];

  const dot = basePath.lastIndexOf('.');
  const noExt = dot > -1 ? basePath.slice(0, dot) : basePath;

  const mkSet = (ext) =>
    widths
      .map((w) => `${noExt}-${w}.${ext} ${w}w`)
      .join(', ');

  return [
    {
      type: 'image/avif',
      srcSet: mkSet('avif'),
      sizes: '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw',
    },
    {
      type: 'image/webp',
      srcSet: mkSet('webp'),
      sizes: '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw',
    },
  ];
}

