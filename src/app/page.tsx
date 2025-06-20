
import Hero from "./components/Hero";
import Section2 from "./components/Section2";
import Revolution from "./components/Revolution";
import Tractor from "./components/Tractor";
import Footer from "./components/Footer";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";
import Ourservice from "./components/Ourservice";


export default function Home() {
  return (
    <div className="items-center bg-black justify-items-center max-md:px-4 px-8 pb-20 overflow-hidden sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <Revolution />
      <Tractor />
      <Service />
      <Testimonial />
      <Ourservice />
      <Section2 />
      <Footer />
    </div>
  );
}
