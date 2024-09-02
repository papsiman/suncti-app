"use client";

import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import Image from "next/image";
import Link from "next/link";

interface DataProps {
  id: number,
  img: string,
  width: number,
  height: number,
  title: string,
  des: string,
}

const Paradox = ()  => {

  const items : DataProps[] = [
    {id:1, img: '/paradoxes/1.png', width:200, height:0,title:'3G VoIP', des:'The 3G VoIP Gateway is a multi-functional product used to effectively implement the smooth transition between 3G and VoIP network.'},
    {id:2, img: '/paradoxes/2.png', width:250, height:0,title:'IVR1000', des:'IVR 1000 platform is easy and simply voice automated with fewer human operators needed to be fully operational.'},
    {id:3, img: '/paradoxes/3.png', width:150, height:0,title:'SAG1000', des:'SAG1000 is a perfect hardware product for the telecom carriers to provide the residential telephony, IMS/NGN ,radio over IP and fax ser- vices through the IP networks such as MPLS, HFC, and ADSL.'},
    {id:4, img: '/paradoxes/4.png', width:250, height:0,title:'SAG1600', des:'SAG1600 is a perfect hardware product for the telecom carriers to provide the residential telephony ,radio over IP and fax services through the IP networks such as MPLS and ADSL.'},

    {id:5, img: '/paradoxes/5.png', width:250, height:0,title:'SAG1602', des:'SAG1602 is a perfect product for the telecom carriers to provide the residential telephony ,radio over IP and fax services through the IP networks such as MPLS and ADSL.'},
    {id:6, img: '/paradoxes/6.png', width:250, height:0,title:'SAG3200', des:'SAG3200 is a perfect product for the telecom carriers (NGN) to provide the residential telephony ,radio over IP and fax services through the IP networks such as MPLS, HFC, and ADSL.'},
    {id:7, img: '/paradoxes/7.png', width:200, height:0,title:'SAG11200', des:'SAG11200 is a perfect product for the telecom carriers to provide the residential telephony ,radio over IP and fax services through the IP networks such as MPLS, HFC, and ADSL.'},
    {id:8, img: '/paradoxes/8.png', width:165, height:0,title:'SGX200', des:'SGX200 is enterprise-grade trunk gateway product for IP trunk ,Radio over IP and fax ser- vices through the IP networks such as LL,MPLS.'},

    {id:9, img: '/paradoxes/9.png', width:250, height:0,title:'SGX2000', des:'SGX2000E is carrier-grade trunk gateway product for the carrier to provide IP trunk ,radio over IP and fax services through the IP networks such as LL,MPLS.'},
    {id:10, img: '/paradoxes/10.png', width:250, height:0,title:'SGX4000', des:'SGX4000 is carrier-grade NGN trunk gateway product for the carrier to provide the residential telephony ,radio over IP and fax services through the IP networks such as MPLS, HFC, and ADSL.'},
    {id:11, img: '/paradoxes/11.png', width:250, height:0,title:'SGX6300', des:'SGX6300E is carrier-grade trunk gateway product for the carrier to provide IP trunk ,radio over IP and fax services through the IP networks such as LL,MPLS.'},
    {id:12, img: '/paradoxes/12.png', width:250, height:0,title:'SGX8000', des:'SGX8000 is carrier-grade NGN trunk gateway product for the carrier to provide the residential telephony ,radio over IP and fax services through the IP networks such as MPLS, HFC, and ADSL.'},

    {id:13, img: '/paradoxes/13.png', width:250, height:0,title:'SGX20000', des:'SGX20000 is carrier-grade trunk gateway product for the carrier to provide IP trunk ,radio over IP and fax services through the IP networks such as LL,MPLS.'},
    {id:14, img: '/paradoxes/14.png', width:60, height:0,title:'SSX300', des:'The Server base Telephone System for Medium to Large business. . It makes a simple to create and deploy a wide range of VoIP telephony applications.'},
    {id:15, img: '/paradoxes/15.png', width:150, height:0,title:'SSX5000', des:'The Server base Telephone System for Medium to Large business. . It makes a simple to create and deploy a wide range of VoIP telephony applications.'},
    {id:16, img: '/paradoxes/16.png', width:165, height:0,title:'Mini Billling', des:'The mini billing system. It makes a simple to implement billing report of Avaya, NEC and Panasonic IPBX system. This small, power efficient, cost friendly device.'},

    {id:17, img: '/paradoxes/17.png', width:128, height:0, title:'MPPT M50', des:'The Ultra-fast Maximum Power Point Tracking (MPPT). It makes a simple to improve energy harvest by up to 30% from PWM technology.'},
  ]
    return (
      <div className="h-[100vh] w-full bg-white bg-grid-black/[0.2] relative flex">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="w-full mt-4 md:mt-8">
          <div className="relative">
            <div className="mt-24 md:mt-52 mb-10 max-w-screen-xl mx-auto">
              <div className="bg-white p-16 border rounded-lg">
                <div className="flex flex-wrap justify-center items-stretch gap-4">
                  {items.map((item) => (
                    <div className="card glass w-72" key={item.id}>
                      <figure className="py-2 h-28 max-h-28">
                        <Image
                          src={item.img ? item.img: '/empty/w128.png'}
                          alt=""
                          width={item.width}
                          height={item.height}
                          style={{ height: "auto" }}
                        />
                      </figure>
                      <div className="card-body p-4 pt-0">
                        <h2 className="card-title">{item.title}</h2>
                        <p className="overflow-y-auto h-32 overscroll-contain">
                          {item.des}
                        </p>
                      </div>
                    </div>
                  ))}
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
                    <li>Paradoxs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Paradox