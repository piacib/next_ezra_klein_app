"use client";
import BookDisplay from "@/components/BookDisplay/BookDisplay";
import StyleWrapper from "@/styles/StyleWrapper";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  return (
    <StyleWrapper>
      <BookDisplay />
    </StyleWrapper>
  );
};

export default Page;
