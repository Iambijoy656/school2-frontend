import { useState } from "react";
import { Link } from "react-router-dom";
import HoverAboutUs from "../../Components/HoverAboutUs/HoverAboutUs";
import HoverAcademics from "../../Components/HoverAcademics/HoverAcademics";
import HoverAdmission from "../../Components/HoverAdmission/HoverAdmission";
import HoverMedia from "../../Components/HoverMedia/HoverMedia";
import HoverFacilities from "../../Components/HoverFacilities/HoverFacilities";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShowAbout, setIsShowAbout] = useState(false);
  const [isShowAcademics, setIsShowAcademics] = useState(false);
  const [isShowAdmission, setIsShowAdmission] = useState(false);
  const [isShowMedia, setIsShowMedia] = useState(false);
  const [isShowFacilities, setIsShowFacilities] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const menu = (
    <>
      <li className="font-bold text-md tracking-wide p-5 ">
        <Link to="#" className="text-[#fff]">
          Home
        </Link>
      </li>
      <span className="text-gray-300 py-5">|</span>
      <li
        onMouseEnter={() => setIsShowAbout(true)}
        onMouseLeave={() => setIsShowAbout(false)}
        className="font-bold text-md tracking-wide p-5 relative"
      >
        <Link to="#" className="text-[#fff]">
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
        <Link to="#" className="text-[#fff]">
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
        <Link to="#" className="text-[#fff]">
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
        <Link to="#" className="text-[#fff]">
          Achivements
        </Link>
      </li>
      <span className="text-gray-300 py-5">|</span>
      <li
        onMouseEnter={() => setIsShowMedia(true)}
        onMouseLeave={() => setIsShowMedia(false)}
        className="font-bold text-md tracking-wide p-5  relative "
      >
        <Link to="#" className="text-[#fff]">
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
        <Link to="#" className="text-[#fff]">
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
        <Link to="#" className="text-[#fff]">
          Contacts
        </Link>
      </li>
    </>
  );

  return (
    <nav className="bg-[#ed5a48]  shadow-sm border-b border-[#fff]">
      <div className="container  ">
        {/* Mobile Menu Button */}
        <button onClick={toggleNavbar} className="text-[#fff] block lg:hidden">
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
        <ul className="hidden lg:flex justify-between ">{menu}</ul>
      </div>

      {/* Mobile Menu (Hidden by default) */}
      <div className={`${isOpen ? "block" : "hidden"} lg:hidden`}>
        <ul className="mt-2 space-y-2">
          <li>
            <Link
              to="#"
              className="block px-4 py-2 text-[#fff] hover:bg-orange-400"
            >
              <div className="flex justify-between items-center">
                <p>Home</p>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="block px-4 py-2 text-[#fff] hover:bg-orange-400"
            >
              <div className="flex justify-between items-center">
                <p>About Us</p>
                <span>
                  <BsPlus size={24} />
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="block px-4 py-2 text-[#fff] hover:bg-orange-400"
            >
              <div className="flex justify-between items-center">
                <p>Academics</p>
                <span>
                  <BsPlus size={24} />
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="block px-4 py-2 text-[#fff] hover:bg-orange-400"
            >
              <div className="flex justify-between items-center">
                <p>Admission</p>
                <span>
                  <BsPlus size={24} />
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="block px-4 py-2 text-[#fff] hover:bg-orange-400"
            >
              <div className="flex justify-between items-center">
                <p>Achivements</p>
                <span>
                  <BsPlus size={24} />
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="block px-4 py-2 text-[#fff] hover:bg-orange-400"
            >
              <div
                onClick={() => setIsShowFacilities(true)}
                className="flex justify-between items-center relative"
              >
                <p>Facilities</p>
                <span onClick={()=>setIsMenuOpen(!isMenuOpen)} >
                  {/* <BsPlus size={24} /> */}
                  {
                    !isMenuOpen ? <BsPlus size={24} /> :<BiMinus size={24} />
                  }
                </span>
                {isShowFacilities &&(
                  <div className="absolute z-50 top-8 left-0 right-0">
                    <HoverFacilities />
                  </div>
                )}
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="block px-4 py-2 text-[#fff]"
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
