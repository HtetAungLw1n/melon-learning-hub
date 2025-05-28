import Courses from "../components/Courses";
import Explore from "../components/Explore";
import HeroSection from "../components/HeroSection";
import ValueProps from "../components/ValueProps";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Explore />
      <Courses />
      <ValueProps />
    </>
  );
};

export default Home;
