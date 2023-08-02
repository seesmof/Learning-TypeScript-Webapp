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
        <Link
          href={"/posts"}
          className="font-medium flex flex-row items-center"
        >
          <FaExternalLinkAlt className="mr-2" />
          Fetching Data from <span className="text-blue-600 ml-1">API</span>
        </Link>
        <Link
          href={"/childrenExample"}
          className="font-medium flex flex-row items-center"
        >
          <FaExternalLinkAlt className="mr-2" />
          Children <span className="text-blue-600 ml-1">Types</span>
        </Link>
      </div>
    </MainContainer>
  );
}
