import React from "react";
import travel from "../assets/traveling.jpg";


function Work() {
  return (
    <div id="work">
      <div className=" dark:bg-black dark:text-white">
      <div ></div>
        <div className=" flex flex-col items-center">
          <div>
            <div className=" mt-[15%]   text-6xl font-bold pl-28 dark:text-white">Work</div>
            <div className="mt-3 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="pl-40 mt-3">
              <hr className="  justify-center border-0 py-[2.5px] w-14 bg-blue-500"></hr>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-10 gap-y-16 mt-20 lg:pl-40 pl-20 mb-20">
            <div className="shadow-lg  w-[75%] dark:border-white dark:border dark:bg-black">
              <div className="flex flex-col items-center">
                <img className="h-68" src={travel} alt="" />

                <h2 className="p-1 font-bold  mt-5">
                Petrends
                </h2>
              </div>
            </div>
            <div className="shadow-lg  w-[75%] dark:border-white dark:border dark:bg-black">
              <div className="flex flex-col items-center">
                <img className="h-68" src={travel} alt="" />

                <h2 className="p-1 font-bold dark:text-white mt-5">
                  Cybertapri
                </h2>
              </div>
            </div>

            <div className="shadow-lg  w-[75%] dark:border-white dark:border dark:bg-black">
              <div className="flex flex-col items-center">
                <img className="h-68" src={travel} alt="" />

                <h2 className="p-1 font-bold  mt-5">
                Portfolio
                </h2>
              </div>
            </div>
            <div className="shadow-lg  w-[75%] dark:border-white dark:border dark:bg-black">
              <div className="flex flex-col items-center">
                <img className="h-68" src={travel} alt="" />

                <h2 className="p-1 font-bold  mt-5">
                  Web Design
                </h2>
              </div>
            </div>

            <div className="shadow-lg  w-[75%] dark:border-white dark:border dark:bg-black">
              <div className="flex flex-col items-center">
                <img className="h-68" src={travel} alt="" />

                <h2 className="p-1 font-bold dark:text-white mt-5">
                  DocNow
                </h2>
              </div>
            </div>

            <div className="shadow-lg  w-[75%] dark:border-white dark:border dark:bg-black">
              <div className="flex flex-col items-center">
                <img className="h-68" src={travel} alt="" />

                <h2 className="p-1 font-bold dark:text-white mt-5">
                  Music
                </h2>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
