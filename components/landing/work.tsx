"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Wrapper from "../common/warpper";
import Container from "../common/container";
import { IContent } from "@/app/db";
import ContentEdit from "./content.edit";

function Work() {

  const [refresh, setRefresh] = useState(0);

  const inputContent = {} as IContent;
  inputContent.Component = "work";

  const [workTitle, setWorkTitle] = useState<IContent>();
  const [work1, setWork1] = useState<IContent>();
  const [work2, setWork2] = useState<IContent>();
  const [work3, setWork3] = useState<IContent>();
  const [work4, setWork4] = useState<IContent>();

  useEffect(() => {
    fetch("/api/content", {
      method: "POST",
      body: JSON.stringify(inputContent),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.status === "ok") {
          const wtitle = response.data.filter((item: IContent) => item.Component === "work-title")[0];
          const w1 = response.data.filter((item: IContent) => item.Component === "work1")[0];
          const w2 = response.data.filter((item: IContent) => item.Component === "work2")[0];
          const w3 = response.data.filter((item: IContent) => item.Component === "work3")[0];
          const w4 = response.data.filter((item: IContent) => item.Component === "work4")[0];
          setWorkTitle(wtitle);
          setWork1(w1);
          setWork2(w2);
          setWork3(w3);
          setWork4(w4);
        }
      });
  }, [refresh]);

  return (
    <div className="bg-slate-100">
      <div className="max-w-screen-xl mx-auto py-10 md:py-16">
        <Wrapper>
          <Container>
            <div className="flex flex-row justify-center items-center gap-4">
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-600 underline decoration-slate-500 underline-offset-8">
                {workTitle?.Title}
              </h2>
              <ContentEdit content={workTitle} setRefresh={setRefresh}/>
            </div>
          </Container>
        </Wrapper>
        <div className="pb-0 pt-10 sm:py-20 mx-4">
          <Wrapper>
            <div className="flex flex-wrap justify-center items-stretch gap-4">
              {/* Card 1 */}
              <Container
                delay={0.5}
                className="max-w-lg bg-white shadow-lg rounded-lg py-10 px-2"
              >
                <div className="grid grid-cols-12">
                  {/* Left */}
                  <div className="col-span-2">
                    <div className="flex flex-row justify-center items-center">
                      <div className="bg-slate-600 p-3 rounded-2xl">
                        <Image
                          src="/work/1.avif"
                          alt=""
                          width={32}
                          height={32}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Right */}
                  <div className="relative col-span-10">
                    <div className="flex flex-col gap-4 text-slate-600">
                      <h4 className="text-xl font-semibold">{work1?.Title}</h4>
                      <p className="text-sm">{work1?.Des}</p>
                    </div>
                    <div className="absolute top-0 right-0">
                      <ContentEdit content={work1} setRefresh={setRefresh}/>
                    </div>
                  </div>
                </div>
              </Container>
              {/* Card 2 */}
              <Container
                delay={0.6}
                className="max-w-lg bg-white shadow-lg rounded-lg py-10 px-2"
              >
                <div className="grid grid-cols-12">
                  {/* Left */}
                  <div className="col-span-2">
                    <div className="flex flex-row justify-center items-center">
                      <div className="bg-slate-600 p-3 rounded-2xl">
                        <Image
                          src="/work/2.avif"
                          alt=""
                          width={32}
                          height={32}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Right */}
                  <div className="relative col-span-10">
                    <div className="flex flex-col gap-4 text-slate-600">
                      <h4 className="text-xl font-semibold">{work2?.Title}</h4>
                      <p className="text-sm">{work2?.Des}</p>
                    </div>
                    <div className="absolute top-0 right-0">
                      <ContentEdit content={work2} setRefresh={setRefresh}/>
                    </div>
                  </div>
                </div>
              </Container>
              {/* Card 3 */}
              <Container
                delay={0.7}
                className="max-w-lg bg-white shadow-lg rounded-lg py-10 px-2"
              >
                <div className="grid grid-cols-12">
                  {/* Left */}
                  <div className="col-span-2">
                    <div className="flex flex-row justify-center items-center">
                      <div className="bg-slate-600 p-3 rounded-2xl">
                        <Image
                          src="/work/3.avif"
                          alt=""
                          width={32}
                          height={32}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Right */}
                  <div className="relative col-span-10">
                    <div className="flex flex-col gap-4 text-slate-600">
                      <h4 className="text-xl font-semibold">{work3?.Title}</h4>
                      <p className="text-sm">{work3?.Des}</p>
                    </div>
                    <div className="absolute top-0 right-0">
                      <ContentEdit content={work3} setRefresh={setRefresh}/>
                    </div>
                  </div>
                </div>
              </Container>
              {/* Card 4 */}
              <Container
                delay={0.8}
                className="max-w-lg bg-white shadow-lg rounded-lg py-10 px-2"
              >
                <div className="grid grid-cols-12">
                  {/* Left */}
                  <div className="col-span-2">
                    <div className="flex flex-row justify-center items-center">
                      <div className="bg-slate-600 p-3 rounded-2xl">
                        <Image
                          src="/work/2.avif"
                          alt=""
                          width={32}
                          height={32}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Right */}
                  <div className="relative col-span-10">
                    <div className="flex flex-col gap-4 text-slate-600">
                      <h4 className="text-xl font-semibold">{work4?.Title}</h4>
                      <p className="text-sm">{work4?.Des}</p>
                    </div>
                    <div className="absolute top-0 right-0">
                      <ContentEdit content={work4} setRefresh={setRefresh}/>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </Wrapper>
        </div>
      </div>
    </div>
  );
}

export default Work;
