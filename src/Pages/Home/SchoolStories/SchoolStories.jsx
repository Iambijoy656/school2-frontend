import { useQuery } from "@tanstack/react-query";

import Loading from "../../../Shared/Loading/Loading";
import SchoolStoriesCard from "../../../Components/Card/schoolStoriesCard";

const SchoolStories = () => {
  const { data: schoolStoriesData = [], isLoading } = useQuery({
    queryKey: ["schoolStoriesData"],
    queryFn: async () => {
      const response = await fetch("/schoolStoriesData.json");
      const data = await response.json();

      return data;
    },
  });

  // console.log(schoolStoriesData[0]);

  if (isLoading && !schoolStoriesData.length) return <Loading />;

  const schoolStories = schoolStoriesData[0]?.allstories.slice(0, 3);
  // console.log(schoolStories);

  return (
    <div className=" bg-white py-10">
      <h1 className="text-center my-5 mb-10 text-3xl font-bold text-primary">
        {schoolStoriesData[0]?.sectionTitle}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
        {schoolStories?.map((story, i) => (
          <SchoolStoriesCard key={i} story={story} />
        ))}
      </div>
    </div>
  );
};

export default SchoolStories;
