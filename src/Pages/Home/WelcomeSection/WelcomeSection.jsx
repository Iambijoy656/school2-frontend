
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
    console.log(welcomeSection[0])
        if (isLoading && !welcomeSection.length) return <Loading />;
    //   if (isLoading && !welcomeSection.length) return <p>Loading....</p>;
  return (
    <div className="text-center py-24">
      <h3 className="text-2xl lg:text-3xl text-[#f4b333] mb-5 font-bold ">
        {welcomeSection[0].title}
      </h3>
      <h1 className="text-primary text-4xl lg:text-5xl font-bold w-[70%] mx-auto ">
        An Outstanding British Curriculum and IB School in Dubai
      </h1>
      <p className="w-[70%] mx-auto my-10 tracking-wide text-gray-600">
        GEMS Wellington International School is a truly ground-breaking learning
        environment that provides exceptionally high standards of education to
        all the students. The school, spanning an area of eight acres, offers a
        spectrum of facilities and resources that combines a world class
        education with distinctive, state-of-the-art infrastructure.
      </p>
    </div>
  );
};

export default WelcomeSection;
