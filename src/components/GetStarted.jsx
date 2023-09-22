import React from "react";

const GetStarted = () => {
  return (
    <section className="GetStarted pt-[200px]  text-white text-center element-center">
      <div className="container relative">
        <div className="box p-[20px] w-[865px] mx-auto min-h[175px]  rounded-lg max-w-full bg-[#1c2230] absolute left-[50%] flex-col translate-x-[-50%] top-[-150px]">
          <h3 className=" text-[25px] md:text-[35px] font-semibold">
            get early access today
          </h3>
          <p className="my-[25px] w-[620px] max-w-full mx-auto ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            aut nesciunt libero facilis dolorum natus, saepe nemo neque
            perspiciatis nam.
          </p>
          <form
            className="w-full flex justify-between md:px-[60px] items-center gap-[30px] flex-wrap "
            action=""
          >
            <input
              type="email"
              className="p-[10px] placeholder:text-neutral-800 outline-none border-none text-black text-sm font-medium focus:outline-none first-line: w-full md:flex-1 rounded-lg"
              placeholder="info@gmail.com"
            />
            <button
              type="submit"
              className="ms-3 bg-[#42b0d1] w-full md:w-[200px] hover:bg-[#6fddff] text-white p-[5px] rounded-lg"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
