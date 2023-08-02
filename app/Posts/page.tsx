import React from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import List from "@/components/post/List";
import MainContainer from "@/components/MainContainer";

const Posts = () => {
  return (
    <>
      <MainContainer>
        <List />
      </MainContainer>
    </>
  );
};

export default Posts;
