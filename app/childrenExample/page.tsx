import React from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import Parent from "@/components/children/Parent";
import Child from "@/components/children/Child";
import MainContainer from "@/components/MainContainer";

const Children = () => {
  return (
    <>
      <MainContainer>
        <Parent>
          <Child />
        </Parent>
      </MainContainer>
    </>
  );
};

export default Children;
