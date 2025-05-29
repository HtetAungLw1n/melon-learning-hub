import Courses from "../components/Courses";
import Explore from "../components/Explore";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Learn from "../components/Learn";
import Testimonial from "../components/Testimonial";
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
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
