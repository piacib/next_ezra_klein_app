"use client";
import BookDisplay from "@/components/BookDisplay/BookDisplay";
import CategoryDisplay from "@/components/CategoryDisplay/CategoryDisplay";
import StyleWrapper from "@/styles/StyleWrapper";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  return (
    <StyleWrapper>
      <CategoryDisplay />
    </StyleWrapper>
  );
};

export default Page;
