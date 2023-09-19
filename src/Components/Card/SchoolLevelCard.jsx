import PrimaryButton from "../PrimaryButton/PrimaryButton";

const SchoolLevelCard = () => {
  return (
    <div className="relative ">
      <div className="relative ">
        {/* Background color with opacity */}
        <div className="bg-[#8c1d5899] absolute inset-0 w-full h-full">
          <div className="flex justify-center items-center h-full">
            <div className="text-white px-10">
              <h2 className={` text-2xl font-bold `}>{"information.title"}</h2>
              <div className={` text-center`}>
                <PrimaryButton
                  btnText={"DISCOVER MORE"}
                  borderColor={"#ffffff"}
                  bgColor={"#2c3154"}
                  iconColor={"#005e9a"}
                  textColor={"#ffffff"}
                />
              </div>
              <p className={` text-xs px-5 `}>{"information.text"}</p>
            </div>
          </div>
        </div>

        <img
          src={"information.image"}
          alt={"information.image"}
          className="  w-[550px] h-[350px]"
        />
      </div>
    </div>
  );
};

export default SchoolLevelCard;
