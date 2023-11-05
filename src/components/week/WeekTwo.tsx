import { Week } from "./Week";
import imageUrl from "@/assets/week2.jpg";
import one from "@/assets/week2/one.jpg";
import two from "@/assets/week2/two.jpg";
import three from "@/assets/week2/three.jpg";
import four from "@/assets/week2/four.jpg";
import five from "@/assets/week2/five.jpg";
import six from "@/assets/week2/six.jpg";
import seven from "@/assets/week2/seven.jpg";
import eight from "@/assets/week2/eight.jpg";
import nine from "@/assets/week2/nine.jpg";

export function WeekTwo() {
  return (
    <Week
      title="Week 3: Melbourne 2 Electric boogaloo"
      imageUrl={imageUrl}
      imageAlt="A urinal with a view"
      datePosted={new Date(2023, 8, 25, 12)}
    >
      <p>Hi everyone,</p>
      <p>
        Hope you&apos;re having a wonderful Monday and are at the beginning of a
        fulfilling week.
      </p>
      <p>
        We&apos;re at the end of week 2 in Australia! We&apos;ve been exploring
        Melbourne and actually have got our month long greyhound bus pass so we
        can begin our trip up the East Coast next week (feeling organised).
      </p>
      <p>Without further ado, here are the photos :</p>
      <figure>
        <img src={one} alt="Brunch" className="sm:aspect-[2/1] object-cover" />
        <figcaption className="text-sm mt-3 text-center">
          We had brunch (shock), a Melbourne classic. We went to a cafe round
          the corner from the flat and had protein pancakes (kidding ourselves
          that we&apos;re healthy) with some fruit and fluffy stuff on top.
        </figcaption>
      </figure>
      <figure>
        <img
          src={two}
          alt="Port Melbourne beach"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          We took our first dip in the sea!! and when i say dip i mean i dipped
          a toe in and it was bloody baltic. As in i&apos;ve been in warmer
          water in wales. despite this, we stayed at the beach for a wee while,
          until we were sick of the sand blowing in our faces.
        </figcaption>
      </figure>
      <figure>
        <img
          src={three}
          alt="A ceramic person"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          A ceramic person on the wall. Sam said it looks like me but I reckon
          it resembles him. Cast your votes here.
        </figcaption>
      </figure>
      <figure>
        <img
          src={four}
          alt="Melbourne street art"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          We had been told by many people (and google) to check out the graffiti
          streets in the Melbourne CBD. The first one we walked down had just
          classic graffiti of peoples names. I was feeling underwhelmed
          considering I could&apos;ve gone down the road to Hockley circus to
          see this, not the other side of the world. Then we went down ac/dc
          lane and saw some more impressive artwork. Here&apos;s a fave.
        </figcaption>
      </figure>
      <figure>
        <img
          src={five}
          alt="View from Melbourne skydeck"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          We visited Melbourne skydeck and saw the views of the city. You can
          see a floating barge in the river where we had drinks!
        </figcaption>
      </figure>
      <figure>
        <img
          src={six}
          alt="Mulled wine at happy hour"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          Continuing the theme of drinking, here&apos;s a photo at happy hour.
          They still had mulled wine (my fave) as it&apos;s the end of winter
          here, yay!
        </figcaption>
      </figure>
      <figure>
        <img
          src={seven}
          alt="St Kilda botanical gardens"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          The St Kilda botanical gardens, can you spot sam through the leaves?
        </figcaption>
      </figure>
      <figure>
        <img
          src={eight}
          alt="Point Ormond lookout"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          Point Ormond Lookout where we saw the sunset. It was absolutely
          heaving with people
        </figcaption>
      </figure>
      <figure>
        <img
          src={nine}
          alt="Sam and Will"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          Sam and his cousin Will at the St Kilda markets
        </figcaption>
      </figure>
    </Week>
  );
}
