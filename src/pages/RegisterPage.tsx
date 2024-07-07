import LoginLink from "@/components/Register/LoginLink";
import OauthLinks from "@/components/Register/OauthLinks";
import RegisterForm from "@/components/Register/RegisterForm";
import RegisterHeader from "@/components/Register/RegisterHeader";
import { RegisterMobileForm } from "@/components/Register/register-mobile-form";
import RegisterDeskForm from "@/components/Register/RegisterDeskForm";
import LoginForm from "@/components/Login/LoginForm";
import LoginFooter from "@/components/Login/LoginFooter";
import LoginHeader from "@/components/Login/LoginHeader";
const RegisterPage = () => {
  return (
    <div className="w-screen h-[100dvh] flex flex-col items-center pt-14 ">
      <div className="max-h-auto  border flex flex-col justify-between rounded-lg p-16 gap-7 w-[45%]">
        <LoginHeader register={true} />
        <RegisterDeskForm />
        <LoginFooter />
      </div>
    </div>
  );
};

export default RegisterPage;
