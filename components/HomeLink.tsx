import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface HomeLinkProps {
  href: string;
  text: string;
}

const HomeLink = ({ href, text }: HomeLinkProps) => {
  return (
    <>
      <Link href={href} className="flex flex-row font-medium items-center">
        <FaExternalLinkAlt className="mr-2" />
        {text}
      </Link>
    </>
  );
};

export default HomeLink;
