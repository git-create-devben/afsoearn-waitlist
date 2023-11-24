import Image from "next/image";
import rectangle1 from "../../public/images/Rectangle (1).png";
import rectangle2 from "../../public/images/Rectangle (2).png";
import rectangle3 from "../../public/images/Rectangle.png";
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
      <section className="flex justify-between text-center">
        <div>
          <h1 className="text-6xl font-extrabold">How it works</h1>
          <p>
            Afsoen is an advanced social media app for royalties to monetize
            their content
          </p>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <span></span>
              <p></p>
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
