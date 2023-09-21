import { useQuery } from "@tanstack/react-query";
import Loading from "../Loading/Loading";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const { data: footerData = [], isLoading } = useQuery({
    queryKey: ["footerData"],
    queryFn: async () => {
      const response = await fetch("/footerData.json");
      const data = await response.json();

      return data;
    },
  });

  // console.log(footerData[0].memberImage);

  if (isLoading && !footerData.length) return <Loading />;
  return (
    <div>
      <footer className="p-6 bg-[#e8eded] ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-center mb-10 mx-auto">
            <div>
              <img src={footerData[0].websiteImage} alt="" />
            </div>
            {footerData[0].awardImage.map((data, i) => (
              <div key={i} className="w-44 h-28">
                <img className="w-full h-full" src={data.image} alt="" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center mb-10">
            {footerData[0].memberImage.map((data, i) => (
              <div key={i} className="w-44 h-24">
                <img className="w-full h-full" src={data.image} alt="" />
              </div>
            ))}
          </div>

          <div className=" grid grid-cols-1 w-full  gap-x-3 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col space-y-4">
              <h2 className="font-medium text-primary">Get Connected</h2>
              <div className="flex flex-col  space-y-2 text-sm text-gray-400">
                <div className="mb-10">
                  <div className="mt-5 flex items-center justify-start gap-5">
                    <Link
                      to={""}
                      target="_blank"
                      href="https://www.facebook.com"
                    >
                      <FaFacebookF color="#3b5998" size="24px" />{" "}
                    </Link>
                    <Link
                      to={""}
                      target="_blank"
                      href="https://www.twitter.com"
                    >
                      <FaTwitter color="#0084b4" size="24px" />{" "}
                    </Link>
                    <Link to={""} target="_blank" href="https://www.google.com">
                      <FaLinkedin color="#0084b4" size="30px" />{" "}
                    </Link>
                    <Link
                      to={""}
                      target="_blank"
                      href="https://www.instagram.com"
                    >
                      <FaInstagram color="#8c1d58" size="24px" />{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-44 h-24 border border-black">
                <img
                  className="w-full h-full"
                  src="https://www.wellingtoninternationalschool.com/-/media/project/gems/shared/gems-education-logo_v_01-svg-2.svg?h=100&w=161&hash=DAE113B37ABA9C950E829F35E3F100FF"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <h2 className="font-medium  text-primary">Our School</h2>
              <div className="flex flex-col space-y-2 text-sm gap-3 text-gray-500">
                <Link to={""} rel="noopener noreferrer" href="#">
                  About Us
                </Link>
                <Link to={""} rel="noopener noreferrer" href="#">
                  Facilities and Campus
                </Link>
                <Link to={""} rel="noopener noreferrer" href="#">
                  Our Location
                </Link>
                <Link to={""} rel="noopener noreferrer" href="#">
                  Our Team
                </Link>
                <Link to={""} rel="noopener noreferrer" href="#">
                  Working With Us
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <h2 className="font-medium text-primary">Admissions</h2>
              <div className="flex flex-col space-y-2 text-sm text-gray-500 gap-3">
                <Link to={""} rel="noopener noreferrer" href="#">
                  Admissions Process
                </Link>
                <Link to={""} rel="noopener noreferrer" href="#">
                  Enrol Online
                </Link>
                <Link to={""} rel="noopener noreferrer" href="#">
                  Get A Call Back
                </Link>
                <Link to={""} rel="noopener noreferrer" href="#">
                  Tuition Fees
                </Link>
                <Link to={""} rel="noopener noreferrer" href="#">
                  School Tours
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-4 ">
              <h2 className="font-medium text-primary">Explore More</h2>
              <div className="flex flex-col space-y-2 text-sm text-gray-500 gap-3">
                <Link to={""} rel="noopener noreferrer" href="#">
                  Explore, Enrich, Excite
                </Link>
                <Link to={""} rel="noopener noreferrer" href="#">
                  Latest Stories
                </Link>
                <Link to={""} rel="noopener noreferrer" href="#">
                  School Policies
                </Link>
                <Link to={""} rel="noopener noreferrer" href="#">
                  Parent Experience Centre
                </Link>{" "}
                <Link to={""} rel="noopener noreferrer" href="#">
                  Student Care and Support
                </Link>
              </div>
            </div>{" "}
            <div className="flex flex-col space-y-4">
              <h2 className="font-medium text-primary">
                GEMS Wellington International School
              </h2>
              <div className="flex flex-col space-y-2 text-sm text-gray-500 gap-3">
                <div className="flex justify-center items-center gap-4">
                  <div className="h-[23px] w-[28px]">
                    <img
                      className="h-full w-full"
                      src="https://www.wellingtoninternationalschool.com/-/media/project/gems/shared/icon-home.png?h=21&w=23&hash=E46BFF4B2629F489ED9348EB906F98E8"
                      alt=""
                    />
                  </div>
                  <p className="">
                    Al Sufouh Area, Sheikh Zayed Road, Dubai, United Arab
                    Emirates
                  </p>
                </div>
                <div className="flex justify-start items-center gap-4">
                  <div className="h-[23px] w-[24px]">
                    <img
                      className="h-full w-full"
                      src="https://www.wellingtoninternationalschool.com/-/media/project/gems/shared/icon-mail.png?h=19&w=27&hash=D4620D51CC18D91466E86251BE2A30B3"
                      alt=""
                    />
                  </div>
                  <p className="text-sm">admin@tiggzyit.com</p>
                </div>
                <div className="flex justify-start items-center gap-4">
                  <div className="h-[23px] w-[28px]">
                    <img
                      className="h-full w-full"
                      src="https://www.wellingtoninternationalschool.com/-/media/project/gems/shared/icon-phone.png?h=26&w=26&hash=DE148A8EC0E5D940B5F2B9093D2B55E0"
                      alt=""
                    />
                  </div>
                  <p className="text-sm">+880-1966-081134</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className=" bg-gray-200 text-sm shadow-sm ">
        <div className="flex  items-center justify-between p-8 container">
          <div className="mb-5 lg:mb-0">
            <p className="">
              © 2023{" "}
              <Link href="/" className="text-primary">
                Tiggzy IT
              </Link>{" "}
              All Rights Reserved
            </p>
          </div>
          <div>
            <p className="header-text-14">
              Created & provided by{" "}
              <Link
                target="_blank"
                className="text-primary"
                href="https://tiggzyit.com/"
              >
                Tiggzy IT
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
