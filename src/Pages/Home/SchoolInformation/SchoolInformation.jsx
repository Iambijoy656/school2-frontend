import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Slider from "react-slick";
import SchoolInformationCard from "../../../Components/Card/SchoolInformationCard";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Shared/Loading/Loading";
import { useRef } from "react";

const SchoolInformation = () => {
  const sliderRef = useRef();
  const { data: SchoolInformationData = [], isLoading } = useQuery({
    queryKey: ["SchoolInformationData"],
    queryFn: async () => {
      const response = await fetch("/schoolInformationData.json");
      const data = await response.json();
      return data;
    },
  });

  // console.log(SchoolInformationData);

  if (isLoading && !SchoolInformationData.length) return <Loading />;

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
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
  const goNext = () => {
    sliderRef.current.slickNext();
  };

  const goPrev = () => {
    sliderRef.current.slickPrev();
  };
  return (
   <div className="bg-white">
     <div className="container pb-5">
      <div className="relative">
        <Slider {...settings} ref={sliderRef} className="overflow-hidden">
          {SchoolInformationData?.map((information, i) => (
            <div key={i}>
              <SchoolInformationCard information={information} />
            </div>
          ))}
        </Slider>
        <button
          onClick={() => goNext()}
          className="absolute hidden md:block -right-10 md:-right-20 top-1/2 hover:bg-warning p-2   transition ease-in-out delay-150 bg-white border-2  border-gray-500 hover:-translate-y-1 hover:scale-110  rounded-full duration-300"
        >
          <SlArrowRight />
        </button>
        <button
          onClick={() => goPrev()}
          className="absolute hidden md:block -left-10  md:-left-20 top-1/2 hover:bg-warning p-2   transition ease-in-out delay-150 bg-white border-2 border-gray-500 hover:-translate-y-1 hover:scale-110  rounded-full duration-300"
        >
          <SlArrowLeft />
        </button>
      </div>
    </div>
   </div>
  );
};

export default SchoolInformation;
