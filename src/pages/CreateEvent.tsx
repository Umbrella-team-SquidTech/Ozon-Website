import { ChangeEvent, useEffect, useState } from "react";
import { format } from "date-fns";
import { renderToDom } from "../components/CreateEvent/CreateEventMap";
import useGeoLoactionStore from "@/stores/useGeoLocation";
import RootLayout from "@/components/RootLayout";
import ImageGallery from "@/components/CreatePostMobile/ImageGallery";
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
import { generateTimestamp, generateSignature } from "@/utils/cloudinary";
import axios from "axios";
import customAxios from "@/config/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import formSchema from "@/schemas/CreateEventSchema";
import useToken from "@/hooks/useToken";
const CreateEvent = () => {
  const { geoLocation } = useGeoLoactionStore();
  const [images, setImages] = useState<string[]>([]);
  const [eventTypes, setEventTypes] = useState<EventTypeI[] | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const { toast } = useToast();
  const token = useToken();
  const [_loading, setLoading] = useState(false);
  function uploadWithImages(
    images: string[],
    formValues: z.infer<typeof formSchema>
  ) {
    const formData = new FormData();
    const timeStamp = generateTimestamp().toString();
    const public_id = import.meta.env.VITE_CLOUDINARY_PUBLIC;
    const api_key = import.meta.env.VITE_CLOUDINARY_APIKEY;
    const api_secret = import.meta.env.VITE_CLOUDINARY_SECRETKEY;
    const eager = "w_400,h_300,c_pad|w_260,h_200,c_crop";
    formData.append("api_key", api_key);
    formData.append("eager", eager);
    formData.append("public_id", public_id);
    formData.append("timestamp", timeStamp);
    formData.append("preset", "squid-tech");
    formData.append(
      "signature",
      generateSignature(
        `eager=${eager}&public_id=${public_id}&timestamp=${timeStamp}${api_secret}`
      )
    );
    formData.append("file", images[0]);
    axios
      .post(
        `https://api.cloudinary.com/v1_1/${public_id}/image/upload`,
        formData,
        {
          headers: {
            "X-Requested-With": "XMLHttpRequest",
          },
        }
      )
      .then((res) => {
        const imageUrl = res.data.secure_url;

        customAxios
          .post(
            "/events",
            {
              name: formValues.name,
              description: formValues.description,
              address: formValues.address,
              start: formValues.start,
              event_type_id: parseInt(formValues.event_type_id),
              limit: parseInt(formValues.limit),
              organizer_id: 1,
              longitude: geoLocation?.long,
              latitude: geoLocation?.lat,
              green_pass: formValues.green_pass,
              images: [imageUrl],
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((_res) => {
            toast({
              title: "Evenement publié avec succès",
              description: "Votre Evenement a été publié avec succès",
              className:
                "bg-green-500 text-white font-Outfit py-3 space-y-0 gap-0",
            });
            setImages([]);
          })
          .catch((error) => {
            toast({
              title: "Une erreur s'est produite",
              description: error.message,
              variant: "destructive",
            });
          });
      })
      .catch((error) => {
        console.log(error);
        toast({
          title: "Une erreur s'est produite",
          description: error.message,
          variant: "destructive",
        });
      });
  }

  function handleImgUpload(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (file) {
      // Ensure file is not undefined
      const reader = new FileReader();

      reader.onload = () => {
        const base64Img = reader.result as string;
        setImages((prevImages) => [...prevImages, base64Img]);
      };

      reader.readAsDataURL(file);
    }
  }

  useEffect(() => {
    console.log(geoLocation?.long, "from create event");
    console.log(geoLocation?.lat, "from create event");
  }, [geoLocation]);

  useEffect(() => {
    renderToDom("map");
  }, []);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (images.length === 0) {
      return;
    }
    setLoading(true);
    uploadWithImages(images, values);
    setLoading(false);
  }

  useEffect(() => {
    customAxios
      .get("/event_types", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setEventTypes(res.data.data);
      });
  }, []);

  return (
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
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div>
                          <Label htmlFor="name">Nom de l'évènement</Label>
                          <Input
                            id="name"
                            placeholder="Enter event name"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div>
                          <Label htmlFor="description">
                            Description de l'évènement
                          </Label>
                          <Textarea
                            id="description"
                            placeholder="Enter event description"
                            className=" resize-none"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div>
                          <Label htmlFor="address">
                            Adresse de l'évènement (non obligatoire )
                          </Label>
                          <Input
                            id="address"
                            placeholder="Enter event address"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="start"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div>
                          <Label htmlFor="start-date">
                            Début de l'évènement
                          </Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className="w-full justify-start font-normal"
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Choisis une date</span>
                                )}

                                <div className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div>
                  <Label htmlFor="images">Images</Label>
                  <Input
                    id="images"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImgUpload}
                    disabled={images.length >= 1}
                  />
                  {images.length === 0 && (
                    <div className="text-red-500 text-sm">
                      L'image est obligatoire
                    </div>
                  )}
                </div>
                <div>
                  <ImageGallery images={images} setImages={setImages} />
                </div>
              </div>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="event_type_id"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div>
                          <Label htmlFor="type">Type de l'évènement </Label>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger id="type">
                              <SelectValue placeholder="Select event type" />
                            </SelectTrigger>
                            <SelectContent>
                              {eventTypes?.map((t: EventTypeI) => {
                                return (
                                  <SelectItem value={t.id.toString()}>
                                    {t.name}
                                  </SelectItem>
                                );
                              })}
                            </SelectContent>
                          </Select>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="limit"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div>
                          <Label htmlFor="attendance-limit">
                            Limite de participants
                          </Label>
                          <Input
                            id="attendance-limit"
                            type="number"
                            min={2}
                            placeholder="Enter limit"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="green_pass"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div>
                          <Label htmlFor="green-pass">Green pass</Label>
                          <Input
                            id="green-pass"
                            placeholder="Enter green pass requirement"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div>
                  <Label htmlFor="map">Precisez la localisation</Label>
                  <div className="h-64 bg-muted rounded-lg">
                    <div id="map" className="h-full"></div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button
                  type="submit"
                  className="select-none self-start rounded-lg bg-gradient-to-tr from-[#11998E]  to-[#38EF7D] md:py-4 md:px-8 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-sm transition-all hover:shadow-md hover:shadow-gray-900/20 active:opacity-[0.85] "
                >
                  Creez l'évènement
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </RootLayout>
  );
};
``;
export default CreateEvent;
