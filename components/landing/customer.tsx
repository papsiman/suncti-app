"use client";

import { IContent } from "@/app/db";
import Image from "next/image";
import { useEffect, useState } from "react";
import ContentEdit from "./content.edit";
import CustomerAdd from "./customer.add";
import CustomerUpload from "./customer.upload";
import CustomerDelete from "./customer.delete";

const Customer = () => {
  const [refresh, setRefresh] = useState(0);
  const [customerTitle, setCustomerTitle] = useState<IContent>();
  const [customerContents, setCustomerContents] = useState<IContent[]>([]);

  init();

  function init() {
    fetchData();
  }

  function fetchData() {
    const inputContent = {} as IContent;
    inputContent.Component = "customer";

    useEffect(() => {
      fetch("/api/content", {
        method: "POST",
        body: JSON.stringify(inputContent),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.status === "ok") {
            const title = response.data.filter(
              (item: IContent) => item.Component === "customer-title"
            )[0];
            setCustomerTitle(title);

            const constents = response.data.filter(
              (item: IContent) => item.Component === "customer-content"
            );
            setCustomerContents(constents);
          }
        });
    }, [refresh]);
  }

  return (
    <div className="flex justify-center mt-0 md:mt-10">
      <div className="max-w-screen-lg flex flex-col items-center">
        <div className="flex flex-row justify-center items-center gap-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-600 underline decoration-slate-500 underline-offset-8">
            {customerTitle?.Title}
          </h2>
          <ContentEdit content={customerTitle} setRefresh={setRefresh} />
        </div>
        <div className="flex flex-wrap flex-grow-0 justify-center gap-8 py-20 px-4">
          <CustomerAdd setRefresh={setRefresh} />
          {customerContents &&
            customerContents.map((customer) => (
              <div
                key={customer?.Id}
                className="w-full sm:w-48 rounded-xl border bg-gray-50 hover:scale-105"
              >
                <div className="relative flex h-48 justify-center items-center">
                  <Image
                    src={customer?.ImgBase64 ? customer?.ImgBase64 : (customer?.Img ? customer?.Img : "/empty/w128.png")}
                    alt=""
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxWidth: "10rem",
                      maxHeight: "10rem",
                    }}
                    width={0}
                    height={0}
                  />
                  <div className="absolute -bottom-4">
                    <div className="flex flex-row justify-center items-center gap-2">
                      <CustomerDelete
                        content={customer}
                        setRefresh={setRefresh}
                      />
                      <CustomerUpload
                        content={customer}
                        setRefresh={setRefresh}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Customer;
