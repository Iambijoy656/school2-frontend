import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Shared/Loading/Loading";
import { useRef, useState } from "react";
import Slider from "react-slick";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
const Banner = () => {
  const sliderRef = useRef();
  const [animation, setAnimation] = useState(true);
  const { data: bannerData = [], isLoading } = useQuery({
    queryKey: ["bannerData"],
    queryFn: async () => {
      const response = await fetch("/bannerData.json");
      const data = await response.json();
      return data;
    },
  });

  if (isLoading && !bannerData.length) return <Loading />;
  //   if (isLoading && !bannerData.length) return <p>Loading....</p>;

  const handleSlideChange = () => {
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 5000);
  };

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    beforeChange: handleSlideChange,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: false,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
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
            {bannerData?.map((information, i) => (
              <div key={i} className="relative group">
                <div className="w-full h-[630px]">
                  <img
                    className={`${
                      animation &&
                      "transition  duration-[6000ms] ease-in scale-125"
                    } w-full h-full`}
                    // className="w-full h-full "
                    src={information.image}
                    alt=""
                  />
                </div>
                {/* Apply the overlay class to create the image overlay */}
                <div className="absolute inset-0 bg-[#591b5e] opacity-50 transition-opacity group:opacity-0">
                  {/* Overlay content goes here */}
                </div>

                <div className="flex flex-col justify-center absolute left-[10%] top-[20%]">
                  <h1
                    className={`${
                      animation &&
                      "animate__animated animate__fadeInRight animate__slow delay-15s"
                    } text-white text-3xl w-[70%]`}
                  >
                    {information.title}
                  </h1>
                  <p
                    className={`${
                      animation &&
                      "animate__animated animate__fadeInLeft animate__slow delay-15s"
                    } text-white my-10 tracking-wide`}
                  >
                    {information.message}
                  </p>
                  <div className=" cursor-pointer">
                    {information?.buttonText && (
                      <PrimaryButton
                        btnText={information?.buttonText}
                        borderColor="#ffffff"
                        bgColor=""
                        iconColor="#fff"
                        textColor="#ffffff"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="absolute bottom-32 right-24  flex  gap-5 -ml-5">
            <button
              onClick={() => goPrev()}
              className="  hover:border-red-800 hover:text-primary  p-3   transition ease-in-out delay-150 text-white border-2  border-white hover:-translate-y-1 hover:scale-110  rounded-full duration-300"
            >
              <SlArrowLeft />
            </button>
            <button
              onClick={() => goNext()}
              className="   hover:border-red-800 p-3 hover:text-primary   transition ease-in-out delay-150 text-white border-2  border-white hover:-translate-y-1 hover:scale-110  rounded-full duration-300"
            >
              <SlArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
