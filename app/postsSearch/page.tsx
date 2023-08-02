"use client";
import MainContainer from "@/components/MainContainer";
import React from "react";

interface PostProps {
  id: number;
  title: string;
  body: string;
}

const Post = ({ id, title, body }: PostProps) => {
  return (
    <form className="bg-white w-full rounded-md p-5 flex flex-col gap-2">
      <div className="flex flex-row items-center justify-between">
        <h1 className="font-medium text-lg">{title}</h1>
        <button className="bg-red-500 text-white p-1.5 rounded-md">
          Delete
        </button>
      </div>
      <p>{body}</p>
    </form>
  );
};

const PostsSearch = () => {
  const posts: PostProps[] = [
    {
      id: 1,
      title: "Why I Switched to React from Angular",
      body: "After using Angular for over 2 years, I finally made the switch to React and couldn't be happier. Here are some of the reasons why I think React is better...",
    },
    {
      id: 2,
      title: "My Daily Morning Routine",
      body: "Here is a quick overview of my daily morning routine: I wake up around 6am, drink a glass of water, then meditate for 10 minutes to clear my mind...",
    },
    {
      id: 3,
      title: "Restaurant Recommendations in Austin",
      body: "If you're looking for great restaurants in Austin, here are some of my favorites: Franklin Barbecue has the best brisket, Vera Cruz has amazing Mexican street tacos, and Jeffrey's is a great higher-end choice...",
    },
  ];

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Searched");
  };

  return (
    <>
      <MainContainer>
        <form className="flex flex-row gap-2">
          <input
            type="text"
            placeholder="Search for anything..."
            className="rounded-md w-full px-4"
          />
          <button
            onClick={handleClick}
            className="bg-blue-500 text-white px-4 py-1.5 rounded-md"
          >
            Search
          </button>
        </form>
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </MainContainer>
    </>
  );
};

export default PostsSearch;
