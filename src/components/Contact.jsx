import React from "react";
import { MapPin, Phone, Mail, Linkedin, Github } from "lucide-react";


const Contact = () => {
  return (
    
    <div className="bg-[url('https://cdn.pixabay.com/photo/2013/10/10/21/19/grass-193803_1280.jpg')] lg:h-screen">
        <section id="contact"/>
      <div className=" flex justify-center  ">
        <div className="bg-white w-[80%] shadow-lg lg:flex justify-evenly mt-[8%] dark:border-white dark:border dark:bg-black dark:text-white">
          <div className="lg:w-[50%] m-[5%]">
            <div className="text-3xl font-semibold">Send Message Us</div>
            <hr className="p-[2px] bg-blue-500 w-20"></hr>
            <form className="mt-5">
              <input type="text" className="w-full border-grey-400 border-2 rounded-md py-1.5 placeholder:pl-2 hover:border-blue-400 hover:border-7 active:border-blue-400 focus:outline-none focus:ring text: pl-2 " placeholder="Your Name"></input>
              <br></br>
              <br></br>
              <input type="email" className="w-full border-grey-400 border-2 rounded-md py-1.5 placeholder:pl-2 hover:border-blue-400 hover:border-7 active:border-blue-400 focus:outline-none focus:ring text: pl-2 " placeholder="Your Email"></input>
              <br></br>
              <br></br>
              <input  type="text" className="w-full border-grey-400 border-2 rounded-md py-1.5 placeholder:pl-2 hover:border-blue-400 hover:border-7 active:border-blue-400 focus:outline-none focus:ring text: pl-2 " placeholder="Subject"></input>
              <br></br>
              <br></br>
              <textarea rows="5" cols="50" type="text" className="w-full border-grey-400 border-2 rounded-md placeholder:p-2   hover:border-blue-400 hover:border-7 active:border-blue-400 focus:outline-none focus:ring text: pl-2 " placeholder="Message"></textarea>
              <br></br>
              <br></br>
              <button className="w-40 bg-blue-400 rounded-xl py-2 text-white" type="submit" placeholder="Your Name">
                Send Message
              </button>
            </form>
          </div>
          <div className="lg:w-[50%] lg:m-[5%] m-5 mt-10">
            <div className="text-3xl font-semibold">Get in Touch</div>
            <hr className="p-[2px] bg-blue-500 w-20"></hr>

            <div className="mt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              dolorum dolorem soluta quidem expedita aperiam aliquid at. Totam
              magni ipsum suscipit amet? Autem nemo esse laboriosam ratione
              nobis mollitia inventore?
            </div>

            <div className="flex   mt-10">
              <MapPin
                className="mt-[1px]"
                size={20}
                color="#0c61e9"
                strokeWidth={2.75}
              />
              <div className="pl-5">329 WASHINGTON ST BOSTON, MA 02108</div>
            </div>
            <div className="flex mt-5">
              <Phone color="#005ef5" />
              <div className="pl-5">(617) 557-0089</div>
            </div>
            <div className="flex mt-5">
              <Mail size={20} color="#006eff" />
              <div className="pl-5"> contact@example.com</div>
            </div>
            <div className="flex mt-5 mb-20">
              <div className="w-10 h-10 bg-blue-500 rounded-full justify-center flex pt-2 border-slate-100 ">
                <Linkedin color="#ffff" strokeWidth={1.5} />
              </div>
              <div className="ml-2 w-10 h-10 bg-blue-500 rounded-full justify-center flex pt-2 border-slate-100 ">
                <Github className="" color="#ffff" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
