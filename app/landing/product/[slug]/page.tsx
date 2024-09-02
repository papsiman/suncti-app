"use client"

import { IContent } from "@/app/db";
import Footer from "@/components/common/footer"
import Navbar from "@/components/common/navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilePdf
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link"
import { useEffect, useState } from "react";
import ProductItemAdd from "@/components/landing/productitem.add";
import ProductItemComponent from "@/components/landing/productitem.component";

function Product({ params }: { params: { slug: string } }) {
  
  const [header, setHeader] = useState<IContent>();
  const [items, setItems] = useState<IContent[]>();
  const [link, setLink] = useState('/landing/product/'+params.slug);
  const [refresh, setRefresh] = useState(0);

  //Get header data
  useEffect(() => {
    fetch("/api/content/product", {
      method: "POST",
      body: JSON.stringify({Link: link}),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.status === "ok") {
          setHeader(response.data[0]);
        }
      });
  }, [refresh]);

  //Get items data
  useEffect(() => {
    fetch("/api/content", {
      method: "POST",
      body: JSON.stringify({Component: link}),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.status === "ok") {
          setItems(response.data);
        }
      });
  }, [refresh]);


  return (
    <>
      <div className="h-[100vh] w-full bg-white bg-grid-black/[0.2] relative flex">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="w-full mt-4 md:mt-8">
          <div className="relative">
            <div className="mt-24 md:mt-52 mb-10 max-w-screen-xl mx-auto">
              <div className="bg-white p-16 border rounded-lg">
                <div className="flex flex-wrap justify-center items-stretch gap-4">
                  <ProductItemAdd link={link} setRefresh={setRefresh}/>
                  {items &&
                    (items.map((item) => (
                      <div className="relation card glass w-72 overflow-hidden" key={item?.Id}>
                        <figure className="py-2 h-28 max-h-28 bg-violet-100/30">
                          <Image
                            src={item?.Img ? item.Img: '/empty/w128.png'}
                            alt=""
                            width={item?.ImgW ?? 250}
                            height={item?.ImgH ?? 0}
                            style={{ height: "auto" }}
                          />
                        </figure>
                        <div className="card-body p-4 pb-10">
                          <h2 className="card-title">{item?.Title}</h2>
                          <p className="overflow-y-auto h-32 overscroll-contain">
                            {item?.Des}
                          </p>
                        </div>
                        {item.Pdf && (
                          <>
                            <div className="absolute w-full px-4 h-6 bg-red-500 bottom-4">
                              <div className="text-white">Download</div>
                            </div>
                            <div className="absolute p-2 bottom-2 border right-2 text-4xl card bg-white">
                              <a
                                href={item?.Pdf}
                                target="_blank"
                                className="text-red-500"
                              >
                                <FontAwesomeIcon icon={faFilePdf} />
                              </a>
                            </div>
                          </>
                        )}

                        <ProductItemComponent content={item} setRefresh={setRefresh}/>
                        
                      </div>
                    ))
                    )
                  }
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
                    <li>{header?.Title}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product