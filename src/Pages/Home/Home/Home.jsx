import Admission from "../Admission/Admission";
import Banner from "../Banner/Banner";
import ParentsTestimonials from "../ParentTestimonials/ParentsTestimonials";
import PrincipalMessage from "../PrincipalMessage/PrincipalMessage";
import ResultsSection from "../ResultsSection/ResultsSection";
import SchoolInformation from "../SchoolInformation/SchoolInformation";
import SchoolLevel from "../SchoolLevel/SchoolLevel";
import SchoolStories from "../SchoolStories/SchoolStories";
import VirtualSection from "../VirtualSection/VirtualSection";
import WelcomeSection from "../WelcomeSection/WelcomeSection";
import WhyThisSchool from "../WhyThisSchool/WhyThisSchool";

const Home = () => {
  const backgroundImageUrl =
    "https://www.wellingtoninternationalschool.com/-/media/project/gems/wis_gems_wellington_international_school/_hero-banners/ib-results-bg-bright-12.jpg"; // Replace with the actual image path

  const divStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  };

  return (
    <div style={divStyle}>
      <Banner />
      <WelcomeSection />
      <SchoolInformation />
      <PrincipalMessage />
      <ResultsSection />
      <SchoolLevel/>
      <VirtualSection />
      <ParentsTestimonials/>
      <SchoolStories/>
      <WhyThisSchool/>
      <Admission/>
    </div>
  );
};

export default Home;
