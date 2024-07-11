import Aquaman from "@/assets/Achievements/Aquaman.jpg";
import GOF from "@/assets/Achievements/GuardianOfTheForest.jpg";
import Beach from "@/assets/Achievements/BeachClean.jpg";
const achievements = [
  {
    title: "Aquaman",
    description: "Participez à 3 événements de nettotyage de mer",
    logo: Aquaman,
  },
  {
    title: "Gardien de la foret",
    description: "Participez a la plantation de 100 arbres",
    logo: GOF,
  },
  {
    title: "Chateau de sable",
    description: "Participez a la recolte de 10kg de dechet de plage",
    logo: Beach,
  },
];
const Achievements = () => {
  return (
    <div className="px-4 py-4 flex flex-col divide-y-2 gap-2 h-full">
      <div className=" font-bold text-2xl px-2">Réalisations</div>
      <div className="h-full flex flex-col justify-evenly">
        {achievements.map((achievement, index) => {
          return (
            <div
              className="flex justify-between items-center"
              key={index}>
              <div>
                <div className=" text-xl font-bold bg-gradient-to-tr from-[#11998E]  to-[#38EF7D] inline-block text-transparent bg-clip-text">
                  {achievement.title}
                </div>
                <div className=" text-sm w-4/5">{achievement.description}</div>
              </div>
              <div className=" w-1/5">
                <img
                  className="rounded-md"
                  src={achievement.logo}
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;
