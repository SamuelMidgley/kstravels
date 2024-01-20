import { Week } from "./Week";
import imageUrl from "@/assets/week7.jpg";
import one from "@/assets/week7/roopath.jpg";
import two from "@/assets/week7/wallabylunch.jpg";
import samwall from "@/assets/week7/samwall.jpg";
import barbie from "@/assets/week7/barbie.jpg";
import hammock from "@/assets/week7/hammock.jpg";
import snake from "@/assets/week7/snake.jpg";
import tree from "@/assets/week7/tree.jpg";
import bird from "@/assets/week7/bird.jpg";
import samkoala from "@/assets/week7/samkoala.jpg";
import kiarakoala from "@/assets/week7/kiarakoala.jpg";
import rangefinder from "@/assets/week7/range finder.jpg";
import forts from "@/assets/week7/forts.jpg";

export function WeekSeven() {
  return (
    <Week
      title="If you wallaby my lover"
      imageUrl={imageUrl}
      imageAlt="A rock wallaby on Magnetic island"
      datePosted={new Date(2023, 10, 7, 12)}
    >
      <p>hiyaaa,</p>
      <p>
        Magnetic island!! pretty close to what i imagine heaven&apos;s like
        (except without the snakes etc). it was just chill chill vibes, the
        hostel we stayed in was camping/cabins v v nice. it had its own lil
        wildlife reserve and we got to go and see some animals! sam held a snake
        but i was like hell no i ain't going near it
      </p>
      <p>
        We were staying at Selina hostel which was so cool there were kangaroos
        and wallabies just chilling everywhere
      </p>
      <figure>
        <img
          src={one}
          alt="A kangaroo on the path"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          A kangaroo on the path
        </figcaption>
      </figure>
      <figure>
        <img
          src={two}
          alt="A wallaby we saw while eating tea"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          A wallaby we saw while eating tea
        </figcaption>
      </figure>
      <p>
        On our first day at Magnetic island we did the forts walk. It was hot
        but the views were nice and we saw a koala
      </p>
      <figure>
        <img
          src={forts}
          alt="Forts walk"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          One of two panama mounts at the magnetic battery (Kiara for scale)
        </figcaption>
      </figure>
      <figure>
        <img
          src={rangefinder}
          alt="The range finder"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          A range finder along the walk. It's giving 2001 vibes.
        </figcaption>
      </figure>
      <p>
        Our hostel also had a wildlife sanctuary which was pretty cool, here are
        some photos:
      </p>
      <figure>
        <img
          src={snake}
          alt="sam holding the olive python, it didn't try to bite him 👍🏼 big win"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          Sam holding the olive python, it didn't try to bite him 👍🏼 big win
        </figcaption>
      </figure>
      <figure>
        <img
          src={samkoala}
          alt="Sam stroking a koala"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          Sam stroking a koala 👏
        </figcaption>
      </figure>
      <figure>
        <img
          src={kiarakoala}
          alt="Kiara stroking a koala"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          Kiara stroking a koala 👏
        </figcaption>
      </figure>
      <figure>
        <img
          src={bird}
          alt=" bird feeding!! they were landing on people's heads and shitting everywhere so i stayed well clear"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          Bird feeding!! they were landing on people&apos;s heads and shitting
          everywhere so i stayed well clear
        </figcaption>
      </figure>
      <figure>
        <img
          src={hammock}
          alt="chilling in the hammock 😎"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          Chilling in the hammock 😎
        </figcaption>
      </figure>
      <figure>
        <img
          src={tree}
          alt="A cool tree"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          A cool tree
        </figcaption>
      </figure>
      <figure>
        <img
          src={barbie}
          alt="Watching the sunset with the barbie car"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          Watching sunset with the barbie car
        </figcaption>
      </figure>
      <figure>
        <img
          src={samwall}
          alt="Feeding the rock wallabies at sunset"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          Feeding the rock wallabies at sunset
        </figcaption>
      </figure>
    </Week>
  );
}
