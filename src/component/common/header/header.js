import React, { useState } from "react";
import WhiteLogo from "../../../assets/whiteLogo.png";
import Bar from "../../../assets/bar.png";
import CrossImg from "../../../assets/cross.png";

export default function Header() {
  const [menuShow, setMenuShow] = useState(false);
  const menuClick = () => {
    setMenuShow(!menuShow);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <a href="/">
          <img
            className="w-[126px] h-[29px] object-contain"
            src={WhiteLogo}
            alt="WhiteLogo"
          />
        </a>
        <span className="cursor-pointer" onClick={menuClick}>
          {menuShow ? (
            <img
              className="w-[21.88px] h-[21.88px] text-white"
              src={CrossImg}
              alt="CrossImg"
            />
          ) : (
            <img
              className="w-[21.88px] h-[21.88px] object-contain "
              src={Bar}
              alt="Bar"
            />
          )}
        </span>
      </div>
    </>
  );
}
