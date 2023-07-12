import alldata from "@/data/allData.json";
import { NextResponse } from "next/server";
export const getData = async () => {
  const res = await fetch(`${process.env.API_URL}/api`);
  const data = (await res.json()) as typeof alldata;
  return data;
};
export async function GET() {
  const data = await alldata;
  return NextResponse.json({ data });
}
