import { BookOpen, Combine, ShieldCheck, UsersRound } from "lucide-react";
import Button from "./Button";
import type { LucideIcon } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto p-4 py-10 md:py-16 lg:flex">
      {/* left  */}
      <div className="lg:w-1/3">
        <div className="text-3xl lg:text-4xl font-pt-serif">
          🌱 Why Choose Us?
        </div>
        <div className="mt-4 md:pr-8 md:text-lg">
          At <span className="font-semibold">Melon Space</span>, we offer
          practical, expert-led courses designed to help yyou integrate
          sustainability into your daily life, career, andbusiness. Whether
          you're a beginner looking to make eco-friendly changes or a
          professional seeking advanced green skills, our flexible and engaging
          learning experience ensures that you gain the tools to create real
          impact.
        </div>

        <Button
          link="/courses"
          text="Browse Courses"
          customcss="justify-start"
        />
      </div>
      {/* right  */}
      <div className="pt-8 lg:pt-0 grid grid-cols-1 lg:w-2/3 lg:grid-cols-2 gap-4">
        <WhyChooseUsCard
          title="Hands-On Learning"
          text="Real-World applications for immedeiate impact"
          icon={BookOpen}
        />
        <WhyChooseUsCard
          title="Diverse Course Categories"
          text="Covering DIY projects, renewable energy, sustainable design, and more."
          icon={Combine}
        />
        <WhyChooseUsCard
          title="Certified & Recognized"
          text="Earn certifications to showcase your sustainability expertise."
          icon={ShieldCheck}
        />
        <WhyChooseUsCard
          title="Career Growth Opportunities"
          text="Gain valuable skills that enhance your resume and job prospects."
          icon={UsersRound}
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;

export const WhyChooseUsCard = ({
  text,
  title,
  icon: Icon,
}: {
  text: string;
  title: string;
  icon: LucideIcon;
}) => {
  return (
    <>
      <div className="flex flex-col pl-8 p-4 text-white justify- items-start  gap-2 relative bg-neutral-800 rounded-lg ">
        <div className="bg-white text-black rounded-full w-18 h-18 flex justify-center items-center">
          <Icon size={20} />
        </div>
        <div className="text-2xl mt-2 font-pt-serif">{title}</div>
        <div className="text-sm mt-4">{text}</div>
      </div>
    </>
  );
};
