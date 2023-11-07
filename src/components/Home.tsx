import { Card, ICardProps } from "./Card";
import week1img from "../assets/week1.jpg";
import week2img from "../assets/week2.jpg";
import week3img from "../assets/week3.jpg";
import week4img from "../assets/week4.jpg";
import week5img from "../assets/week5.jpg";
import week6img from "../assets/week6.jpg";
import week7img from "../assets/week7.jpg";

const posts: ICardProps[] = [
  // {
  //   week: 9,
  //   title: "The (Mel)bourne Ultimatum",
  //   datePosted: new Date(2023, 10, 12, 12),
  //   imageUrl: week5img,
  //   imageAlt: "Noosa coastal walk",
  // },
  // {
  //   week: 8,
  //   title: "I Cairns quite believe it",
  //   datePosted: new Date(2023, 10, 10, 12),
  //   imageUrl: week5img,
  //   imageAlt: "Noosa coastal walk",
  // },
  {
    week: 7,
    title: "If you wallaby my lover",
    datePosted: new Date(2023, 10, 7, 12),
    imageUrl: week7img,
    imageAlt: "A rock wallaby on Magnetic island",
  },
  {
    week: 6,
    title: "Whitsundays? Completed it mate",
    datePosted: new Date(2023, 10, 6, 12),
    imageUrl: week6img,
    imageAlt: "Whitehaven beach",
  },
  {
    week: 5,
    title: "Getting some vitamin B-risbane",
    datePosted: new Date(2023, 9, 21, 12),
    imageUrl: week5img,
    imageAlt: "Noosa coastal walk",
  },
  {
    week: 4,
    title: "Sydney? I hardly know her",
    datePosted: new Date(2023, 9, 10, 12),
    imageUrl: week4img,
    imageAlt: "Sydney Opera House",
  },
  {
    week: 3,
    title: "Melbourne 3 Return of the dream (chocolate)",
    datePosted: new Date(2023, 9, 2, 12),
    imageUrl: week3img,
    imageAlt: "A urinal next to a window",
  },
  {
    week: 2,
    title: "Melbourne 2 Electic Boogaloo",
    datePosted: new Date(2023, 8, 25, 12),
    imageUrl: week2img,
    imageAlt: "Sunset at point ormand",
  },
  {
    week: 1,
    title: "Melbourne!!",
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