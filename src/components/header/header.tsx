import DesktopMenu from "./desktop-menu";
import MobileMenu from "./mobile-menu";

const Header = () => {
  return (
    <div>
      <div className="md:hidden">
        <MobileMenu />
      </div>
      <div className="hidden md:flex">
        <DesktopMenu />
      </div>
    </div>
  );
};

export default Header;
