import RegisterIcon from "@/assets/Register/insciption_icon.svg"


const RegisterHeader = () => {
  return (
    <div className=" flex flex-col items-center gap-2 ">
      <img src={RegisterIcon} alt="cat icon" width={74}  />
      <h3 className=" font-Outfit text-PrimaryColor text-[28px] font-bold">Inscription</h3>
    </div>
  )
}

export default RegisterHeader