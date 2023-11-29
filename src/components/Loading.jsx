import React from "react";
import "../styles/loading.css"

export const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] bg-white z-[1000]">
      <div class="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
