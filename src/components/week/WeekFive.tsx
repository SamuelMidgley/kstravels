import { Week } from "./Week";
import imageUrl from "@/assets/week5.jpg";
import one from "@/assets/week5/one.jpg";
import two from "@/assets/week5/two.jpg";
import three from "@/assets/week5/three.jpg";
import four from "@/assets/week5/four.jpg";
import five from "@/assets/week5/five.jpg";
import six from "@/assets/week5/six.jpg";
import seven from "@/assets/week5/seven.jpg";
import eight from "@/assets/week5/eight.jpg";
import nine from "@/assets/week5/nine.jpg";
import ten from "@/assets/week5/ten.jpg";
import eleven from "@/assets/week5/eleven.jpg";
import twelve from "@/assets/week5/twelve.jpg";

export function WeekFive() {
  return (
    <Week
      title="Week 5: Getting some vitamin B-risbane"
      imageUrl={imageUrl}
      imageAlt="Noosa coastal walk"
      datePosted={new Date(2023, 9, 21, 12)}
    >
      <p>Hello hellooooo,</p>
      <p>
        Welcome to a very very late weekly update for week 5 (more like weekly
        upLate am i right?)
      </p>
      <p>SO here we go!!</p>
      <h2 className="text-2xl font-extrabold">Surfers paradise</h2>
      <figure>
        <img
          src={one}
          alt="Surfers paradise sign"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          We started the week in Surfers Paradise. contrary to the name, it was
          not paradise. Imagine Magaluf without the party scene. And
          cockroaches. Sam had a surfing lesson though, fun!
        </figcaption>
      </figure>
      <figure>
        <img src={two} alt="Donuts" />
        <figcaption className="text-sm mt-3 text-center">
          We cheered ourselves up with krispy kremes. Can you guess which are
          sams and which are mine? (hint, his look like a child picked them)
        </figcaption>
      </figure>
      <h2 className="text-2xl font-extrabold">Brisbane</h2>
      <figure>
        <img src={three} alt="Donuts" />
        <figcaption className="text-sm mt-3 text-center">
          Health vibes only in Brisbane. Sam had an acai bowl and i had salad,
          the picture of health?
        </figcaption>
      </figure>
      <figure>
        <img src={four} alt="A pretty street in Bris" />
        <figcaption className="text-sm mt-3 text-center">
          A pretty street in Bris ! It was bloody boiling there
        </figcaption>
      </figure>
      <p>
        While in Brisbane we went to the Australia Zoo ! i.e. Steve Irwins zoo,
        one of the kangaroos tried to scratch one of our friends, yikes !! if
        you&apos;ve seen those videos with kangaroos squaring up to people,
        you&apos;ll know how fast we ran away. Here are some photos from the
        trip:
      </p>
      <figure>
        <img src={five} alt="A pretty street in Bris" />
        <figcaption className="text-sm mt-3 text-center">
          A big tortoise
        </figcaption>
      </figure>
      <figure>
        <img src={six} alt="A pretty street in Bris" />
        <figcaption className="text-sm mt-3 text-center">
          A friendly lake puppy
        </figcaption>
      </figure>
      <figure>
        <img src={seven} alt="A pretty street in Bris" />
        <figcaption className="text-sm mt-3 text-center">
          They let you stroke kangaroos and wallabies here!!
        </figcaption>
      </figure>
      <figure>
        <img src={eight} alt="A pretty street in Bris" />
        <figcaption className="text-sm mt-3 text-center">
          Some bin chickens strutting their stuff while we were eating lunch
        </figcaption>
      </figure>
      <figure>
        <img src={nine} alt="A pretty street in Bris" />
        <figcaption className="text-sm mt-3 text-center">
          Continuing the health vibes in Brisbane, we did an ice bath! It was
          freezing (obviously) and we lasted less than a minute
        </figcaption>
      </figure>
      <h2 className="text-2xl font-extrabold">Noosa</h2>
      <p>
        Noosa babyyy ! We did the Coastal walk from Noosa main beach to the
        fairy pools and hells gates
      </p>
      <figure>
        <img src={twelve} alt="Noosa main beach" />
        <figcaption className="text-sm mt-3 text-center">
          Noosa main beach
        </figcaption>
      </figure>
      <figure>
        <img src={eleven} alt="A pretty view on the coastal walk" />
        <figcaption className="text-sm mt-3 text-center">
          A pretty view on the coastal walk
        </figcaption>
      </figure>
      <figure>
        <img src={ten} alt="Fairy pools" />
        <figcaption className="text-sm mt-3 text-center">
          The noosa fairy pools
        </figcaption>
      </figure>
      <p>see ya later alligators</p>
    </Week>
  );
}
