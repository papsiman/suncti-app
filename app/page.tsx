import Footer from "@/components/common/footer";
import Customer from "@/components/landing/customer";
import Hero from "@/components/landing/hero";
import MsteamComponent from "@/components/landing/msteam.component";
import Price from "@/components/landing/price";
import Quote from "@/components/landing/quote";
import Skill from "@/components/landing/skill";
import Suncti from "@/components/landing/suncti";
import Work from "@/components/landing/work";
import WhatWeDo from "@/components/landing/whatwedo";

export default function Home() {
  return (
    <main>
      <div className="mx-4">
        <Hero />
        <div className="max-w-screen-xl mx-auto mt-0 md:mt-10">
          <Suncti />
        </div>
        <div className="max-w-screen-xl mx-auto mt-10 border rounded-xl md:px-8 md:pb-8">
          <MsteamComponent />
        </div>
      </div>
      <div className="mt-10">
        <Work />
      </div>
      <WhatWeDo />
      <Skill />
      <Price />
      <Customer />
      <Quote />
      <Footer />
    </main>
  );
}
