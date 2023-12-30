import React from "react";
import Dp from "../assets/dp.jpeg";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.jpg";
import python from "../assets/Python.png";
import reactlogo from "../assets/react.jpg";

import seo from "../assets/seo.png";
import sql from "../assets/Sql.png";
import tailwindcss from "../assets/tailwind.png";
import wix from "../assets/Wix.png";
import shopify from "../assets/Shopify.png";

const About = ({aboutRef}) => {
  return (
    <div className="bg-neutral-50 dark:bg-black dark:text-white">
        <div id="about"></div>
      <div className=" flex justify-center  ">
        <div className="bg-white dark:bg-black w-[90%] lg:w-[80%] shadow-lg lg:flex lg:justify-evenly mt-[5%] dark:border-white dark:border">
          <div className="">
            <div className="flex flex-col items-center lg:flex-row lg:justify-evenly mt-10" >
              <div className="ml-4">
                <img className="lg:h-40 rounded-lg" src={Dp}></img>
              </div>
              <div className="lg:pl-10 mt-5 lg:mt-0">
                <div className="dark:text-white">
                  <span className="font-bold">Name:</span> Kartavya Gupta
                </div>
                <div className="mt-5 dark:text-white">
                  <span className="font-bold">Profile:</span> Full Stack
                  Developer
                </div>
                <div className="mt-5">
                  <span className="font-bold">Email:</span>{" "}
                  Kartvyagupta51@gmail.com
                </div>
                <div className="mt-5">
                  <span className="font-bold">Phone:</span> 8127496687
                </div>
              </div>
            </div>
            <div className=" mt-10 lg:pl-10 p-2 text-3xl font-semibold">Skill</div>
            <hr className="w-14 lg:ml-10 m-2 py-[1.5px] mt-1  bg-blue-600"></hr>
            
            <div className=" grid grid-cols-3 gap-3 p-3 pt-8 mb-10">
              <img className="lg:h-20  h-16" src={html}></img>
              <img className="lg:h-20 h-16" src={css}></img>
              <img className="lg:h-20 h-16" src={javascript}></img>
              <img className="lg:h-24 h-14" src={python}></img>
              <img className="lg:h-20 h-16" src={reactlogo}></img>
              <img className="lg:h-20 h-14" src={sql}></img>
              <img className="lg:h-20 h-14" src={tailwindcss}></img>
              <img className="lg:h-20 h-16" src={seo}></img>
              <img className="lg:h-12 h-9" src={wix}></img>
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 p-2">
            <div className="text-4xl font-semibold">
              About me<hr className="w-24 py-[1.5px] mt-1  bg-blue-600"></hr>
            </div>

            <div className="mt-10 text-lg mb-16 pl-3 pr-3">
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Praesent sapien massa, convallis a pellentesque nec, egestas non
              nisi. Nulla porttitor accumsan tincidunt. <br></br>
              <br></br>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar
              a. Vivamus suscipit tortor eget felis porttitor volutpat.
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
              dui. porttitor at sem. Nulla porttitor accumsan tincidunt.
              <br></br> <br></br>
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit,
              eget tincidunt nibh pulvinar a.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
