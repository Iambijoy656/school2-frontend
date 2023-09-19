import { useState } from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

// import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
// import { Link } from "react-router-dom";
const SchoolInformationCard = ({ information }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div
      className="relative "
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
    >
      <div className="relative ">
        {/* Background color with opacity */}
        <div className="bg-[#8c1d5899] absolute inset-0 w-full h-full">
          <div className="flex justify-center items-center h-full">
            <div className="text-white px-10">
              <h2
                className={` text-2xl font-bold ${
                  isShow
                    ? "block  absolute left-4 top-20 animate__animated animate__fadeInUp animate__fast"
                    : "block"
                }`}
              >
                {information.title}
              </h2>
              <div
                className={` text-center ${
                  isShow
                    ? "block   absolute left-10  top-72 animate__animated animate__fadeInUp animate__fast"
                    : "hidden"
                }`}
              >
                <PrimaryButton
                  btnText={"DISCOVER MORE"}
                  borderColor={"#ffffff"}
                  bgColor={"#2c3154"}
                  iconColor={"#005e9a"}
                  textColor={"#ffffff"}
                />
              </div>
              <p
                className={` text-xs px-5 ${
                  isShow
                    ? "block   absolute left-0 top-50 animate__animated animate__fadeInUp animate__fast"
                    : "hidden"
                }`}
              >
                {information.text}
              </p>
            </div>
          </div>
        </div>

        <img
          src={information.image}
          alt={information.image}
          className="  w-[550px] h-[350px]"
        />
      </div>
    </div>
  );
};

export default SchoolInformationCard;
