import ApplicationHeader from "./ApplicationHeader";
import ApplicationFooter from "./ApplicationFooter";
interface RootLayoutProps {
  children: React.ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {
  // console.log(user);
  return (
    <div className="font-Outfit">
      <ApplicationHeader />
      <main className=" z-0">{children}</main>

      <ApplicationFooter />
    </div>
  );
}
