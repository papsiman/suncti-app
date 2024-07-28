import Image from "next/image";
import NAVBAR from "./navbar";
import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faPhone,
  faFax,
} from "@fortawesome/free-solid-svg-icons";

const HERO = () => {
    return (
      <div className="w-full h-screen bg-[#f3f3f3]">
        <div className="relative h">
          {/* <div className="absolute w-28 h-64 -left-12 -top-14 rotate-[35deg] bg-primary"></div> */}
          <div className="absolute w-1 h-72 left-20 -top-10 rotate-[35deg] bg-primary opacity-15"></div>
          <div className="absolute w-1 h-72 left-20 -top-20 rotate-[35deg] bg-primary opacity-15"></div>
          {/* Navbar */}
          <NAVBAR />
          <div className="pt-44 md:pt-64"></div>
          <div className="">
            <div className="flex flex-col md:flex-row justify-between items-center px-8 lg:px-32 gap-10">
              {/* LEFT */}
              <div className="w-full md:w-1/2 flex flex-col items-center sm:items-start gap-8">
                <p className="text-primary text-[19px]">
                  Trusted Business Partner.
                </p>
                <h1 className="text-xl md:text-4xl lg:text-5xl xl:text-6xl">
                  The new{" "}
                  <span className="text-primary font-semibold">
                    Microsoft Teams Phone
                  </span>
                  {" "}is now generally{" "}available.
                </h1>
                <p className="hidden sm:flex text-xl">
                  Collaborate more effectively with a faster, simpler, and
                  smarter Teams.
                </p>
                <div>
                  <Link href="/contact" className="btn btn-primary rounded-3xl px-10 text-white">
                    Contact Us
                  </Link>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-full md:w-1/2 flex h-full justify-center items-center relative pt-16 md:pt-0">
                <div className="absolute left-50 top-50 w-96 h-96 bg-red-300 opacity-20 mask mask-squircle"></div>
                {/* Contact */}
                <div className="hidden sm:flex absolute -bottom-40 md:-bottom-40 right-0 md:right-[calc(50%-200px)]">
                  <div className="flex flex-row justify-end gap-2">
                    <div>
                      <h4 className="text-xl">
                        <FontAwesomeIcon
                          icon={faPhone}
                          className="text-gray-500"
                        />
                        {" "}+662-111-6066
                      </h4>
                    </div>
                    <div className="divider lg:divider-horizontal"></div>
                    <div>
                      <h4 className="text-xl">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="text-gray-500"
                        />
                        {" "}Kit@suncti.co.th
                      </h4>
                    </div>
                  </div>
                </div>
                {/* World */}
                <Image
                  src="/world.png"
                  alt=""
                  width={250}
                  height={250}
                  className="animate-spin"
                />
                {/* Signal */}
                <div className="hidden md:flex absolute -bottom-12 right-0">
                  <div className="flex flex-row justify-end items-end gap-2">
                    <div className="w-5 h-10 bg-primary"></div>
                    <div className="w-5 h-16 bg-primary"></div>
                    <div className="w-5 h-20 bg-primary"></div>
                  </div>
                </div>
                {/* Team Left */}
                <div className="hidden md:flex absolute left-[calc(50%-200px)] top-0">
                  <div className="w-14 h-14 flex justify-center items-center -rotate-[55deg] rounded-full ring-primary-2 relative">
                    <Image
                      src="/service/1.png"
                      alt=""
                      width={32}
                      height={0}
                      className=""
                      style={{ height:"auto" }}
                    />
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  </div>
                </div>
                {/* Team Right */}
                <div className="hidden md:flex absolute right-[calc(50%-200px)] top-0">
                  <div className="w-14 h-14 flex justify-center items-center rotate-[52deg] rounded-full ring-primary-2 relative">
                    <Image
                      src="/service/1.png"
                      alt=""
                      width={32}
                      height={0}
                      className=""
                      style={{ height:"auto" }}
                    />
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  </div>
                </div>
                {/* Team Bottom */}
                <div className="hidden md:flex absolute right-[calc(50%)] bottom-[calc(50%-200px)]">
                  <div className="w-14 h-14 flex justify-center items-center rotate-[52deg] rounded-full ring-primary-2 relative">
                    <Image
                      src="/service/1.png"
                      alt=""
                      width={32}
                      height={0}
                      className=""
                      style={{ height:"auto" }}
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