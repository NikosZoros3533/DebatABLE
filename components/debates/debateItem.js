const DebateItem = ({ debate }) => {
  const {
    title,
    description,
    sideA_title,
    sideB_title,
    sideA_percentage,
    sideB_percentage,
    creator,
  } = debate;

  // const total = sideA.percentage + sideB.percentage;
  // const sideAPercent = (sideA.percentage / total) * 100;
  // const sideBPercent = (sideB.percentage / total) * 100;

  return (
    <div className="w-full max-w-xl mx-auto shadow-lg rounded-2xl p-4 bg-secondary">
      <div>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl text-background font-semibold">{title}</h2>
          <div className="text-sm text-gray-500">
            By <span className="font-medium">{creator}</span> ·{" "}
          </div>
        </div>

        <p className="text-gray-700 mb-4">{description}</p>

        <div className="space-y-1 mb-2">
          <div className="flex justify-between text-sm font-medium text-gray-700">
            <span>{sideA_title}</span>
            <span>{sideA_percentage}%</span>
          </div>
          <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
            <div
              className="bg-primary h-full"
              style={{ width: `${sideA_percentage}%` }}
            ></div>
          </div>

          <div className="flex justify-between text-sm font-medium text-gray-700 mt-2">
            <span>{sideB_title}</span>
            <span>{sideB_percentage}%</span>
          </div>
          <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
            <div
              className="bg-primary h-full"
              style={{ width: `${sideB_percentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebateItem;
