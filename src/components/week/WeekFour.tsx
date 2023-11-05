import imageUrl from "@/assets/week4.jpg";
import { Week } from "./Week";
import one from "@/assets/week4/one.jpg";
import two from "@/assets/week4/two.jpg";
import three from "@/assets/week4/three.jpg";
import four from "@/assets/week4/four.jpg";
import five from "@/assets/week4/five.jpg";
import six from "@/assets/week4/six.jpg";
import seven from "@/assets/week4/seven.jpg";
import eight from "@/assets/week4/eight.jpg";
import nine from "@/assets/week4/nine.jpg";
import ten from "@/assets/week4/ten.jpg";
import eleven from "@/assets/week4/eleven.jpg";
import twelve from "@/assets/week4/twelve.jpg";
import thirteen from "@/assets/week4/thirteen.jpg";

export function WeekFour() {
  return (
    <Week
      title="Week 4: Sydney? I hardly know her"
      imageUrl={imageUrl}
      imageAlt="Sydney Opera house"
      datePosted={new Date(2023, 9, 10, 12)}
    >
      <p>Hiya,</p>
      <p>Hope everyone's well,</p>
      <p>
        We&apos;ve been busy busy this week!!! we arrived in Sydney on Tuesday,
        and then went up to Byron Bay on Sunday and we&apos;re writing this on
        the coach to surfers paradise. we&apos;ve now been in aus a whole
        month!! exciting stuff
      </p>
      <h2>Sydney</h2>
      <figure>
        <img
          src={one}
          alt="St Mary's cathedral"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          St Mary's Cathedral
        </figcaption>
      </figure>
      <figure>
        <img
          src={two}
          alt="The botanical gardens"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          The botanical gardens ! We went on a grey day n walked back through
          the next when it was sunny, looked so much nicer.
        </figcaption>
      </figure>
      <figure>
        <img
          src={three}
          alt="Skywriting"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          We saw a couple of skywriters but couldn&apos;t figure out what they
          said, any guesses?
        </figcaption>
      </figure>
      <figure>
        <img
          src={four}
          alt="Sydney Opera house"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          We walked up to the Sydney Opera house, such pretty views
        </figcaption>
      </figure>
      <figure>
        <img
          src={five}
          alt="Sydney opera house from the ferry"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          The opera house as seen on the ferry to Manly
        </figcaption>
      </figure>
      <figure>
        <img
          src={six}
          alt="Big waves on Manly beach"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          Manly beach, there was huuuuge waves, the beach was technically
          closed, you can&apos;t rly see them here they just went flat as soon
          as i got my phone out
        </figcaption>
      </figure>
      <figure>
        <img
          src={eleven}
          alt="Victoria building"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          The Victoria building in Sydney, they love their queen vic over here
        </figcaption>
      </figure>
      <h2>Byron bay</h2>
      <p>
        We saw loads of wildlife here, you&apso;ll all be proud to know i
        didn&apso;t scream and run away at the sight of any of these :)
        she&apso;s a brave girly, here's some of the highlights:
      </p>
      <figure>
        <img
          src={seven}
          alt="Bin chicken"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          A bin chicken (Ibis)
        </figcaption>
      </figure>
      <figure>
        <img
          src={eight}
          alt="A lizard"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">A lizard</figcaption>
      </figure>
      <figure>
        <img
          src={nine}
          alt="A washed up blue bottle jellyfish"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          A washed up blue bottle jellyfish
        </figcaption>
      </figure>
      <figure>
        <img
          src={ten}
          alt="A tiny little crab"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          A tiny little crab
        </figcaption>
      </figure>
      <p>
        We went on a kayaking dolphin tour, they told us they take photos so we
        thought best to not take our phones. And these are the only photos they
        took of us 🤣🤣 Setting off from the beach there was huge waves and
        everyone apart from us capsized (big flex) although i was thrown in the
        air a few times, (i wish i had a video of it, was rly funny), also we
        saw loads of dolphins, it was incredible, highlight of the trip so far
      </p>
      <figure>
        <div className="flex w-full">
          <img src={twelve} alt="Kiaras action shot" />
        </div>

        <figcaption className="text-sm mt-3 text-center">
          Kiara's action shot
        </figcaption>
      </figure>
      <figure>
        <div className="flex w-full">
          <img src={thirteen} alt="Sam's action shot" />
        </div>

        <figcaption className="text-sm mt-3 text-center">
          Sam's action shot
        </figcaption>
      </figure>
      <p>That's all for this week. Thanks for reading.</p>
      <p>Gotta scoot my lil newts,</p>
    </Week>
  );
}
