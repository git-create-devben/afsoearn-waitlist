import Image from "next/image";
import Love from "../../public/images/ezgif 3.png"
import Screen from "../../public/images/screen.png"
import Circle from "../../public/images/Ellipse 7.png"
import Frame from "../../public/images/Frame 1000004055.png"
const Header = () => {
  return (
    <section>
     <div className="grid lg:grid-cols-2">
     <div className="relative">
      <div className="grid grid-cols-2  space-x-60 ml-10 ">
        <Image src={Frame} alt="frame" width={150} height={50}/>
        <Image src={Love} alt="frame" width={150} height={50} className="mt-[-2rem]"/>
        <Image src={Circle} alt="frame" width={150} height={50} className="mt-40 "/>
      </div>
      <div className="space-y-2 absolute mt-[-14rem] ml-16">
        <h1 className="lg:text-8xl text-bold text-4xl">WELCOME YOUR <br/> <span className="text-pcolor">HIGHNESS</span> </h1>
        <p>we have been waiting for you</p>
      </div>
     </div>
     <div className="lg:ml-10 relative">
     <Image src={Screen} alt="frame" width={100} height={100} className="w-[29%] "/>
     <div>
     </div>
     </div>
     </div>

    </section>
  );
};

export default Header;
