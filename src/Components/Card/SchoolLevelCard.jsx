import PrimaryButton from "../PrimaryButton/PrimaryButton";

const SchoolLevelCard = ({ information }) => {
  // console.log(information);

  return (
    <div className="relative">
      <div className="relative">
        {/* Background color with opacity */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50">
          <div className="flex flex-col justify-center items-start mt-10 text-white absolute top-1/2 left-[5%] md:left-[30%] transform -translate-y-1/2 w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">{information.title}</h2>
            <p className=" w-[80%] md:w-1/2  my-5 text-sm">
            {information.text}
            </p>
            <PrimaryButton
              btnText="LEARN MORE"
              borderColor="#ffffff"
              bgColor=""
              iconColor="#fff"
              textColor="#ffffff"
            />
          </div>
        </div>

        <img
          src={information.image}
          alt={information.image}
          className="w-full h-[600px]"
        />
      </div>
    </div>
  );
};

export default SchoolLevelCard;
