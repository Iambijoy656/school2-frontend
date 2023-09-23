import { useState } from "react";
import { Link } from "react-router-dom";
import Classes from "../Classes/Classes";

const HoverAcademics = () => {
  const [isShowClasses, setIsShowClasses] = useState(false);

  return (
    <div className="flex flex-col justify-center items-start  bg-gray-100 w-[250px] ">
      <Link
        className="text-[#37425c]  hover:text-white hover:bg-[#37425c]   text-sm  border-b  p-2  w-[250px] "
        to={""}
      >
        Teacher’s Information
      </Link>
      <Link
        className="text-[#37425c] hover:text-white hover:bg-[#37425c] text-sm p-2 border-b   w-[250px]"
        to={""}
      >
        Student’s Information
      </Link>
      <Link
        className="text-[#37425c] hover:text-white hover:bg-[#37425c] text-sm p-2 border-b   w-[250px]"
        to={""}
      >
        Curriculum
      </Link>
      <Link
        onMouseEnter={() => setIsShowClasses(true)}
        onMouseLeave={() => setIsShowClasses(false)}
        className=" relative text-[#37425c] hover:text-white hover:bg-[#37425c] text-sm p-2 border-b   w-[250px]"
        to={""}
      >
        Classes
        {isShowClasses && (
          <div className="absolute z-50 top-0 left-full  ">
            <Classes />
          </div>
        )}
      </Link>
      <Link
        className="text-[#37425c] hover:text-white hover:bg-[#37425c] text-sm p-2 border-b   w-[250px]"
        to={""}
      >
        Exam Routine
      </Link>
      <Link
        className="text-[#37425c]  hover:text-white hover:bg-[#37425c] text-sm p-2  w-[250px]"
        to={""}
      >
        Academic Calander
      </Link>
      <Link
        className="text-[#37425c]  hover:text-white hover:bg-[#37425c] text-sm p-2  w-[250px]"
        to={""}
      >
        General School Rules
      </Link>
    </div>
  );
};

export default HoverAcademics;
