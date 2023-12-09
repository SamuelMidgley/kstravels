import { Figure } from "../Figure";
import { Poll } from "../poll/Poll";
import { Week } from "./Week";
import week12img from "../../assets/week12.jpg";
import skytower from "../../assets/week12/skytower.jpg";
import drpepper from "../../assets/week12/drpepper.jpg";
import falls from "../../assets/week12/falls.jpg";
import path from "../../assets/week12/path.jpg";
import lookout from "../../assets/week12/lookout.jpg";
import cricket from "../../assets/week12/cricket.jpg";
import lighthouse from "../../assets/week12/lighthouse.jpg";
import london from "../../assets/week12/london.jpg";
import scared from "../../assets/week12/chick.jpg";
import bridge from "../../assets/week12/bridge.jpg";
import walk from "../../assets/week12/walk.jpg";
import pretty from "../../assets/week12/pretty.jpg";
import russell from "../../assets/week12/russell.jpg";
import samboarding from "../../assets/week12/samboarding.mp4";
import kiaraboarding from "../../assets/week12/kiaraboarding.mp4";
import bus from "../../assets/week12/bus.jpg";
import oops from "../../assets/week12/oops.jpg";

export function WeekTwelve() {
  return (
    <Week
      title="Week 12: We've (Auck)landed!!"
      imageUrl={week12img}
      imageAlt="Cape Reinga lighthouse, you can also see Te Aroha on the right side of the photo"
      datePosted={new Date(2023, 11, 9, 12)}
    >
      <p>Kia ora everyone,</p>
      <p>
        We made it to New Zealand! Til Christmas eve we will be touring the
        north and south islands of New Zealand on the Kiwi experience bus!
      </p>
      <h2>Auckland</h2>
      <Figure
        src={skytower}
        caption="Auckland sky tower, Fun fact, it's the same height as the Eiffel tower (to within 3m)"
        alt=""
      />
      <Figure
        src={drpepper}
        caption="For all 3 Dr Pepper enthusiasts in the world look at these flavours :O"
        alt=""
      />
      <h2>Paihia</h2>
      <p>
        Our first stop on our New Zealand journey is up north to Paihia, the
        home of the bay of islands.
      </p>
      <Figure
        src={falls}
        caption="Along the way we stopped at Whangārei Falls"
        alt=""
      />
      <Figure
        src={path}
        caption="Once we arrived at Paihia we did a short walk up to a lookout..."
        alt=""
      />
      <Figure
        src={lookout}
        caption="The lookout wasn't the best tbh with trees blocking most of the view but still v pretty"
        alt=""
      />
      <Figure src={cricket} alt="" caption="This one's for the cricket fans" />
      <h2>Cape Reinga</h2>
      <p>
        We went on a fun day trip up to Cape Reinga, the furthest north you can
        go in New Zealand.
      </p>
      <Figure src={lighthouse} caption="Pretty lighthouse" alt="" />
      <Figure src={london} caption="We're a long way from home here" alt="" />
      <p>
        This is very exciting ... we have now added polls to our blog. The first
        poll is coming up for who sandboards better. We were supposed to be
        doing this at the giant sand dunes but for some fabricated reason we
        couldn't go there so we went elsewhere and tbh didn't need to leave
        Norfolk for this but hey ho we move. So have a good look at both videos
        and vote for who u think did it better...
      </p>
      <figure>
        <video controls>
          <source src={kiaraboarding} type="video/mp4" />
        </video>
        <figcaption className="text-sm mt-3 text-center">
          Sam sandboarding
        </figcaption>
      </figure>
      <figure>
        <video controls>
          <source src={samboarding} type="video/mp4" />
        </video>
        <figcaption className="text-sm mt-3 text-center">
          Kiara sandboarding
        </figcaption>
      </figure>
      <Poll className="mt-[40px]" pollId={1} />
      <Figure
        src={bus}
        caption="We also went down 90 mile beach which is a national highway in New Zealand which is pretty cool. Another fun fact for you the beach is actually 55 miles along and this actually has come up on a pub quiz we've done in sheffield"
        alt=""
      />
      <h2>Russell</h2>
      <p>
        We're traveling New Zealand on the Kiwi Experience and the bus drivers
        here love a bit of trivia. We heard from 3 separate bus drivers that
        Russell was called "" by Charles Darwin. Of course now it's a cute
        little town where rich Aucklander's go for new year.
      </p>
      <Figure src={russell} alt="" caption="A view of Russell harbour" />
      <Figure src={walk} alt="" caption="The walk to Tapeko viewpoint" />
      <Figure
        src={pretty}
        alt=""
        caption="We took way too many photos on this walk..."
      />
      <h2>Paihia again...</h2>
      <p>
        The morning before the bus we went for a quick walk to XX falls. We
        walked along a road there and found a twitching dying rat but on the way
        back we found the proper walk and it was stunning.
      </p>
      <Figure
        src={scared}
        alt=""
        caption="Kiara running away from the smallest chick..."
      />
      <Figure src={bridge} alt="" caption="A cute bridge" />
      <p>Haere rā (Bye in maori)</p>
      <h2>Bonus bloopers</h2>
      <Figure
        src={oops}
        caption="This is our first attempt at me pointing to the sign. As you can see Sam didn't quite get the vision..."
        alt=""
      />
    </Week>
  );
}
