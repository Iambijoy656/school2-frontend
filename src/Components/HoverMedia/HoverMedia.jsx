import { Link } from "react-router-dom";

const HoverMedia = () => {
  return (
    <div className="flex flex-col justify-center items-start  bg-gray-100 w-[150px] ">
      <Link
        className="text-[#37425c]  hover:text-white hover:bg-[#37425c]   text-sm  border-b p-2  w-[150px] "
        to={""}
      >
        Event{" "}
      </Link>
      <Link
        className="text-[#37425c] hover:text-white hover:bg-[#37425c] text-sm p-2 border-b  w-[150px]"
        to={""}
      >
        Photos
      </Link>
      <Link
        className="text-[#37425c] hover:text-white hover:bg-[#37425c] text-sm p-2 border-b  w-[150px]"
        to={""}
      >
        News
      </Link>
      <Link
        className="text-[#37425c] hover:text-white hover:bg-[#37425c] text-sm p-2 border-b  w-[150px]"
        to={""}
      >
        Video
      </Link>
    </div>
  );
};

export default HoverMedia;
