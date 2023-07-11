import StyleWrapper from "@/styles/StyleWrapper";
import { mostPopular, recommendedId } from "@/data_temp";
import BookCarousel from "@/components/BookCarousel/BookCarousel";
import Categories from "@/components/Categories/Categories";
import { getDailyRNDList } from "@/utils/randomNumber";
import { getData } from "./api/route";
const categories = [
  "Fiction / Fantasy / Historical",
  "Fiction / Fantasy / Epic",
  "Fiction / Literary",
  "Fiction / Alternative History",
  "Fiction / Fantasy / Dark Fantasy",
  "Fiction / Fairy Tales, Folk Tales, Legends & Mythology",
];

export default async function Home() {
  const mostPopularIds = mostPopular();
  const data = await getData();
  const booksLength = Object.keys(data.books).length;
  const randomNums = getDailyRNDList(booksLength - 1, 10);
  const recomendedIds = randomNums.map((x) => Object.keys(data.idPairs)[x]);

  return (
    <>
      <BookCarousel title={"Popular"} books={mostPopularIds} />
      <BookCarousel title={"Recommended"} books={recomendedIds} />
      <Categories list={categories} />
    </>
  );
}
