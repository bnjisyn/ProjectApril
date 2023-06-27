import React from "react";
import HomeLogo from "../assets/Home.svg";
import Camera from "../assets/Camera.svg";
import ProfileActive from "../assets/ProfileActive.svg";
import LineGraphic from "../assets/LineGraphic.svg";
import Stick from "../assets/Stick.svg";
import VIewAllTasks from "../assets/VIewAllTasks.svg";

const Home = () => {
  return (
    <div className="h-screen pt-2 grid grid-rows-[12] gap-4">
      <div className="row-span-2 flex px-4">
        <p className="text-[34px] font-bold">28 May</p>
      </div>

      <div className="row-span-3 flex flex-col space-y-2 px-4">
        <div className="flex items-center space-x-2">
          <img src={Stick} />
          <p className="text-[20px] font-bold">Collect Points</p>
        </div>
        <div className="flex items-center space-x-2">
          <img src={Stick} />
          <p className="text-[20px] font-bold">Complete Profile</p>
        </div>
        <div className="flex items-center space-x-2">
          <img src={Stick} />
          <p className="text-[20px] font-bold">Donate Now</p>
        </div>
        <div className="flex justify-end">
          <button type="button" className="font-bold text-[#4318FF] flex items-center space-x-2">
            <p>View all tasks</p>
            <img src={VIewAllTasks} />
          </button>
        </div>
      </div>

      <div className="row-span-6 px-4">
        <div className="flex flex-col">
          <p className="text-[#A3AED0] font-medium">Donated Clothes</p>
          <p className="text-[#1B2559] font-bold text-[34px]">969</p>
          <img src={LineGraphic} />
        </div>
        <div className="font-semibold space-y-1">
          <p>Lokasi Pengumpulan:</p>
          <p>
            Jl. HS. Ronggo Waluyo, Puseurjaya, Telukjambe Timur, Karawang, Jawa
            Barat 31361
          </p>
        </div>
      </div>

      <div className="row-span-1 flex items-center">
        <div className="basis-1/5 flex justify-center">
          <img src={HomeLogo} />
        </div>
        <div className="basis-3/5 flex justify-center">
          <img
            src={Camera}
            className="bg-bluelinear
          rounded-full p-3"
          />
        </div>
        <div className="basis-1/5 flex justify-center">
          <img src={ProfileActive} />
        </div>
      </div>
    </div>
  );
};

export default Home;
