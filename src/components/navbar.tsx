import Logo from "@/components/logo";

const navbar = () => {
  return (
    <div className="p-6">
      <nav className="flex justify-between">
        <div className="flex gap-2 lg:justify-between lg:gap-60">
          <Logo />

          <p className="text-md uppercase sm:hidden xs:hidden lg:block text-pcolor lg:md ">
            create<small className="text-white">...</small>inspire<small className="text-white">...</small>earn
          </p>
        </div>

        <ul className="flex gap-2 text-sm lg:text-lg lg:justify-between lg:gap-20 lg:mr-20">
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
