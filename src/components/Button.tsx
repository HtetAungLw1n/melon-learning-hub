import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const Button = ({
  text,
  link,
  customcss,
  linkcss,
}: {
  text: string;
  link: string;
  customcss: string;
  linkcss?: string;
}) => {
  return (
    <div className={`flex items-center justify-center mt-8 ${customcss}`}>
      <Link
        to={link}
        className={`bg-neutral-800 hover:bg-avocado text-white flex items-center text-lg md:text-xl p-4 rounded-md cursor-pointer duration-150 ease-in-out transition gap-2 ${linkcss}`}
      >
        {text} <Plus />
      </Link>
    </div>
  );
};

export default Button;
