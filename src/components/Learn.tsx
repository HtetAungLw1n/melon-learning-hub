import img from "../assets/images/img1.png";
import Button from "./Button";

const Learn = () => {
  return (
    <section className="bg-neutral-800  px-4 py-16 text-white">
      <div className="container mx-auto flex flex-col gap-4 md:flex-row md:justify-between md:items-start lg:h-[40vh]">
        <div className="w-full md:w-1/2 lg:w-[40%] h-full rounded-lg overflow-hidden">
          <img src={img} alt="img" className="w-full h-full object-cover" />
        </div>

        <div className="mt-4 md:w-1/2 h-full">
          <div className="text-3xl lg:text-4xl font-pt-serif">
            🌱 Learn Now & Take Action
          </div>
          <div className="mt-4 md:pr-8 md:text-lg">
            At Melon Space, we offer practical, expert-led courses designed to
            help you integrate sustainability into your daily life, career, and
            business. Whether you’re a beginner looking to make eco-friendly
            changes or a professional seeking advanced green skills, our
            flexible and engaging learning experience ensures that you gain the
            tools to create real impact.
          </div>
          <Button
            text="Browse Courses"
            link="/courses"
            customcss="justify-start"
            linkcss="bg-white text-neutral-800!"
          />
        </div>
      </div>
    </section>
  );
};

export default Learn;
