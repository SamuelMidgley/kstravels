import { Week } from "./Week";
import imageUrl from "@/assets/week3.jpg";
import one from "@/assets/week3/one.jpg";
import two from "@/assets/week3/two.jpg";
import three from "@/assets/week3/three.jpg";
import four from "@/assets/week3/four.jpg";
import five from "@/assets/week3/five.jpg";
import six from "@/assets/week3/six.jpg";
import seven from "@/assets/week3/seven.jpg";
import eight from "@/assets/week3/eight.jpg";
import nine from "@/assets/week3/nine.jpg";
import ten from "@/assets/week3/ten.jpg";

export function WeekThree() {
  return (
    <Week
      title="Week 3: Melbourne 3 Return of the dream (chocolate)"
      imageUrl={imageUrl}
      imageAlt="A urinal with a view"
      datePosted={new Date(2023, 9, 2, 12)}
    >
      <p>Hello hello,</p>
      <p>
        We&apos;re about to embark on a big adventure…heading up the east
        coast!! currently sat at the coach station waiting for a greyhound to
        take us to Sydney…on a 12 hour journey 😵‍💫 manifesting being able to
        sleep the whole way.
      </p>
      <p>
        Luckily, it&apos;s now october which means avoiding the possibility of
        magpie swooping!! we&apos;ve been extra paranoid walking around because
        it&apos;s magpie mating season, and they&apos;re known to attack
        walkers/cyclists on the street.
      </p>
      <p>
        We&apos;ve had a pretty busy week this week, i was ill monday so we had
        a chill day in the flat watching below deck (shock). the colds almost
        gone now woo!
      </p>
      <p>The photos:</p>
      <figure>
        <img
          src={one}
          alt="Kiara's aunty"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          On tuesday we met up with my aunties Kiran and Sharan. id never met
          them before which was exciting!! we then went to their parents for tea
          the next day (actual family tree - im using the indian aunty
          definition here, theyre my dads cousins)
        </figcaption>
      </figure>
      <figure>
        <img
          src={two}
          alt="A urinal with a view"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          We had a wee with a view in a 35th floor loo
        </figcaption>
      </figure>
      <figure>
        <img
          src={three}
          alt="Ceramic snail"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          We walked down the street with loads of ceramic faces again and this
          one made me laugh a lot
        </figcaption>
      </figure>
      <figure>
        <img
          src={four}
          alt="Kiara's aunty"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          We went to woolworths, i thought this was rly exciting because of the
          old woolworths in sutton where we&apos;d get pick n mix…sam
          didn&apos;t care
        </figcaption>
      </figure>
      <figure>
        <img
          src={five}
          alt="Sam in woolies"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          We stayed in a hostel in melbourne city centre at the weekend, there
          was a bar in the hostel which served us a few too many cheap wines eek
          (night before v morning after)
        </figcaption>
      </figure>
      <figure>
        <img
          src={six}
          alt="Pre night out vibes"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          The night after eek
        </figcaption>
      </figure>
      <figure>
        <img
          src={seven}
          alt="A dreams chocolate bar"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          Cadburys dreams!! an old fave thats still going out here
        </figcaption>
      </figure>
      <figure>
        <img
          src={eight}
          alt="A dreams chocolate bar"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          Sam&apos;s cousin (dj willy b) did a set Saturday night at a rooftop
          bar
        </figcaption>
      </figure>
      <figure>
        <img
          src={nine}
          alt="A dreams chocolate bar"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          Sam and his auntie (who very kindly let us stay at her flat these past
          weeks)
        </figcaption>
      </figure>
      <figure>
        <img
          src={ten}
          alt="A dreams chocolate bar"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          Us with our bags headed to the coach station!!
        </figcaption>
      </figure>
      <p>In a while crocodiles,</p>
    </Week>
  );
}
