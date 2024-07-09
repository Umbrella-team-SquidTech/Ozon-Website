import RootLayout from "@/components/RootLayout";
import EventImage from "@/assets/EventPage/EventPage.png";
import { Calendar } from "lucide-react";
import checkCircle from "@/assets/checkCircle.svg";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share } from "lucide-react";


const EventDetails = () => {
  return (
    <RootLayout>
      <div className="mt-4  pt-0 md:px-20">
        <div>
          <h1 className="font-Inter text-[#130E0A] font-[700] text-xl border-b-2 border-black  w-fit">
            Détails de l'évènement
          </h1>
          <div className="flex flex-col items-start w-full pt-4">
            <img src={EventImage} alt="" className="w-3/4 self-center" />
            <h3 className="text-TypoColor font-Inter  md:text-xl font-[600]  pt-5 ">
              Plantation d’arbres pour créer une forêt
            </h3>
            <div className=" flex flex-col justify-start items-start gap-3  ">
              <div className="flex flex-row items-center gap-3 pt-3">
                <Calendar size={32} className=" text-PrimaryColor  " />
                <div>
                  <p className="text-[#130E0A]/50 font-[700] text-base font-Inter ">
                    Lundi, 21 Juillet 2024
                  </p>
                  <p className="text-[#130E0A]/50 font-[400] text-xs font-Inter ">
                    14:00 · 20:00 AM GMT +8
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-3 ">
                <img src={checkCircle} alt="checkCircle" />
                <p className="text-[#130E0A]/50 font-[400] text-base font-Inter ">
                  81 présents · Évènement disponible
                </p>
              </div>
            </div>
            <h1 className="font-Inter text-[#130E0A] font-[700] text-xl pt-4">
              Programme de l’évènement
            </h1>
          </div>
          <Card className="mt-4 p-5">
            <CardTitle>Title</CardTitle>
            <CardContent>
              <p className="text-[#130E0A]/50 font-[400] text-base font-Inter">
                Lorem ipsum dolor sit amet consectetur. Ante commodo lacus magna
                donec id laoreet ultrices. Tortor orci morbi pharetra sed
                aliquam nunc. Aliquet eu pharetra ante sapien suspendisse.
                Feugiat sed consequat fames pretium cras tristique eu ut. Lorem
                ipsum dolor sit amet consectetur. Ante commodo lacus magna donec
                id laoreet ultrices. Tortor orci morbi pharetra sed aliquam
                nunc. Aliquet eu pharetra ante sapien suspendisse. Feugiat sed
                consequat fames pretium cras tristique eu ut. Lorem ipsum dolor
                sit amet consectetur. Ante commodo lacus magna donec id laoreet
                ultrices. Tortor orci morbi pharetra sed aliquam nunc. Aliquet
                eu pharetra ante sapien suspendisse. Feugiat sed consequat fames
                pretium cras tristique eu ut. Lorem ipsum dolor sit amet
                consectetur. Ante commodo lacus magna donec id laoreet ultrices.
                Tortor orci morbi pharetra sed aliquam nunc. Aliquet eu pharetra
                ante sapien suspendisse. Feugiat sed consequat fames pretium
                cras tristique eu ut. Lorem ipsum dolor sit amet consectetur.
                Ante commodo lacus magna donec id laoreet ultrices. Tortor orci
                morbi pharetra sed aliquam nunc. Aliquet eu pharetra ante sapien
                suspendisse. Feugiat sed consequat fames pretium cras tristique
                eu ut. Lorem ipsum dolor sit amet consectetur. Ante commodo
                lacus magna donec id laoreet ultrices. Tortor orci morbi
                pharetra sed aliquam nunc. Aliquet eu pharetra ante sapien
                suspendisse. Feugiat sed consequat fames pretium cras tristique
                eu ut.
              </p>
            </CardContent>
          </Card>
          <div className="flex flex-row gap-2 items-center justify-end py-4"> 
            <button className="flex flex-row gap-2 items-center text-SecondaryColor">
                <Share size={20} strokeWidth={3} className="hidden md:block"/>
                Partager
            </button>
            <Button className=" space-x-2 bg-SecondaryColor hover:bg-PrimaryColor">
              
              <p className=" font-Inter font-[700] text-base hidden md:block">
              Prendre une place 
              </p>
            </Button>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default EventDetails;