import { Week } from "@/components/week/Week.tsx";
import { Figure } from "@/components/Figure.tsx";

// Images
import cover from "@/assets/week17/cover.jpg";
import love from "@/assets/week17/love.jpg";
import floating from "@/assets/week17/floating.jpg";
import ricepaddies from "@/assets/week17/ricepaddies.jpg";
import handsworth from "@/assets/week17/handsworth.jpg";
import green from "@/assets/week17/green.jpg";
import torte from "@/assets/week17/torte.jpg";

export function Week17() {
  return (
    <Week
      title="Week 17: It's un-bali-vable"
      datePosted={new Date(2024, 0, 24, 8)}
      imageUrl={cover}
      imageAlt="This cost less than a Premier inn outside the Trafford center..."
    >
      <p>Halo!</p>
      <p>Welcome to the first of the Bali blogs this time written by Kiara</p>
      <h2>Seminyak</h2>
      <Figure src={green} caption="Our first hotel in Bali, so pretty" />
      <p>
        In Seminyak we stayed at a really nice hostel, apart from the fact we
        were two of 5 people staying there LOL we were near a beach called Kuta
        beach, which made me giggle (non punjabi speakers (which does include me
        to be fair) in punjabi its a swear word meaning dog)
      </p>
      <h2>Canggu</h2>
      <p>
        We stayed in a veery nice hotel, because its not peak season like at
        all, we got it half price 😎 we had a traditional balinese massage at
        their spa, which included them yanking on our toes (yes it was as
        painful as it sounds) but the real pain began after… it turns out im
        allergic the massage oil they used!! As I found out when an hour later,
        my whole body erupted in hives. if you’ve watched the second hunger
        games, the bit where they all get stuck in the mist and their skin goes
        all gammy? that was me.
      </p>
      <Figure
        src={floating}
        caption="We had a floating breakfast in the pool. I was a bit apprehensive because aren’t you meant to wait an hour between eating and swimming? It turned out well, no-one threw up yay"
      />
      <Figure
        src={ricepaddies}
        caption="From the balcony we could see the rice paddies!"
      />
      <Figure
        src={torte}
        caption="These chocolate tortes were incredible, no comment on how many we ate"
      />
      <Figure
        src={love}
        caption="While in Canggu we visted the famous Love Anchor markets, everyone was so lovely here and offering us special prices"
      />
      <Figure
        src={handsworth}
        caption="We were in the taxi from Canggu to Ubud when i suddenly had a weird deja vu moment, i was convinced i was in Handsworth!!! it has the same vibe … no? maybe it's a sign I need to come home"
      />
      <p>see you soon my racoons</p>
    </Week>
  );
}
