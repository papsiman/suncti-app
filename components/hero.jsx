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
              <div className="w-full md:w-1/2 flex flex-col gap-8">
                <p className="text-primary text-[19px]">
                  Trusted Business Partner.
                </p>
                <h1 className="text-xl md:text-4xl lg:text-5xl xl:text-6xl">
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
              <div className="flex w-1/2 h-full justify-center items-center relative pt-16 md:pt-0">
                <div className="absolute left-50 top-50 w-96 h-96 bg-red-300 opacity-20 mask mask-squircle"></div>
                <Image
                  src="/world.png"
                  alt=""
                  width={250}
                  height={250}
                  className="animate-spin"
                />
                <div className="hidden md:flex absolute -bottom-12 right-0">
                  <div className="flex flex-row justify-end items-end gap-2">
                    <div className="w-5 h-10 bg-primary"></div>
                    <div className="w-5 h-16 bg-primary"></div>
                    <div className="w-5 h-20 bg-primary"></div>
                  </div>
                </div>
                <div className="hidden md:flex absolute left-0 md:left-10 xl:left-36 top-0">
                  <div className="w-14 h-14 flex justify-center items-center -rotate-[55deg] rounded-full ring-primary-2 relative">
                    <Image
                      src="/service/1.png"
                      alt=""
                      width={32}
                      height={0}
                      className=""
                    />
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  </div>
                </div>
                <div className="hidden md:flex absolute right-0 md:right-10 xl:right-36 top-0">
                  <div className="w-14 h-14 flex justify-center items-center rotate-[52deg] rounded-full ring-primary-2 relative">
                    <Image
                      src="/service/1.png"
                      alt=""
                      width={32}
                      height={0}
                      className=""
                    />
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HERO;