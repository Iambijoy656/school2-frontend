// import { HiLink } from "react-icons/hi";
// import { MdArrowDropDown } from "react-icons/md";
const TopNavbar = () => {
  return (
    <div className=" hidden lg:block">
      <div
        style={{ fontWeight: "700" }}
        className="bg-[#005e9a] flex justify-end  px-5 text-white text-xs"
      >
        {/* <div className="p-4 px-5 flex justify-center items-center gap-2 cursor-pointer">
          <span>
            <HiLink size={15} />
          </span>
          <span>Quick Links</span> <span>|</span>
          <span>
            <MdArrowDropDown size={15} />
          </span>
        </div> */}
        <div className="p-5 px-5 bg-[#8d1d59] cursor-pointer">Notice</div>
        <div className="p-5 px-5 cursor-pointer">CAREER </div>
      </div>
    </div>
  );
};

export default TopNavbar;
