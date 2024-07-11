import PostForm from "@/components/CreatePostMobile/PostForm";
import RootLayout from "@/components/RootLayout";

const CreatePostmobile = () => {
  return (
    <RootLayout>
      <div className="px-5">
        <h1 className="font-[700] font-Outfit text-TypoColor">
          Publier un post
        </h1>
        <PostForm />
      </div>
    </RootLayout>
  );
};

export default CreatePostmobile;
