import { TagIcon } from "lucide-react";

type ExploreCardProps = {
  span: string;
  text: string;
  isTag: boolean;
  tagText: string;
  tagColor: string;
  image: string;
};

const ExploreCard = ({
  span,
  text,
  isTag,
  tagText,
  tagColor,
  image,
}: ExploreCardProps) => {
  return (
    <div
      className={`relative h-64 md:h-72 rounded-lg overflow-hidden ${span} text-white`}
    >
      <img
        src={image}
        alt="photo"
        className="w-full h-full object-cover lg:object-bottom"
      />
      <div className="absolute top-0 w-full h-full bg-linear-to-t from-10%  via-black/20 from-black/60 ">
        {isTag && (
          <div
            className={`${tagColor} text-sm  px-2 py-1 rounded absolute top-5 left-5 flex items-center gap-2`}
          >
            <TagIcon size={16} /> {tagText}
          </div>
        )}

        <div className="absolute bottom-5 left-5 text-2xl font-pt-serif">
          {text}
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;
