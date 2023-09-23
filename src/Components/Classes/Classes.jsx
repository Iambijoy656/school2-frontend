import { Link } from "react-router-dom";

const Classes = () => {
  return (
    <div className="flex flex-col justify-center items-start  bg-gray-100 w-[250px] ">
      <Link
        className="text-[#37425c]  hover:text-white hover:bg-[#37425c]   text-sm  border-b px-4  p-2  w-[250px] "
        to={""}
      >
        PG-KG
      </Link>
      <Link
        className="text-[#37425c] hover:text-white hover:bg-[#37425c] text-sm p-2 border-b px-4   w-[250px]"
        to={""}
      >
        I-V
      </Link>
      <Link
        className="text-[#37425c] hover:text-white hover:bg-[#37425c] text-sm p-2 border-b  px-4  w-[250px]"
        to={""}
      >
        IGCSE
      </Link>
      <Link
        className="text-[#37425c] hover:text-white hover:bg-[#37425c] text-sm px-4 p-2 border-b   w-[250px]"
        to={""}
      >
        IAL
      </Link>
      <Link
        className="text-[#37425c] hover:text-white hover:bg-[#37425c] text-sm p-2 border-b px-4   w-[250px]"
        to={""}
      >
        XI
      </Link>
      <Link
        className="text-[#37425c]  hover:text-white hover:bg-[#37425c] text-sm p-2 px-4  w-[250px]"
        to={""}
      >
        XII
      </Link>
    </div>
  );
};

export default Classes;
