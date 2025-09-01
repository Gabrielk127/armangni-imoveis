"use client";
import DesktopMenu from "./desktop-menu";
import MobileMenu from "./mobile-menu";

interface HeaderProps {
  hasCondominium?: boolean;
}

const Header = ({ hasCondominium = true }: HeaderProps) => {
  return (
    <div>
      <div className="md:hidden">
        <MobileMenu hasCondominium={hasCondominium} />
      </div>
      <div className="hidden md:flex">
        <DesktopMenu hasCondominium={hasCondominium} />
      </div>
    </div>
  );
};

export default Header;
