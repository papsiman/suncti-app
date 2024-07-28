import NAVBAR from '@/components/navbar'
import Image from 'next/image'
import React from 'react'

export default function Paradox() {

  const items = [
    {id:1, img: '/paradoxes/1.png', width:200, height:0, title:'3G VoIP', des:'The 3G VoIP Gateway is a multi-functional product used to effectively implement the smooth transition between 3G and VoIP network.'},
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
    <div className="flex flex-col">
      {/* Heder */}
      <div className="w-full h-[50vh] bg-secondary relative">
        <div className="absolute top-64 left-[calc(50vw-113px)] text-white flex flex-col justify-center items-center gap-4">
          <h2 className="text-5xl font-semibold">Paradoxes</h2>
          <div className="breadcrumbs text-sm">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Product</li>
              <li>Paradoxes</li>
            </ul>
          </div>
        </div>
        <div className="absolute w-full">
          <NAVBAR />
        </div>
      </div>
      {/* Content */}
      <div
        className="py-32 bg-gray-50"
        style={{
          backgroundImage: `url(${"/light-trails-buildings.jpg"})`,
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center items-stretch gap-4">
            {items.map((item) => (
              <div className="card glass w-72 hover:bg-black hover:text-white hover:scale-105 cursor-pointer" key={item.id}>
                <figure className='py-2 h-28 max-h-28'>
                  <Image src={item.img} alt="" width={item.width} height={item.height} />
                </figure>
                <div className="card-body p-4 pt-0">
                  <h2 className="card-title">{item.title}</h2>
                  <p className='overflow-y-auto h-32 overscroll-contain'>{item.des}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
