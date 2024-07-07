import LoginForm from "@/components/Login/LoginForm";
import LoginFooter from "@/components/Login/LoginFooter";
import LoginHeader from "@/components/Login/LoginHeader";
import RegisterLink from "@/components/Login/RegisterLink";

export default function LoginPage() {
  
  return (
    <div className="md:flex  overflow-x-hidden h-screen md:h-full justify-center items-center font-Outfit md:py-12 bg-BgColor">
      <div className="h-full md:max-h-auto   border flex flex-col justify-evenly rounded-lg py-10 px-6 md:p-16 gap-7 w-full  md:w-[45%]">
        <LoginHeader />
        <div><LoginForm />
        <RegisterLink /></div>
        <LoginFooter />
      </div>
    </div>
    
  );
}
