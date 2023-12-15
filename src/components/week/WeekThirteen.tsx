import { Week } from "./Week";
import { Figure } from "../Figure";
import week13img from "../../assets/week13.jpg";
import sendit from "../../assets/week13/sendit.jpg";
import longexposure from "../../assets/week13/longexposure.jpg";
import absail from "../../assets/week13/absail.jpg";
import sailing from "../../assets/week13/sailing.jpg";
import kerosene from "../../assets/week13/kerosene.jpg";
import craters from "../../assets/week13/craters.jpg";
import huka from "../../assets/week13/huka.jpg";
import canoe from "../../assets/week13/canoe.jpg";
import taranaki from "../../assets/week13/taranaki.jpg";
import toilet from "../../assets/week13/toilet.jpg";
import iwi from "../../assets/week13/iwi.jpg";
import indian from "../../assets/week13/indian.jpg";
import voibey from "../../assets/week13/voibey.jpg";
import mountvictoria from "../../assets/week13/mountvictoria.jpg";
import jump from "../../assets/week13/jump.mp4";
import stole from "../../assets/week13/stole.jpg";
import buckets from "../../assets/week13/buckets.jpg";
import confident from "../../assets/week13/confident.jpg";
// Hobbiton
import bilbo from "../../assets/week13/bilbo.jpg";
import chillin from "../../assets/week13/chillin.jpg";
import housework from "../../assets/week13/housework.jpg";
import hygienic from "../../assets/week13/hygienic.jpg";
import mtvcribs from "../../assets/week13/mtv cribs.jpg";
import snooze from "../../assets/week13/snooze.jpg";
import uptodate from "../../assets/week13/uptodate.jpg";

export function WeekThirteen() {
  return (
    <Week
      title="Week 13: Kiwi iwi"
      imageUrl={week13img}
      imageAlt="The kiwi experience bus in front of the Morrinsville Mega Cow"
      datePosted={new Date(2023, 11, 15, 12)}
    >
      <p>Hello everybody,</p>
      <p>
        This week we've been traveling all the way down the north island to
        Wellington.
      </p>
      <h2>Hot water beach</h2>
      <p>
        Our first stop was hot water beach. As the name implies there is hot
        water on the beach. We didn't take any photos but gosh darn was it busy
        and surprisingly hot getting up to 64 degrees celsius.
      </p>
      <h2>Waitomo</h2>
      <p>
        The next day we wasted no time and headed straight to Waitomo for the
        famous glowworm caves. Definitely one of the highlights of all our
        travels.
      </p>
      <Figure
        src={confident}
        caption="Kiara about to abseil 60m into a cave. Absolutely no hint of her being scared ... right?"
        alt=""
      />
      <Figure src={absail} caption="The hole we abseiled into" alt="" />
      <Figure
        src={longexposure}
        caption="The stalagmites above us kinda look like gandalf"
        alt=""
      />
      <Figure src={sendit} caption="Just send it bro" alt="" />
      <h2>Rotorua</h2>
      <p>
        No rest for the backpackers so we headed straight to Rotorua. Along the
        way we went to Hobbiton!!
      </p>
      <Figure src={bilbo} alt="" caption="Outside Bilbo's house" />
      <Figure
        src={chillin}
        alt=""
        caption="The attention to detail was incredible"
      />
      <Figure src={mtvcribs} alt="" caption="Hey MTV welcome to our crib" />
      <p>
        They had just opened up two hobbit holes that you can go into and we got
        a little bit too invested...
      </p>
      <Figure
        src={uptodate}
        alt=""
        caption="Got to keep up to date on the latest news"
      />
      <Figure src={housework} alt="" caption="Hanging out the washed clothes" />
      <Figure
        src={hygienic}
        alt=""
        caption="They had a functioning sink here, so extra"
      />
      <Figure src={snooze} alt="" caption="Lil snooze after a long hard day" />
      <p>
        We then finished off the evening by going to the Mita Maori dining
        experience. It was nice to have a meal that wasn't pasta and it was an
        interesting experience learning a bit about Maori culture.
      </p>
      <Figure src={canoe} alt="" caption="Maori war canoe" />
      <h2>Taupo</h2>
      <p>
        Along the way we went rafting down the Kaituna river. We were supposed
        to do the 7m waterfall but that got cancelled due to rain so we did a
        much longer raft which was pretty fun. No photos unfortunately.
      </p>
      <Figure
        src={huka}
        alt=""
        caption="Huka waterfall, believe it or not someone body boarded down here..."
      />
      <p>
        When we got to Taupo the whole Kiwi experience bus went on a Catamaran
        and went for a little sail on Lake Taupo to the Ngatoroirangi Mine Bay
        Maori Rock Carvings.
      </p>
      <Figure
        src={sailing}
        caption="Sailing on lake Taupo, the man in the hat is our bus driver Elliot"
        alt=""
      />
      <Figure
        src={voibey}
        alt=""
        caption="Me and Kiara drinking apple juice and sparkling water :)"
      />
      <figure>
        <video controls>
          <source src={jump} type="video/mp4" />
        </video>
        <figcaption className="text-sm mt-3 text-center">
          Let me tell you the water was bloody baltic
        </figcaption>
      </figure>
      <p>
        We also had a little bit of karaoke on the way back but fortunately for
        everyone we "lost" the video of that.
      </p>
      <Figure
        src={stole}
        alt=""
        caption="Finished the night by stealing our bus drivers cap..."
      />
      <p>We then had a free day in Taupo to explore.</p>
      <Figure
        src={craters}
        alt=""
        caption="Craters of the moon, Kiara was in geographer's heaven"
      />
      <Figure
        src={kerosene}
        alt=""
        caption="Kerosene creek. While swimming in a hot river was cool for a hot second ... holy cow did it stink, like pure unfiltered fart water. We then stunk out the airbnb as well to dry our swimwear 🤪"
      />
      <h2>Wellington</h2>
      <p>
        On the way to wellington we stopped in Tongariro National Park and went
        for a pretty stunning hike (not the alpine crossing tho).
      </p>
      <Figure src={taranaki} alt="" caption="Taranaki falls" />
      <Figure
        src={toilet}
        alt=""
        caption="Mount Ruapehu in the background, that little hut is a toilet"
      />
      <p>
        We then spent 3 nights in Wellington and made full use of our hotels spa
        and gym.
      </p>
      <Figure
        src={mountvictoria}
        alt=""
        caption="Windy Wellington from the top of Mount Victoria"
      />
      <Figure
        src={buckets}
        alt=""
        caption="Wellington's iconic bucket fountain, fun fact Elijah Wood relieved himself in this very fountain"
      />
      <Figure
        src={indian}
        alt=""
        caption="We went out for an Indian to celebrate Christoph's (red shirt at the back) birthday"
      />
      <Figure
        src={iwi}
        alt=""
        caption="Kiwi iwi!! We were told our ferry was leaving at 5am instead of 9am so being the intelligent young adults we are we decided to just go out all night rather than going to sleep. Truly a terrible idea."
      />
      <p>Gotta scoot my lil newts</p>
    </Week>
  );
}
