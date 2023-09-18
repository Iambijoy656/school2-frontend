import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex items-center justify-center my-10">
      <HashLoader size={60} color="#035e9a" />
    </div>
  );
};

export default Loading;