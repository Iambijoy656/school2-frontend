import { useQuery } from "@tanstack/react-query";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
import Loading from "../../../Shared/Loading/Loading";

const PrincipalMessage = () => {
    const { data: principalMessageData = [], isLoading } = useQuery({
        queryKey: ["principalMessageData"],
        queryFn: async () => {
          const response = await fetch("/principalMessageData.json");
          const data = await response.json();
          return data;
        },
      });
    // console.log(principalMessageData[0])
        if (isLoading && !principalMessageData.length) return <Loading />;
  return (
    <section className=" p-4 lg:p-8 bg-[#f4f7f7] text-gray-100 pt-10">
      <div className=" mx-auto space-y-12">
        <div className="container  flex flex-col overflow-hidden  lg:flex-row-reverse p-6">
          <img
            src={principalMessageData[0].image}
            alt=""
            // height={482}
            // width={482}
            className=" lg:h-[350px] lg:w-[482px] bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 ">
            <span className=" uppercase text-[#598db7] text-md">
            {principalMessageData[0].sectionTitle}
            </span>
            <h3 className="text-4xl tracking-wider text-primary font-bold mt-3">
              {principalMessageData[0].title}
            </h3>
            <h1 className="text-xl font-bold text-black mt-4 ">
            {principalMessageData[0].name}
            </h1>
            <p className=" text-gray-600 mt-3">
             {principalMessageData[0].message}
            </p>
           <div className="mt-10">
           <PrimaryButton
                btnText={"READ MORE"}
                  borderColor={"#000"}
                  bgColor={"#f4f7f7"}
                  iconColor={"#000"}
                  textColor={"#000"}
                />
           </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
