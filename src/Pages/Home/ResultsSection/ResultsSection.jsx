import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";
import Slider from "react-slick";
import Loading from "../../../Shared/Loading/Loading";
import ResultsSectionCard from "../../../Components/Card/resultsSectionCard";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const ResultsSection = () => {
  const sliderRef = useRef();
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { data: resultsSectionData = [], isLoading } = useQuery({
    queryKey: ["resultsSectionData"],
    queryFn: async () => {
      const response = await fetch("/resultsSectionData.json");
      const data = await response.json();
      return data;
    },
  });

  // console.log(resultsSectionData);

  if (isLoading && !resultsSectionData.length) return <Loading />;

  return (
    <div className="py-28 text-center">
      {
        <div className="">
          <h1 className="text-4xl font-bold text-primary mb-5">
            {resultsSectionData[0]?.title}
          </h1>
          <h3 className="text-2xl font-bold text-primary my-7 w-full lg:w-[70%] mx-auto">
            {resultsSectionData[0]?.subtitle}
          </h3>
        </div>
      }
      <div className="container mt-10">
        <div className="relative">
          <Slider {...settings} ref={sliderRef} className="overflow-hidden">
            {resultsSectionData[0]?.scores?.map((results, i) => (
              <ResultsSectionCard key={i} results={results} />
            ))}
          </Slider>
        </div>
      </div>


      <div className="mt-10 flex justify-center items-center ">
           <PrimaryButton
                btnText={"READ MORE"}
                  borderColor={"#000"}
                  bgColor={"#f4f7f7"}
                  iconColor={"#000"}
                  textColor={"#000"}
                />
           </div>
    </div>
  );
};

export default ResultsSection;
