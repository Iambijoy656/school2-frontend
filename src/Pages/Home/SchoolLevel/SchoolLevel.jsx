
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Slider from "react-slick";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Shared/Loading/Loading";
import { useRef } from "react";
import SchoolLevelCard from "../../../Components/Card/schoolLevelCard";
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
  
    console.log(schoolLevelData);
  
    if (isLoading && !schoolLevelData.length) return <Loading />;


    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 500,
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
     <div className=" pb-5">
      <div className="relative">
        <Slider {...settings} ref={sliderRef} className="overflow-hidden">
          {schoolLevelData?.map((information, i) => (
            <div key={i}>
              <SchoolLevelCard information={information}/>
            </div>
          ))}
        </Slider>
        <button
          onClick={() => goNext()}
          className="absolute -right-10 md:-right-20 top-1/2 hover:bg-warning p-2   transition ease-in-out delay-150 bg-white border-2  border-gray-500 hover:-translate-y-1 hover:scale-110  rounded-full duration-300"
        >
          <SlArrowRight />
        </button>
        <button
          onClick={() => goPrev()}
          className="absolute -left-10  md:-left-20 top-1/2 hover:bg-warning p-2   transition ease-in-out delay-150 bg-white border-2 border-gray-500 hover:-translate-y-1 hover:scale-110  rounded-full duration-300"
        >
          <SlArrowLeft />
        </button>
      </div>
    </div>
   </div>
    );
};

export default SchoolLevel;