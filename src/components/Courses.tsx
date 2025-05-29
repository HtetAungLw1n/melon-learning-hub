import { NavLink } from "react-router-dom";
import course1 from "../assets/images/course1.jpg";
import course2 from "../assets/images/course2.jpg";
import course3 from "../assets/images/course3.jpg";
import CoursesCard from "./CoursesCard";
import Button from "./Button";

const Courses = () => {
  return (
    <section className="container mx-auto p-4 pt-12">
      <div className="flex items-center justify-between">
        <div className="text-2xl md:text-3xl lg:text-4xl font-pt-serif">
          🌱 Courses
        </div>

        <div className="flex gap-2">
          <NavLink
            to={"/"}
            className="courses px-4 py-2 text-black/50 text-sm md:text-lg hover:text-avocado  transition duration-150 ease-in-out"
          >
            Do it yourself
          </NavLink>
          <NavLink
            to={"/technology"}
            className="courses px-4 py-2 text-black/50 text-sm md:text-lg hover:text-avocado  transition duration-150 ease-in-out"
          >
            Technology
          </NavLink>
        </div>
      </div>
      <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CoursesCard
          image={course1}
          title="Reusable DIY: Crafting a Zero-Waste Lifestyle"
          tagText="free"
          duration="2 hrs duration"
          description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          velit sit nulla cumque eum! Temporibus impedit debitis accusantium
          voluptates nisi. Architecto omnis tempore magni eius, voluptate
          deserunt excepturi unde est!"
        />
        <CoursesCard
          image={course2}
          title="Sustainability for Kids: Fun & Green DIY Projects"
          tagText="free"
          duration="8 hrs duration"
          description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          velit sit nulla cumque eum! Temporibus impedit debitis accusantium
          voluptates nisi. Architecto omnis tempore magni eius, voluptate
          deserunt excepturi unde est!"
        />
        <CoursesCard
          image={course3}
          title="Sustainablr Tech & Innovation: Building a Greener Future"
          tagText="free"
          duration="3 weeks duration"
          description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          velit sit nulla cumque eum! Temporibus impedit debitis accusantium
          voluptates nisi. Architecto omnis tempore magni eius, voluptate
          deserunt excepturi unde est!"
        />
      </div>

      <Button text="View All Course" link="/courses" customcss="" />
    </section>
  );
};

export default Courses;
