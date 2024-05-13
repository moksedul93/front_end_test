import React from "react";
import WhiteLogo from "../../../assets/whiteLogo.png";
import Bar from "../../../assets/bar.png";

export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <a href="/">
        <img
          className="w-[126px] h-[29px] object-contain"
          src={WhiteLogo}
          alt="WhiteLogo"
        />
      </a>
      <span className="cursor-pointer">
        <img
          className="w-[21.88] h-[21.88px] object-contain"
          src={Bar}
          alt="Bar"
        />
      </span>
    </div>
  );
}
