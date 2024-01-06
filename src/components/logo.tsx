import Logos from "../../public/images/logo 2 (1).png";
import Image from "next/image";
import Link from "next/link";
export default function Logo() {
  return (
    <div className="text-sm lg:text-lg flex items-center gap-2">
      <Link href="/" className="flex items-center gap-2">
      <Image src={Logos} alt="logo" width={50} height={25} className="mb-4"/>
      <p className="hidden sm:hidden lg:flex">
        AFSOEARN...<small className="text-pcolor text-md">....</small>
      </p>
      </Link>
    
    </div>
  );
}
