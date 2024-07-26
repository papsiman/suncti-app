import CUSTOMER from "@/components/customer";
import HERO from "@/components/hero";
import MSTEAM from "@/components/msteam";
import PRICE from "@/components/price";
import SERVICE from "@/components/Service";
import SIKLL from "@/components/skill";
import SUNCTI from "@/components/suncti";

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
      <SERVICE />
      <SIKLL />
      <PRICE />
      <CUSTOMER />
    </main>
  );
}