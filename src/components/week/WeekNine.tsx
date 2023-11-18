import { Figure } from "../Figure";
import { Week } from "./Week";
import image from "@/assets/week9.jpg";
import jam from "@/assets/week9/jam.jpg";
import angel from "@/assets/week9/angel.jpg";
import mornington from "@/assets/week9/mornington.jpg";
import blochaus from "@/assets/week9/blochaus.jpg";
import parma from "@/assets/week9/parma.jpg";
import planetearth from "@/assets/week9/planetearth.jpg";
import orange from "@/assets/week9/orange.jpg";

export function WeekNine() {
  return (
    <Week
      title="Week 9: The (Mel)Bourne Ultimatum"
      imageUrl={image}
      imageAlt="Sunset in port melbourne"
      datePosted={new Date(2023, 10, 16, 12)}
    >
      <p>G'day mateys</p>
      <p>
        It's a small update from us this week as we've been planning for our
        great ocean road trip and New Zealand adventure we'll be doing this
        month!
      </p>
      <Figure
        src={jam}
        alt="Jam croissant"
        caption="Yes that's right it's a jam doughnut/croissant hybrid. HOWEVER, I thought this was a cute invention by the local coffee shop so imagine my horror when I saw the EXACT same croissant in Starbucks :("
      />
      <h2>The Planet Earth Experience</h2>
      <p>
        For the OG Sam and Kiara fans you'll know we went to the LUME for
        "Connection" which was about the art, music and culture of the first
        nations. Well, the same venue was also running a planet earth experience
        so you know we were gonna go there. It showed 10 minutes of footage from
        each continent and was pretty groovy.
      </p>
      <Figure
        src={planetearth}
        alt="A penguin on a big screen"
        caption="A penguin, yes, this was the best photo we took from the hour and a half we were here"
      />
      <Figure
        src={angel}
        alt="Kiara making an angel shape"
        caption="Kiara making an angel shape"
      />
      <h2>A trip to Mornington with Will and Lucy</h2>
      <p>
        We finally met up with Will and his girlfriend Lucy and went on a day
        trip to Mornington. Sam continued his Cotton On addiction, we went to
        the pub, and finished the day having some beers in a hot tub. It's a
        hard life down under.
      </p>
      <Figure
        src={parma}
        alt="A parma"
        caption="I finally tried the Australian delicacy that is a Parma. Imagine a ham and cheese pizza but with a fried chicken base :O Kiara had a salad..."
      />
      <Figure
        src={mornington}
        alt="Murray's lookout"
        caption="Murray's lookout, if you look closely at the horizon you won't be able to see Melbourne cus it was hazy"
      />
      <h2>You never forget your first (Australian bouldering competition)</h2>
      <p>
        It's been a hot minute since I've "competed" in a climbing competition
        so when better to start again than 2 months into a holiday. I was
        holding strong in the top 30 but DISASTER... a few hours in I noticed
        that I was 33rd. There was only 30 minutes left, my fingers were sore, I
        knew I needed to climb harder than I ever have before. So with every
        ounce of strength I had left I went to the pub and had a burger and a
        schooner.
      </p>
      <Figure
        src={blochaus}
        alt="A flyer"
        caption="I didn't actually take any photos of the event but here's the flyer so just use your imagination"
      />
      <p>
        PS. If anyone is wondering whether we miss the UK while in aus I will
        leave you with the price of a terrys choc orange over here
      </p>
      <Figure
        src={orange}
        alt="A terrys chocolate orange for $7.50"
        caption="A far cry from the £1.50 we're used to"
      />
      <p>Can't stay, Blue Jay</p>
    </Week>
  );
}
