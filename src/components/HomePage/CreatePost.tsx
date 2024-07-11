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
import { Label } from "../ui/label";

const CreatePost = () => {
  const [images, setImages] = useState<string[]>([]);
  const token = useToken();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [postContent, setPostContent] = useState("");
  const [postType, setPostType] = useState(false);
  const [play] = useSound(likeSound);
  const handlePost = () => {
    setLoading(true);
    try {
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

      // upload to cloudinary and to OZON backend

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
                type: postType ? "tip" : "post",
              },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            )
            .then((res) => {
              play();
              toast({ title: "Post publié avec succès" });
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
              className="flex flex-row  items-center cursor-pointer">
              <img
                src={imageUpload}
                alt=""
              />
              <p className=" font-Inter font-[600] text-base">Photos</p>
            </label>
          </div>
        )}

        <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 pr-5">
          <input
            id="bordered-checkbox-1"
            type="checkbox"
            name="type"
            checked={postType}
            onChange={() => setPostType((prev) => !prev)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="bordered-checkbox-1"
            className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Conseil
          </label>
        </div>
        <div>
          <ImageGallery
            images={images}
            setImages={setImages}
          />
        </div>
        {loading ? (
          <Button
            className="bg-SecondaryColor rounded-full"
            disabled={true}>
            Publication...
          </Button>
        ) : (
          <Button
            className="bg-PrimaryColor hover:bg-SecondaryColor rounded-full"
            onClick={handlePost}>
            Publier
          </Button>
        )}
      </div>
    </div>
  );
};

export default CreatePost;
