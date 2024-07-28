import NAVBAR from "@/components/navbar";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div
      className="flex flex-col bg-fixed"
      style={{
        backgroundImage: `url(${"/ab-2.jpg"})`,
        backgroundSize: "cover",
      }}
    >
      {/* Heder */}
      <div className="w-full h-[50vh] bg-secondary relative">
        <div className="absolute top-64 left-[calc(50vw-100px)] text-white flex flex-col justify-center items-center gap-4">
          <h2 className="text-5xl font-semibold">About Us</h2>
          <div className="breadcrumbs text-sm">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
        <div className="absolute w-full">
          <NAVBAR />
        </div>
      </div>
      {/* Content */}
      <div>
        <div className="my-16 flex justify-center items-center">
          <div className="card glass w-[calc(600px)]">
            <div className="card-body">
              <h2 className="text-2xl">SunCTI</h2>
              <p className="indent-10">
                  SunCTI is a Microsoft Communications & Cloud partner. We
                  offers Consultants, Implement and Operate of the Skype for
                  Business (On-premise/Online) & Microsoft Teams in Thailand and
                  ASEAN country. More than sixteen years our experiences in
                  enterprise voice area. We target to be the best partner of
                  customers to smooth transition the traditional telephone
                  system to Skype for Business technology in order to improve
                  their productivity.
                </p>
                <p className="indent-10">
                  SunCTI’s methodology adoption of Skype for business framework
                  ( Plan, Deliver and Operate) is our key success to deliver
                  high quality and reliability deployment the SFB system to
                  customers.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
