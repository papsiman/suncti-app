import Image from "next/image";
import React from "react";

function Work() {
  return (
    <div className="bg-base-200 x-12">
      <div className="max-w-6xl mx-auto pt-32 pb-0 sm:pb-32">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl md:text-5xl font-semibold">Why work with us</h2>
        </div>
        <div className="pb-0 pt-32 sm:py-32">
          <div className="flex flex-wrap justify-center items-stretch gap-4">
            {/* Card 1 */}
            <div className="max-w-lg bg-white shadow-lg rounded-lg py-10 px-2">
              <div className="grid grid-cols-12">
                {/* Left */}
                <div className="col-span-2">
                  <div className="flex flex-row justify-center items-center">
                    <div className="bg-primary p-3 rounded-2xl">
                      <Image src="/work/1.avif" alt="" width={32} height={32}/>
                    </div>
                  </div>
                </div>
                {/* Right */}
                <div className="col-span-10">
                  <div className="flex flex-col gap-4">
                    <h4 className="text-xl font-semibold">Specialization</h4>
                    <span>
                      Building on 5 years of Next.js focus, we are the industry
                      leader in providing unmatched expertise and experience for
                      headless web implementations, delivering top-notch
                      solutions for businesses seeking a specialized partner.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="max-w-lg bg-white shadow-lg rounded-lg py-10 px-2">
              <div className="grid grid-cols-12">
                {/* Left */}
                <div className="col-span-2">
                  <div className="flex flex-row justify-center items-center">
                    <div className="bg-primary p-3 rounded-2xl">
                      <Image src="/work/2.avif" alt="" width={32} height={32} />
                    </div>
                  </div>
                </div>
                {/* Right */}
                <div className="col-span-10">
                  <div className="flex flex-col gap-4">
                    <h4 className="text-xl font-semibold">
                      Consulting approach
                    </h4>
                    <span>
                      We understand that communication is key to any successful
                      project. We not only excel at developing high-quality
                      solutions, but we also offer extensive consulting
                      expertise, helping our clients make more informed
                      decisions.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="max-w-lg bg-white shadow-lg rounded-lg py-10 px-2">
              <div className="grid grid-cols-12">
                {/* Left */}
                <div className="col-span-2">
                  <div className="flex flex-row justify-center items-center">
                    <div className="bg-primary p-3 rounded-2xl">
                      <Image src="/work/3.avif" alt="" width={32} height={32} />
                    </div>
                  </div>
                </div>
                {/* Right */}
                <div className="col-span-10">
                  <div className="flex flex-col gap-4">
                    <h4 className="text-xl font-semibold">
                      Speed & flexibility
                    </h4>
                    <span>
                      We understand the importance of business value in software
                      solutions. We fear no deadline. For urgent projects, we
                      can flexibly scale our team to adapt to your timeline.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="max-w-lg bg-white shadow-lg rounded-lg py-10 px-2">
              <div className="grid grid-cols-12">
                {/* Left */}
                <div className="col-span-2">
                  <div className="flex flex-row justify-center items-center">
                    <div className="bg-primary p-3 rounded-2xl">
                      <Image src="/work/2.avif" alt="" width={32} height={32} />
                    </div>
                  </div>
                </div>
                {/* Right */}
                <div className="col-span-10">
                  <div className="flex flex-col gap-4">
                    <h4 className="text-xl font-semibold">Stability</h4>
                    <span>
                      We prioritize lasting partnerships with our clients and
                      maintain consistent team composition throughout the entire
                      project to build trust and a deep understanding of your
                      businesses.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
