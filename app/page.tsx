"use client";

import styles from "./page.module.css";
import img from "./../images.jpg";
import FlexTest from "./components/FlexTest/FlexTest";

export default function Home() {
  const arrMap = [1, 2, 3];
  return (
    <>
      <div className="flex flex-col gap-4 justify-between container mx-auto sm:flex-row ">
        {arrMap.map((arr) => {
          return <FlexTest />;
        })}
      </div>
    </>
  );
}
