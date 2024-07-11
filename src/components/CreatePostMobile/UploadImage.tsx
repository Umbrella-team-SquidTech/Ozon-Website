import imageUpload from "@/assets/HomePage/imageComposition.svg";

const UploadImage = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-2">
      <input
        type="file"
        name=""
        id="imageUpload"
        className="hidden"
        onChange={(e) => {
          console.log(e.target.files);
        }}
      />
      <label
        htmlFor="imageUpload"
        className="flex flex-row gap-1  items-center cursor-pointer"
      >
        <img src={imageUpload} alt="" />
        <p className=" font-Inter font-[700] text-base">Photos</p>
      </label>
    </div>
  );
};

export default UploadImage;
