import { useState } from "react";
import FeatureBox from "./FeatureBox";

const Features = () => {
  const [items] = useState([
    {
      icon: "download.png",
      title: "Acsess your file any here",
      desc: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odio dolore ex. Ex, eum veniam!",
    },
    {
      icon: "health.jpg",
      title: "Acsess your file any here",
      desc: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odio dolore ex. Ex, eum veniam!",
    },
    {
      icon: "images.png",
      title: "Acsess your file any here",
      desc: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odio dolore ex. Ex, eum veniam!",
    },
    {
      icon: "WhatsApp Image 2023-09-10 at 15.23.47.jpg",
      title: "Acsess your file any here",
      desc: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odio dolore ex. Ex, eum veniam!",
    },
  ]);
  return (
    <section className="py-[25px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] w-[865px] mx-auto max-w-full">
          {items.map((item, index) => {
            return (
              <div key={index}>
                <FeatureBox item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
