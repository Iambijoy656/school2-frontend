import { useQuery } from "@tanstack/react-query";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
import Loading from "../../../Shared/Loading/Loading";

const ParentsTestimonials = () => {

    const { data: parentTestimonialData = [], isLoading } = useQuery({
        queryKey: ["parentTestimonialData"],
        queryFn: async () => {
          const response = await fetch("/parentTestimonialData.json");
          const data = await response.json();
          return data;
        },
      });
    
      console.log(parentTestimonialData[0]);
    
    
      if (isLoading && !parentTestimonialData.length) return <Loading />;


  return (
    <section className="p-4 lg:p-16 bg-[#faf9f7]">
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col overflow-hidden  lg:flex-row-reverse">
          <div className="lg:w-1/2 ">
            <video width="750" height="500" controls>
              <source
                src={parentTestimonialData[0]?.VedioLink}
                // type="video/mp4"
              />
            </video>
          </div>
          <div className="flex flex-col justify-center flex-1 p-6  ">
            <span className=" uppercase font-bold text-xl  my-5 text-gray-500 ">
            {parentTestimonialData[0].sectionTitle}
            </span>
            <h3 className="text-4xl text-primary font-extrabold">
            {parentTestimonialData[0].title}
            </h3>
            <p className="my-6 text-gray-700">
            {parentTestimonialData[0].message}
            </p>
            <div className="mt-7">
              <PrimaryButton
                btnText="LEARN MORE"
                borderColor="#000"
                bgColor="#ffffff"
                iconColor="#000"
                textColor="#000"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentsTestimonials;
