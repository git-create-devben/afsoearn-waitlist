import Image from "next/image";
import Love from "../../public/images/ezgif 3.png";
import Screen from "../../public/images/screen.png";
import Circle from "../../public/images/Ellipse 7.png";
import Frame from "../../public/images/Frame 1000004055.png";
import Hero from "./Hero";
const Header = () => {
  return (
    <>
      <section>
        <div className="grid lg:grid-cols-2 ">
          <div className="relative">
            <div className="grid grid-cols-2 space-x-[30rem] ml-10 ">
              <Image src={Frame} alt="frame" width={150} height={50} className="ml-60"/>
              <Image
                src={Love}
                alt="frame"
                width={150}
                height={50}
                className="mt-[-2rem]"
              />
              <Image
                src={Circle}
                alt="frame"
                width={200}
                height={50}
                className="mt-[6rem] ml-20"
              />
            </div>
            <div className="space-y-2 absolute mt-[-12rem] ml-16">
              <h1 className="lg:text-[5rem] leading-tight text-bold text-4xl">
                WELCOME YOUR <br />
                <span className="text-pcolor">HIGHNESS</span>
              </h1>
              <p>we have been waiting for you</p>
            </div>
          </div>
          <div className="lg:ml-60 relative">
            <Image
              src={Screen}
              alt="frame"
              width={300}
              height={100}
              className=""
            />
            <div></div>
          </div>
        </div>
        <section>
          <Hero />
        </section>
      </section>
    </>
  );
};

export default Header;
