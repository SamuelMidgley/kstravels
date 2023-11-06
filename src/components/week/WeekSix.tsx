import { Week } from "./Week";
import imageUrl from "@/assets/week6.jpg";
import one from "@/assets/week6/one.jpg";
import two from "@/assets/week6/two.jpg";
import three from "@/assets/week6/three.jpg";
import four from "@/assets/week6/four.jpg";
import five from "@/assets/week6/five.jpg";
import six from "@/assets/week6/six.jpg";
import seven from "@/assets/week6/seven.jpg";
import eight from "@/assets/week6/eight.jpg";
import nine from "@/assets/week6/nine.jpg";
import ten from "@/assets/week6/ten.jpg";
import eleven from "@/assets/week6/eleven.jpg";
import twelve from "@/assets/week6/twelve.jpg";
import thirteen from "@/assets/week6/thirteen.jpg";
import fourteen from "@/assets/week6/fourteen.jpg";
import fifteen from "@/assets/week6/fifteen.jpg";

export function WeekSix() {
  return (
    <Week
      title="Week 6: Whitsundays? Completed it mate "
      imageUrl={imageUrl}
      imageAlt="Whitehaven beach"
      datePosted={new Date(2023, 9, 21, 12)}
    >
      <p>Hello and welcome to the first blog post on the new website!</p>
      <h2>K'gari (Fraser island)</h2>
      <p>
        Guys its been an adventurous week. We went to K&apos;gari! Also known as
        Fraser Island. We started the day with a whale watching tour and saw a
        mom and her baby with another whale. I think they knew when we
        didn&apos;t have our phones out to take pics because thats when they
        would breach (flip out the water).
      </p>
      <figure>
        <img src={one} alt="A whale" className="sm:aspect-[2/1] object-cover" />
        <figcaption className="text-sm mt-3 text-center">
          The best photo of a humpback whale we have...
        </figcaption>
      </figure>
      <p>
        We also climbed a massive sand dune, kayaked in a lil river (and got
        stuck on a fallen tree trunk), and went snorkelimg. As soon as we got on
        land I got stung by a wasp/fly thing 😡. Not haps.
      </p>
      <figure>
        <img
          src={two}
          alt="A silica sand dune"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          A huuuuge sand dune on k&apos;gari, the largest sand island in the
          world, we could&apos;ve camped but i dont think i&apos;d have enjoyed
          staying in a tent with dingos and crocs so close by
        </figcaption>
      </figure>
      <figure>
        <img
          src={three}
          alt="Kiara holding some coffee rock"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          The smile of a girl looking proudly at her cool rock. it was formed
          from the silica sand on k&apos;gari and compressed with wind/plants. I
          couldn&apos;t take it home because the police would&apos;ve fined me
          £10k 🥴 no thank u
        </figcaption>
      </figure>
      <figure>
        <img
          src={four}
          alt="2 Magnums, one eaten top to bottom, the other (the correct way) chocolate first then ice cream"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          Me and sam arguing over the correct way to eat a magnum
        </figcaption>
      </figure>
      <figure>
        <img
          src={six}
          alt="Sam's head poking out of the water"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          Spot sam after he swung into the water
        </figcaption>
      </figure>
      <figure>
        <img
          src={five}
          alt="Sam and a milkshake"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          The only cafe in hervey bay, a 50s american theme, so we had
          milkshakes with breakfast 🤮
        </figcaption>
      </figure>
      <h2>Airlie beach and the Whitsundays</h2>
      <p>
        We went up to Airlie Beach after, i.e. where the Whitsundays is. We
        skydived and did a beach landing, or in my case, a landing on someone
        elses parachute and nearly took them out oops. We jetskiied and
        snorkeled in the Whitsundays and flew over the Great Barrier Reef in a
        lil plane. I saw a shark (eek) and we saw sting rays when snorkelling,
        aswell as a lot of colourful fish and reef, also a lot of bleached coral
        cus #climatechange
      </p>
      <figure>
        <img
          src={seven}
          alt="Ice cream in airlie beach"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          Ice creams in airlie beach! lovely views until ...
        </figcaption>
      </figure>
      <figure>
        <img
          src={eight}
          alt="Seagulls grrr"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          ... we were joined by a flock of seagulls
        </figcaption>
      </figure>
      <figure>
        <img
          src={ten}
          alt="Kiara's skydive"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          Me skydiving over the whitsundays 😎 we stuck the landing, almost
          landed on someone elses head (but instead got their parachute!)
        </figcaption>
      </figure>
      <figure>
        <img
          src={eleven}
          alt="Sam's skydive"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          Sam's 50th skydive!! (What an immaculate hairline that is 😍)
        </figcaption>
      </figure>
      <figure>
        <img
          src={nine}
          alt="Jetski gang"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          Jetskiing skrr, sam pretending to be scared of my driving (i was
          trying to get him to fall off the back)
        </figcaption>
      </figure>
      <p>
        We spent our final full day in Airlie beach flying over the whitsundays
        and great barrier reef and then rafting over to whitehaven beach
        (Pirates of the Carribean 5 filmed a scene here). Here are some of the
        highlights:
      </p>
      <figure>
        <img
          src={twelve}
          alt="Us infront of our plane"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          Our plane for the day
        </figcaption>
      </figure>
      <figure>
        <img
          src={imageUrl}
          alt="Whitehaven beach from above"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          Whitehaven beach from above
        </figcaption>
      </figure>
      <figure>
        <img
          src={thirteen}
          alt="The river"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          "The River", a 200 ft deep channel running between Hardys Reef, Hook
          Reef and Line Reef
        </figcaption>
      </figure>
      <figure>
        <img
          src={fourteen}
          alt="Hook reef"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          Hook reef, wow so pretty
        </figcaption>
      </figure>
      <figure>
        <img
          src={fifteen}
          alt="Kiara posing on whitehaven beach"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          Had to get that insta shot on Whitehaven beach
        </figcaption>
      </figure>
      <p>Time to sail, my orca whales</p>
    </Week>
  );
}
