import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Shared/Loading/Loading";

const Admission = () => {
  const { data: admissionSection = [], isLoading } = useQuery({
    queryKey: ["admissionSection"],
    queryFn: async () => {
      const response = await fetch("/admissionSection.json");
      const data = await response.json();

      return data;
    },
  });

//   console.log(admissionSection);

  if (isLoading && !admissionSection.length) return <Loading />;
  return (
   <div className="bg-white">
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3  py-10">
      {admissionSection.map((section, i) => (
        <div key={i} className="flex justify-center items-center gap-3 bg-[#8c1d58] py-5">
          <div className="w-8 h-8">
            <img className="w-full h-full" src={section.iconImage} alt="" />
          </div>
          <h1 className="text-white text-lg font-bold">{section.title}</h1>
        </div>
      ))}
    </div>
   </div>
  );
};

export default Admission;
