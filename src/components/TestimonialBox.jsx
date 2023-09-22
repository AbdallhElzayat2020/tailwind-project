import React, { Fragment } from "react";
const TestimonialBox = (props) => {
  const { link } = props;
  return (
    <Fragment>
      <div
        className="text-white  bg-[#333] hover:bg-[#6a6767] shadow-[2px_2px_1px_1px_#eee]  transition-all duration-300 rounded-lg p-[20px]"
        key={link.id}
      >
        <p className="text-sm font-normal tracking-normal mb-[5px]">
          {link.text}
        </p>
        <div className="flex items-center gap-[25px]">
          <img
            src={`../../public/images/${link.img}`}
            className="w-[50px] h-[50px] my-[10px]  object-contain rounded-full"
            alt="img-testimonial"
          />
          <div className="info">
            <strong className="text-white block mb-[5px] ">{link.name}</strong>
            <p className="text-amber-400">{link.job}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default TestimonialBox;
