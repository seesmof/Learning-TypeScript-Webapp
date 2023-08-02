import React from "react";

const Parent = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h1>This is a parent</h1>
      {children}
    </>
  );
};

export default Parent;
