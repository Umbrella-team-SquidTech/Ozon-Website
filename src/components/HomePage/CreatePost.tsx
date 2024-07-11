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
import useUser from "@/hooks/useUser";

const CreatePost = () => {
  const [images, setImages] = useState<string[]>([]);
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [postContent, setPostContent] = useState("");
  const [play] = useSound(likeSound);
  const token = useToken();
  const { user } = useUser(token);
  const [isPosting, setIsPosting] = useState(false);

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
    setIsPosting(true);
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
          })
          .finally(() => {
            setIsPosting(false);
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
          .then(() => {
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
          src={user?.profile_pic}
          className=" rounded-3xl size-12 md:flex justify-center items-center hidden "
        />
        <Textarea
          className="rounded-xl border border-[#BAB8B8] bg-white w-full pl-4 pr-2 py-2 outline-none resize-none"
          placeholder="Commencer un post..."
          onChange={(e) => {
            setPostContent(e.target.value);
          }}
          value={postContent}
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
        {isPosting ? (
          <Button className="bg-SecondaryColor rounded-full space-x-2" disabled={true}>
                              <div role="status">
                    <svg
                      aria-hidden="true"
                      className="w-8 h-8 text-gray-200 animate-spin  fill-PrimaryColor"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </div>
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
