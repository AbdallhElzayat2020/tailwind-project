import land from "../assets/images/home.jpg";
const Landing = () => {
  return (
    <section className="landing mb-[25px] bg-[#1c2230]">
      <div className="container">
        <div className=" flex-col pt-[250px]">
          <div className=" w-[750px] h-full mx-auto max-w-full">
            <img
              src={land}
              alt="landing-image"
              className="w-full mx-auto h-fit"
            />
          </div>
          <div className="info  text-white text-center">
            <h1 className="text-[23px] leading-tight  md:text-[40px] font-semibold my-[15px]">
              Lorem ipsum dolor sit amet consectetur adipisicin
              <br />
              similique, veniam perferendis eaque
            </h1>
            <p className="font-normal text-lg  px-[12px] md:w-[600px] max-w-full mx-auto mb-[30px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              fuga velit voluptate quae sit quam impedit officiis necessitatibus
              sint, possimus tenetur minima sunt, quibusdam modi.
            </p>
          </div>
        </div>
        <a
          href=""
          className="btn w-[280px] element-center  rounded-[30px] text-center p-[15px] mx-auto  text-white  "
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Landing;
