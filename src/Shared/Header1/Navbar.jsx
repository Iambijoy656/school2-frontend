import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const menu = (
    <>
      <li className="font-bold text-md tracking-wide ">
        <a href="#" className="text-[#005e9a]">
          Home
        </a>
      </li>
      <span className="text-gray-300">|</span>
      <li className="font-bold text-md tracking-wide ">
        <a href="#" className="text-[#005e9a]">
          About Us
        </a>
      </li>
      <span className="text-gray-300">|</span>
      <li className="font-bold text-md tracking-wide ">
        <a href="#" className="text-[#005e9a]">
          Why WIS?
        </a>
      </li>
      <span className="text-gray-300">|</span>
      <li className="font-bold text-md tracking-wide ">
        <a href="#" className="text-[#005e9a]">
          Admissions
        </a>
      </li>
      <span className="text-gray-300">|</span>
      <li className="font-bold text-md tracking-wide ">
        <a href="#" className="text-[#005e9a]">
          Curriculum
        </a>
      </li>
      <span className="text-gray-300">|</span>
      <li className="font-bold text-md tracking-wide ">
        <a href="#" className="text-[#005e9a]">
          Student Life
        </a>
      </li>
      <span className="text-gray-300">|</span>
      <li className="font-bold text-md tracking-wide ">
        <a href="#" className="text-[#005e9a]">
          For Parents
        </a>
      </li>
    </>
  );

  return (
    <nav className="bg-[#ffffff] py-4 shadow-sm">
      <div className="px-10 mx-auto flex justify-between items-center">
        {/* <a href="#" className="text-white text-2xl font-bold">
          Logo
        </a> */}
        <img
          className="h-10"
          src="https://ecommerce-frontend-fahimcc.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdov60yweq%2Fimage%2Fupload%2Ff_webp%2FblackLogo_quzgb5&w=3840&q=75"
          alt=""
        />

        {/* Mobile Menu Button */}
        <button
          onClick={toggleNavbar}
          className="text-[#005e9a] block lg:hidden"
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
        <ul className="hidden lg:flex space-x-6">{menu}</ul>
      </div>

      {/* Mobile Menu (Hidden by default) */}
      <div className={`${isOpen ? "block" : "hidden"} lg:hidden`}>
        <ul className="mt-2 space-y-2">
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-[#005e9a]"
              onClick={toggleNavbar}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-[#005e9a]"
              onClick={toggleNavbar}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-[#005e9a]"
              onClick={toggleNavbar}
            >
              Why WIS?
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-[#005e9a]"
              onClick={toggleNavbar}
            >
              Admissions
            </a>
          </li>{" "}
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-[#005e9a]"
              onClick={toggleNavbar}
            >
              Curriculum
            </a>
          </li>{" "}
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-[#005e9a]"
              onClick={toggleNavbar}
            >
              Student Life
            </a>
          </li>{" "}
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-[#005e9a]"
              onClick={toggleNavbar}
            >
              For parents
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
