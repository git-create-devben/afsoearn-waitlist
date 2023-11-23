import React from "react";
import Logo from "@/components/logo";

// type Props = {}

const navbar = () => {
  return (
    <div className="p-6">
      <nav className="flex justify-around">
        <div className="flex">
          <Logo />
          <p>
            create<small>...</small>inspire<small>...</small>earn
          </p>
        </div>
        <ul className="flex">
          <li>
            <small>.</small>About Us
          </li>
          <li>
            <small>.</small>Mission
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default navbar;
