import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import heroSectionImage from "../assets/images/hero-section.jpg";

const HeroSection = () => {
  return (
    <section className="h-[90vh] flex justify-center items-center">
      <div className="absolute top-0 h-[90vh] w-full rounded-b-4xl overflow-hidden">
        <img
          src={heroSectionImage}
          alt="photo"
          className="h-full w-full object-cover brightness-70 opacity-90"
        />
      </div>
      <div className="z-10 text-white text-3xl md:text-4xl text-center px-20 lg:text-4xl ">
        <div className="font-pt-serif">
          <div>
            Start your journay <span className="text-avocado">today.</span>
          </div>
          <div>
            Be a part of{" "}
            <span className="text-avocado">a more substainable tomorrow.</span>
          </div>
        </div>
        <button className="bg-white text-black text-lg px-4 py-2 rounded-lg mt-10 cursor-pointer hover:bg-avocado transition duration-150 ease-in-out hover:text-white">
          <Link to={"/courses"}>
            <div className="flex items-center gap-2">
              Browse Courses <BookOpen className="text-gray-700" />
            </div>
          </Link>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
