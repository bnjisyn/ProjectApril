import React from "react";

const SuccessRegist = () => {
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="basis-3/4 flex flex-col justify-center">
        <div className="flex justify-center text-[36px] font-bold">
          Welcome, Jujun
        </div>
        <div className="flex justify-center text-[#7B6F72]">
            You are all set now, let's reach your goals together with us
        </div>
      </div>
      <div className="flex justify-center">
        <button type="button" className="bg-[#95ADFE] rounded-full">
          <p className="font-bold px-8 py-3 text-[#fff]">Go To Home</p>
        </button>
      </div>
    </div>
  );
};

export default SuccessRegist;
