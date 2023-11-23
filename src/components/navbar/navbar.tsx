import React from "react";
import Logo from "@/components/logo";

// type Props = {}

const navbar = () => {
  return (
    <div className="p-6">
      <nav>
        <div>
          <Logo />
          <p>
            create<small>...</small>inspire<small>...</small>earn
          </p>
        </div>
        <ul>
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
