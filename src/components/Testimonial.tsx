import { ArrowLeft, ArrowRight, MessageCircleMoreIcon } from "lucide-react";
import pfp1 from "../assets/images/pfp1.png";
import pfp2 from "../assets/images/pfp2.png";
import pfp3 from "../assets/images/pfp3.png";

const Testimonial = () => {
  return (
    <section className="container mx-auto p-4 py-16">
      <div className="flex justify-between items-center">
        <div className="text-3xl  lg:text-4xl font-pt-serif">
          🌱 What Learners Talk About Us
        </div>
        {/* buttons  */}
        <div className="flex justify-center items-center gap-4">
          <div className="bg-gray-300 rounded-lg w-fit p-2">
            <ArrowLeft size={18} />
          </div>
          <div className="bg-avocado rounded-lg w-fit p-2">
            <ArrowRight size={18} />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between gap-4 mt-10">
        <TestimonialCard
          img={pfp1}
          name="Nay Lin Aung"
          role="Small Business Owner"
          text="This course completely changed how I approach sustainability. I never realized how easy it was to make small eco-friendly changes that have a big impact!"
          courseName="Course Name"
        />
        <TestimonialCard
          img={pfp2}
          name="Thidar Win"
          role="Entrepreneur"
          text="The hands-on DIY projects were my favorite! I now make my own reusable products and have even started a small eco-friendly business."
          courseName="Course Name"
        />
        <TestimonialCard
          img={pfp3}
          name="Aung Myo Tun"
          role="Engineering Graduate"
          text="I’ve always been interested in green technology, but this course gave me the practical skills to start working on renewable energy projects."
          courseName="Course Name"
        />
      </div>
    </section>
  );
};

export default Testimonial;

type TestimonialCardProps = {
  img: string;
  name: string;
  role: string;
  text: string;
  courseName: string;
};

export const TestimonialCard = ({
  img,
  name,
  role,
  text,
  courseName,
}: TestimonialCardProps) => {
  return (
    <section className="bg-neutral-800 rounded-lg text-white p-6">
      <div className="flex items-start gap-8">
        <img src={img} alt="pfp" />
        <div>
          <div className="font-pt-serif text-xl">{name}</div>
          <div className="text-lg">{role}</div>
        </div>
      </div>
      <div className="my-4">{text}</div>
      <div className="flex bg-gray-400/40 justify-center w-fit items-center px-4 py-1 text-sm rounded-full gap-2">
        <MessageCircleMoreIcon size={20} /> <div>{courseName}</div>
      </div>
    </section>
  );
};
