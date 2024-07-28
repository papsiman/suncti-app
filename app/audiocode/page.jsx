import NAVBAR from '@/components/navbar'
import React from 'react'

export default function AudioCode() {
  return (
    <div className="flex flex-col">
      {/* Heder */}
      <div className="w-full h-[50vh] bg-secondary relative">
        <div className="absolute top-64 left-[calc(50vw-127px)] text-white flex flex-col justify-center items-center gap-4">
          <h2 className="text-5xl font-semibold">Audiocodes</h2>
          <div className="breadcrumbs text-sm">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Product</li>
              <li>Audiocodes</li>
            </ul>
          </div>
        </div>
        <div className="absolute w-full">
          <NAVBAR />
        </div>
      </div>
      {/* Content */}
      <div>
        <div
          className="grid grid-cols-12 justify-center items-center bg-white shadow-xl rounded-lg py-36 px-20 gap-2 md:gap-4"
          style={{
            backgroundImage: `url(${"/bg2.png"})`,
            backgroundSize: "cover",
          }}
        >
          <div className="col-span-1"></div>
          <div className="col-span-12 md:col-span-5 mx-auto">
            <img src="/audiocodes.webp" alt="" className="rounded-lg" />
          </div>
          <div className="col-span-12 md:col-span-5">
            <div className="max-w-6xl flex flex-col gap-2">
              <h2 className="text-4xl font-semibold">Overview</h2>
              <p className="font-medium text-gray-400 indent-10">
              SunCTI is Audiocodes Official Partner in Thailand. We have local Audiocodes&apos;s certified engineer to implement and provide aftersale service for our customers.
              </p>
              <p className="font-medium text-gray-400 indent-10">
              AudioCodes is a global company with an enduring commitment to the foundation of all human communications - voice.
              </p>
              <p className="font-medium text-gray-400 indent-10">
              We design, manufacture and sell advanced Voice over IP and converged VoIP and data networking products, applications and professional services to global enterprises, medium and small business, as well as to service providers globally.
              </p>
              <p className="font-medium text-gray-400 indent-10">
              Our extensive product range includes IP phones, session border controllers (SBCs), media gateways, mobile VoIP clients, multi-service business routers (MSBRs), routing applications, call recording, voice dialing, and more.
              </p>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
    </div>
  )
}
