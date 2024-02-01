import React from "react";
import Footer from "./Footer";

function Profile() {
  return (
    <>
      <div className="flex flex-row gap-20 mt-10 w-3/4 m-auto justify-center">
        <div className=" overflow-hidden">
          <img
            className=" rounded-full w-44 h-24 object-fill "
            src="https://res.cloudinary.com/dp6gqhir8/image/upload/v1706631933/logo_htdlod.png"
            alt=""
          />
        </div>

        <div className=" w-3/5">
          <div className="flex flex-row gap-5">
            <h3 className="text-white text-xl">thelunarstudios.official</h3>
            <div className="flex gap-2">
              <button className=" bg-blue-600 rounded-lg text-white px-4 py-1 text-md font-medium hover:bg-blue-800">
                Follow
              </button>
              <button className="bg-slate-600 rounded-lg text-white px-4 py-1 text-md font-medium hover:bg-slate-800">
                Message
              </button>
              <button className="bg-slate-600 rounded-lg text-white px-4 py-1 text-md font-medium hover:bg-slate-800">
                add
              </button>
              <div className="text-white text-xl font-bold">...</div>
            </div>
          </div>

          <div className="flex flex-row gap-12 mt-5">
            <p className="text-white text-lg font-md"><span className=" font-medium">23</span> posts</p>
            <p className="text-white text-lg font-md"> <span className=" font-medium">19 </span> followers</p>
            <p className="text-white text-lg font-md"><span className="font-medium">0</span> following</p>
          </div>

          <div className="mt-5">
            <h6 className="text-white text-md font-medium">The Lunar Studios</h6>
            <p className=" text-white text-sm font-md">
               Play games using Crypto at Lunar Studios, a
              one-of-its-type gaming studio. Come join us to experience the
              ultimate gaming thrill!
            </p>
            <a className="text-white text-md font-medium font-md mt-0" href="https://www.lunarstudio.com">
              <span className="mt-0">www.lunerstudio.com</span>
            </a>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default Profile;
