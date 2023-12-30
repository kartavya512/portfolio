import React from "react";
import travel from "../assets/traveling.jpg";
import Dp from "../assets/dp.jpeg";
import { Clock4 } from 'lucide-react';

function Blog() {
  return (
    <div className=" dark:bg-black dark:text-white">
      <div className="flex flex-col items-center">
        <div id="blog">
          <div className=" mt-20 text-6xl font-bold pl-28">BLOG</div>
          <div className="mt-3 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="pl-40 mt-3">
            <hr className="  justify-center border-0 py-[2.5px] w-14 bg-blue-500"></hr>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 mt-20 lg:pl-40 pl-20 mb-20">
          <div className="shadow-lg  w-[75%] dark:border-white dark:border dark:bg-black">
            <div className="flex flex-col items-center">
            <img className="h-68" src={travel} alt="" />
            <div className="-mt-3 bg-blue-500 text-center w-20 rounded-lg text-white">
              TRAVEL
            </div>
            <h2 className="lg:p-2 p-1 font-bold lg:pr-16 mt-5">See more ideas about Travel</h2>
            <div className="p-2 pl-8 pb-3">
              Proin eget tortor risus. Pellentesque in ipsum id orci porta
              dapibus. Praesent sapien massa, convallis a pellentesque nec,
              egestas non nisi.
            </div></div>
            <hr className=" border px-3 w-full"></hr>
            <div className="shadow-lg dark:border-white dark:border dark:bg-black">
                <div className="flex justify-between p-1 pl-3 pr-3 pb-2">
                    <div className="flex">
                        <img className="h-8 w-8 rounded-full" src={Dp}></img>
                        <div className="pl-2">mark </div>
                    </div>
                    <div className="flex">
                    <Clock4 className="mt-1.5" size={16} color="#595959" strokeWidth={0.5} />
                        <div className="pl-1">10 min</div>
                    </div>
                </div>
            </div>
          </div>
          <div className="shadow-lg  w-[75%] dark:border-white dark:border dark:bg-black">
            <div className="flex flex-col items-center">
            <img className="h-68" src={travel} alt="" />
            <div className="-mt-3 bg-blue-500 text-center w-20 rounded-lg text-white">
              TRAVEL
            </div>
            <h2 className="lg:p-2 p-1 font-bold lg:pr-16 mt-5">See more ideas about Travel</h2>
            <div className="p-2 pl-8 pb-3">
              Proin eget tortor risus. Pellentesque in ipsum id orci porta
              dapibus. Praesent sapien massa, convallis a pellentesque nec,
              egestas non nisi.
            </div></div>
            <hr className=" border px-3 w-full"></hr>
            <div className="shadow-lg ">
                <div className="flex justify-between p-1 pl-3 pr-3 pb-2">
                    <div className="flex">
                        <img className="h-8 w-8 rounded-full" src={Dp}></img>
                        <div className="pl-2">mark </div>
                    </div>
                    <div className="flex">
                    <Clock4 className="mt-1.5" size={16} color="#595959" strokeWidth={0.5} />
                        <div className="pl-1">10 min</div>
                    </div>
                </div>
            </div>
          </div>

          


          
          <div className="shadow-lg  w-[75%]">
            <div className="flex flex-col items-center">
            <img className="h-68" src={travel} alt="" />
            <div className="-mt-3 bg-blue-500 text-center w-20 rounded-lg text-white">
              TRAVEL
            </div>
            <h2 className="lg:p-2 p-1 font-bold lg:pr-16 mt-5">See more ideas about Travel</h2>
            <div className="p-2 pl-8 pb-3">
              Proin eget tortor risus. Pellentesque in ipsum id orci porta
              dapibus. Praesent sapien massa, convallis a pellentesque nec,
              egestas non nisi.
            </div></div>
            <hr className=" border px-3 w-full"></hr>
            <div className="shadow-lg">
                <div className="flex justify-between p-1 pl-3 pr-3 pb-2">
                    <div className="flex">
                        <img className="h-8 w-8 rounded-full" src={Dp}></img>
                        <div className="pl-2">mark </div>
                    </div>
                    <div className="flex">
                    <Clock4 className="mt-1.5" size={16} color="#595959" strokeWidth={0.5} />
                        <div className="pl-1">10 min</div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
