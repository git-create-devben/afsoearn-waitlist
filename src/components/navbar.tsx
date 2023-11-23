import Logo from "@/components/logo";
import { Poppins } from "next/font/google";

const navbar = () => {
  return (
    <div className="p-12">
      <nav className="flex justify-between items-center">
        <div className="flex gap-2 lg:justify-between lg:gap-60 items-center ">
          <Logo />

          <p className="text-md uppercase sm:hidden xs:hidden lg:block text-pcolor lg:md ">
            create<small className="text-white">...</small>inspire<small className="text-white">...</small>earn
          </p>
        </div>

        <ul className="flex gap-2 text-sm lg:text-lg lg:justify-between lg:gap-20 lg:mr-20">
          <li >
            <small className="text-pcolor">.</small>About Us
          </li>

          <li>
            <small className="text-pcolor">.</small>Mission
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default navbar;
