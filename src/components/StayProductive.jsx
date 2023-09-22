const StayProductive = () => {
  return (
    <section className="StayProductive my-[100px] element-center py-5">
      <div className="container text-center grid grid-cols-1 md:grid-cols-2 gap-[30px]">
        <div className="left">
          <div className="image w-[300px] max-w-full mx-auto">
            <img
              src="../../public/images/download.png"
              className="w-full "
              alt="img-Productive"
            />
          </div>
        </div>
        <div className="right element-center place-items-center text-white">
          <div className="text mx-auto ">
            <h3 className="text-[25px] text-[#78e5f4] mb-[7px]">
              Lorem ipsum asperiores!
              <br />
              Lorem ipsum dolor sit.
            </h3>
            <p className="mb-[15px] font-normal text-sm w-[250px] md:w-[350px] xl:w-[400px] mx-auto">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate soluta, fugit numquam alias veniam natus asperiores eum
            </p>
            <p className="mb-[15px] font-normal text-sm w-[250px] md:w-[350px] xl:w-[400px] mx-auto">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate soluta, fugit numquam alias veniam natus asperiores eum
            </p>
            <a
              className=" mt-3 flex items-center text-[#78e5f4] border-b-[2px] border-dotted border-[#78e5f4] rounded-sm  w-fit mx-auto p-[5px]"
              href="/"
            >
              See More
              <img
                src="../../public/images/arrow.png"
                className="w-[20px] h-[20px] ms-5 animate-moveRight "
                alt="arrowImg"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayProductive;
