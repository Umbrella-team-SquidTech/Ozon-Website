// Desc: Create a new post form for mobile view
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import imageUpload from "@/assets/HomePage/imageComposition.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import formSchema from "@/schemas/CreatePostSchema";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
type Inputs = {
  content: string;
  image: FileList;
};
const PostForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  function onSubmit(values: Inputs) {
    // REQUEST API
    // TODO: search for handling image submissions

    setIsSubmitting(true);
    try {
      toast({
        title: "Post Publier avec succès",

        className: "bg-green-500 text-white font-Outfit py-3 space-y-0 gap-0",
      });
    } catch (err) {
      console.log(err);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de la publication du post",
        className: " text-white font-Outfit py-3 space-y-0 gap-0",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <form
      action="submit"
      onSubmit={handleSubmit(onSubmit)}
      className="pt-2 h-52 "
    >
      {/* text area */}
      {errors.content && (
        <p className="text-red-500 text-xs">
          {errors.content.message?.toString()}
        </p>
      )}
      <Textarea
        {...register("content")}
        className="rounded-xl border border-[#BAB8B8] bg-white w-full pl-4 pr-2 py-2 outline-none h-full resize-none"
        placeholder="Commencer un post..."
      />
      <div className="flex flex-row justify-between pt-5">
        {/* image upload */}
        <div className="flex flex-row justify-center items-center gap-2">
          <input
            type="file"
            id="imageUpload"
            className="hidden"
            accept="image/*"
            {...register("image")}
          />
          <label
            htmlFor="imageUpload"
            className="flex flex-row gap-1  items-center cursor-pointer"
          >
            <img src={imageUpload} alt="" />
            <p className=" font-Inter font-[700] text-base">Photos</p>
          </label>
        </div>
        {/* submit button */}
        {isSubmitting ? (
          <Button
            className="bg-PrimaryColor hover:bg-SecondaryColor rounded-full px-6"
            disabled
          >
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
          </Button>
        ) : (
          <Button className="bg-PrimaryColor hover:bg-SecondaryColor rounded-full font-Oufit font-[600] ">
            Publier le post
          </Button>
        )}
      </div>
    </form>
  );
};

export default PostForm;
