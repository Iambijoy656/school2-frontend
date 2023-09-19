import Banner from "../Banner/Banner";
import PrincipalMessage from "../PrincipalMessage/PrincipalMessage";
import ResultsSection from "../ResultsSection/ResultsSection";
import SchoolInformation from "../SchoolInformation/SchoolInformation";
import SchoolLevel from "../SchoolLevel/SchoolLevel";
import WelcomeSection from "../WelcomeSection/WelcomeSection";

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
    </div>
  );
};

export default Home;
