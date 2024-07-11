const Contributions = ({
  contributions,
}: {
  contributions: ContributionI[];
}) => {
  return (
    <div className="px-4 py-4 flex flex-col divide-y-2 gap-2 h-full">
      <div className=" font-bold text-2xl px-2">Contributions</div>
      <div className="h-full flex flex-col justify-evenly">
        {contributions.map((contribution, index) => {
          return (
            <div
              className="flex justify-between items-center"
              key={index}>
              <div className=" text-lg font-medium">{contribution.type}</div>
              <div className="flex flex-col justify-center items-center max-w-9 text-center">
                <div className=" text-xl font-bold bg-gradient-to-tr from-[#11998E]  to-[#38EF7D] inline-block text-transparent bg-clip-text">
                  {contribution.amount}
                </div>
                <div className="text-xs font-light">{contribution.unit}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contributions;
