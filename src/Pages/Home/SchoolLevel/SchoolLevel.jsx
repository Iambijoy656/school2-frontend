import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Slider from "react-slick";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Shared/Loading/Loading";
import { useRef } from "react";
import SchoolLevelCard from "../../../Components/Card/SchoolLevelCard";
const SchoolLevel = () => {
  const sliderRef = useRef();
  const { data: schoolLevelData = [], isLoading } = useQuery({
    queryKey: ["schoolLevelData"],
    queryFn: async () => {
      const response = await fetch("/schoolLevelData.json");
      const data = await response.json();
      return data;
    },
  });

  // console.log(schoolLevelData);

  if (isLoading && !schoolLevelData.length) return <Loading />;

  const settings = {
    infinite: true,
    slidesToShow: 1.2,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.2,
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
      <div className=" pb-16">
        <div className="relative">
          <Slider {...settings} ref={sliderRef} className="overflow-hidden">
            {schoolLevelData?.map((information, i) => (
              <div key={i}>
                <SchoolLevelCard information={information} />
              </div>
            ))}
          </Slider>
          <div className="absolute  bottom-16 md:top-32 left-1/2 md:left-2/3 flex md:flex-col gap-5 -ml-5">
            <button
              onClick={() => goPrev()}
              className="  hover:border-red-800 hover:text-primary  p-2   transition ease-in-out delay-150 bg-white border-2 border-gray-500 hover:-translate-y-1 hover:scale-110  rounded-full duration-300"
            >
              <SlArrowLeft />
            </button>
            <button
              onClick={() => goNext()}
              className="   hover:border-red-800 p-2 hover:text-primary   transition ease-in-out delay-150 bg-white border-2  border-gray-500 hover:-translate-y-1 hover:scale-110  rounded-full duration-300"
            >
              <SlArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolLevel;
