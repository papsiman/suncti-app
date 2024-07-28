import Image from 'next/image';
import React from 'react'

export default function Quote() {
  return (
    <div id="contact">
      <div className="bg-[#18252f] relative">
        <div className="max-w-6xl mx-auto py-32">
          <div className="flex flex-col lg:flex-row justify-center items-start px-5 lg:px-0 gap-4 lg:gap-32">
            {/* Left */}
            <div className="w-full">
              <div>
                <div>
                  <h1 className="text-2xl md:text-5xl text-white">
                    Empower your vision,{" "}
                    <span className="text-primary">partner with us</span> today
                  </h1>
                </div>
                <div className="py-16">
                  <div className="grid grid-cols-12 justify-center items-center bg-secondary shadow-md rounded-xl p-12">
                    {/* Pic */}
                    <div className="col-span-3">
                      <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-20 rounded-full">
                          <Image src="/PLim.jpg" alt="" width={80} height={0} />
                        </div>
                      </div>
                    </div>
                    {/* Name */}
                    <div className="col-span-9 px-4">
                      <h4 className="text-primary">Thaweesak Limsardsanakij</h4>
                      <span className="text-white">
                        Senior Engineer
                      </span>
                    </div>
                    <div className="col-span-12 pt-3">
                      <p className="text-white">
                        To best serve you, let&apos;s get to know your requirements
                        first. Tell us about your project, and we&apos;ll arrange a
                        free consultation call to discuss how we can help.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right */}
            <div className="w-full">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6">
                  {/* First name */}
                  <label className="input input-bordered flex items-center bg-secondary text-white">
                    <input type="text" className="" placeholder="First name" />
                  </label>
                </div>
                <div className="col-span-12 md:col-span-6">
                  {/* Last name */}
                  <label className="input input-bordered flex items-center bg-secondary text-white">
                    <input type="text" className="" placeholder="Last name" />
                  </label>
                </div>
                <div className="col-span-12">
                  {/* Email */}
                  <label className="input input-bordered flex items-center bg-secondary text-white">
                    <input type="text" className="" placeholder="Email" />
                  </label>
                </div>
                <div className="col-span-12">
                  {/* Phone */}
                  <label className="input input-bordered flex items-center bg-secondary text-white">
                    <input
                      type="text"
                      className=""
                      placeholder="Phone number"
                    />
                  </label>
                </div>
                <div className="col-span-12">
                  {/* Tell us */}
                  <textarea
                    className="textarea textarea-bordered w-full h-36 bg-secondary text-white"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <div className="col-span-12">
                  <button className="btn btn-primary text-white w-full">
                    Get a Free Consult
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
