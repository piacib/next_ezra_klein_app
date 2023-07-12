import { alldata } from "@/data_temp";
import { getDailyRNDList } from "./randomNumber";

export const getRecommendedIds = (data: typeof alldata) => {
  const booksLength = Object.keys(data.books).length;
  const randomNums = getDailyRNDList(booksLength - 1, 10);
  return randomNums.map((x) => Object.keys(data.idPairs)[x]);
};
