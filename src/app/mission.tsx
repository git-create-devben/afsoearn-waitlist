import Image from "next/image";
import rectangle1 from "../../public/images/Rectangle (1).png";
import rectangle2 from "../../public/images/Rectangle (2).png";
import rectangle3 from "../../public/images/Rectangle.png";
import merch from "../../public/images/merch.png";
import merch2 from "../../public/images/merch2.png";
import coins from "../../public/images/Ellipse 7.png";
import frame from "../../public/images/Frame 1000004062.png";
export default function Mission() {
  return (
    <main className="flex flex-col p-2">
      <section className="grid lg:grid-cols-3 grid-cols-2 shrink-0 place-content-around px-12 ">
        <Image
          src={rectangle2}
          alt="rectangle2"
          width={600}
          height={100}
          className=" "
        />
        <Image
          src={rectangle3}
          alt="rectangle3"
          width={600}
          height={100}
          className="lg:-mt-20 "
        />
        <Image
          src={rectangle1}
          alt="rectangle3"
          width={600}
          height={100}
          className="self-center"
        />
      </section>
      <section className="flex justify-between text-center p-10">
        <div>
          <h1 className="text-6xl font-extrabold">How it works</h1>
          <p className="text-2xl ">
            Afsoen is an advanced social media app <br />
            for royalties to monetize their content
          </p>
          <div className="grid grid-cols-2 gap-10">
            <div className="w-60 flex flex-col justify-center items-center">
              <Image
                src={coins}
                alt="coins"
                width={100}
                height={100}
                className=""
              />
              <span className="text-pcolor text-1xl">Crown contributions</span>
              <p className="text-left">
                Get unlimited drown contributions of donations from fans who
                love your contents
              </p>
            </div>
            <div className="w-60 flex flex-col justify-center items-center">
              <Image
                src={merch2}
                alt="coins"
                width={100}
                height={100}
                className=""
              />
              <span className="text-pcolor text-1xl">Premium videos</span>
              <p className="text-left">
                Create premium contents that fans can pay to watch or watch for
                free depending on you
              </p>
            </div>
            <div className="w-60 flex flex-col justify-center items-center">
              <Image
                src={merch}
                alt="coins"
                width={100}
                height={100}
                className=""
              />
              <span className="text-pcolor text-1xl">sales of merchandise</span>
              <p className="text-left">
                Sale your customized items or limited items to your fans and
                make a sustainable income
              </p>
            </div>
            <div className="w-60 flex flex-col justify-center items-center">
              <Image
                src={frame}
                alt="coins"
                width={100}
                height={100}
                className=""
              />
              <span className="text-pcolor text-1xl">
                personal AI assistant
              </span>
              <p className="text-left">
                There is an artificial intelligence tailored to every creators
                need .it might be in our next app update .
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <div>first</div>
          <div>second</div>
          <div>third</div>
        </div>
      </section>
    </main>
  );
}
