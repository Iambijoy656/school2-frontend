import { Link } from "react-router-dom";

const HoverFacilities = () => {
  return (
    <div className="flex flex-col justify-center items-start  bg-gray-100 w-[200px] ">
      <Link
        className="text-[#37425c]  hover:text-white hover:bg-[#37425c]   text-sm  border-b p-2  w-[200px] "
        to={""}
      >
        Overview
      </Link>
      <Link
        className="text-[#37425c] hover:text-white hover:bg-[#37425c] text-sm p-2 border-b  w-[200px]"
        to={""}
      >
        Lab Facilities
      </Link>
      <Link
        className="text-[#37425c] hover:text-white hover:bg-[#37425c] text-sm p-2 border-b  w-[200px]"
        to={""}
      >
        Library Facilities
      </Link>
      <Link
        className="text-[#37425c] hover:text-white hover:bg-[#37425c] text-sm p-2 border-b  w-[200px]"
        to={""}
      >
        Sports Facilities
      </Link>
      <Link
        className="text-[#37425c] hover:text-white hover:bg-[#37425c] text-sm p-2 border-b  w-[200px]"
        to={""}
      >
        Scholarship
      </Link>
    </div>
  );
};

export default HoverFacilities;
