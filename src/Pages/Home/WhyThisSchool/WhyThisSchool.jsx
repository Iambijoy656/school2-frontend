import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Shared/Loading/Loading";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
const WhyThisSchool = () => {
    const { data: whySchoolSectionData = [], isLoading } = useQuery({
        queryKey: ["whySchoolSectionData"],
        queryFn: async () => {
          const response = await fetch("/whySchoolSectionData.json");
          const data = await response.json();
          return data;
        },
      });
    
    //   console.log(whySchoolSectionData[0]);
    
      if (isLoading && !whySchoolSectionData.length) return <Loading />;
    return (
        <div className="bg-[#8c1d58] py-16 ">
            <div>
                <h1 className="text-center text-white text-4xl font-bold tracking-wide mb-4">{whySchoolSectionData[0].title}</h1>
                <p className="text-center w-[70%] mx-auto text-white tracking-wider mt-4">{whySchoolSectionData[0].message}</p>
            </div>
          <div className="flex justify-center items-center mt-10">
          <PrimaryButton
              btnText="LEARN MORE"
              borderColor="#ffffff"
              bgColor=""
              iconColor="#fff"
              textColor="#ffffff"
            />
          </div>

            
        </div>
    );
};

export default WhyThisSchool;