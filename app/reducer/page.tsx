"use client";
import MainContainer from "@/components/MainContainer";
import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const ReducerContextDemo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <MainContainer>
        <div className="flex flex-row gap-4 items-center">
          <button
            onClick={() => dispatch({ type: "decrement" })}
            className="bg-blue-500 hover:bg-blue-600 text-white p-1.5 px-4 rounded-md"
          >
            -
          </button>
          <div className="font-medium text-xl">{state.count}</div>
          <button
            onClick={() => dispatch({ type: "increment" })}
            className="bg-blue-500 hover:bg-blue-600 text-white p-1.5 px-4 rounded-md"
          >
            +
          </button>
        </div>
      </MainContainer>
    </>
  );
};

export default ReducerContextDemo;
