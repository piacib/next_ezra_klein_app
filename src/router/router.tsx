import { createHashRouter } from "react-router-dom";
import App from "../App";
import TableView from "../app/pages/TableView";
import ErrorPage from "../app/pages/ErrorPage/ErrorPage";
import paths from "./paths";
import BooksPage from "../app/pages/BooksPage/BooksPage";
import CategoryPage from "../app/pages/CategoryPage/CategoryPage";
import BookPage from "../app/pages/BookPage/BookPage";
import AllCategoriesPage from "../app/pages/AllCategoriesPage/AllCategoriesPage";

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <BooksPage />,
      },
      {
        path: paths.table,
        element: <TableView />,
      },
      {
        path: paths.books,
        element: <BooksPage />,
      },
      { path: paths.categories, element: <CategoryPage /> },
      { path: paths.bookpage, element: <BookPage /> },
      { path: paths.allcategories, element: <AllCategoriesPage /> },
    ],
    errorElement: <ErrorPage />,
  },
]);
