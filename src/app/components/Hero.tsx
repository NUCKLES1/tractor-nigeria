import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex h-screen max-md:h-[70vh] max-md:block w-full pt-20">
      <div className="absolute inset-0 max-md:h-[70vh] bg-gradient-to-r from-blue-900/90 to-transparent z-10"></div>
      <div
        className="absolute inset-0 bg-cover max-md:h-[70vh] bg-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Futuristic%20tractor%20working%20in%20field%20at%20sunset%2C%20advanced%20technology%2C%20drone%20view%2C%20cinematic%20lighting%2C%20dramatic%20sky%20with%20tech-inspired%20color%20palette%2C%20photorealistic%2C%20high%20resolution%2C%20wide%20angle%20shot%20showing%20vast%20agricultural%20landscape&width=1440&height=600&seq=hero&orientation=landscape')`,
        }}
      ></div>
      <div className="flex relative text-white z-30 w-[40%] max-md:w-10/12 mt-2 flex-col gap-[26px] row-start-2 md:items-start">
        <h1 className=" text-6xl max-md:text-5xl font-bold">
          The Future of Farming is Here
        </h1>
        <ol className="list-inside text-sm/6 text-left sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Experience next-generation agricultural technology with our
            cutting-edge tractors. Buy, rent, or service - all in one place.
          </li>
        </ol>

        <div className="flex gap-4 lg:items-center  max-md:flex-row relative z-0">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white !rounded-button whitespace-nowrap cursor-pointer">
                <ShoppingCart className="h-4 w-4 mr-1" />
            Order now
          </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 !rounded-button whitespace-nowrap cursor-pointer">
            Rent Now
          </Button>
        </div>
      </div>
      <div className="absolute max-md:mt-30 lg:bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
    </div>
  );
};

export default Hero;
