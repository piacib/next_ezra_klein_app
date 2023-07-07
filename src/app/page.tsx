"use client";
import Header from "@/components/Header/Header";
import styled from "styled-components";
const Container = styled.div`
  color: green;
`;
export default function Home() {
  return (
    <Container>
      <Header />
    </Container>
  );
}
