import Link from "next/link";
import List from "./components/post/List";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col p-4 space-y-4 min-h-screen bg-slate-200">
      <h1 className="font-medium text-xl">
        Hi, <span className="text-blue-600">TypeScript</span>
      </h1>
      <Link href={"/posts"} className="font-medium flex flex-row items-center">
        <FaExternalLinkAlt className="mr-2" />
        Fetching Data from <span className="text-blue-600 ml-1">API</span>
      </Link>
    </div>
  );
}
