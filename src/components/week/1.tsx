import { Week } from "./Week";
import imageUrl from "@/assets/week1.jpg";
import one from "@/assets/week1/one.jpg";
import two from "@/assets/week1/two.jpg";
import three from "@/assets/week1/three.jpg";
import four from "@/assets/week1/four.jpg";
import five from "@/assets/week1/five.jpg";
import six from "@/assets/week1/six.jpg";
import seven from "@/assets/week1/seven.jpg";
import eight from "@/assets/week1/eight.jpg";
import nine from "@/assets/week1/nine.jpg";
import ten from "@/assets/week1/ten.jpg";

export function WeekOne() {
  return (
    <Week
      title="Week 1: Melbourne !!"
      imageUrl={imageUrl}
      imageAlt="Kiara wearing a cowboy hat"
      datePosted={new Date(2023, 8, 18, 12)}
    >
      <p>Hi lovely friends and family,</p>
      <p>Hope everyone's well,</p>
      <p>
        We&apos;ve been in Australia for a whole week! And have finally got over
        the jet lag, yay! Sam thinks it&apos;s important everyone knows he
        adjusted to the time a lot quicker than me, so there you go.
      </p>
      <h2>St Kilda</h2>
      <p>
        St Kilda, we walked an hour to get there and I got a blister on my foot
        because my sock had a hole in it (yikes) (it was sams sock not mine, mom
        don&apos;t shout at me for owning a holey sock). We also saw a group of
        pigeons. You can escape home but you can&apos;t escape your demons
        clearly.
      </p>
      <figure>
        <img
          src={two}
          alt="Some pretty trees"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          Some pretty trees
        </figcaption>
      </figure>
      <figure>
        <img
          src={one}
          alt="Of course there are pigeons here"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          Of course there are pigeons here
        </figcaption>
      </figure>
      <h2>Melbourne CBD</h2>
      <figure>
        <img
          src={three}
          alt="A fairytale tree carving in Fitzroy gardens"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          A fairytale tree carving in Fitzroy gardens
        </figcaption>
      </figure>
      <figure>
        <img
          src={four}
          alt="A painting from the Victorian art gallery in the CBD (central business district)"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          A painting from the Victorian art gallery in the CBD (central business
          district)
        </figcaption>
      </figure>
      <figure>
        <img
          src={five}
          alt="Another pretty painting"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          Another pretty painting
        </figcaption>
      </figure>
      <h2>Melbourne botanical gardens</h2>
      <p>
        We took a nice long walk to the botanical gardens, here are some cool
        things we saw:
      </p>
      <figure>
        <img
          src={six}
          alt="Theres a tree growing inside the tree if you look closely!"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          Theres a tree growing inside the tree if you look closely!
        </figcaption>
      </figure>
      <figure>
        <img
          src={seven}
          alt="The pink flowers growing out of the plant were giving alien vibes"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          The pink flowers growing out of the plant were giving alien vibes
        </figcaption>
      </figure>
      <figure>
        <img
          src={eight}
          alt="Princes Pier, an old dock where we watched sunset"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          Princes Pier, an old dock where we watched sunset
        </figcaption>
      </figure>
      <figure>
        <img
          src={nine}
          alt="The Lume gallery, we went to see an exhibit of aboriginal artwork exhibit, was v cool, there was a voiceover of the artists talking about the art and how it expressed their culture "
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          The Lume gallery, we went to see an exhibit of aboriginal artwork
          exhibit, was v cool, there was a voiceover of the artists talking
          about the art and how it expressed their culture
        </figcaption>
      </figure>
      <figure>
        <img
          src={ten}
          alt="Another photo of the Lume"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          Another photo of the Lume
        </figcaption>
      </figure>

      <p>tood-a-loos kangaroos</p>
    </Week>
  );
}
