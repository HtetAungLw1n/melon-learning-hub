import { Link } from "react-router-dom";
import ExploreCard from "./ExploreCard";
import photo1 from "../assets/images/photo1.png";
import photo2 from "../assets/images/photo2.jpg";
import photo3 from "../assets/images/photo3.jpg";
import photo4 from "../assets/images/photo4.jpg";

const Explore = () => {
  return (
    <section className="container mx-auto p-4 pt-12">
      <div className="flex items-center justify-between">
        <div className="text-2xl md:text-3xl lg:text-4xl font-pt-serif">
          🌱 Explore
        </div>

        <Link
          to={""}
          className="border px-4 py-2 rounded-lg text-lg hover:text-avocado hover:border-avocado transition duration-150 ease-in-out"
        >
          show all +
        </Link>
      </div>

      <div className="grid grid-cols-2  lg:grid-cols-3 gap-4 pt-8">
        <ExploreCard
          span={"col-span-2"}
          text={"EcoLiving 101: Sustainable Habits for Everyday Life"}
          isTag={true}
          tagText={"Trending"}
          tagColor={"bg-gray-400/80"}
          image={photo1}
        />
        <ExploreCard
          span=""
          text={"DIY Echo Friendly Fashion"}
          isTag={true}
          tagText={"New in"}
          tagColor={"bg-green-400/80"}
          image={photo2}
        />
        <ExploreCard
          span=""
          text={"Sustainability for kids"}
          isTag={false}
          tagText=""
          tagColor=""
          image={photo3}
        />
        <ExploreCard
          span={"col-span-2"}
          text={"DIY Natural Hom Care: Non-Toxic Cleaners & More"}
          isTag={true}
          tagText={"Trending"}
          tagColor={"bg-gray-400/80"}
          image={photo4}
        />
      </div>
    </section>
  );
};

export default Explore;
