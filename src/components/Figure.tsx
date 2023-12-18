interface IFigure {
  src: string;
  caption: string;
  alt?: string;
  aspectRatio?: string;
}

export function Figure({ src, alt, caption, aspectRatio }: IFigure) {
  return (
    <figure>
      <img
        loading="lazy"
        src={src}
        alt={alt ?? ""} // pretty shocking I know
        className={`sm:aspect-[${aspectRatio ?? "1/2"}] object-cover`}
      />
      <figcaption className="text-sm mt-3 text-center">{caption}</figcaption>
    </figure>
  );
}
