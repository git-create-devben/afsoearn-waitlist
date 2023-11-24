import Mark from "@/components/mark";

export default function Hero() {
  return (
    <main className="p-10 w-full">
      <div className="bg-scolor p-4  mb-20 lg:w-[50%] m-auto rounded-md">
        <h1 className="text-4xl">
          <span className="text-pcolor">WAIT</span>....lets do a quick reality
          check on you
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 p-2 place-content-around place-items-center gap-4">
        <div className="relative bg-scolor p-4  rounded-md gap-4 place-self-center">
          <p>You have different social media account</p> <span><Mark/></span>
        </div>
        <div className="bg-scolor p-4 w- rounded-md place-self-center">
          <p>You have different social media account</p>
        </div>
       
      </div>
      <div className="bg-scolor p-4  mb-20 lg:w-[22.5%] m-auto rounded-md mt-20">
          <p>You have different social media account</p>
        </div>

      <div className="text-center lg:text-4xl leading-loose mt-10 lg:mt-40 text-2xl">
        <h1>
       <small className="text-pcolor lg:text-4xl">LETS seeeee</small>....... <small className="text-pcolor text-4xl  hidden">Hmmm....</small>Hmmm...WEELLLL... <br/> YOU NEED AFSOEN!!!
        </h1>
      </div>
    </main>
  );
}
