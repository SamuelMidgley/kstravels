interface IFigure {
  src: string;
  alt: string;
  caption: string;
  aspectRatio?: string;
}

export function Figure({ src, alt, caption, aspectRatio }: IFigure) {
  return (
    <figure>
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className={`sm:aspect-[${aspectRatio ?? "1/2"}] object-cover`}
      />
      <figcaption className="text-sm mt-3 text-center">{caption}</figcaption>
    </figure>
  );
}
