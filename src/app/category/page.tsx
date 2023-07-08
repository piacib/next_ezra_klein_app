"use client";
import Categories from "@/components/Categories/Categories";
import CategoryDisplay from "@/components/CategoryDisplay/CategoryDisplay";
import { allCategoriesList } from "@/data_temp";
import React from "react";

const page = () => {
  return (
    <>
      <Categories list={allCategoriesList} />
    </>
  );
};

export default page;
