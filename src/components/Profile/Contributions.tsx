const contributions = [
  {
    type: "Nettoyage de plage",
    amount: 20,
  },
  {
    type: "Installation de ruches",
    amount: 70,
  },
  {
    type: "Atelier de recyclage",
    amount: 23,
  },
];
const Contributions = () => {
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
              <div className=" text-xl font-bold bg-gradient-to-tr from-[#11998E]  to-[#38EF7D] inline-block text-transparent bg-clip-text">
                {contribution.amount}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contributions;
