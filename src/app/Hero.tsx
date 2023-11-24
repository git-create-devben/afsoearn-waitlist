import Mark from "@/components/mark";
import Image from "next/image";
import emoji1 from "../../public/images/emoji1.png"
import emoji2 from "../../public/images/emoji2.png"
import emoji3 from "../../public/images/emoji3.png"

export default function Hero() {
  return (
    <main className="p-10 w-full">
      <div className="bg-scolor p-4  mb-20 lg:w-[50%] m-auto rounded-md text-center">
        <h1 className="text-4xl">
          <span className="text-pcolor">WAIT</span>....lets do a quick reality
          check on you
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 p-2 place-content-around place-items-center lg:gap-4 gap-20">
        <div className="relative bg-scolor p-4  rounded-full gap-4 place-self-center">
          <p className="relative flex items-center">You have different social media account <span className="absolute -right-12"><Mark/></span></p> 
          <Image src={emoji3} alt="emoji" width={50} height={10} className="absolute"/>
        </div>
        <div className="bg-scolor p-4 w- rounded-full place-self-center">
        <p className="relative flex items-center">You have different social media account <span className="absolute -right-12"><Mark/></span></p> 
        <Image src={emoji2} alt="emoji" width={50} height={10} className="absolute"/>
        </div>
       
      </div>
      <div className="bg-scolor p-4  mb-20 lg:w-[22.5%] m-auto rounded-full mt-20">
      <p className="relative flex items-center">You have different social media account <span className="absolute -right-12"><Mark/></span></p> 
      <Image src={emoji1} alt="emoji" width={50} height={10} className="absolute"/>
        </div>

      <div className="text-center lg:text-4xl leading-loose mt-10 lg:mt-40 text-2xl">
        <h1>
       <small className="text-pcolor lg:text-4xl">LETS seeeee</small>....... <small className="text-pcolor text-4xl  hidden">Hmmm....</small>Hmmm...WEELLLL... <br/> YOU NEED AFSOEN!!!
        </h1>
      </div>
    </main>
  );
}
