// import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";

const TopNavbar = () => {
  return (
    <div className="bg-[#fff] py-2 ">
      <div className="container  mx-auto flex justify-between items-center">
        <div className=" ">
          <img
            className="h-10"
            src="https://ecommerce-frontend-fahimcc.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdov60yweq%2Fimage%2Fupload%2Ff_webp%2FblackLogo_quzgb5&w=3840&q=75"
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
              Email : <span>{"admissions@ambassadorschool.com"}</span>
            </p>
          </div>
          <div className="flex justify-center items-center mt-2">
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
                Notice
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
