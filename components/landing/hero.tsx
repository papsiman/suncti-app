"use client"

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import Navbar from "../common/navbar";
import { ChevronRight } from "lucide-react";
import AnimatedGradientText from "../magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import './hero.css'

const Hero = () => {
    return (
      <div className="h-[100vh] w-full bg-white bg-grid-black/[0.1] relative flex">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="w-full mt-4 md:mt-8">
          <div className="relative max-w-screen-xl mx-auto">
            <div className="mt-24 md:mt-28 border rounded-lg">
              <AuroraBackground className="h-[calc(100vh-10rem)]">
                <motion.div
                  initial={{ opacity: 0.0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  <div className="w-full flex flex-col justify-center items-center gap-4 md:gap-8 px-4 md:px-0">
                    <div className="max-w-[700px] text-2xl sm:text-4xl md:text-5xl font-black text-center text-slate-600">
                      The new{" "}
                      <span className="bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500 py-8">
                        Microsoft Teams
                      </span>{" "}
                      is now generally available.
                    </div>
                    <div className="font-extralight text-base md:text-2xl text-slate-600 py-4">
                      Collaborate more effectively with a faster, simpler, and
                      smarter Teams.
                    </div>
                    <a href="/landing/contact">
                      <AnimatedGradientText className="cursor-pointer">
                        🎉{" "}
                        <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
                        <span
                          className={cn(
                            `text-xl inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                          )}
                        >
                          Contact Us
                        </span>
                        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                      </AnimatedGradientText>
                    </a>
                  </div>
                </motion.div>
              </AuroraBackground>
            </div>
            <div className="absolute -top-20 md:-top-28 w-full">
              <Navbar />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Hero