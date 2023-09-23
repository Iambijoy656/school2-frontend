import { Link } from "react-router-dom";

const HoverAdmission = () => {
  return (
    <div className="flex flex-col justify-center items-start  bg-gray-100 w-[250px] ">
      <Link
        className="text-[#37425c]  hover:text-white hover:bg-[#37425c]   text-sm  border-b p-2  w-[250px] "
        to={""}
      >
        Admissions Overview
      </Link>
      <Link
        className="text-[#37425c] hover:text-white hover:bg-[#37425c] text-sm p-2 border-b  w-[250px]"
        to={""}
      >
        Admissions Process
      </Link>
      <Link
        className="text-[#37425c] hover:text-white hover:bg-[#37425c] text-sm p-2 border-b  w-[250px]"
        to={""}
      >
        Tuition Fees
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
        Transfer Certificate
      </Link>
    </div>
  );
};

export default HoverAdmission;
