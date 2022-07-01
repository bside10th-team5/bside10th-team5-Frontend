import React from "react";
import { WideWrapper } from "../elements/Wrapper.style";
import { Section } from "./MemoriesPage.style";
import Gnb from "../articles/Gnb";
import Footer from "../articles/Footer";
import Items from "./Items";

const MemoriesPage = () => {
  return (
    <WideWrapper>
      <Gnb isVisible />
      <Section>
        <Items />
      </Section>
      <Footer />
    </WideWrapper>
  );
};

export default MemoriesPage;
