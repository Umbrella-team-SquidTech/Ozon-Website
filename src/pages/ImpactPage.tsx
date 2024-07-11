import LineChart from "@/components/ImpactPage/LineGraph";
import RootLayout from "@/components/RootLayout";
import { Card } from "@/components/ui/card";
import wheel from "@/assets/impact/Progress wheel.svg";
import bar from "@/assets/impact/Small column chart.svg"
import line from "@/assets/impact/Small line chart widget.svg"

const ImpactPage = () => {
return (
    <RootLayout>
        <div className="bg-white px-4 md:px-20 pb-10">
            <h1 className="mx-2 mt-4 font-Inter text-[#130E0A] font-[700] text-xl  w-fit">
                Nombre d’arbres plantés
            </h1>
            <Card className="mt-2">
                <LineChart />
            </Card>
            <h1 className="mx-2 mt-10 font-Inter text-[#130E0A] font-[700] text-xl  w-fit">
                Nombres de déchets recyclés
            </h1>
            <div className="mt-5 space-y-8">
                <Card className="flex flex-row p-10 justify-between rounded-2xl  shadow-lg  hover:scale-105 transition duration-500">
                    <div>
                        <h3 className="font-Inter text-[#5F5AA2] font-[700] text-7xl">
                            45%{" "}
                        </h3>
                        <p className="font-Inter font-[500] text-2xl text-[#130E0A]">
                            pourcentage de matériaux recyclés
                        </p>
                    </div>
                    <img src={wheel} width={120} alt="" />
                </Card>
                <Card className="flex flex-row p-10 justify-between rounded-2xl  shadow-lg  hover:scale-105 transition duration-500">
                    <div>
                        <h3 className="font-Inter text-[#2978A0] font-[700] text-7xl">
                            219{" "}
                        </h3>
                        <p className="font-Inter font-[500] text-2xl text-[#130E0A]">
                        km parcourus
                        </p>
                    </div>
                    <img src={bar} width={120} alt="" />
                </Card>{" "}
                <Card className="flex flex-row p-10 justify-between rounded-2xl  shadow-lg  hover:scale-105 transition duration-500">
                    <div>
                        <h3 className="font-Inter text-[#8DE969] font-[700] text-7xl">
                            783{" "}
                        </h3>
                        <p className="font-Inter font-[500] text-2xl text-[#130E0A]">
                        kg de déchets collectés
                        </p>
                    </div>
                    <img src={line} width={120} alt="" />
                </Card>
            </div>
        </div>
    </RootLayout>
);
};

export default ImpactPage;
