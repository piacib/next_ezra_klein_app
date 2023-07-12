import BookCarousel from "@/components/BookCarousel/BookCarousel";
import Categories from "@/components/Categories/Categories";
import { getRecommendedIds } from "@/utils/getRecommendedIds";
import { getMostPopular } from "@/utils/getMostPopularBooks";
const categories = [
  "Fiction / Fantasy / Historical",
  "Fiction / Fantasy / Epic",
  "Fiction / Literary",
  "Fiction / Alternative History",
  "Fiction / Fantasy / Dark Fantasy",
  "Fiction / Fairy Tales, Folk Tales, Legends & Mythology",
];

export default async function Home() {
  const data = await getData();
  const mostPopularIds = getMostPopular(data.books);
  const recommendedIds = getRecommendedIds(data);

  return (
    <>
      <BookCarousel title={"Popular"} books={mostPopularIds} />
      <BookCarousel title={"Recommended"} books={recommendedIds} />
      <Categories list={categories} />
    </>
  );
}

export const getData = async () => {
  const res = await fetch(`${process.env.API_URL}/api`);
  const data = await res.json();
  return data;
};
