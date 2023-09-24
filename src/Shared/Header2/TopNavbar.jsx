// import { HiLink } from "react-icons/hi";
// import { MdArrowDropDown } from "react-icons/md";
import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const TopNavbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <div className={` ${isScroll ? "hidden" : ""}`}>
      <div
        style={{ fontWeight: "700" }}
        className="bg-[#005e9a] flex justify-center md:justify-between items-center  px-5 text-white text-xs"
      >
        <div className="">
          <div className=" flex items-center justify-start gap-4 p-2 px-5">
            <Link to="" target="_blank" href="https://www.facebook.com">
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
        <div className="flex justify-center md:justify-end  md:px-5 text-white text-xs">
          <div className="p-5   cursor-pointer">Notice</div>
          <div className="p-5 cursor-pointer">Career </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
