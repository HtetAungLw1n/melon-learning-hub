import { AlarmClock, BookOpen, Plus, Tag } from "lucide-react";
import { Link } from "react-router-dom";

type CoursesCardProps = {
  image: string;
  tagText: string;
  duration: string;
  title: string;
  description: string;
};

const CoursesCard = ({
  image,
  tagText,
  description,
  duration,
  title,
}: CoursesCardProps) => {
  return (
    <div className="p-3 shadow-xl rounded-lg">
      <div className="relative">
        <img
          src={image}
          alt="photo"
          className="rounded-lg h-72 w-full object-cover"
        />
        <button className="rounded-full text-white flex justify-center items-center  absolute w-10 h-10 bg-avocado hover:bg-avocado/90 top-2 right-4 cursor-pointer">
          <Plus />
        </button>
      </div>
      <div>
        <div className="flex justify-between items-center my-2">
          <div className="bg-gray-600 text-white text-sm px-2 py-1 rounded flex items-center gap-2">
            <Tag size={16} /> {tagText}
          </div>
          <div className="bg-gray-600 text-white text-sm px-2 py-1 rounded flex items-center gap-2">
            <AlarmClock size={16} />
            {duration}
          </div>
        </div>
        <div className="text-2xl flex items-start gap-2 mt-2">
          <BookOpen className="w-12" />
          <div className="font-pt-serif line-clamp-2">{title}</div>
        </div>
        <div className="text-gray-700 mt-2 line-clamp-3">{description}</div>
        <div className="w-full border rounded-lg py-2 text-center mt-4 hover:border-avocado ">
          <Link to={""}>Start Learning</Link>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
