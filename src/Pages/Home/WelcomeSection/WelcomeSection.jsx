
import { useQuery } from "@tanstack/react-query";import Loading from "../../../Shared/Loading/Loading";
const WelcomeSection = () => {
    const { data: welcomeSection = [], isLoading } = useQuery({
        queryKey: ["welcomeSection"],
        queryFn: async () => {
          const response = await fetch("/welcomeSection.json");
          const data = await response.json();
          return data;
        },
      });
    // console.log(welcomeSection[0])
        if (isLoading && !welcomeSection.length) return <Loading />;
    //   if (isLoading && !welcomeSection.length) return <p>Loading....</p>;
  return (
   <div className="bg-white">
     <div className="container text-center py-24 ">
      <h3 className="text-xl lg:text-2xl text-[#f4b333] mb-5 font-bold ">
        {welcomeSection[0].title}
      </h3>
      <h1 className="text-primary text-3xl lg:text-4xl font-bold ">
      {welcomeSection[0].subTitle}
      </h1>
      <p className=" my-10 tracking-wide text-gray-600 ">
      {welcomeSection[0].text}
      </p>
    </div>


    
   </div>
  );
};

export default WelcomeSection;
