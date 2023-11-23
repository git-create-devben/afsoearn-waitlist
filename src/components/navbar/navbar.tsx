import React from "react";
import Logo from "@/components/logo";

// type Props = {}

const navbar = () => {
  return (
    <div className="p-6">
      <nav className="flex justify-between">
        <div className="flex gap-2 lg:justify-between lg:gap-60">
          <Logo />
          <p>
            create<small>...</small>inspire<small>...</small>earn
          </p>
        </div>
        <ul className="flex gap-2 lg:justify-between lg:gap-20 lg:mr-20">
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
