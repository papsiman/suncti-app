import CUSTOMER from "@/components/customer";
import HERO from "@/components/hero";
import MSTEAM from "@/components/msteam";
import PRICE from "@/components/price";
import Quote from "@/components/quote";
import SERVICE2 from "@/components/service2";
import SIKLL from "@/components/skill";
import SUNCTI from "@/components/suncti";
import Work from "@/components/work";

export default function Home() {
  return (
    <main>
      <HERO />
      <div className="max-w-5xl mx-auto">
        <div className="mt-0 md:mt-[-150px]">
          <SUNCTI />
        </div>
      </div>
      <MSTEAM />
      <Work />
      {/* <SERVICE /> */}
      <SERVICE2 />
      <div className="py-32">
        <SIKLL />
      </div>
      <PRICE />
      <CUSTOMER />
      <Quote />
    </main>
  );
}