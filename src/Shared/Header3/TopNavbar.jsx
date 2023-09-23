// import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";

const TopNavbar = () => {
  return (
    <div className="bg-[#fff] py-2 ">
      <div className="container  mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className=" ">
          <img
            className="h-20"
            src="https://www.ambassadorschool.com/upload/desc/news_93.png"
            alt=""
          />
        </div>
        <div className="flex flex-col  justify-start">
          <div className="flex flex-col  text-gray-600">
            <p className="text-sm">
              Tel : <span>{"+971- 04-398-3535"}</span>
            </p>
            <p className="text-sm">
              Mobile : <span>{"+971- 04-398-3535"}</span>
            </p>
            <p className="text-sm">
              Email : <span className="text-[#5f96c6] tracking-wide">{"admissions@ambassadorschool.com"}</span>
            </p>
          </div>
          <div className="flex justify-start items-center gap-3 mt-4">
            <div className="">
              <button
                type="button"
                className={`w-fit bg-[#ed5a48] text-white  px-8 py-3  text-sm tracking-wide border border-1 `}
              >
                Notice
              </button>
            </div>
            <div className="">
              <button
                type="button"
                className={`w-fit bg-[#ed5a48] text-white  px-8 py-3  text-sm tracking-wide border border-1 `}
              >
                Career
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
