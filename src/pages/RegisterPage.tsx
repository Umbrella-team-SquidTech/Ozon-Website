import LoginLink from "@/components/Register/LoginLink";
import OauthLinks from "@/components/Register/OauthLinks";
import RegisterHeader from "@/components/Register/RegisterHeader";
import { RegisterMobileForm } from "@/components/Register/register-mobile-form";
const RegisterPage = () => {
  return (
    <div className="w-screen h-[100dvh] flex flex-col items-center justify-evenly py-10 bg-BgColor">
      <RegisterHeader />
      {/* <RegisterForm /> */}
      <div>
        <RegisterMobileForm />
        <LoginLink />
      </div>
      <OauthLinks />
    </div>
  );
};

export default RegisterPage;
