import React from "react";

const Parent = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h1 className="font-medium">This is a parent</h1>
      <p className="flex-row flex items-center gap-1">This is a {children}</p>
    </>
  );
};

export default Parent;
