import { useState } from "react";
import { Link } from "react-router-dom";
import HoverAboutUs from "../../Components/HoverAboutUs/HoverAboutUs";
import HoverAcademics from "../../Components/HoverAcademics/HoverAcademics";
import HoverAdmission from "../../Components/HoverAdmission/HoverAdmission";
import HoverMedia from "../../Components/HoverMedia/HoverMedia";
import HoverFacilities from "../../Components/HoverFacilities/HoverFacilities";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShowAbout, setIsShowAbout] = useState(false);
  const [isShowAcademics, setIsShowAcademics] = useState(false);
  const [isShowAdmission, setIsShowAdmission] = useState(false);
  const [isShowMedia, setIsShowMedia] = useState(false);
  const [isShowFacilities, setIsShowFacilities] = useState(false);
  const [isFacilitiesDropdownOpen, setIsFacilitiesDropdownOpen] =
    useState(false);
  const [isMediaDropdownOpen, setIsMediaDropdownOpen] = useState(false);
  const [isAdmissionDropdownOpen, setIsAdmissionDropdownOpen] = useState(false);
  const [isAcademicDropdownOpen, setIsAcademicDropdownOpen] = useState(false);
  const [isClassDropdownOpen, setIsClassDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const menu = (
    <>
      <li className="font-bold text-md tracking-wide p-5 ">
        <Link to="#" className="text-[#ffffff]">
          Home
        </Link>
      </li>
      <span className="text-gray-300 py-5">|</span>
      <li
        onMouseEnter={() => setIsShowAbout(true)}
        onMouseLeave={() => setIsShowAbout(false)}
        className="font-bold text-md tracking-wide p-5 relative"
      >
        <Link to="#" className="text-[#ffffff]">
          About Us
        </Link>

        {isShowAbout && (
          <div className="absolute z-50 top-16 left-0 right-0">
            <HoverAboutUs />
          </div>
        )}
      </li>
      <span className="text-gray-300 py-5">|</span>
      <li
        onMouseEnter={() => setIsShowAcademics(true)}
        onMouseLeave={() => setIsShowAcademics(false)}
        className="font-bold text-md tracking-wide p-5 relative"
      >
        <Link to="#" className="text-[#ffffff]">
          Academics
        </Link>

        {isShowAcademics && (
          <div className="absolute z-50 top-16 left-0 right-0">
            <HoverAcademics />
          </div>
        )}
      </li>
      <span className="text-gray-300 py-5">|</span>
      <li
        onMouseEnter={() => setIsShowAdmission(true)}
        onMouseLeave={() => setIsShowAdmission(false)}
        className="font-bold text-md tracking-wide p-5  relative "
      >
        <Link to="#" className="text-[#ffffff]">
          Admissions
        </Link>

        {isShowAdmission && (
          <div className="absolute z-50 top-16 left-0 right-0">
            <HoverAdmission />
          </div>
        )}
      </li>
      <span className="text-gray-300 py-5">|</span>
      <li className="font-bold text-md tracking-wide p-5 ">
        <Link to="#" className="text-[#ffffff]">
          Achivements
        </Link>
      </li>
      <span className="text-gray-300 py-5">|</span>
      <li
        onMouseEnter={() => setIsShowMedia(true)}
        onMouseLeave={() => setIsShowMedia(false)}
        className="font-bold text-md tracking-wide p-5  relative "
      >
        <Link to="#" className="text-[#ffffff]">
          Media & News
        </Link>

        {isShowMedia && (
          <div className="absolute z-50 top-16 left-0 right-0">
            <HoverMedia />
          </div>
        )}
      </li>
      <span className="text-gray-300 py-5">|</span>
      <li
        onMouseEnter={() => setIsShowFacilities(true)}
        onMouseLeave={() => setIsShowFacilities(false)}
        className="font-bold text-md tracking-wide p-5 relative "
      >
        <Link to="#" className="text-[#ffffff]">
          Facilities
        </Link>
        {isShowFacilities && (
          <div className="absolute z-50 top-16 left-0 right-0">
            <HoverFacilities />
          </div>
        )}
      </li>
      <span className="text-gray-300 py-5">|</span>
      <li className="font-bold text-md tracking-wide p-5 ">
        <Link to="#" className="text-[#ffffff]">
          Contacts
        </Link>
      </li>
    </>
  );

  return (
    <nav className="bg-[#460084]  shadow-sm p-2 lg:p-0">
      <div className="px-10 mx-auto flex justify-between items-center">
        {/* <Link to="#" className="text-white text-2xl font-bold">
          Logo
        </Link> */}
        <img
          className="h-10"
          src="https://ecommerce-frontend-fahimcc.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdov60yweq%2Fimage%2Fupload%2Ff_webp%2Fwhitelogo_cavpsp&w=1200&q=75"
          alt=""
        />

        {/* Mobile Menu Button */}
        <button
          onClick={toggleNavbar}
          className="text-[#ffffff] block lg:hidden"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex ">{menu}</ul>
      </div>

      {/* Mobile Menu (Hidden by default) */}
      <div className={`${isOpen ? "block" : "hidden"} lg:hidden`}>
        <ul className="mt-2 space-y-2">
          <li>
            <Link
              to="#"
              className="block px-4 py-2 text-primary hover:bg-[#f3f4f6]"
            >
              <div className="flex justify-between items-center">
                <p>Home</p>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className={`block px-4 py-2 text-primary hover:bg-primary hover:text-white ${
                isAboutDropdownOpen ? "text-primary" : ""
              }`}
              onClick={() => {
                setIsAboutDropdownOpen(!isAboutDropdownOpen);
              }}
            >
              <div className="flex justify-between items-center">
                <p>About Us </p>
                <span>
                  {isAboutDropdownOpen ? (
                    <BiMinus size={24} />
                  ) : (
                    <BsPlus size={24} />
                  )}
                </span>
              </div>
            </Link>
            {isAboutDropdownOpen && (
              <div className="">
                {/* Add the content for the Facilities dropdown menu here */}
                <ul className="bg-gray-300 text-black flex flex-col justify-start ">
                  <Link
                    to={""}
                    className="border-b border-gray-100 p-3 text-sm hover:text-white hover:bg-[#37425c]"
                  >
                    About Maple Leaf
                  </Link>{" "}
                  <Link
                    to={""}
                    className="border-b border-gray-100 p-3 text-sm hover:text-white hover:bg-[#37425c]"
                  >
                    President’s Message
                  </Link>
                  <Link
                    to={""}
                    className="border-b border-gray-100 p-3 text-sm hover:text-white hover:bg-[#37425c]"
                  >
                    Principal’s Message
                  </Link>
                  <Link
                    to={""}
                    className="border-b border-gray-100 p-3 text-sm hover:text-white hover:bg-[#37425c]"
                  >
                    {" "}
                    High Performance Learning
                  </Link>
                  <Link
                    to={""}
                    className="border-b border-gray-100 p-3 text-sm hover:text-white hover:bg-[#37425c]"
                  >
                    {" "}
                    Our Partners
                  </Link>
                  <Link
                    to={""}
                    className="border-b border-gray-100 p-3 text-sm hover:text-white hover:bg-[#37425c]"
                  >
                    {" "}
                    Parent Testimonials
                  </Link>
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link
              to="#"
              className={`block px-4 py-2 text-primary hover:bg-primary hover:text-white ${
                isAcademicDropdownOpen ? "text-primary" : ""
              }`}
              onClick={() => {
                setIsAcademicDropdownOpen(!isAcademicDropdownOpen);
              }}
            >
              <div className="flex justify-between items-center">
                <p>Academics</p>
                <span>
                  {isAcademicDropdownOpen ? (
                    <BiMinus size={24} />
                  ) : (
                    <BsPlus size={24} />
                  )}
                </span>
              </div>
            </Link>
            {isAcademicDropdownOpen && (
              <div className="">
                {/* Add the content for the Facilities dropdown menu here */}
                <ul className="bg-gray-300 text-black flex flex-col justify-start ">
                  <Link
                    to={""}
                    className="border-b border-gray-100 p-3 text-sm hover:text-white hover:bg-[#37425c]"
                  >
                    Teacher’s Information
                  </Link>{" "}
                  <Link
                    to={""}
                    className="border-b border-gray-100 p-3 text-sm hover:text-white hover:bg-[#37425c]"
                  >
                    Student’s Information
                  </Link>
                  <Link
                    to={""}
                    className="border-b border-gray-100 p-3 text-sm hover:text-white hover:bg-[#37425c]"
                  >
                    Curriculum
                  </Link>
                  <Link
                    to={""}
                    className="border-b border-gray-100 p-3 text-sm hover:text-white hover:bg-[#37425c]"
                  >
                    {" "}
                    <div
                      onClick={() => {
                        setIsClassDropdownOpen(!isClassDropdownOpen);
                      }}
                      className="flex justify-between items-center"
                    >
                      <span> Classes</span>
                      <p>
                        <BsChevronDown />
                      </p>
                    </div>
                    {isClassDropdownOpen && (
                      <div className=" m-3">
                        <ul className="bg-gray-300 text-black flex flex-col justify-start ">
                          <Link
                            to={""}
                            className="border-b border-gray-100 p-3 text-sm hover:text-white hover:bg-[#7f98d2]"
                          >
                            PG-KG
                          </Link>{" "}
                          <Link
                            to={""}
                            className="border-b border-gray-100 p-3 text-sm hover:text-white hover:bg-[#7f98d2]"
                          >
                            I-V
                          </Link>
                          <Link
                            to={""}
                            className="border-b border-gray-100 p-3 text-sm hover:text-white hover:bg-[#7f98d2]"
                          >
                            VI-IX
                          </Link>
                          <Link
                            to={""}
                            className="border-b border-gray-100 p-3 text-sm hover:text-white hover:bg-[#7f98d2]"
                          >
                            IGCSE
                          </Link>{" "}
                          <Link
                            to={""}
                            className="border-b border-gray-100 p-3 text-sm hover:text-white hover:bg-[#7f98d2]"
                          >
                            IAL
                          </Link>{" "}
                          <Link
                            to={""}
                            className="border-b border-gray-100 p-3 text-sm hover:text-white hover:bg-[#37425c]"
                          >
                            XI
                          </Link>{" "}
                          <Link
                            to={""}
                            className="border-b border-gray-100 p-3 text-sm hover:text-white hover:bg-[#7f98d2]"
                          >
                            XII
                          </Link>
                        </ul>
                      </div>
                    )}
                  </Link>
                  <Link
                    to={""}
                    className="border-b border-gray-100 p-3 text-sm hover:text-white hover:bg-[#37425c]"
                  >
                    Exam Routine
                  </Link>{" "}
                  <Link
                    to={""}
                    className="border-b border-gray-100 p-3 text-sm hover:text-white hover:bg-[#37425c]"
                  >
                    Academic Calander
                  </Link>{" "}
                  <Link
                    to={""}
                    className="border-b border-gray-100 p-3 text-sm hover:text-white hover:bg-[#37425c]"
                  >
                    General School Rules
                  </Link>
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link
              to="#"
              className={`block px-4 py-2 text-primary hover:bg-primary hover:text-white ${
                isAdmissionDropdownOpen ? "text-primary" : ""
              }`}
              onClick={() => {
                setIsAdmissionDropdownOpen(!isAdmissionDropdownOpen);
              }}
            >
              <div className="flex justify-between items-center">
                <p>Admissions </p>
                <span>
                  {isAdmissionDropdownOpen ? (
                    <BiMinus size={24} />
                  ) : (
                    <BsPlus size={24} />
                  )}
                </span>
              </div>
            </Link>
            {isAdmissionDropdownOpen && (
              <div className="">
                {/* Add the content for the Facilities dropdown menu here */}
                <ul className="bg-gray-300 text-black flex flex-col justify-start ">
                  <Link
                    to={""}
                    className="border-b border-gray-100 p-3 text-sm hover:text-white hover:bg-[#37425c]"
                  >
                    Admissions Overview
                  </Link>{" "}
                  <Link
                    to={""}
                    className="border-b border-gray-100 p-3 text-sm hover:text-white hover:bg-[#37425c]"
                  >
                    Admissions Process
                  </Link>
                  <Link
                    to={""}
                    className="border-b border-gray-100 p-3 text-sm hover:text-white hover:bg-[#37425c]"
                  >
                    Tuition Fees
                  </Link>
                  <Link
                    to={""}
                    className="border-b border-gray-100 p-3 text-sm hover:text-white hover:bg-[#37425c]"
                  >
                    {" "}
                    Transfer Certificate
                  </Link>
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link
              to="#"
              className="block px-4 py-2 text-primary hover:bg-primary hover:text-white"
            >
              <div className="flex justify-between items-center">
                <p>Achivements</p>
                {/* <span>
                  <BsPlus size={24} />
                </span> */}
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className={`block px-4 py-2 text-primary hover:bg-primary hover:text-white ${
                isFacilitiesDropdownOpen ? "text-primary" : ""
              }`}
              onClick={() => {
                setIsMediaDropdownOpen(!isMediaDropdownOpen);
              }}
            >
              <div className="flex justify-between items-center">
                <p>Media & News </p>
                <span>
                  {isMediaDropdownOpen ? (
                    <BiMinus size={24} />
                  ) : (
                    <BsPlus size={24} />
                  )}
                </span>
              </div>
            </Link>
            {isMediaDropdownOpen && (
              <div className="">
                {/* Add the content for the Facilities dropdown menu here */}
                <ul className="bg-gray-300 text-black flex flex-col justify-start ">
                  <Link
                    to={""}
                    className="border-b border-gray-100 p-3 text-sm hover:text-white hover:bg-[#37425c]"
                  >
                    Event
                  </Link>{" "}
                  <Link
                    to={""}
                    className="border-b border-gray-100 p-3 text-sm hover:text-white hover:bg-[#37425c]"
                  >
                    Photos
                  </Link>
                  <Link
                    to={""}
                    className="border-b border-gray-100 p-3 text-sm hover:text-white hover:bg-[#37425c]"
                  >
                    News
                  </Link>
                  <Link
                    to={""}
                    className="border-b border-gray-100 p-3 text-sm hover:text-white hover:bg-[#37425c]"
                  >
                    {" "}
                    Video
                  </Link>
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link
              to="#"
              className={`block px-4 py-2 text-primary hover:bg-primary hover:text-white ${
                isFacilitiesDropdownOpen ? "text-primary" : ""
              }`}
              onClick={() => {
                setIsFacilitiesDropdownOpen(!isFacilitiesDropdownOpen);
              }}
            >
              <div className="flex justify-between items-center">
                <p>Facilities</p>
                <span>
                  {isFacilitiesDropdownOpen ? (
                    <BiMinus size={24} />
                  ) : (
                    <BsPlus size={24} />
                  )}
                </span>
              </div>
            </Link>
            {isFacilitiesDropdownOpen && (
              <div className="">
                {/* Add the content for the Facilities dropdown menu here */}
                <ul className="bg-gray-300 text-black flex flex-col justify-start ">
                  <Link
                    to={""}
                    className="border-b border-gray-100 p-3 text-sm hover:text-white hover:bg-[#37425c]"
                  >
                    Overview
                  </Link>{" "}
                  <Link
                    to={""}
                    className="border-b border-gray-100 p-3 text-sm hover:text-white hover:bg-[#37425c]"
                  >
                    Lab Facilities
                  </Link>
                  <Link
                    to={""}
                    className="border-b border-gray-100 p-3 text-sm hover:text-white hover:bg-[#37425c]"
                  >
                    Library Facilities
                  </Link>
                  <Link
                    to={""}
                    className="border-b border-gray-100 p-3 text-sm hover:text-white hover:bg-[#37425c]"
                  >
                    {" "}
                    Sports Facilities
                  </Link>
                  <Link
                    to={""}
                    className="border-b border-gray-100 p-3 text-sm hover:text-white hover:bg-[#37425c]"
                  >
                    Scholarship
                  </Link>
                  {/* Add more items as needed */}
                </ul>
              </div>
            )}
          </li>

          <li>
            <Link
              to="#"
              className="block px-4 py-2 text-primary"
              onClick={toggleNavbar}
            >
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
