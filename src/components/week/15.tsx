import { Figure } from "../Figure";
import { Week } from "./Week";

// images
import dog from "../../assets/week15/dog.jpg";
import cook from "../../assets/week15/cook.jpg";
import christchurch from "../../assets/week15/christchurch.jpg";
import duck from "../../assets/week15/duck.jpg";
import fire from "../../assets/week15/duck.jpg";
import kaikoura from "../../assets/week15/kaikoura.jpg";
import lunch from "../../assets/week15/lunch.jpg";
import lupins from "../../assets/week15/lupins.jpg";
import seal from "../../assets/week15/seal.jpg";

export function Week15() {
  return (
    <Week
      title="Week 15: Zea(land) you later alligator"
      imageUrl={kaikoura}
      imageAlt="Kaikōura Peninsula walk"
      datePosted={new Date(2023, 11, 15, 12)}
    >
      <p>Hello Samiacs and Kiaranauts,</p>

      <h2>Queenstown ➡ Lake Tekapo</h2>
      <p>Our first stop after Queenstown in </p>
      <Figure
        src={cook}
        caption="If you squint you can see Mount Cook. I promise I didn't put a filter on this the blueness is due to the surrounding glaciers"
      />
      <Figure
        src={dog}
        caption="This statue was made to appreciate the value of the collie dog. Got me a little emotional RIP Mac & Idris ❤"
      />
      <Figure
        src={duck}
        caption="Yeah it's a duck ... but he kept eating my food so just wanted to shame it"
      />
      <Figure
        src={lupins}
        caption="Some pretty Lupins. You'd be surprised how many accidents these flowers cause with tourists trying to get photos of them"
      />
      <h2>Lake Tekapo ➡ Christchurch</h2>
      <p>
        We spent less than 24 hours here but that was still enough time to say
        bye
      </p>
      <Figure
        src={christchurch}
        caption="Apparently punting is a big thing here. Checks out that Christchurch is the Canterbury district."
      />
      <h2>Christchurch ➡ Kaikōura</h2>
      <Figure
        src={kaikoura}
        caption="You know we love a fun fact here so fun fact... the white land you see is only 10 years old and appeared after the Kaikōura earthquake"
      />
      <Figure
        src={lunch}
        caption="Now that is a gorgeous view, Kiara looks nice as well I guess"
      />
      <Figure
        src={fire}
        caption="Another beach fire, this time with fish and chips"
      />
      <h2>Kaikōura ➡ Wellington (again)</h2>
      <p>
        We were pretty shattered at this point so you'll be gutted to hear we
        don't have any more photos of the windiest place in New Zealand
      </p>
      <Figure
        src={seal}
        caption="On the way to Wellington we did a nice walk and saw loads of seals. We're not too sure if the seals here are fighting or doing adult things..."
      />
      <h2>Wellington (again) ➡ Taupo (again)</h2>
      <Figure src="" caption="You know we were going back on that boat" />
      <Figure src="" caption="That's me holding the noodle" />
      <Figure
        src=""
        caption="We managed to break a Kiwi Experience record and be the first people to get kicked out of the bar in Taupo 😎 #legends"
      />
      <h2>Taupo ➡ Auckland</h2>
      <Figure
        src=""
        caption="I dunno why this became a thing, defo a joke that got out of hand, but here's us embarrassing our bus driver Fraser on our last night in Auckland :)"
      />
      <p>
        And that's the end of New Zealand :( It honestly might have been the
        best month of our lives.
      </p>
      <p>On that note ... cya</p>
    </Week>
  );
}
