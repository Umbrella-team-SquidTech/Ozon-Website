import LoginForm from "@/components/Login/LoginForm";
import LoginFooter from "@/components/Login/LoginFooter";
import LoginHeader from "@/components/Login/LoginHeader";
export default function LoginPage() {
  return (
    <div className="flex justify-center items-center font-Outfit py-12">
      <div className="max-h-auto  border flex flex-col justify-between rounded-lg p-16 gap-7 w-[45%]">
        <LoginHeader />
        <LoginForm />
        <LoginFooter />
      </div>
    </div>
  );
}
