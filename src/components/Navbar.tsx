import { AlignJustify, Search } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import TopNavbar from "./TopNavbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSetIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed w-full">
      {" "}
      <div className="container mx-auto bg-white p-4">
        {/* md size */}
        <div className="hidden md:flex justify-between items-center  text-xl  z-20">
          {/* <h1 className="text-2xl font-semibold">Malon Learning Hub</h1> */}
          <div>
            <img src="malon-space.png" alt="logo" className="w-30" />
          </div>

          <div className="flex gap-8">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"courses"}>Courses</NavLink>
            <NavLink to={"about"}>About Us</NavLink>
          </div>

          <div className="flex items-center gap-4">
            <div className="border p-2 rounded-lg">
              <Search />
            </div>
            <button className="bg-gray-800 hover:bg-avocado text-white px-4 py-2 rounded-md">
              Sign In +
            </button>
          </div>
        </div>

        {/* sm size  */}
        <div className="md:hidden flex justify-between items-center text-xl z-20">
          {/* <h1 className="text-2xl">Malon Learning Hub</h1> */}
          <div>
            <img src="malon-space.png" alt="logo" className="w-32" />
          </div>
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
