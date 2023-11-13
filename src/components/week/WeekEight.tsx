import { Week } from "./Week";
import imageUrl from "@/assets/week8.jpg";
import russ from "@/assets/week8/russ.jpg";
import flick from "@/assets/week8/flick.jpg";
import jump from "@/assets/week8/jump.jpg";
import slide from "@/assets/week8/slide.mp4";
import hammock from "@/assets/week8/hammock.jpg";
import boat from "@/assets/week8/boat.jpg";
import thumbsup from "@/assets/week8/thumbsup.jpg";
import bird from "@/assets/week8/bird.jpg";
import scuba from "@/assets/week8/scuba.jpg";
import scubapose from "@/assets/week8/scubapose.jpg";
import skyrail from "@/assets/week8/skyrail.jpg";
import kuranda from "@/assets/week8/kuranda.jpg";
import train from "@/assets/week8/train.jpg";

export function WeekEight() {
  return (
    <Week
      title="Week 8: I Cairns quite believe it"
      imageUrl={imageUrl}
      imageAlt="Kiara on the Kuranda railway"
      datePosted={new Date(2023, 10, 12, 12)}
    >
      <p>Hellloooooo</p>
      <p>
        This is the final blog post for our east coast travels :(. This week we
        traveled up to our final destination: cairns where we saw the rainforest
        and the great barrier reef which were incredible! The town itself was
        okay, imagine an industrial estate thats been turned into a residential
        area.
      </p>
      <p>Without further ado here's what we got up to:</p>
      <h2>Uncle Brian's fun, falls and forest</h2>
      <p>
        Our first activity led us straight to the rainforest. We saw platypuses,
        flying foxes, turtles and many many tourists.
      </p>
      <figure>
        <img
          src={russ}
          alt="Russ the bus, our transport for the day"
          className="sm:aspect-[2/1] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          Russ the bus, our transport for the day
        </figcaption>
      </figure>
      <p>
        Our first stop for the day was at Babinda boulders. Fun fact, Babinda is
        Australia's wettest town and records an average annual rainfall in
        excess of 4 metres. This is also where we saw our first wild platypus.
      </p>
      <figure>
        <img src={jump} alt="Sam jumping into Babinda boulders" />
        <figcaption className="text-sm mt-3 text-center">
          Sam jumping into Babinda boulders
        </figcaption>
      </figure>
      <p>
        Our second stop was Wooroonooran (try saying that after a couple pints)
        where there is a natural waterslide!
      </p>
      <figure>
        <video controls>
          <source src={slide} type="video/mp4" />
        </video>
        <figcaption className="text-sm mt-3 text-center">
          Sam sliding away his problems
        </figcaption>
      </figure>
      <p>
        Our third stop was at Millaa Millaa Waterfall. You may recognise it from
        Peter Andre's Mysterious girl or the iconic Herbal essence hair flick.
        It's also home to an eel that bit two people on our tour oop. Sam also
        saw a baby turtle here.
      </p>
      <figure>
        <img src={flick} alt="Hair flick at Millaa Millaa falls" />
        <figcaption className="text-sm mt-3 text-center">
          Mysterious girl? More like mysterious hairline. Our attempt at the
          herbal essence hair flick...
        </figcaption>
      </figure>
      <h2>The Great Barrier Reef</h2>
      <p>
        C'mon, we weren't gonna do the east coast and not go the great barrier
        reef. We had a wonderful day with lots of food and pretty views.
      </p>
      <p>
        There was also a semi submersible tour with a marine biologist, and yes
        the recent submarine implosion was on our mind and it didn't help that
        was a company called ocean gate and we were with ocean spirit.
      </p>
      <figure>
        <img
          src={boat}
          alt="Our boat for the day"
          className="sm:aspect-[3/2] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          Our boat for the day
        </figcaption>
      </figure>
      <figure>
        <img
          src={bird}
          alt="Birds on michelmas cay"
          className="sm:aspect-[3/2] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          A small collection of the birds on Michaelmas cay which is a bird
          sanctuary that can be home to up to 20,000 birds
        </figcaption>
      </figure>
      <figure>
        <img
          src={thumbsup}
          alt="Sam in a wetsuit"
          className="sm:aspect-[3/2] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          Sam after just snorkelling with two turtles!
        </figcaption>
      </figure>
      <h2>The Great Barrier Reef cont.</h2>
      <p>
        Sam loved his scuba dive so much he went on a lil solo adventure the
        following day to Port Douglas and did 3 dives and saw loads of reef
        sharks. He met a brummy called Tom who took these photos:
      </p>
      <figure>
        <img
          src={scuba}
          alt="Sam scuba diving"
          className="sm:aspect-[3/2] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          Gotta do the pose 👌
        </figcaption>
      </figure>
      <figure>
        <img
          src={scubapose}
          alt="Sam also scuba diving"
          className="sm:aspect-[3/2] object-cover"
        />
        <figcaption className="text-sm mt-3 text-center">
          Just effortlessly cool
        </figcaption>
      </figure>
      <h2>Kuranda Scenic Railway and Skyrail</h2>
      <p>
        We were embracing our inner OAP on this day. Saw lots of pretty views of
        waterfalls and rainforests. We also met an Austrian lady who had been
        skiing at Turracher Hohe, small world!
      </p>
      <figure>
        <img src={kuranda} alt="The train at kuranda" />
        <figcaption className="text-sm mt-3 text-center">
          The train stopped at Kuranda
        </figcaption>
      </figure>
      <figure>
        <img src={train} alt="The views from the skyrail" />
        <figcaption className="text-sm mt-3 text-center">
          Some of the pretty spectacular views on the train journey
        </figcaption>
      </figure>
      <figure>
        <img src={skyrail} alt="The views from the skyrail" />
        <figcaption className="text-sm mt-3 text-center">
          The views from the skyrail
        </figcaption>
      </figure>
      <figure>
        <img src={hammock} alt="Kiara in a hammock" />
        <figcaption className="text-sm mt-3 text-center">
          Kiara relaxing in the hammock at our hostel on the last day
        </figcaption>
      </figure>
      <p>
        That's all for our east coast travels. Stay tuned for our next
        adventures.
      </p>
      <p>Hasta manana, piranha</p>
    </Week>
  );
}
