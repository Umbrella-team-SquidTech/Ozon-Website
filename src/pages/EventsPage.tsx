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
        if (err.response.status === 401) {
          navigate("/login");
        }
        toast({
          title: "Une erreur s'est produite lors de la récupération des posts",
          description: "Veuillez réessayer plus tard",
          variant: "destructive",
        });
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
          <h1 className="mx-2 font-Outfit text-[#130E0A] font-[700] text-xl border-b-2 border-black w-fit">
            Évènements à venir
          </h1>
          <IncomingEvents events={events} />
          <AvailableEvents />
        </div>
      </div>
    </RootLayout>
  );
};

export default Events;
