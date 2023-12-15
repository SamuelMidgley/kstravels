import { Link } from "react-router-dom";
import { formatDistance } from "date-fns";

export interface ICardProps {
  week: number;
  title: string;
  datePosted: Date;
  imageUrl: string;
  imageAlt: string;
}

export function Card({
  week,
  title,
  datePosted,
  imageUrl,
  imageAlt,
}: ICardProps) {
  const timeAgo = formatDistance(datePosted, new Date(), {
    addSuffix: true,
  });

  return (
    <article className="mb-20">
      <figure className="mb-7 md:mb-12 max-w-[calc(960px+8vw)] mx-auto px-[4vw] w-full">
        <Link to={`/week/${week}`}>
          <img
            loading="lazy"
            src={imageUrl}
            alt={imageAlt}
            className="md:aspect-[2/1] object-cover"
          />
        </Link>
      </figure>
      <div className="max-w-[calc(750px+8vw)] mx-auto px-[4vw] w-full">
        <header className="mb-5">
          <h2 className="text-[20px] md:text-[28px] font-extrabold mb-2">
            <Link to={`/week/${week}`}>{title}</Link>
          </h2>
          <div className="uppercase text-textsecondary text-xs font-extrabold tracking-wide">
            <span>{timeAgo}</span>
            {/* <span>{`week ${week}`}</span> */}
          </div>
        </header>
        {/* <div></div>
        <footer>
          <Link
            to={`/week/${week}`}
            className={`${buttonVariants({
              variant: "link",
            })} flex gap-1 items-center`}
          >
            <PlayIcon />
            Read Now
          </Link>
          <div></div>
        </footer> */}
      </div>
    </article>
  );
}
