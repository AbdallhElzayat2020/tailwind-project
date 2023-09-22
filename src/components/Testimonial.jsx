import { useState } from "react";
import TestimonialBox from "./TestimonialBox";
const Testimonial = () => {
  const [links] = useState([
    {
      id: 1,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem veniam, voluptate optio quaerat adipisci quia eligendi perferendis nisi odio molestias alias repellendus minima animi nobis accusamus dicta culpa. Voluptates, consequatur?",
      name: "Abdullh Elzayat",
      job: "FullStack Developer",
      img: "Vector logo.png",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem veniam, voluptate optio quaerat adipisci quia eligendi perferendis nisi odio molestias alias repellendus minima animi nobis accusamus dicta culpa. Voluptates, consequatur?",
      name: "Ali Ahmed",
      job: "FullStack Developer",
      img: "Vector logo.png",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem veniam, voluptate optio quaerat adipisci quia eligendi perferendis nisi odio molestias alias repellendus minima animi nobis accusamus dicta culpa. Voluptates, consequatur?",
      name: "Kiro Nagey",
      job: "FullStack Developer",
      img: "Vector logo.png",
    },
  ]);
  return (
    <section className="Testimonial relative">
      <img
        src="../../public/images/arrow.png"
        className="w-[25px] absolute top-[30px] hidden xl:block left-[50px] z-[-10]"
        alt=""
      />
      <img
        src="../../public/images/arrow.png"
        className="w-[25px] absolute top-[30px] hidden xl:block   right-[50px] z-[-10]"
        alt=""
      />
      <div className="container mx-auto px-[30px] element-center ">
        <div className="box grid grid-cols-1 md:grid-cols-3 gap-[20px] lg:grid-cols-3 ">
          {links.map((link) => {
            return <TestimonialBox key={link.id} link={link} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
