import LoginLink from "@/components/Register/LoginLink"
import OauthLinks from "@/components/Register/OauthLinks"
import RegisterForm from "@/components/Register/RegisterForm"
import RegisterHeader from "@/components/Register/RegisterHeader"
import {RegisterMobileForm} from "@/components/Register/register-mobile-form"
const RegisterPage = () => {
  return (
    <div className="w-screen h-[100dvh] flex flex-col items-center pt-14 ">
        <RegisterHeader />
        {/* <RegisterForm /> */}
        <RegisterMobileForm />
        <LoginLink />
        <OauthLinks />
    </div>
  )
}

export default RegisterPage