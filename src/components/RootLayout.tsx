import ApplicationHeader from "./ApplicationHeader";
import ApplicationFooter from "./ApplicationFooter";
interface RootLayoutProps {
  children: React.ReactNode;
  isMobile?: boolean;
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="font-Outfit">
      <ApplicationHeader />
      <main className="h-screen z-0">{children}</main>
      <ApplicationFooter />
    </div>
  );
}
