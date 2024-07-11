import { useEffect, useState } from "react";
import { renderToDom } from "../components/CreateEvent/CreateEventMap";
import useGeoLoactionStore from "@/stores/useGeoLocation";
import RootLayout from "@/components/RootLayout";
import { CreateEventForm } from "@/components/CreateEvent/create-event-form";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
const CreateEvent = () => {
  const { geoLocation } = useGeoLoactionStore();
  useEffect(() => {
    console.log(geoLocation?.long, "from create event");
    console.log(geoLocation?.lat, "from create event");
  }, [geoLocation]);

  useEffect(() => {
    renderToDom("map");
  }, []);

  return (
    <div className="">
      <RootLayout>
        <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="bg-background rounded-lg shadow p-8 sm:p-10">
            <div className="mb-8">
              <h1 className="bg-gradient-to-r from-[#11998E]  to-[#38EF7D] bg-clip-text text-transparent  md:text-3xl font-[700]">
                Créer un évènement
              </h1>
              <p className="text-muted-foreground">
                Veuillez remplir les champs ci-dessous pour créer un nouvel
                évènement.
              </p>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Nom de l'évènement</Label>
                  <Input id="name" placeholder="Enter event name" />
                </div>
                <div>
                  <Label htmlFor="description">
                    Description de l'évènement
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Enter event description"
                    className=" resize-none"
                  />
                </div>
                <div>
                  <Label htmlFor="address">
                    Adresse de l'évènement (non obligatoire )
                  </Label>
                  <Input id="address" placeholder="Enter event address" />
                </div>
                <div>
                  <Label htmlFor="start-date">Début de l'évènement</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start font-normal"
                      >
                        Choisis une date
                        <div className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <Label htmlFor="images">Images</Label>
                  <Input id="images" type="file" multiple />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="type">Type de l'évènement </Label>
                  <Select>
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="conference">Conference</SelectItem>
                      <SelectItem value="meetup">Meetup</SelectItem>
                      <SelectItem value="workshop">Workshop</SelectItem>
                      <SelectItem value="party">Party</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="attendance-limit">
                    Limite de participants
                  </Label>
                  <Input
                    id="attendance-limit"
                    type="number"
                    placeholder="Enter limit"
                  />
                </div>
                <div>
                  <Label htmlFor="green-pass">Green pass</Label>
                  <Input
                    id="green-pass"
                    placeholder="Enter green pass requirement"
                  />
                </div>
                <div>
                  <Label htmlFor="map">Precisez la localisation</Label>
                  <div className="h-64 bg-muted rounded-lg">
                    {/* <CreateEventForm /> */}
                    {/* rendering map  container */}
                    {/* NOTE:dont delete the id  */}
                    <div id="map" className="h-full"></div>
                  </div>
                </div>
              </div>
            </form>
            <div className="mt-8 flex justify-end">
              <Button type="submit"
        className="select-none self-start rounded-lg bg-gradient-to-tr from-[#11998E]  to-[#38EF7D] md:py-4 md:px-8 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-sm transition-all hover:shadow-md hover:shadow-gray-900/20 active:opacity-[0.85] "
              
              >Creez l'évènement</Button>
            </div>
          </div>
        </div>
      </RootLayout>
    </div>
  );
};
``;
export default CreateEvent;
