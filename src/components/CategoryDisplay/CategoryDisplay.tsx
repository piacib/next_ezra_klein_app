import React from "react";
import { alldata } from "@/data_temp";
import BookCard from "../BookCard/BookCard";
import { BooksContainer, CategoryHeader } from "./CategoryDisplay.styles";
import useId from "@/hooks/useId/useId";

const booksByCategory = (category: string | undefined) => {
  const list: string[] = [];
  if (!category) {
    return list;
  }
  const entries = Object.values(alldata);
  entries.forEach((x) => {
    if (x.categories) {
      const results = x.categories.filter((cat) =>
        cat.includes(category)
      ).length;
      if (results && x.id) {
        list.push(x.id);
      }
    }
  });

  return list;
};
const CategoryDisplay = () => {
  const id = useId();
  const books = booksByCategory(id);
  return (
    <>
      <CategoryHeader>{id}</CategoryHeader>
      <BooksContainer>
        {books.map((id, idx) => (
          <BookCard key={id + idx} id={id} />
        ))}
      </BooksContainer>
    </>
  );
};

export default CategoryDisplay;
