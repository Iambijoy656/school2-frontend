import { Link } from "react-router-dom";

const HoverAboutUs = () => {
  return (
    <div className="flex flex-col justify-center items-start  bg-gray-100 w-[250px] ">
      <Link
        className="text-[#37425c]  hover:text-white hover:bg-[#37425c]   text-sm  border-b p-2  w-[250px] "
        to={""}
      >
        About Maple Leaf
      </Link>
      <Link
        className="text-[#37425c] hover:text-white hover:bg-[#37425c] text-sm p-2 border-b  w-[250px]"
        to={""}
      >
        President’s Message
      </Link>
      <Link
        className="text-[#37425c] hover:text-white hover:bg-[#37425c] text-sm p-2 border-b  w-[250px]"
        to={""}
      >
        Principal’s Message
      </Link>
      <Link
        className="text-[#37425c] hover:text-white hover:bg-[#37425c] text-sm p-2 border-b  w-[250px]"
        to={""}
      >
        High Performance Learning
      </Link>
      <Link
        className="text-[#37425c] hover:text-white hover:bg-[#37425c] text-sm p-2 border-b  w-[250px]"
        to={""}
      >
        Our Partners
      </Link>
      <Link
        className="text-[#37425c]  hover:text-white hover:bg-[#37425c] text-sm p-2  w-[250px]"
        to={""}
      >
        Parent Testimonials
      </Link>
    </div>
  );
};

export default HoverAboutUs;
