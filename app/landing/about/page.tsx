"use client";

import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import Suncti from "@/components/landing/suncti";
import Link from "next/link";

const About = () => {
  return (
    <div className="h-[100vh] w-full bg-white bg-grid-black/[0.2] relative flex">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="w-full mt-4 md:mt-8">
        <div className="relative">
          <div className="mt-24 md:mt-52 mb-10 max-w-screen-xl mx-auto">
            <div className="bg-white p-16 border rounded-lg">
              <Suncti />
            </div>
          </div>
          <div>
            <Footer />
          </div>
          <div className="absolute -top-20 md:-top-60 w-full">
            <div className="">
              <Navbar />
            </div>
            <div className="h-32 hidden md:flex justify-center items-center bg-slate-100 text-slate-600">
              <div className="breadcrumbs text-2xl font-bold">
                <ul>
                  <li>
                    <Link href="/" className="underline">
                      Home
                    </Link>
                  </li>
                  <li>About</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
