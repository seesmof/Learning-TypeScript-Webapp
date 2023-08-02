import React from "react";
import List from "../components/post/List";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const Posts = () => {
  return (
    <>
      <div className="bg-slate-200 p-4">
        <Link className="font-medium flex flex-row items-center" href={"/"}>
          <FaExternalLinkAlt className="mr-2" />
          Home
        </Link>
        <List />
      </div>
    </>
  );
};

export default Posts;
