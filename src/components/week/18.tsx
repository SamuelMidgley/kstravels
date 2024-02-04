import { Figure } from "../Figure";
import { Week } from "./Week";

import hammer from "@/assets/week18/hammer.jpg";
import pancake from "@/assets/week18/pancake.jpg";
import kiararing from "@/assets/week18/kiararing.jpg";
import samring from "@/assets/week18/samring.jpg";
import smoothie from "@/assets/week18/smoothie.jpg";
import firedance from "@/assets/week18/firedance.jpg";
import sunset from "@/assets/week18/sunset.jpg";
import coffee from "@/assets/week18/coffee.jpg";

export function Week18() {
  return (
    <Week
      title="Week 19: Ubud to be kidding me"
      datePosted={new Date(2024, 0, 25, 12)}
      imageUrl=""
      imageAlt=""
    >
      <p>Ello ello</p>
      <h2>Ubud</h2>
      <p>
        We stayed in the hostel that was voted the best in Indonesia! it was
        nice but honestly we brought the average age up a few years (everyone
        looked fresh out of school) which made me feel old. PSA sorry to all the
        old people I’ve made fun of for being old (*cough*Dad*cough*), I know im
        still in my twenties, but for one brief shining moment i had a glimpse
        into my future
      </p>
      <Figure
        src={smoothie}
        caption="Sam and his 10000th dragonfruit smoothie"
      />
      <p>
        We did ring making, as in made it from scratch (with a lot of help from
        the people that worked there). We etched our patterns in, I did suns and
        Sam did dots. he got trypophobiahalfway through. No, I’m not joking.
      </p>
      <Figure src={hammer} caption="Intrusive thoughts kicking in" />
      <Figure src={kiararing} caption="My ring" />
      <Figure src={samring} caption="Sam's ring" />
      <p>
        Our next stop at Ubud was at an airbnb which was beeaaaauuutiful. Here's
        the view we had at sunset
      </p>
      <Figure src={sunset} caption="Just incredible" />
      <Figure
        src={pancake}
        caption="Dragonfruit pancakes for breakfast (can you tell we’re obsessed with dragonfruit?)"
      />
      <Figure
        src={firedance}
        caption="Our airbnb host is part of a fire dance which was cool to watch"
      />
      <h2>Sidemen</h2>
      <Figure
        src={coffee}
        caption="On the way to Sidemen our driver stopped off at a coffee place and we sampled some Indonesian coffee"
      />
    </Week>
  );
}
