import Image from "next/image";
import NAVBAR from "./navbar";
const HERO = () => {
    return (
      <div className="w-full h-screen bg-[#f3f3f3]">
        <div>
          <NAVBAR />
          <div className="pt-44 md:pt-60"></div>
          <div className="">
            <div className="flex flex-col md:flex-row justify-between items-center px-8 lg:px-32 gap-10">
              {/* LEFT */}
              <div className="w-1/2 flex flex-col gap-8">
                <p className="text-primary text-[19px]">
                  Trusted Business Partner.
                </p>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl">
                  The new{" "}
                  <span className="text-primary font-semibold">
                    Microsoft Teams Phone
                  </span>{" "}
                  is now generally{" "}
                  <span className="font-semibold">available</span>.
                </h1>
                <p className="overflow-hidden whitespace-nowrap text-xl">
                  Collaborate more effectively with a faster, simpler, and
                  smarter Teams.
                </p>
                <div>
                  <button className="btn btn-primary text-white">
                    Expore More
                  </button>
                </div>
              </div>
              <div className="w-1/2 flex justify-center items-center">
                <Image src="/world.png" alt="" width={250} height={250} className="animate-spin"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HERO;