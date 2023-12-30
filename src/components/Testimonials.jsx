import React, { useState } from "react";
import Testimonialsone from "../components/Testimonialsone";
import Testimonialstwo from "../components/Testimonialstwo";

const Testimonials = () => {
  const [page, setPage] = useState(0);
  const func_testimonials = () => {
    if (page === 1) {
      return <Testimonialsone /> ;
    } else {
      return <Testimonialstwo /> ;
    }
  };

  return (
    <div className="bg-blue-400 ">
      <div className="flex flex-col items-center ">
        {func_testimonials()}
<div className="flex justify-center gap-2">
        <hr
          className=" w-8 py-1 border-0 bg-black mt-20 mb-10 hover:border-gray-600 hover:border-3"
          onClick={() => setPage(0)}
        ></hr>
        <hr
          className=" w-8 py-1 border-0 bg-black mt-20 mb-10"
          onClick={() => setPage(1)}
        ></hr></div>
      </div>
    </div>
  );
};

export default Testimonials;
