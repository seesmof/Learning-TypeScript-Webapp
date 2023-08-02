import HomeLink from "@/components/HomeLink";
import MainContainer from "@/components/MainContainer";
import List from "@/components/post/List";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Home() {
  return (
    <MainContainer>
      <h1 className="font-medium text-xl">
        Hi, <span className="text-blue-600">TypeScript</span>
      </h1>
      <div className="flex flex-col gap-2">
        <HomeLink href={"/posts"} text="Posts" />
        <HomeLink href={"/childrenExample"} text="Children" />
        <HomeLink href="/postsSearch" text="Search" />
      </div>
    </MainContainer>
  );
}
