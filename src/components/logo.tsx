import Logos from "../../public/images/logo 2 (1).png";
import Image from "next/image";
export default function Logo() {
  return (
    <div className="text-sm lg:text-lg flex items-center ">
      <Image src={Logos} alt="logo" width={50} height={25} />
      <p>
        AFSOEARN...<small className="text-pcolor text-md">....</small>
      </p>
    </div>
  );
}
