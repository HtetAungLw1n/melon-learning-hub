import { SendHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import facebook from "../assets/images/Facebook.png";
import instagram from "../assets/images/Instagram.png";
import whatsapp from "../assets/images/WhatsApp.png";
import linkedIn from "../assets/images/LinkedIN_black.png";

const Footer = () => {
  return (
    <section className="container mx-auto px-4 pb-8 lg:flex lg:justify-between">
      {/* logo section  */}
      <div>
        <img src="logo2.jpg" alt="logo" />
        <div className="mt-8 text-balance text-neutral-700">
          Knowledge is the seed of change — learn sustainability, grow a better
          future.
        </div>
        <div className="lg:flex items-center gap-4">
          <div className="mt-4 text-avocado text-lg">
            Our Sustainable websites:
          </div>
          <Link
            to={"/fashion-store"}
            className="underline underline-offset-4 mr-2 text-sm mt-4 hover:text-avocado duration-100 transition ease-in-out"
          >
            Fashion Store
          </Link>
          <Link
            to={"/space-store"}
            className="underline underline-offset-4 ml-2 text-sm mt-4 hover:text-avocado duration-100 transition ease-in-out"
          >
            Space Store
          </Link>
        </div>
      </div>
      {/*mobile nav section  */}
      <div className="text-2xl font-pt-serif flex my-10 gap-8 lg:hidden">
        <div className="flex flex-col gap-4">
          <Link
            to="/home"
            className="hover:text-avocado duration-100 transition ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/shop-now"
            className="hover:text-avocado duration-100 transition ease-in-out"
          >
            Shop Now
          </Link>
          <Link
            to="/category"
            className="hover:text-avocado duration-100 transition ease-in-out"
          >
            Category
          </Link>
          <Link
            to="/about-us"
            className="hover:text-avocado duration-100 transition ease-in-out"
          >
            About Us
          </Link>
          <Link
            to="/contact-us"
            className="hover:text-avocado duration-100 transition ease-in-out"
          >
            Contact Us
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <Link
            to="/privacy-policy"
            className="hover:text-avocado duration-100 transition ease-in-out"
          >
            Privacy Policy
          </Link>
          <Link
            to="/website"
            className="hover:text-avocado duration-100 transition ease-in-out"
          >
            Website
          </Link>
          <Link
            to="/customer-care"
            className="hover:text-avocado duration-100 transition ease-in-out"
          >
            Customer Care
          </Link>
          <Link
            to="/career"
            className="hover:text-avocado duration-100 transition ease-in-out"
          >
            Career
          </Link>
        </div>
      </div>

      {/* desktop section  */}
      <section className="lg:w-1/3">
        {/* newsletter  */}
        <div>
          <div className="text-2xl font-pt-serif mb-4">
            Subscribe our newsletter here !
          </div>
          <div className="border border-avocado shadow-xl flex p-2 rounded-lg">
            <input
              type="text"
              placeholder="Email"
              className="w-full outline-0"
            />
            <SendHorizontal />
          </div>

          <div className="flex items-center mt-8 gap-4">
            <div className="rounded-full broder border-2 border-avocado w-fit p-1">
              <Link to={""}>
                <img src={facebook} alt="facebook" />
              </Link>
            </div>
            <div className="rounded-full broder border-2 border-avocado w-fit p-1">
              <Link to={"/"}>
                <img src={instagram} alt="instagram" />
              </Link>
            </div>
            <div className="rounded-full broder border-2 border-avocado w-fit p-1">
              <Link to={""}>
                <img src={whatsapp} alt="whatsapp" />
              </Link>
            </div>
            <div className="rounded-full broder border-2 border-avocado w-fit p-1">
              <Link to={""}>
                <img src={linkedIn} alt="linkedIn" />
              </Link>
            </div>
          </div>
        </div>
        {/* nav section  */}
        <div className="text-2xl font-pt-serif lg:flex my-10 gap-8 hidden ">
          <div className="flex flex-col gap-4">
            <Link
              to="/home"
              className="hover:text-avocado duration-100 transition ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/courses"
              className="hover:text-avocado duration-100 transition ease-in-out"
            >
              Courses
            </Link>

            <Link
              to="/about-us"
              className="hover:text-avocado duration-100 transition ease-in-out"
            >
              About Us
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link
              to="/privacy-policy"
              className="hover:text-avocado duration-100 transition ease-in-out"
            >
              Privacy Policy
            </Link>

            <Link
              to="/career"
              className="hover:text-avocado duration-100 transition ease-in-out"
            >
              Career
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Footer;
