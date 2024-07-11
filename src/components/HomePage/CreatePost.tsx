import UserProfile from "@/assets/UserProfile.png";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import imageUpload from "@/assets/HomePage/imageComposition.svg";
import { ChangeEvent, useState } from "react";
import ImageGallery from "../CreatePostMobile/ImageGallery";
import customAxios from "@/config/axios";
import axios from "axios";
import { generateSignature, generateTimestamp } from "@/utils/cloudinary";
import useToken from "@/hooks/useToken";
import { useToast } from "../ui/use-toast";
import useSound from "use-sound";

import likeSound from "@/assets/sounds/posting_effect.mp3";

const CreatePost = () => {
  const [images, setImages] = useState<string[]>([]);
  const token = useToken();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [postContent, setPostContent] = useState("");
  const [play] = useSound(likeSound);

  function uploadWithImages(images: string[]) {
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
            "/posts",
            {
              content: postContent,
              images: [imageUrl],
              type: "post",
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => {
            play();
            toast({
              title: "Post publié avec succès",
              description: "Votre post a été publié avec succès",
              className:
                "bg-green-500 text-white font-Outfit py-3 space-y-0 gap-0",
            });
            setImages([]);
            setPostContent("");
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

  const handlePost = async () => {
    setLoading(true);
    try {
      // call upload with images if images, else call the backend directly
      if (images.length > 0) {
        await uploadWithImages(images);
      } else {
        customAxios
          .post(
            "/posts",
            {
              content: postContent,
              type: "post",
              images: [],
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => {
            play();
            toast({
              title: "Post publié avec succès",
              description: "Votre post a été publié avec succès",
              className:
                "bg-green-500 text-white font-Outfit py-3 space-y-0 gap-0",
            });
            setImages([]);
            setPostContent("");
          })
          .catch((error) => {
            toast({
              title: "Une erreur s'est produite",
              description: error.message,
              variant: "destructive",
            });
          });
      }
    } catch (error) {
      toast({ title: "Une erreur s'est produite" });
    } finally {
      setLoading(false);
    }
  };

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

  return (
    <div className="hidden md:block mt-4  w-full border-2 border-black/25 rounded-3xl p-6 space-y-3">
      <div className="flex flex-row items-center gap-6 ">
        <img
          src={UserProfile}
          className=" rounded-3xl size-12 md:flex justify-center items-center hidden "
        />
        <Textarea
          className="rounded-xl border border-[#BAB8B8] bg-white w-full pl-4 pr-2 py-2 outline-none resize-none"
          placeholder="Commencer un post..."
          onChange={(e) => {
            setPostContent(e.target.value);
          }}
        />
      </div>
      <div className="pl-20 flex flex-row items-center justify-between">
        {images.length < 1 && (
          <div>
            <input
              type="file"
              name=""
              id="imageUpload"
              className="hidden"
              onChange={handleImgUpload}
            />
            <label
              htmlFor="imageUpload"
              className="flex flex-row  items-center cursor-pointer"
            >
              <img src={imageUpload} alt="" />
              <p className=" font-Inter font-[600] text-base">Photos</p>
            </label>
          </div>
        )}
        <div>
          <ImageGallery images={images} setImages={setImages} />
        </div>
        {loading ? (
          <Button className="bg-SecondaryColor rounded-full" disabled={true}>
            Publication...
          </Button>
        ) : (
          <Button
            className="bg-PrimaryColor hover:bg-SecondaryColor rounded-full"
            onClick={handlePost}
          >
            Publier
          </Button>
        )}
      </div>
    </div>
  );
};

export default CreatePost;
