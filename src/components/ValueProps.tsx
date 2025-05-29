import { BookOpen, HandHeart, Sparkle } from "lucide-react";
import bg from "../assets/images/bg.jpg";
import svg from "../assets/images/valuespropsimg.png";

const ValueProps = () => {
  return (
    <section
      className="bg-black pt-20 md:pt-0  relative before:content-[''] before:absolute before:inset-0 before:bg-neutral-800/50 before:z-0"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="md:flex md:justify-between md:items-center container mx-auto">
        {" "}
        <div className="flex flex-col text-white justify-center items-center font-pt-serif gap-2 relative z-10 md:pl-20">
          <div className="bg-white text-black rounded-full w-18 h-18 flex justify-center items-center">
            <BookOpen size={28} />
          </div>
          <div className="text-4xl mt-2">100 +</div>
          <div className="text-lg">Available Courses</div>
        </div>
        <div className="flex flex-col text-white justify-center items-center font-pt-serif gap-2 my-20 relative z-10">
          <div className="bg-white text-black rounded-full w-18 h-18 flex justify-center items-center">
            <Sparkle size={28} />
          </div>
          <div className="text-4xl mt-2">50 +</div>
          <div className="text-lg">Professionals</div>
        </div>
        <div className="flex flex-col text-white justify-center items-center font-pt-serif gap-2 relative z-10">
          <div className="bg-white text-black rounded-full w-18 h-18 flex justify-center items-center">
            <HandHeart size={28} />
          </div>
          <div className="text-4xl mt-2">150 +</div>
          <div className="text-lg">Career Growth</div>
        </div>
        {/* dr ka invisible div  */}
        <div className="h-96"></div>
        <img
          src={svg}
          alt="svg"
          className="absolute right-0 bottom-0 md:right-0 "
        />
      </div>
    </section>
  );
};

export default ValueProps;
