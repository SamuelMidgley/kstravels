import { Week } from "./Week";
import { Figure } from "../Figure";
import image from "@/assets/week10.jpg";
import firstdrive from "@/assets/week10/firstdrive.jpg";
import twelve from "@/assets/week10/12apostles.jpg";
import wreck from "@/assets/week10/wreck.jpg";
import bank from "@/assets/week10/bank.jpg";
import news from "@/assets/week10/new.jpg";
import red from "@/assets/week10/red.jpg";
import tree from "@/assets/week10/tree.jpg";
import trip from "@/assets/week10/trip.jpg";
import wine from "@/assets/week10/wine.jpg";
import baddriver from "@/assets/week10/baddriver.jpg";
import stretch from "@/assets/week10/stretch.jpg";
import roadbyocean from "@/assets/week10/roadbyocean.jpg";
import lochardgorge from "@/assets/week10/razorback.jpg";
import londonbridge from "@/assets/week10/londonbridge.jpg";
import grotto from "@/assets/week10/grotto.jpg";
import winemug from "@/assets/week10/winemug.jpg";
import sous from "@/assets/week10/sous.jpg";
import joy from "@/assets/week10/joy.jpg";

export function WeekTen() {
  return (
    <Week
      title="Week 10-11: Adelaide odl lay hee hoo"
      imageUrl={image}
      imageAlt="Adelaide skyline"
      datePosted={new Date(2023, 10, 29, 12)}
    >
      <p>Helloooo</p>
      <p>Big week this week, we did a road trip!!</p>
      <h2>Melbourne ➡➡ Apollo bay</h2>
      <p>
        Here's us when we first got in the car!! for all my bravado about liking
        being the person driving, and not a passenger, it turns out I absolutely
        hate driving automatics...
      </p>
      <Figure
        src={firstdrive}
        alt="Sam and Kiara in a car"
        caption="Skrrrrtt"
      />
      <p>
        ... because I keep trying to change gear when slowing down / making
        turns and that doesn't work in automatics, it puts you in reverse
        instead (I learnt this from experience)
      </p>
      <Figure
        src={baddriver}
        alt="Kiara being bad at driving"
        caption="Kiara being bad at driving"
      />
      <p>We stopped off at some v pretty sites along the great ocean road:</p>
      <Figure
        src={stretch}
        alt=""
        caption="Kiara showcasing her impressive flexibility at Point Addis beach"
      />
      <Figure
        src={roadbyocean}
        alt=""
        caption="Look at the road by the ocean, makes you wonder how they came up with the name"
      />
      <h2>Apollo bay ➡ Port Campbell</h2>
      <p>
        The next day was a short hop through the Great Otway National Park to
        Port Campbell.
      </p>
      <Figure
        src={wreck}
        alt="selfie"
        caption="We went to ship wreck beach, except we didn't time it well with the
        tides and we saw no wrecks because it was at high tide"
      />
      <Figure
        src={lochardgorge}
        alt=""
        caption="Loch Ard Gorge, home to the shipwreck of the Loch Ard "
      />
      <Figure
        src={twelve}
        alt="Twelve apostles"
        caption="Some of the 12 apostles"
      />
      <h2>Port Campbell ➡ Warrnambool</h2>
      <Figure
        src={londonbridge}
        alt=""
        caption="'London Bridge'... yeah I don't see it either"
      />
      <Figure src={grotto} alt="" caption="The Grotto" />
      <p>the wind doing a madness on Sam's hair</p>
      <h2>Warrnambool ➡ Adelaide</h2>
      <p>
        Well blimey this was a long drive. We didn't take any photos but that's
        probably for the best.
      </p>
      <p>
        When we got to Adelaide we went into an art museum (because it was free
        and we needed a wee) here were some our fave art pieces:
      </p>
      <Figure
        src={red}
        alt="Red string"
        caption="A big room with some red string"
      />
      <Figure
        src={trip}
        alt="Reflective art piece"
        caption="Spot us in this groovy sculpture (Look away if yo have tripiphobia"
      />
      <Figure
        src={image}
        alt="Skyline"
        caption="We had a lil walky around the parks an botanical gardens, they have
        boats here that you can hire with barbeques on!!"
      />
      <Figure src={tree} alt="tree" caption="Tree" />
      <Figure src={bank} alt="Riverbank" caption="Riverbank" />
      <Figure
        src={news}
        alt="news anchor on the streets"
        caption="We spotted a newsreader about to do her segment, we tried to loiter so
        we could git in the background but they were taking to long"
      />
      <Figure
        src={wine}
        alt="Kiara holding wine"
        caption="We stumbled across a cheese and wine festival!! had some mac * cheese
        and pizza with cheap wine"
      />
      <h2>Adelaide ➡ Halls gap ➡ Melbourne</h2>
      <p>
        We stopped off at Halls gap on the way back to Melbourne. We should have
        really had another night here as we didn't get to fully explore the
        Grampians but ah well.
      </p>
      <h2>Bonus Week 11 content</h2>
      <p>
        I know aren't you a lucky bunch. We spent roughly a week in Melbourne.
        We were supposed to stay at the Nunnery but Kiara's aunt (Sharon) let us
        stay in a penthouse hotel suite they had for two nights!!
      </p>
      <Figure
        src={winemug}
        alt=""
        caption="Drinking wine from a mug on the balcony"
      />
      <Figure
        src={sous}
        alt=""
        caption="We helped out with Sharon and Bjorn's nordic dining experience. Here's Sam's expert cutting skills on display. Kiara was on waitressing duty"
      />
      <Figure
        src={joy}
        alt=""
        caption="We also saw Joy Anonymous, it was cool, Sam fell off a table"
      />
      <p>
        Thanks so much for getting through this bumper weekly update. We'll be
        in New Zealand for our next update which is fun!
      </p>
      <p>Bye Bye Miss American Pies</p>
    </Week>
  );
}
