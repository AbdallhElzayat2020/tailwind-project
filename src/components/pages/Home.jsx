import { Fragment } from "react";
import Landing from "../Landing";
import Features from "../Features";
import StayProductive from "../StayProductive";
import Testimonial from "../Testimonial";
import GetStarted from "../GetStarted";
import Footer from "../Footer";
const Home = () => {
  return (
    <Fragment>
      <Landing />
      <Features />
      <StayProductive />
      <Testimonial />
      <GetStarted />
      <Footer />
    </Fragment>
  );
};

export default Home;
