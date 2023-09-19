import { useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
const PrimaryButton = ({
  borderColor,
  bgColor,
  iconColor,
  textColor,
  btnText,
}) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="">
      <button
        onMouseEnter={() => setIsShow(true)}
        onMouseLeave={() => setIsShow(false)}
        type="button"
        className={`w-fit transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-x-110   duration-300 px-8 py-3  text-sm tracking-wide border border-1 flex justify-between items-center gap-4 `}
        style={{
          borderColor: `${borderColor}`,
          backgroundColor: `${bgColor}`,
          color: `${textColor}`,
        }}
      >
        {btnText}
        <span
          className={`${
            isShow ? " animate__animated animate__fadeOutRight animate__infinite animate__fast" : ""
          }`}
        >
          <BsFillArrowRightCircleFill color={`${iconColor}`} />
        </span>
      </button>
    </div>
  );
};

export default PrimaryButton;
