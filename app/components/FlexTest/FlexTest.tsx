"use client";
import React from "react";

export default function FlexTest() {
  return (
    <div className="flex gap-2 flex-col w-full sm:w-1/3">
      <div className="w-full ">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGcwGJ56LFJNHw-7InTcf2R5P7SZ-vroHeBQ&usqp=CAU"
          alt="storeImg"
          width="100%"
          height="100%"
          style={{ objectFit: "contain" }}
        />
      </div>
      <h3 className="text-green-800 font-bold">online store img</h3>
      <p className="text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eius eaque
        inventore sit a iste nesciunt quidem placeat tempora accusamus! Ipsam
        beatae quisquam modi illo sit sunt sequi. Obcaecati, unde.
      </p>
      <button className="btn bg-red-800 text-white rounded-md py-2">
        view
      </button>
    </div>
  );
}
