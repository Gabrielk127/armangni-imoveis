"use client";
import DesktopMenu from "./desktop-menu";
import MobileMenu from "./mobile-menu";

interface HeaderProps {
  hasCondominium?: boolean;
  hasVideo?: boolean;
}

const Header = ({ hasCondominium = true, hasVideo = true }: HeaderProps) => {
  return (
    <div>
      <div className="md:hidden">
        <MobileMenu hasCondominium={hasCondominium} hasVideo={hasVideo} />
      </div>
      <div className="hidden md:flex">
        <DesktopMenu hasCondominium={hasCondominium} hasVideo={hasVideo} />
      </div>
    </div>
  );
};

export default Header;
