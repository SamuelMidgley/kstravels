import { Card, ICardProps } from "./Card";
import week1img from "../assets/week1.jpg";
import week2img from "../assets/week2.jpg";
import week3img from "../assets/week3.jpg";
import week4img from "../assets/week4.jpg";
import week5img from "../assets/week5.jpg";
import week6img from "../assets/week6.jpg";
import week7img from "../assets/week7.jpg";
import week8img from "../assets/week8.jpg";
import week9img from "../assets/week9.jpg";
import week10img from "../assets/week10.jpg";

const posts: ICardProps[] = [
  {
    week: 10,
    title: "Week 10 & 11: Adelaide odl lay hee hoo",
    datePosted: new Date(2023, 10, 29, 12),
    imageUrl: week10img,
    imageAlt: "City view",
  },
  {
    week: 9,
    title: "Week 9: The (Mel)Bourne Ultimatum",
    datePosted: new Date(2023, 10, 19, 12),
    imageUrl: week9img,
    imageAlt: "Sunset in port melbourne",
  },
  {
    week: 8,
    title: "Week 8: I Cairns quite believe it",
    datePosted: new Date(2023, 10, 12, 12),
    imageUrl: week8img,
    imageAlt: "Kiara on the Kuranda railway",
  },
  {
    week: 7,
    title: "Week 7: If you wallaby my lover",
    datePosted: new Date(2023, 10, 7, 12),
    imageUrl: week7img,
    imageAlt: "A rock wallaby on Magnetic island",
  },
  {
    week: 6,
    title: "Week 6: Whitsundays? Completed it mate",
    datePosted: new Date(2023, 10, 6, 12),
    imageUrl: week6img,
    imageAlt: "Whitehaven beach",
  },
  {
    week: 5,
    title: "Week 5: Getting some vitamin B-risbane",
    datePosted: new Date(2023, 9, 21, 12),
    imageUrl: week5img,
    imageAlt: "Noosa coastal walk",
  },
  {
    week: 4,
    title: "Week 4: Sydney? I hardly know her",
    datePosted: new Date(2023, 9, 10, 12),
    imageUrl: week4img,
    imageAlt: "Sydney Opera House",
  },
  {
    week: 3,
    title: "Week 3: Melbourne 3 Return of the dream (chocolate)",
    datePosted: new Date(2023, 9, 2, 12),
    imageUrl: week3img,
    imageAlt: "A urinal next to a window",
  },
  {
    week: 2,
    title: "Week 2: Melbourne 2 Electic Boogaloo",
    datePosted: new Date(2023, 8, 25, 12),
    imageUrl: week2img,
    imageAlt: "Sunset at point ormand",
  },
  {
    week: 1,
    title: "Week 1: Melbourne!!",
    datePosted: new Date(2023, 8, 18, 12),
    imageUrl: week1img,
    imageAlt: "Kiara wearing a cowboy hat",
  },
];

export function Home() {
  return (
    <main>
      {posts.map((p) => (
        <Card {...p} key={p.week} />
      ))}
    </main>
  );
}
