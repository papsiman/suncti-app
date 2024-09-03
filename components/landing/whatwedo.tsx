"use client"

import Image from "next/image";
import Link from "next/link";
import Wrapper from "../common/warpper";
import Container from "../common/container";
import { IContent } from "@/app/db";
import { useEffect, useState } from "react";
import ContentEdit from "./content.edit";
import ProductEdit from "./product.edit";

export default function WhatWeDo() {

  const inputContent = {} as IContent;

  const [refresh, setRefresh] = useState(0);
  const [whatTitle, setWhatTitle] = useState<IContent>();
  const [whatContents, setWhatContents] = useState<IContent[]>([]);
  const [delay, setDelay] = useState(0.4);

  useEffect(() => {

    inputContent.Component = "what-title";
    fetch("/api/content", {
      method: "POST",
      body: JSON.stringify(inputContent),
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => res.json())
    .then((response) => {
      if (response.status === "ok") {
        setWhatTitle(response.data[0]);
      }
    });

    inputContent.Component = "product-main";
    fetch("/api/content", {
      method: "POST",
      body: JSON.stringify(inputContent),
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => res.json())
    .then((response) => {
      if (response.status === "ok") {
        setWhatContents(response.data);
      }
    });

  }, [refresh]);

  return (
    <div className="m-10 md:my-32 md:mx-12">
      <Wrapper>
        <Container>
          <div className="flex flex-row justify-center items-center gap-4">
            <h1 className="text-2xl sm:text-3xl font-semibold text-slate-600 underline decoration-slate-500 underline-offset-8">
              What We Do?
            </h1>
            <ContentEdit content={whatTitle} setRefresh={setRefresh}/>
          </div>
        </Container>
      </Wrapper>

      <div className="flex justify-center">
        <Wrapper>
          <Container
            delay={delay}
          >
            <div className="flex flex-wrap justify-center items-stretch py-10 md:py-20 gap-8">
              {whatContents.length > 0 && whatContents.map((item) => {
                return (
                  <div
                    key={item.Id}
                    className="card card-compact bg-base-100 w-full md:w-64 border border-border md:shadow-lg p-5 overflow-hidden"
                  >
                    <div className="bg-slate-200 rounded-tl-xl rounded-tr-xl">
                      <figure className="relative h-32">
                        <Image
                          src={item?.ImgBase64 ? item?.ImgBase64 : (item?.Img ? item?.Img : "/empty/w128.png")}
                          alt=""
                          width={0}
                          height={0}
                          layout="responsive" objectFit="cover"
                          className="max-w-32 max-h-32"
                        />
                      </figure>
                    </div>
                    <div className="py-4">
                      <h2 className="text-xl font-semibold">{item.Title}</h2>
                      <p className="mt-2 max-h-20 text-sm overflow-hidden ...">{item.Des}</p>
                      <div className="mt-4">
                        <Link
                          href={item.Link!}
                          className="btn btn-sm bg-slate-200 hover:bg-slate-300"
                        >
                          More...
                        </Link>
                      </div>
                    </div>
                    {/* <div className="absolute bg-slate-500 -bottom-16 -right-6 w-24 h-48 rotate-45"></div> */}
                    <div className="absolute bottom-0 right-0 m-2">
                      <ProductEdit content={item} setRefresh={setRefresh}/>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </Wrapper>
      </div>
    </div>
  );
}
