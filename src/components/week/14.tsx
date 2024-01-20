import { Figure } from "../Figure";
import { Week } from "./Week";
import { Poll } from "../poll/Poll";
import week14 from "../../assets/week14.jpg";

import golf from "../../assets/week14/golf.jpg";
import westport from "../../assets/week14/westport.jpg";
import smores from "../../assets/week14/smores.jpg";
import fergburger from "../../assets/week14/fergburger.jpg";
import sunset from "../../assets/week14/sunset.jpg";
import lakehawea from "../../assets/week14/lakehawea.jpg";
import scared from "../../assets/week14/scared.jpg";
import quad1 from "../../assets/week14/quad.jpg";
import quad2 from "../../assets/week14/quad2.jpg";
import quad3 from "../../assets/week14/quad3.jpg";
import kayak from "../../assets/week14/kayak.jpg";
import wee from "../../assets/week14/wee.jpg";
import reflection from "../../assets/week14/reflection.jpg";
import fire from "../../assets/week14/fire.jpg";
import milford from "../../assets/week14/milford.jpg";
import icebar from "../../assets/week14/icebar.jpg";
import highfive from "../../assets/week14/highfive.jpg";

export function WeekFourteen() {
  return (
    <Week
      title="Week 14: We're going on an adventure 🧙‍♂️"
      imageUrl={week14}
      imageAlt="Check out Franz Josef glacier in the background"
      datePosted={new Date(2023, 11, 15, 12)}
    >
      <p>Kia ora koutou (Hello everyone)</p>
      <h2>Kaiteriteri</h2>
      <p>
        Our first stop on the south island was Kaiteriteri right on the border
        of the Abel Tasman national park. So it only makes sense to play mini
        golf right??
      </p>
      <Figure src={golf} caption="Kiara 'Tiger Woods' Sagoo" />
      <h2>Westport bestport</h2>
      <p>
        Along the way to Westport we went to Lake Rotoiti Jetty to get that
        iconic jump.
      </p>
      <Figure
        src={highfive}
        caption="No comment on how long this took to get..."
      />
      <p>
        Didn't know what to expect from Westport but it was actually pretty fun.
        Me and Kiara went for a little run (yep I know what you're thinking...
        that's not a typo) and saw some pretty sites.
      </p>
      <Figure src={westport} caption="A lovely view of westport" />
      <p> We then ended the day with a bonfire and some s'mores.</p>
      <Figure src={smores} caption="Please sir can I have some s'more" />
      <h2>Franz Josef</h2>
      <p>
        Wowza this was a beautiful stop. When we got here we took a lil hike to
        the glacier and it is terrifying seeing how far it has retreated in
        recent years #globalwarming #recedingfasterthanmyhairline.
      </p>
      <p>
        On our free day here we started off with a cheeky bit of quad biking.
      </p>
      <Figure src={quad1} caption="Straight out of a catalogue" />
      <Figure
        src={quad2}
        caption="These were included in the price which is pretty crazy"
      />
      <Figure src={quad3} caption="Cheeky photobomb by a glacier" />
      <p>We then finished the day with a little bit of kayaking</p>
      <Figure
        src={kayak}
        caption="There may have been a wee bit of arguing during this activity regarding Kiara's knowledge of left and right (and general co-ordination)"
      />
      <h2>Queenstown</h2>
      <Figure
        src={lakehawea}
        caption="One of the stops on the way to Queenstown, Lake Hawea"
      />
      <p>
        It's just getting more and more beautiful. Honestly might be the
        prettiest city we've ever been to. We arrived to a pretty incredible
        sunset and got a fergburger (a Queenstown institute)
      </p>
      <Figure
        src={sunset}
        caption="Definitely one of the sunsets of all time"
      />
      <Figure
        src={fergburger}
        caption="It's actually disgraceful how many of these we got..."
      />
      <p>
        The next day we really went out of our comfort zones and did the
        shotover canyon swing. I can't remember the last time I was that
        scared...
      </p>
      <Figure src={scared} caption="Who looks more scared? Vote below..." />
      <Poll className="mt-[40px]" pollId={2} />
      <h2>Milford Sound</h2>
      <p>
        While in Queenstown we had a hefty 12 hour day trip to Milford Sound
        (actually a Fjord). Tbh the drive there was more impressive than the
        Fjord but that's more of a compliment of the drive.
      </p>
      <Figure
        src={wee}
        caption="It's not me in the photo but I did take it and I think it looks pretty cool"
      />
      <Figure src={reflection} caption="Such reflection many wow" />
      <Figure
        src={milford}
        caption="The eighth wonder of the world... obvs haven't seen Beeston Bump"
      />
      <Figure src={fire} caption="It's giving 'Disaster girl' meme vibes" />
      <p>
        We got back just in time to do a kiwi experience pub crawl. Big fan of a
        Queenstown night out.
      </p>
      <Figure src={icebar} caption="This bar was made of ice :O" />
      <p>Mā te wā (Until next time)</p>
    </Week>
  );
}
