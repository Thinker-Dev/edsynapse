import React from "react";
import FooterLogo from "../icons/footer-logo";
import Rocket from "../icons/rocket";

const Footer = () => {
  return (
    <footer className="px-10 bg-black py-5 mt-16 justify-between flex items-center">
      <FooterLogo />
      <span className="text-sm">@All right reserved.</span>
      <div className="ml-[100px]">
        <Rocket />
      </div>
    </footer>
  );
};

export default Footer;
