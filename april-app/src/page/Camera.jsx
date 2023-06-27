import React from "react";
import ArrowLeft from "../assets/ArrowLeft.svg";
import Clothes from "../assets/Clothes.svg";
import Refresh from "../assets/Refresh.svg";
import CameraLogo from "../assets/Camera.svg";
import LineArrowRight from "../assets/LineArrowRight.svg";

const Camera = () => {
  return (
    <div className="h-screen pt-2 grid grid-rows-[12] gap-4">
      <div className="row-span-2 pt-4 px-4">
        <button type="button">
          <img src={ArrowLeft} />
        </button>
      </div>

      <div className="flex justify-center row-span-10">
        <img src={Clothes} />
      </div>

      <div className="row-span-1 flex items-center bg-[#7A95D2]">
        <div className="basis-1/5 flex justify-center">
          <img src={Refresh} />
        </div>
        <div className="basis-3/5 flex justify-center">
          <img src={CameraLogo} />
        </div>
        <div className="basis-1/5 flex justify-center">
          <img src={LineArrowRight} />
        </div>
      </div>
    </div>
  );
};

export default Camera;
