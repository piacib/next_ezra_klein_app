import { alldata } from "@/data_temp";

function compareFn(a: string, b: string, data = alldata) {
  if (data[a].guestRecomendation.length > data[b].guestRecomendation.length) {
    return -1;
  }
  if (data[a].guestRecomendation.length < data[b].guestRecomendation.length) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
export const getMostPopular = (data: typeof alldata, length = 10) => {
  const list = Object.keys(data).sort(compareFn);
  const sliced = list.slice(0, length);
  return sliced.map((x) => data[x].id).filter((x) => x !== null) as string[];
};
