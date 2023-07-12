import seedrandom from "seedrandom";
const getRND = (num: number) => {
  return seedrandom(num.toString())();
};
const getDailyNum = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getUTCFullYear();
  return day + month + year;
};
export const getDailyRND = (increment = 0) => {
  const dailyNum = getDailyNum();

  return getRND(dailyNum + increment);
};

export const getDailyRNDList = (maxVal: number, arrlength = 10) => {
  const result: number[] = [];
  let i = 0;
  while (i < arrlength) {
    const rnd = getDailyRND(i);
    const idx = Math.floor(rnd * maxVal);
    if (!result.includes(idx)) {
      result.push(idx);
      i++;
    }
  }
  return result;
};
