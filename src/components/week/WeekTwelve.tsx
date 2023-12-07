import { Figure } from "../Figure";
import { Week } from "./Week";

export function WeekEight() {
  return (
    <Week
      title="Week 12: We've (Auck)landed in New Zealand!!"
      imageUrl=""
      imageAlt=""
      datePosted={new Date(2023, 11, 4, 12)}
    >
      <p>Kia ora peeps,</p>
      <p>We made it to New Zealand!</p>
      <h2>Auckland</h2>
      <Figure
        src=""
        caption="Auckland sky tower, Fun fact, it's the same height as the Eiffel tower..."
        alt=""
      />
      <Figure
        src=""
        caption="For all the Dr Pepper enthusiasts out there look at these flavours :O"
        alt=""
      />
      <h2>Paihia</h2>
      <p>
        Our first stop on our New Zealand journey is up north to Paihia, the
        home of the bay of islands.
      </p>
      <Figure src="" caption="Along the way we stopped at X waterfall" alt="" />
      <Figure
        src=""
        caption="Once we arrived at Paihia we did a short walk up to a lookout..."
        alt=""
      />
      <Figure
        src=""
        caption="The lookout wasn't the best tbh with trees blocking most of the view but still v pretty"
        alt=""
      />
      <Figure
        src=""
        alt=""
        caption="For the cricket fans Paihia is the location of the first recorded game of cricket in New Zealand"
      />
      <h2>Cape Reinga</h2>
      <p>
        We went on a fun day trip up to Cape Reinga, the furthest north you can
        go in New Zealand.
      </p>
      <Figure
        src=""
        caption="If you look closely at the right side of the photo you can see a lonely tree that is XX"
        alt=""
      />
      <Figure src="" caption="We're a long way from home here" alt="" />
      <p>
        This is very exciting ... we have now added polls to our blog/ The first
        poll is coming up for who sandboards better. We were supposed to be
        doing this at XX but for some fabricated reason we couldn't go there so
        we went elsewhere and tbh it was a bit underwhelming but hey ho we move.
        So have a good look at both videos and vote for who u think did it
        better...
      </p>
      <Figure src="" caption="Sam sandboarding" alt="" />
      <Figure src="" caption="Kiara sandboarding" alt="" />
      <p>POLL HERE</p>
      <Figure
        src=""
        caption="We also went down 90 mile beach which is a national highway in New Zealand which is pretty cool. Another fun fact for you the beach is actually xx miles along and this actually has come up on a pub quiz"
        alt=""
      />
      <h2>Russell</h2>
      <p>
        We're traveling New Zealand on the Kiwi Experience and the bus drivers
        here love a bit of trivia. We heard from 3 separate bus drivers that
        Russell was called "" by Charles Darwin. Of course now it's a cute
        little town where rich Aucklander's go for new year.
      </p>
      <Figure src="" alt="" caption="A view of Russell harbour" />
      <Figure src="" alt="" caption="The walk to Tapeko viewpoint" />
      <Figure
        src=""
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
        src=""
        alt=""
        caption="Kiara running away from the smallest chick..."
      />
      <Figure src="" alt="" caption="A cute bridge" />
    </Week>
  );
}
