"use client";
import MainContainer from "@/components/MainContainer";
import React, { useReducer } from "react";

interface State {
  theme: string;
  fontSize: number;
}

interface Action {}

const initialState = {
  theme: "dark",
  fontSize: 16,
};

const reducer = (state, action) => {
  switch (action.type) {
  }
};

const ReducerContextDemo = () => {
  return (
    <>
      <MainContainer>
        <div className="flex">Huh?</div>
      </MainContainer>
    </>
  );
};

export default ReducerContextDemo;
