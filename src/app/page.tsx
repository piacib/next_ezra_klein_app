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
export default function Home({ data }: { data: any }) {
  const mostPopularIds = mostPopular();
  const recomended = recommendedId();
  console.log("data", data);
  // <StyleWrapper>
  // </StyleWrapper>
  return (
    <>
      <div>data {data}</div>
      <BookCarousel title={"Popular"} books={mostPopularIds} />
      <BookCarousel title={"Recommended"} books={recomended} />
      <Categories list={categories} />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/api/test`);
  const data = await res.json();
  return { props: { data } };
}
