"use client";
import StyleWrapper from "@/styles/StyleWrapper";
import { mostPopular, recommendedId } from "@/data_temp";
import BookCarousel from "@/components/BookCarousel/BookCarousel";
import Categories from "@/components/Categories/Categories";
const categories = [
  "Fiction / Fantasy / Historical",
  "Fiction / Fantasy / Epic",
  "Fiction / Literary",
  "Fiction / Alternative History",
  "Fiction / Fantasy / Dark Fantasy",
  "Fiction / Fairy Tales, Folk Tales, Legends & Mythology",
];
export default function Home() {
  const mostPopularIds = mostPopular();
  const recomended = recommendedId();
  return (
    <StyleWrapper>
      <BookCarousel title={"Popular"} books={mostPopularIds} />
      <BookCarousel title={"Recommended"} books={recomended} />
      <Categories list={categories} />
    </StyleWrapper>
  );
}
