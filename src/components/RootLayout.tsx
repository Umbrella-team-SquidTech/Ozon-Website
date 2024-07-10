import ApplicationHeader from "./ApplicationHeader";
import ApplicationFooter from "./ApplicationFooter";
import useUserStore from "@/stores/useUser";
interface RootLayoutProps {
  children: React.ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {
  
  const { user } = useUserStore();
  // console.log(user);
  return (
    <div className="font-Outfit">
      <ApplicationHeader />
      <main className=" z-0">{children}</main>

      <ApplicationFooter />
    </div>
  );
}
