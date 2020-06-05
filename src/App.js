import React, { useState } from "react";
import EndlessScroll from "./EndlessScroll";
import logo from "./logo.svg";
import "./App.css";

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        Array.from(Array(10).keys()).map((_, idx) => idx * Math.random())
      );
    }, 1000);
  });
}

function App() {
  const [elements, setElements] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  async function fetch() {
    setIsLoading(true);
    const data = await fetchData();

    setElements((curr) => [...curr, ...data]);
    setIsLoading(false);
  }

  return (
    <EndlessScroll
      onReachBottom={fetch}
      isLoading={isLoading}
      hasMore={hasMore}
    >
      {elements.map((element) => (
        <p>{element}</p>
      ))}
    </EndlessScroll>
  );
}

export default App;
