"use client";

import { X } from "lucide-react";


const SerachFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    console.log("Form found:", form);
    if (form) form.reset();
  };
  return (
    <button type="reset" className="search-btn text-white" onClick={reset}>
      <X className="size-5"/>
    </button>
  );
};

export default SerachFormReset;
