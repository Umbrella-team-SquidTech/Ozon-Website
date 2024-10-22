import RootLayout from "@/components/RootLayout";
import { Calendar } from "lucide-react";
import checkCircle from "@/assets/checkCircle.svg";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useNavigate, useParams } from "react-router-dom";
import useToken from "@/hooks/useToken";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import axios from "@/config/axios";
import placeholder from "@/assets/placeholder.png";
import EventDetailsSkeleton from "@/components/Skeletons/EventDetailsSkeleton";
import { RWebShare } from "react-web-share";
import { compareDates } from "@/utils/formatDate";
const EventDetails = () => {
  const { id } = useParams<{ id: string }>();
  const token = useToken();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loadingEvent, setLoadingEvent] = useState(true);
  const [event, setEvent] = useState<EventI | null>(null);
  const [isParticipating, setIsParticipating] = useState(false);
  useEffect(() => {
    setLoadingEvent(true);
    axios
      .get(`/events/${id}`, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setLoadingEvent(false);
        setEvent(res.data.data);
        setIsParticipating(res.data.data.user_is_participating);
      })
      .catch((err) => {
        toast({
          title: "Erreur",
          description: "Erreur lors de la récupération de l'évènement",
          variant: "destructive",
        });
        if (err.response.status === 401) {
          navigate("/login");
          toast({
            title: "Veuillez vous reconnecter",
            description: "Votre session a expiré",
            variant: "destructive",
          });
        }
        console.log(err);
      });
  }, []);

  if (loadingEvent) {
    return (
      <RootLayout>
        <EventDetailsSkeleton />
      </RootLayout>
    );
  }
  const handleParticipation = () => {
    axios
      .post(
        `/events/${id}/participate`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => {
        setIsParticipating(!isParticipating);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 401) {
          navigate("/login");
          toast({
            title: "Veuillez vous reconnecter",
            description: "Votre session a expiré",
            variant: "destructive",
          });
        }
      });
  };

  return (
    <RootLayout>
      <div className="mt-4 pt-0 md:px-20">
        <div className="">
          <h1 className="font-Inter text-[#130E0A] font-[700] text-xl  w-fit px-4">
            Détails de l'évènement
          </h1>
          <div className="pt-2 pb-[70px] px-4">
            <div className="flex flex-col items-start w-full ">
              <Carousel className="w-full cursor-pointer rounded-lg ">
                <CarouselContent className="rounded-lg">
                  {event?.images.length === 0 ? (
                    <CarouselItem className="rounded-lg">
                      <img
                        src={placeholder}
                        className="w-full self-center object-cover h-full rounded-lg"
                      />
                    </CarouselItem>
                  ) : null}
                  {event?.images?.map((image, index) => (
                    <CarouselItem key={index} className="h-[30rem] rounded-lg">
                      <img
                        src={image ? image : placeholder}
                        className="w-full self-center object-cover h-full rounded-lg"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 w-12 h-12 border-none" />
                <CarouselNext className="absolute right-2 w-12 h-12 border-none" />
              </Carousel>
              <h3 className="text-TypoColor font-Inter  md:text-xl font-[700] pt-5 ">
                {event?.name}
              </h3>
              <div className=" flex flex-col justify-start items-start gap-3  ">
                <div className="flex flex-row items-center gap-3 pt-3">
                  <Calendar size={32} className=" text-PrimaryColor  " />
                  <div>
                    <p className="text-[#130E0A]/50 font-[700] text-base font-Inter ">
                      {event?.start}
                    </p>
                    <p className="text-[#130E0A]/50 font-[400] text-xs font-Inter ">
                      {event?.start}
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-3 ">
                  <img src={checkCircle} alt="checkCircle" />
                  <p className="text-[#130E0A]/50 font-[400] text-base font-Inter ">
                    {event!.participations > 1
                      ? `${event?.participations} présents`
                      : `${event?.participations} présent`}
                    .{" "}
                    {!compareDates(
                      event?.start as string,
                      new Date().toISOString()
                    )
                      ? "Evenement passé"
                      : "Evenement à venir"}
                  </p>
                </div>
              </div>
            </div>
            <div className="py-8">
              <h1 className="font-Inter text-[#130E0A] font-[700] md:text-xl pt-4">
                A propos de l'évènement
              </h1>
              <Card className="mt-4 p-5 flex flex-col gap-3">
                <CardTitle>Title</CardTitle>
                <CardContent>
                  <p className="text-[#130E0A]/50 font-[400] text-base font-Inter">
                    {event?.description}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-row gap-4 items-center justify-end py-4 ">
              <RWebShare
                data={{
                  text: "Partager",
                  url: "https://www.google.com/",
                  title: "Partager",
                }}
              >
                <button className="flex flex-row gap-2 items-center text-SecondaryColor underline">
                  <Share
                    size={20}
                    strokeWidth={3}
                    className="hidden md:block"
                  />
                  Partager
                </button>
              </RWebShare>
              {isParticipating ? (
                <Button
                  className=" space-x-2 "
                  variant="destructive"
                  onClick={handleParticipation}
                >
                  <p className=" font-Inter font-[700] text-base  md:block">
                    Annuler la participation
                  </p>
                </Button>
              ) : (
                <Button
                  className=" space-x-2 bg-SecondaryColor hover:bg-PrimaryColor"
                  onClick={handleParticipation}
                >
                  <p className=" font-Inter font-[700] text-base  md:block">
                    Prendre une place
                  </p>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default EventDetails;
