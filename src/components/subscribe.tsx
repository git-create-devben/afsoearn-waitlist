"use client"

import React from "react";
import Image from "next/image";
import Love from "../../public/images/ezgif 3.png";
import Circle from "../../public/images/Ellipse 7.png";
import logo1 from "../../public/images/merch2.png";
import logo from "../../public/images/logo 2 (1).png";
import "./component.css"

const subscribe = () => {
  return (
    <React.Fragment>
      <main className="relative">
        {/* background image with blur */}
        <div className="flex justify-between translate-y-40">
          <div className="flex gap-10">
            <Image
              src={Love}
              alt="frame"
              width={200}
              height={50}
              className="lg:mt-[-2rem]"
            />
            <Image
              src={logo}
              alt="frame"
              width={200}
              height={50}
              className="lg:mt-[-2rem]"
            />
          </div>

          <div>
            <Image
              src={logo1}
              alt="frame"
              width={200}
              height={50}
              className="lg:mt-[-2rem] -translate-y-20"
            />
          </div>
        </div>
        <div className="backdrop-brightness-1 backdrop-opacity-2 bg-opacity-75 backdrop-blur-sm bg-[#cccccc21c]/30 absolute w-[100%] flex  items-center flex-col h-96 -mt-28 gap-8">
          <h1 className="text-white lg:text-5xl text-center text-3xl font-black">Join other creators in our waitlist</h1>
          <form action="https://formsubmit.co/afsoenteam@gmail.com" method="POST" name="email" className="input-container mt-6">
          <input type="text" placeholder="Input Email"/>
  <button className="button text-sm">Subscribe</button>
          </form>
        </div>
      </main>
    </React.Fragment>
  );
};

export default subscribe;
