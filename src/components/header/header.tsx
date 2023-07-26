import React from "react";
import Navigation from "../navigation/navigation";

interface HeaderProps {
  nav: string[];
}

const Header: React.FC<HeaderProps> = ({ nav }) => {
  return (
    <header className="site-header">
      <div className="site-identity">
        <a>
          <img
            className="eefe-logo"
            src="/icons8-space-64.png"
            alt="eefe spaceship logo"
          />
        </a>
        <h1>Extraterrestrial Excursions for Earthlings</h1>
      </div>
      <Navigation items={nav} />
    </header>
  );
};

export default Header;
