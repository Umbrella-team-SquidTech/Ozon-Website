import ApplicationLogo from "./ApplicationLogo";
import NavLinks from "./NavLinks";
import NavSideLinks from "./NavSideLinks";
import {  useLocation } from "react-router-dom";

export default function ApplicationHeader() {
  const location = useLocation().pathname;
  return (
    <header className={`${
      location === "/map"
        ? "absolute"
        : "sticky"
    } top-0 z-40 w-full py-5 px-3 md:border-b flex justify-between items-center bg-white`}>
      <ApplicationLogo />
      <NavLinks />
      <NavSideLinks />
    </header>
  );
}
