"use client";
import BookCard from "../BookCard/BookCard";
import Carousel from "../Carousel/Carousel";
import { Container, H1, HorizontalCenter } from "./BookCarousel.style";
interface Props {
  books: string[];
  title: string;
}
const BookCarousel = ({ books, title }: Props) => {
  const booksElement = books.map((x, idx) => <BookCard id={x} key={x + idx} />);
  return (
    <Container>
      <H1>{title}</H1>
      <HorizontalCenter>
        <Carousel>{booksElement}</Carousel>
      </HorizontalCenter>
    </Container>
  );
};

export default BookCarousel;
