import React from "react";
import { Link } from "react-router-dom";
import ArrowLeft from "../assets/ArrowLeft.svg";
import DetailNav from "../assets/DetailNav.svg";
import Picture from "../assets/Picture.svg";
import ProfileLogo from "../assets/Profile.svg";
import ArrowRight from "../assets/ArrowRight.svg";
import Achievement from "../assets/Achievement.svg";
import Activity from "../assets/Activity.svg";
import Notification from "../assets/Notification.svg";
import Message from "../assets/Message.svg";
import Privacy from "../assets/Privacy.svg";
import Settings from "../assets/Settings.svg";
import Home from "../assets/Home.svg";
import Camera from "../assets/Camera.svg";
import ProfileActive from "../assets/ProfileActive.svg";

const Profile = () => {
  return (
    <div className="h-screen pt-2 grid grid-rows-[12] gap-4">
      <div className="row-span-2 flex flex-row space-x-4 items-center px-4">
        <Link to="" className="basis-1/3 flex justify-start">
          <img src={ArrowLeft} width="10px" />
        </Link>
        <div className="font-bold basis-1/3">Your Profile</div>
        <div className="basis-1/3 flex justify-end">
          <img src={DetailNav} />
        </div>
      </div>

      <div
        className="row-span-3 px-4 
      grid grid-cols-6 grid-flow-row gap-2 place-items-center"
      >
        <div className="col-span-1">
          <img src={Picture} />
        </div>
        <div className="col-span-3">
          <p className="text-[#1D1617 font-medium">Jujun Junaedi</p>
          <p className="text-[#7B6F72]">Welcome Back!</p>
        </div>
        <div className="col-span-2">
          <button
            type="button"
            className="bg-gradient-to-r from-[#92A3FD] to-[#9DCEFF]
          rounded-full"
          >
            <p className="text-white font-medium py-2 px-8">Edit</p>
          </button>
        </div>

        <div className="col-span-2 flex flex-col items-center">
          <p className="text-bluelinear">69</p>
          <p className="text-[#7B6F72]">Donate</p>
        </div>
        <div className="col-span-2 flex flex-col items-center">
          <p className="text-bluelinear">7</p>
          <p className="text-[#7B6F72]">Missions</p>
        </div>
        <div className="col-span-2 flex flex-col items-center">
          <p className="text-bluelinear">193</p>
          <p className="text-[#7B6F72]">Points</p>
        </div>
      </div>

      <div className="row-span-2 rounded-[16px] drop-shadow-2xl m-4 p-2">
        <p className="font-semibold">Account</p>
        <div className="flex space-x-2">
          <img src={ProfileLogo} className="basis-[6%]" />
          <p className="basis-[89%]">Personal Data</p>
          <img src={ArrowRight} className="basis-[5%]" />
        </div>
        <div className="flex space-x-2">
          <img src={Achievement} className="basis-[6%]" />
          <p className="basis-[89%]">Achievement</p>
          <img src={ArrowRight} className="basis-[5%]" />
        </div>
        <div className="flex space-x-2">
          <img src={Activity} className="basis-[6%]" />
          <p className="basis-[89%]">Activity History</p>
          <img src={ArrowRight} className="basis-[5%]" />
        </div>
      </div>

      <div className="row-span-2 rounded-[16px] drop-shadow-md m-4 p-2">
        <p className="font-semibold">Notification</p>
        <div className="flex items-center space-x-2">
          <img src={Notification} className="basis-[6%]" />
          <p className="basis-[75%]">Pop-up Notification</p>
          <label className="switch">
            <input type="checkbox" name="" id="" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>

      <div className="row-span-2 rounded-[16px] drop-shadow-md m-4 p-2">
        <p className="font-semibold">Other</p>
        <div className="flex space-x-2">
          <img src={Message} className="basis-[6%]" />
          <p className="basis-[89%]">Contact Us</p>
          <img src={ArrowRight} className="basis-[5%]" />
        </div>
        <div className="flex space-x-2">
          <img src={Privacy} className="basis-[6%]" />
          <p className="basis-[89%]">Privacy Policy</p>
          <img src={ArrowRight} className="basis-[5%]" />
        </div>
        <div className="flex space-x-2">
          <img src={Settings} className="basis-[6%]" />
          <p className="basis-[89%]">Settings</p>
          <img src={ArrowRight} className="basis-[5%]" />
        </div>
      </div>

      <div className="row-span-1 flex items-center bg-[#7A95D2]">
        <div className="basis-1/5 flex justify-center">
          <img src={Home} />
        </div>
        <div className="basis-3/5 flex justify-center">
          <img
            src={Camera}
            className="bg-gradient-to-r from-[#92A3FD] to-[#9DCEFF]
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

export default Profile;
