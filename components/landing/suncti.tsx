"use client"

import Link from "next/link";
import Wrapper from "../common/warpper";
import { Beam } from "../common/beam";
import ContainerUpper from "../common/containerup";
import Container from "../common/container";
import { useEffect, useState } from "react";
import { IContent } from "@/app/db";
import ContentEdit from "./content.edit";

const Suncti = () => {

  const [refresh, setRefresh] = useState(0);
  const [contents, setContents] = useState<IContent>();
  const inputContent = {} as IContent;
  inputContent.Component = 'suncti'

  useEffect(()=>{
    fetch("/api/content", {
      method: "POST",
      body: JSON.stringify(inputContent),
      headers: { "Content-Type": "application/json" },
    })
    .then(res => res.json())
    .then(response => {
      setContents(response.data[0])
    })
  },[refresh])

    return (
      <div className="relative grid grid-cols-12 justify-center items-start gap-8">
        <div className="w-full bg-white col-span-12 md:col-span-6 border border-border rounded-lg">
          <Wrapper>
            <ContainerUpper>
              <Beam />
            </ContainerUpper>
          </Wrapper>
        </div>
        <div className="h-full bg-white col-span-12 md:col-span-6 p-4 md:p-8 border border-border rounded-xl">
          <Wrapper>
            <Container>
              <div className="flex flex-col gap-4">
                <h4 className="text-xl font-semibold text-slate-600">Welcom To SUNCTI</h4>
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-600">
                {contents?.Title}
                </h2>
                <p className="text-slate-600 indent-10">
                  {contents?.Des}
                </p>
                <div className="my-4">
                  <Link
                    href="/landing/about"
                    className="btn btn-sm bg-slate-200 hover:bg-slate-300"
                  >
                    Expore More
                  </Link>
                </div>
              </div>
            </Container>
          </Wrapper>
        </div>
        <div className="absolute top-0 right-0 m-2">
          <ContentEdit content={contents} setRefresh={setRefresh}/>
        </div>
      </div>
    );
}

export default Suncti