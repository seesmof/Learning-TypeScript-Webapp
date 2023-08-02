import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="main-container">
        <Link className="font-medium flex flex-row items-center" href={"/"}>
          <FaExternalLinkAlt className="mr-2" />
          Home
        </Link>
        {children}
      </div>
    </>
  );
};

export default MainContainer;
