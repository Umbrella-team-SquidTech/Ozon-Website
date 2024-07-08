import UserProfile from "@/assets/UserProfile.png";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import imageUpload from "@/assets/HomePage/imageComposition.svg"
const CreatePost = () => {
  return (
    <div className="mt-4  w-full border-2 border-black/25 rounded-3xl p-6 space-y-3">
      <div className="flex flex-row items-center gap-6 ">
        <img
          src={UserProfile}
          className=" rounded-3xl size-12 md:flex justify-center items-center  hidden "
        />
        <Textarea
          
          className="rounded-xl border border-[#BAB8B8] bg-white w-full pl-4 pr-2 py-2 outline-none resize-none"
          placeholder="Commencer un post..."
        />
      </div>
      <div className="pl-20 flex flex-row items-center justify-between">
        <input type="file" name="" id="imageUpload"  className="hidden"/>
        <label htmlFor="imageUpload" className="flex flex-row  items-center cursor-pointer">
          <img src={imageUpload} alt="" />
          <p className=" font-Inter font-[700] text-base">Photos</p>
        </label>
        <Button className="bg-PrimaryColor hover:bg-SecondaryColor rounded-full">
          Publier
        </Button>
      </div>
    </div>
  );
};

export default CreatePost;
