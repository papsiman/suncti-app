import NAVBAR from "@/components/navbar";
import React from "react";

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Heder */}
      <div className="w-full h-[50vh] bg-secondary relative">
        <div className="absolute top-64 left-[calc(50vw-120px)] text-white flex flex-col justify-center items-center gap-4">
          <h2 className="text-6xl font-semibold">About Us</h2>
          <div className="breadcrumbs text-sm">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
        <div className="absolute top-10 w-full">
          <NAVBAR />
        </div>
      </div>
      {/* Content */}
      <div>
        <div
          className="grid grid-cols-12 justify-center items-center bg-white shadow-xl rounded-lg py-36 px-20 gap-4 md:gap-8"
          style={{
            backgroundImage: `url(${"/bg2.png"})`,
            backgroundSize: "cover",
          }}
        >
          <div className="col-span-12 md:col-span-7 mx-auto">
            <img src="/ab-2.jpg" alt="" className="rounded-lg" />
          </div>
          <div className="col-span-12 md:col-span-5">
            <div className="max-w-[1200px] flex flex-col gap-4">
              <h2 className="text-4xl font-semibold">SunCTI</h2>
              <p className="font-medium text-gray-400 indent-10">
                SunCTI is a Microsoft Communications & Cloud partner. We offers
                Consultants, Implement and Operate of the Skype for Business
                (On-premise/Online) & Microsoft Teams in Thailand and ASEAN
                country. More than sixteen years our experiences in enterprise
                voice area. We target to be the best partner of customers to
                smooth transition the traditional telephone system to Skype for
                Business technology in order to improve their productivity.
              </p>
              <p className="font-medium text-gray-400 indent-10">
                SunCTI’s methodology adoption of Skype for business framework (
                Plan, Deliver and Operate) is our key success to deliver high
                quality and reliability deployment the SFB system to customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
