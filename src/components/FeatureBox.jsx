const FeatureBox = (props) => {
  const { item } = props;
  return (
    <div className="features text-center text-white element-center  flex-col ">
      <div className="mx-auto ">
        <img
          src={`../../public/images/${item.icon}`}
          alt="icon-image"
          className="w-[80px] h-[80px] object-contain mx-auto"
        />
        <h3 className=" text-[25px] font-semibold my-[15px]">{item.title}</h3>
        <p className=" font-normal text-sm  mx-auto">{item.desc}</p>
      </div>
    </div>
  );
};
export default FeatureBox;
