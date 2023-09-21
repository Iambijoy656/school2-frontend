// import { HiLink } from "react-icons/hi";
// import { MdArrowDropDown } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const TopNavbar = () => {
  return (
    <div className=" hidden lg:block">
      <div
        style={{ fontWeight: "700" }}
        className="bg-[#005e9a] flex justify-between items-center  px-5 text-white text-xs"
      >
        <div className="">
          <div className=" flex items-center justify-start gap-5 p-2 px-5">
            <Link to={""} target="_blank" href="https://www.facebook.com">
              <FaFacebookF color="#e8eded" size="20px" />{" "}
            </Link>
            <Link to={""} target="_blank" href="https://www.twitter.com">
              <FaTwitter color="#e8eded" size="20px" />{" "}
            </Link>
            <Link to={""} target="_blank" href="https://www.google.com">
              <FaLinkedin color="#e8eded" size="20px" />{" "}
            </Link>
            <Link to={""} target="_blank" href="https://www.instagram.com">
              <FaInstagram color="#e8eded" size="20px" />{" "}
            </Link>
          </div>
        </div>
        <div className="flex justify-end  px-5 text-white text-xs">
          <div className="p-5 px-5 bg-[#8d1d59] cursor-pointer">Notice</div>
          <div className="p-5 px-5 cursor-pointer">CAREER </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
