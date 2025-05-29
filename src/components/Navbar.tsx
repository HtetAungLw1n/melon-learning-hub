import { AlignJustify, Search } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import TopNavbar from "./TopNavbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSetIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed w-full z-50 bg-white">
      {" "}
      <div className="container mx-auto p-4">
        {/* md size */}
        <div className="hidden md:flex justify-between items-center  text-xl">
          <Link to={"/"}>
            <img
              src="melon-space.png"
              alt="logo"
              className="w-30 cursor-pointer"
            />
          </Link>

          <div className="flex gap-8">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/courses"}>Courses</NavLink>
            <NavLink to={"/about-us"}>About Us</NavLink>
          </div>

          <div className="flex items-center gap-4">
            <div className="border p-2 rounded-lg cursor-pointer">
              <Search />
            </div>
            <button className="bg-neutral-800 hover:bg-avocado text-white px-4 py-2 rounded-md cursor-pointer duration-150 ease-in-out transition">
              Sign In +
            </button>
          </div>
        </div>

        {/* sm size  */}
        <div className="md:hidden flex justify-between items-center text-xl">
          <Link to={"/"}>
            <img
              src="melon-space.png"
              alt="logo"
              className="w-32 cursor-pointer"
            />
          </Link>
          <div>
            <AlignJustify
              onClick={handleSetIsOpen}
              className="cursor-pointer"
            />
          </div>
        </div>
        <TopNavbar isOpen={isOpen} handleSetIsOpen={handleSetIsOpen} />
      </div>
    </div>
  );
};

export default Navbar;
