import { PostProps } from "@/app/types/types";
import React from "react";

const Card = ({ title, body }: PostProps) => {
  return (
    <>
      <div className="bg-white w-full rounded-md p-5 flex flex-col gap-1">
        <h1 className="font-medium text-lg">{title}</h1>
        <p className="text-slate-600">{body}</p>
      </div>
    </>
  );
};

export default Card;
