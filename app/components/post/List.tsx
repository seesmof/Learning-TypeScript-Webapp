import React from "react";
import Card from "./Card";
import { PostProps } from "@/app/types/types";

const getData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("ERROR: Failed to fetch data");
  }
};

const List = async () => {
  const data: PostProps[] = await getData();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 py-4 gap-4">
        {data.map((post) => (
          <Card key={post.id} {...post} />
        ))}
      </div>
    </>
  );
};

export default List;
