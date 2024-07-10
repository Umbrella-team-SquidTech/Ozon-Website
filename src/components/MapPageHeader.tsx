import ApplicationLogo from "./ApplicationLogo";
import NavLinks from "./NavLinks";
import NavSideLinks from "./NavSideLinks";

export default function MapPageHeader() {
  return (
    <header className="sticky top-0 z-40 w-full py-5 px-3 md:border-b flex justify-between items-center bg-white">
      <ApplicationLogo />
      <NavLinks />
      <NavSideLinks />
    </header>
  );
}
