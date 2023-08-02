import List from "./components/post/List";

export default function Home() {
  return (
    <div className="flex flex-col p-4 space-y-4 min-h-screen bg-slate-200">
      <h1 className="font-medium text-xl">
        Hi, <span className="text-blue-600">TypeScript</span>
      </h1>
      <h2 className="font-medium">
        Fetching Data from <span className="text-blue-600">API</span>
      </h2>
      <List />
    </div>
  );
}
