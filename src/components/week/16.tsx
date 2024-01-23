import { Week } from "./Week";

import bus from "../../assets/week16/bus.jpg";
import festival from "../../assets/week16/festival.jpg";
import food from "../../assets/week16/food.jpg";
import teeth from "../../assets/week16/teeth.jpg";
import sagoo from "../../assets/week16/sagoofam.jpg";
import tanglewood from "../../assets/week16/tanglewood.jpg";
import samdoof from "../../assets/week16/samdoof.jpg";
import groovy from "../../assets/week16/groovy.jpg";
import sunset from "../../assets/week16/sunset.jpg";
import { Figure } from "../Figure";

export function Week16() {
  return (
    <Week
      title="Week 16: You never forget your first (Doof)"
      imageUrl={tanglewood}
      imageAlt="Doof Doof Doof Doof"
      datePosted={new Date(2024, 0, 23, 12)}
    >
      <p>G'day mates we're back in Melbourne for the week!</p>
      <Figure
        src={bus}
        caption="Very random but I thought this bus was funny looking"
      />
      <h2>Chrimbo at the Sagoos</h2>
      <p>
        Christmas and new year was very untraditional. Apart from the fact it
        rained on christmas day, pretty standard to be honest, could’ve stayed
        in England for that.
      </p>
      <Figure src={food} caption="Get in ma belly" />
      <Figure
        src={sagoo}
        caption="The Sagoo fam, from left to right; Molly, Smelly, Kiran, Paul, Sharon, Taj"
      />
      <h2>Tanglewood</h2>
      <p>
        We went to our first doof (bush rave) for New Years and also me and
        Kiara's first camping festival. Luckily Will (my cousin) and Lucy
        (Will's girlfriend) hooked us up with some sweet glamping kit.
      </p>

      <Figure
        src={teeth}
        caption="The photo we all wanted to see ... Kiara brushing her teeth"
      />
      <p>
        Note from Kiara: The only downside of the festival was the hand
        sanitiser in the loos smelt eerily similar to tequila, which, if you
        were at my 18th birthday, you’ll know why this smell makes me wanna vom
      </p>
      <Figure
        src={groovy}
        caption="Super fun challenge, guess which one is me and Kiara"
      />
      <Figure
        src={festival}
        caption="Kiara was a lot quicker at embracing the doof..."
      />
      <Figure
        src={samdoof}
        caption="... but towards the end I may have doofed a bit too hard"
      />
      <p>
        We then spent a few days back in Melbourne with Kiara's fam before
        setting off on our next adventure.
      </p>
      <Figure src={sunset} caption="Our last sunset in Australia :(" />
      <p>
        We're off to Bali next so stay tuned for some more exciting blog posts!
      </p>
      <p>Bye bye my little flies</p>
    </Week>
  );
}
