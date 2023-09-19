const ResultsSectionCard = ({ results }) => {
//   console.log(results);
  return (
    <div className="text-center">
      <h2 className="text-6xl font-bold text-primary">{results.AvarageNumber}</h2>
      <p className="mt-3 clear-left text-primary">{results.text}</p>

    </div>
  );
};

export default ResultsSectionCard;
