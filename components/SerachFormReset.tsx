"use client";
import { Button } from "./ui/button";
import { X } from "lucide-react";


const SerachFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    console.log(form)
    if (form) form.reset();
  };
  return (
    <Button type="reset" className="search-btn text-white" onClick={reset}>
      <X className="size-5"/>
    </Button>
  );
};

export default SerachFormReset;
