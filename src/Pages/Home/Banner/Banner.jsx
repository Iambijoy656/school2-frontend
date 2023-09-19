import { BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Shared/Loading/Loading";
const Banner = () => {
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

  //   console.log(bannerData[0]);
  return (
    <div>
      <div className="relative flex items-center overflow-ellipsis">
        <video
          className="w-full cover"
          src={bannerData[0].bannerVedio}
          muted
          autoPlay={"autoplay"}
          preload="auto"
          loop
        >
          {" "}
        </video>
        <div className="text-xl md:text-3xl uppercase font-bold text-white absolute">
          <h1 className="  space-x-1 space-y-1 px-10 tracking-wider leading-10 w-3/4">
            {bannerData[0].title}
          </h1>
          <Link
            to={""}
            className="flex items-center  px-10 gap-3  mt-16 cursor-pointer"
          >
            <p className="text-xl uppercase text-white">
              Why choose {bannerData[0].abbreviation}
            </p>
            <span>
              <BsArrowRightCircleFill className="text-orange-300" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
