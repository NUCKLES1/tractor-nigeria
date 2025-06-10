import React from "react";
import { Zap } from "lucide-react";
import Image from "next/image";

const Section2 = () => {
  return (
    <div className="lg:flex w-full h-screen max-md:h-[70vh] bg-black rounded-4xl overflow-hidden">
      <div className="p-8 lg:flex lg:w-1/2 lg:flex-col gap-10">
        <div className="p-3 rounded-full h-12 w-12 bg-white">
          <Zap />
        </div>
        <p className="text-white max-md:pt-8 lg:text-6xl text-3xl">Globalizing the Nigerian Dream</p>
        <p className="ub lg:text-xl max-md:pt-4 text-[#808080]">
          Make a purchase or request a rental without the need to leave your
          confort or location. Welcome to the future of farming.
        </p>
        <p className="ub text-md text-[#808080]">
          Make a purchase or request a rental without the need to leave your
          confort or location. Welcome to the future of farming.
        </p>
      </div>
      <div className="lg:w-1/2 overflow-hidden">
        <Image
          className="dark:invert lg:ml-15 max-md:mt-5 mt-25 h-10/12 object-cover rounded-t-4xl relative"
          src="/tractors.jpg"
          alt="Next.js logo"
          width={400}
          height={900}
          priority
        />
      </div>
    </div>
  );
};

export default Section2;
