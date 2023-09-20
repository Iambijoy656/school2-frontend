import { Link } from "react-router-dom";

const SchoolStoriesCard = ({ story }) => {
//   console.log(story);

  return (
    <Link to={''} className="max-w-xs shadow-md text-gray-800 overflow-hidden group ">
      <div className="group-hover:scale-110 transform transition-transform duration-1000 ease-in-out">
        <img
          src={story.image}
          alt=""
          className="object-cover object-center w-full h-72 bg-gray-500"
        />
      </div>
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-lg text-primary">{story.title}</h2>
          <p className="text-gray-800 text-xs">{story.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default SchoolStoriesCard;
