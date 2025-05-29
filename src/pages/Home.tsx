import Courses from "../components/Courses";
import Explore from "../components/Explore";
import HeroSection from "../components/HeroSection";
import Learn from "../components/Learn";
import ValueProps from "../components/ValueProps";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Explore />
      <Courses />
      <ValueProps />
      <WhyChooseUs />
      <Learn />
    </>
  );
};

export default Home;
