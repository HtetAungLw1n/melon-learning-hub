import { NavLink } from "react-router-dom";

const TopNavbar = ({
  isOpen,
  handleSetIsOpen,
}: {
  isOpen: boolean;
  handleSetIsOpen: () => void;
}) => {
  const display = isOpen ? "" : "hidden";

  const handleNavClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={handleSetIsOpen}
      className={`bg-gray-200 h-screen w-full absolute left-0 top-20 cursor-pointer ${display}`}
    >
      <div
        onClick={handleNavClick}
        className={`absolute left-0 bg-white w-full flex flex-col p-4 text-xl space-y-2 ${display}`}
      >
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"courses"}>Courses</NavLink>
        <NavLink to={"about"}>About Us</NavLink>
      </div>
    </div>
  );
};

export default TopNavbar;
