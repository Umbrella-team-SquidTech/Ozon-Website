import LoginLink from "@/components/Register/LoginLink";
import OauthLinks from "@/components/OauthLinks";
import RegisterHeader from "@/components/Register/RegisterHeader";
import { RegisterMobileForm } from "@/components/Register/register-mobile-form";
import LoginHeader from "@/components/Login/LoginHeader";
import RegisterDeskForm from "@/components/Register/RegisterDeskForm";
import LoginFooter from "@/components/Login/LoginFooter";
const RegisterPage = () => {
  return (
    <div
      className="w-screen h-screen overflow-x-hidden flex flex-col items-center overflow-y-auto justify-evenly
    md:justify-start py-5 md:py-0 md:pt-14 bg-BgColor font-Outfit"
    >
      <div className="max-h-auto  border hidden md:flex flex-col justify-between rounded-lg p-16 gap-7 w-[45%]">
        <LoginHeader register={true} />
        <RegisterDeskForm />
        <LoginFooter />
      </div>

      <div className=" md:hidden px-6 ">
        <RegisterHeader />
        <div>
          <RegisterMobileForm />
          <LoginLink />
        </div>
        <OauthLinks />
      </div>
    </div>
  );
};

export default RegisterPage;
