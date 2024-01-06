import Image from "next/image";
import Love from "../../public/images/ezgif 3.png";
import Screen from "../../public/images/screen2.png";
import Circle from "../../public/images/Ellipse 7.png";
import Frame from "../../public/images/Frame 1000004055.png";
import Hero from "./Hero";
import Mission from "./mission";
import Subscribe from "@/components/subscribe";
const Header = () => {
  return (
    <>
      <section>
        <div className="grid lg:grid-cols-2 ">
          <div className="relative">
            <div className="grid grid-cols-2 lg:space-x-[30rem]  ">
              <Image src={Frame} alt="frame" width={150} height={50} className="lg:ml-60"/>
              <Image
                src={Love}
                alt="frame"
                width={150}
                height={50}
                className="lg:mt-[-2rem]"
              />
              <Image
                src={Circle}
                alt="frame"
                width={200}
                height={50}
                className="mt-[6rem] lg:ml-20 ml-48"
              />
            </div>
            <div className="space-y-2 absolute lg:mt-[-12rem] lg:ml-32 -mt-60">
              <h1 className="lg:text-[5.5rem] leading-tight text-bold text-5xl">
                WELCOME YOUR <br />
                <span className="text-pcolor">HIGHNESS</span>
              </h1>
              <p>we have been waiting for you</p>
            </div>
          </div>
          <div className="relative -ml-20">
            <Image
              src={Screen}
              alt="frame"
              width={900}
              height={100}
              className=""
            />
            <div></div>
          </div>
        </div>
        <section className="mt-10">
          <Hero />
        </section>
      </section>
      <section className="mt-8">
        <Mission/>
      </section>
      <section>
        <Subscribe/>
      </section>
    </>
  );
};

export default Header;
