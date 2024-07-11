import AvailableEvents from "@/components/EventPage/AvailableEvents";
import IncomingEvents from "@/components/EventPage/IncomingEvents";
import RootLayout from "@/components/RootLayout";
import IncomingEventsSkeleton from "@/components/EventPage/IncomingEventsSkeleton";
import AvailableEventsSkeleton from "@/components/EventPage/AvailableEventsSkeleton";

import useToken from "@/hooks/useToken";
import { useEffect, useState } from "react";
import axios from "@/config/axios";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import MapCta from "@/components/EventPage/MapCta";
const Events = () => {
  const token = useToken();
  const [eventLoading, setEventLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    console.log(token);
    axios
      .get("/events", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setEventLoading(false);
        setEvents(res.data.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Une erreur s'est produite lors de la récupération des posts",
          description: "Veuillez réessayer plus tard",
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
      });
  }, []);

  if (eventLoading) {
    return (
      <RootLayout>
        <div className="mt-4 pt-0 md:px-20">
          <div>
            <h1 className="mx-2 font-Outfit text-[#130E0A] font-[700] text-xl border-b-2 border-black w-fit">
              Évènements à venir
            </h1>
            <IncomingEventsSkeleton />
            <AvailableEventsSkeleton />
          </div>
        </div>
      </RootLayout>
    );
  }

  return (
    <RootLayout>
      <div className="mt-4 pt-0 md:px-20">
        <div>
          {/* <h1 className="mx-2 font-Outfit text-[#130E0A] font-[700] text-xl   w-fit">
            Évènements à venir
          </h1> */}
          <div className="px-2 md:px-0">
            <MapCta />
          </div>
          <h1 className="mx-2 mt-4 font-Outfit text-[#130E0A] font-[700] text-xl  w-fit">
            Mes évènements
          </h1>
          <IncomingEvents events={events} />
          <AvailableEvents events={events} />
        </div>
      </div>
    </RootLayout>
  );
};

export default Events;
