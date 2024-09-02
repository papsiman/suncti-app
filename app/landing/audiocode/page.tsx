"use client";

import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import Link from "next/link";

const AudioCode = () => {
  return (
    <div className="h-[100vh] w-full bg-white bg-grid-black/[0.2] relative flex">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="w-full mt-4 md:mt-8">
        <div className="relative">
          <div className="mt-24 md:mt-52 mb-10 max-w-screen-xl mx-auto">
            <div className="bg-white p-16 border rounded-lg">
              <div className="grid grid-cols-12 justify-center items-center bg-white gap-2 md:gap-4">
                <div className="col-span-1"></div>
                <div className="col-span-12 md:col-span-5 mx-auto">
                  <img src="/audiocodes.webp" alt="" className="rounded-lg" />
                </div>
                <div className="col-span-12 md:col-span-5">
                  <div className="max-w-6xl flex flex-col gap-2">
                    <h2 className="text-4xl font-semibold">Overview</h2>
                    <p className="font-medium text-gray-400 indent-10">
                      SunCTI is Audiocodes Official Partner in Thailand. We have
                      local Audiocodes&apos;s certified engineer to implement
                      and provide aftersale service for our customers.
                    </p>
                    <p className="font-medium text-gray-400 indent-10">
                      AudioCodes is a global company with an enduring commitment
                      to the foundation of all human communications - voice.
                    </p>
                    <p className="font-medium text-gray-400 indent-10">
                      We design, manufacture and sell advanced Voice over IP and
                      converged VoIP and data networking products, applications
                      and professional services to global enterprises, medium
                      and small business, as well as to service providers
                      globally.
                    </p>
                    <p className="font-medium text-gray-400 indent-10">
                      Our extensive product range includes IP phones, session
                      border controllers (SBCs), media gateways, mobile VoIP
                      clients, multi-service business routers (MSBRs), routing
                      applications, call recording, voice dialing, and more.
                    </p>
                  </div>
                </div>
                <div className="col-span-1"></div>
              </div>
            </div>
          </div>
          <div>
            <Footer />
          </div>
          <div className="absolute -top-52 md:-top-60 w-full">
            <div className="">
              <Navbar />
            </div>
            <div className="h-32 flex justify-center items-center bg-slate-100 text-slate-600">
              <div className="breadcrumbs text-2xl font-bold">
                <ul>
                  <li>
                    <Link href="/" className="underline">
                      Home
                    </Link>
                  </li>
                  <li>Product</li>
                  <li>Microsoft Team</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioCode;
