import LoginForm from "@/components/Login/LoginForm";
import LoginFooter from "@/components/Login/LoginFooter";
import LoginHeader from "@/components/Login/LoginHeader";
export default function LoginPage() {
  return (
    <>
    <div className="h-screen w-screen  font-Outfit bg-BgColor">
      {/* the flex was deleted and the width was set to screen */}
      <div className="max-h-auto  w-full border flex flex-col justify-between rounded-lg py-10 px-6 md:p-16 gap-7">
        <LoginHeader />
        <LoginForm />
        <LoginFooter />
      </div>
    </div>
    <div className="">

    </div>
    </>
  );
}
