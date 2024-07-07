import LoginLink from "@/components/Register/LoginLink";
import OauthLinks from "@/components/component/OauthLinks";
import RegisterHeader from "@/components/Register/RegisterHeader";
import { RegisterMobileForm } from "@/components/Register/register-mobile-form";
const RegisterPage = () => {
  return (
    <div className="w-screen h-[100dvh] overflow-x-hidden flex flex-col items-center justify-evenly py-10 bg-BgColor">
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
