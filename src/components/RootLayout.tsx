import ApplicationLogo from "./ApplicationLogo";
import NavLinks from "./NavLinks";
import NavSideLinks from "./NavSideLinks";
interface RootLayoutProps {
  children: React.ReactNode;
  isMobile?: boolean;
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="font-Outfit">
      <header className="sticky top-0 z-40 w-full py-5 px-3 md:border-b flex justify-between items-center">
        <ApplicationLogo />
        <NavLinks />
        <NavSideLinks />
      </header>
      <main>{children}</main>
    </div>
  );
}
