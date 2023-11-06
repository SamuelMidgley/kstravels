import { format } from "date-fns";
import profileimg from "@/assets/profile.jpg";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { Footer } from "../Footer";
import { Link, useLocation } from "react-router-dom";
import { buttonVariants } from "../ui/button";

export interface IWeek {
  title: string;
  datePosted: Date;
  imageUrl: string;
  imageAlt: string;
  children: React.ReactNode;
}

export function Week({
  title,
  datePosted,
  imageUrl,
  imageAlt,
  children,
}: IWeek) {
  const maxWeekNum = 6;
  const location = useLocation();
  const weekNum = location.pathname.charAt(location.pathname.length - 1);

  return (
    <>
      <main>
        <article>
          <header className="text-center max-w-[calc(750px+8vw)] mb-4 mx-auto px-[4vw] w-full">
            <h1 className="text-[28px] font-extrabold mb-3">{title}</h1>
            <div className="uppercase text-textsecondary text-xs font-extrabold tracking-wide">
              <span>{format(datePosted, "LLL d, y")}</span>
              {/* <span>{`week ${week}`}</span> */}
            </div>
          </header>
          <figure className="mt-12 mb-8 max-w-[calc(960px+8vw)] mx-auto px-[4vw] w-full">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="sm:aspect-[2/1] object-cover"
            />
            <figcaption className="text-sm mt-3 text-center">
              {imageAlt}
            </figcaption>
          </figure>
          <div className="thingy">{children}</div>
          <div className="max-w-[calc(750px+8vw)] mx-auto px-[4vw] w-full mt-8 flex gap-4 items-center">
            <img
              className="rounded-full w-20 h-20 object-cover"
              src={profileimg}
              alt="Photo of kiara and sam"
            />
            <h2 className="text-2xl font-extrabold">Sam & Kiara</h2>
          </div>
        </article>
        <div className="max-w-[calc(750px+8vw)] mx-auto px-[4vw] w-full mt-5 flex justify-between">
          {Number(weekNum) > 1 && (
            <Link
              to={`/week/${Number(weekNum) - 1}`}
              className={`${buttonVariants({
                variant: "link",
              })} flex items-center gap-2`}
            >
              <ArrowLeftIcon />
              Previous post
            </Link>
          )}

          {Number(weekNum) !== maxWeekNum && (
            <Link
              to={`/week/${Number(weekNum) + 1}`}
              className={`${buttonVariants({
                variant: "link",
              })} flex items-center gap-2 ml-auto`}
            >
              Next post
              <ArrowRightIcon />
            </Link>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
