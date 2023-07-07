import { Container, Title } from "./Header.styles";
import Books from "../BookStack/BookStack";
import paths, { pathGenerator } from "../../router/paths";
import { Nav, StyledLink } from "./Nav.styles";
import { useReducer } from "react";
const regenerateBook = () => pathGenerator.randombook();
const Header = () => {
  const [randomBook, updateBook] = useReducer(
    regenerateBook,
    pathGenerator.randombook()
  );
  return (
    <>
      <Nav>
        <StyledLink href={paths.home}>Home</StyledLink>
        <StyledLink onClick={updateBook} href={randomBook}>
          Random Book
        </StyledLink>
        <StyledLink href={paths.books}>Books</StyledLink>
        <StyledLink href={paths.allcategories}>Categories</StyledLink>
        <StyledLink href={paths.table}>Table</StyledLink>
      </Nav>
      <Container>
        <Books />
        <Title>The Ezra Klein Podject</Title>
      </Container>
    </>
  );
};

export default Header;
