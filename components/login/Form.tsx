"use client";
import React, { useState } from "react";

interface IUser {
  name: string;
  age: number;
}

const Form = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<IUser | null>(null);

  const handleUpdateUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUser({
      name: username,
      age: 22,
    });
  };

  return (
    <>
      <form className="flex flex-row gap-2">
        <input
          type="text"
          placeholder="Your username..."
          className="w-full px-4 rounded-md"
          onChange={handleUpdateUser}
        />
        <button
          onClick={handleLogin}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 p-1.5 rounded-md"
        >
          Login
        </button>
      </form>

      <div className="py-4 flex flex-col gap-2">
        {user ? (
          <h1 className="font-medium text-lg">
            Hi, <span className="text-blue-600">{user.name}</span>
          </h1>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Form;
