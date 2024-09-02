"use client";

import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFilePdf
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Catalog = () => {
  const files = [
    {
      id: 1,
      title: "3G VoIP Gateway",
      url: "https://drive.google.com/file/d/1qQSNADJaGlp1LHt10IdCx96WAYVs4OMD/view?usp=drive_link",
      des: "The 3G VoIP Gateway is a multi-functional product used to effectively implement the smooth transition between 3G and VoIP network. The 3G VoIP gateway is designed for comfort, ease-of-use to satisfied nec- essary of customers. It is not only inherits tradition of quality voice communication over IP network but reduce the human resource of VoIP network deploy- ment. It’s a cost-effective gateway for call termina- tion (VoIP to 3G) and origination (3G to VoIP). It is fully compatible with leading Softswitch and SIP servers.",
    },
    {
      id: 2,
      title: "IVR 1000 Series",
      url: "https://drive.google.com/file/d/1S7otPizN80x2ISmkLXdIZJTu2qzk0OEQ/view?usp=drive_link",
      des: "IVR 1000 platform is easy and simply voice automated with fewer human operators needed to be fully operational. IVR 1000 can be integrated into certain iPBX or Skype For Business system over SIP protocol. The IVR1000 series products can be matched up with all Paradoxes devices and allow for maximum serviceability at a solid price and benefit.",
    },
    {
      id: 3,
      title: "SAG1000 Gateway",
      url: "https://drive.google.com/file/d/1nP4Eyf4WkFUmzzJeZSbKHEQ7aEpPeKtk/view?usp=drive_link",
      des: "SAG1000 is a perfect hardware product for the telecom carriers to provide the residential te- lephony, IMS/NGN ,radio over IP and fax ser- vices through the IP networks such as MPLS, HFC, and ADSL. It can be connected to the tra- ditional Radio system, PBXs to provide the voice solutions for Large enterprises, Govern- ment, and SME. It can also serve as a hotline service for remote terminal (peer-peer).",
    },
    {
      id: 4,
      title: "SAG1600 Gateway",
      url: "https://drive.google.com/file/d/1iDTRljRfzmRJu5Oljc2Wh9PrLur_ORag/view?usp=drive_link",
      des: "SAG1600 is a perfect hardware product for the telecom carriers to provide the residential te- lephony ,radio over IP and fax services through the IP networks such as MPLS and ADSL. It can be connected to the traditional Radio system, PBXs to provide the voice solutions for Large enterprises, Government, and SME. It can also serve as a hotline service for remote terminal (peer-peer).",
    },
    {
      id: 5,
      title: "SAG1602 Gateway",
      url: "https://drive.google.com/file/d/1frv9tL3_ilBukTLVQsw9Pipf_d6enxBH/view?usp=drive_link",
      des: "SAG1602 is a perfect product for the telecom carriers to provide the residential telephony ,radio over IP and fax services through the IP networks such as MPLS and ADSL. It can be connected to the traditional Radio system, PBXs to provide the voice solutions for Large enterprises, Government, and SME. It can also serve as a hotline service for remote terminal (peer-peer).",
    },
    {
      id: 6,
      title: "SAG3200 NGN Gateway",
      url: "https://drive.google.com/file/d/1aU8YJ2zP215zUuxQr5bKJ9mr676dVpfK/view?usp=drive_link",
      des: "SAG3200 is a perfect product for the telecom carriers (NGN) to provide the residential telephony ,radio over IP and fax services through the IP networks such as MPLS, HFC, and ADSL. It can be connected to the tradition- al Radio system, PBXs to provide the voice so- lutions for Large enterprises, Government, and SME. It can also serve as a hotline service for remote terminal (peer-peer).",
    },
    {
      id: 7,
      title: "SAG11200 Gateway",
      url: "",
      des: "SAG11200 is a perfect product for the telecom carriers to provide the residential telephony ,radio over IP and fax services through the IP networks such as MPLS, HFC, and ADSL. It can be connected to the traditional Radio sys- tem, PBXs to provide the voice solutions for Large enterprises, Government, and SME. It can also serve as a hotline service for remote terminal (peer-peer).",
    },
    {
      id: 8,
      title: "SGX200 E1 Gateway",
      url: "https://drive.google.com/file/d/1GHp_4TSzEZhWVD3gw0PRWNX67t3xJG1l/view?usp=drive_link",
      des: "SGX200 is enterprise-grade trunk gateway product for IP trunk ,Radio over IP and fax ser- vices through the IP networks such as LL,MPLS. It can be connected to the traditional radio sys- tem or PBXs via E1 interface to provide the voice solutions for Large enterprises, Govern- ment, and SME. It supports G.711/G.723/ G.729 codec calls and T.38/Pass-through Fax.",
    },
    {
      id: 9,
      title: "SGX2000 E1 Gateway",
      url: "https://drive.google.com/file/d/1HbCjEc9-jkEnnz4MJ4zRLiJ613hC2XPJ/view?usp=drive_link",
      des: "SGX2000E is carrier-grade trunk gateway product for the carrier to provide IP trunk ,radio over IP and fax services through the IP networks such as LL,MPLS. It can be con- nected to the traditional radio system or PBXs via E1 interface to provide the voice solutions for Large enterprises, Government, and SME. It supports G.711/G.723/G.726/G.729 codec calls and T.38/Pass-through Fax.",
    },
    {
      id: 10,
      title: "SGX4000 E1 Gateway",
      url: "https://drive.google.com/file/d/1DRMS8_k0BwNiq0sIxVXJp-GkT5klije_/view?usp=drive_link",
      des: "SGX4000 is carrier-grade NGN trunk gateway product for the carrier to provide the residen- tial telephony ,radio over IP and fax services through the IP networks such as MPLS, HFC, and ADSL. It can be connected to the tradition- al Radio system, PBXs to provide the voice so- lutions for Large enterprises, Government, and SME. It can also serve as a hotline service for remote terminal (peer-peer).",
    },
    {
      id: 11,
      title: "SGX6300E E1 Gateway",
      url: "https://drive.google.com/file/d/1ELbGDDlMFLHWhZ_MHUzivnx-njkye5Y5/view?usp=drive_link",
      des: "SGX6300E is carrier-grade trunk gateway product for the carrier to provide IP trunk ,radio over IP and fax services through the IP networks such as LL,MPLS. It can be con- nected to the traditional radio system or PBXs via E1 interface to provide the voice solutions for Large enterprises, Government, and SME. It supports G.711/G.723/G.726/G.729 codec calls and T.38/Pass-through Fax.",
    },
    {
      id: 12,
      title: "SGX8000 Gateway",
      url: "https://drive.google.com/file/d/1vPs_lXYLb4W606KMJrhvYfn3YXw0rDmc/view?usp=drive_link",
      des: "SGX8000 is carrier-grade NGN trunk gateway product for the carrier to provide the residential telephony ,radio over IP and fax services through the IP networks such as MPLS, HFC, and ADSL. It can be connected to the tradition- al Radio system, PBXs to provide the voice so- lutions for Large enterprises, Government, and SME. It can also serve as a hotline service for remote terminal (peer-peer).",
    },
    {
      id: 13,
      title: "SGX20000 Gateway",
      url: "https://drive.google.com/file/d/1Z6Tx-KWJVocZyPqaZnH0r3NS0vQvCxUX/view?usp=drive_link",
      des: "SGX20000 is carrier-grade trunk gateway product for the carrier to provide IP trunk ,radio over IP and fax services through the IP networks such as LL,MPLS. It can be con- nected to the traditional radio system or PBXs via E1 interface to provide the voice solutions for Large enterprises, Government, and SME. It supports G.711/G.723/G.726/G.729 codec calls and T.38/Pass-through Fax.",
    },
    {
      id: 14,
      title: "SSX300",
      url: "https://drive.google.com/file/d/1Tk9OaPtEYdngsTcMXCHNFHVWmBTrzRh3/view?usp=drive_link",
      des: "The Server base Telephone System for Medium to Large business. . It makes a simple to create and deploy a wide range of VoIP telephony applications.",
    },
    {
      id: 15,
      title: "SSX5000",
      url: "https://drive.google.com/file/d/1lf-j1kFicZednOBttYmFuHa8A350dQ8P/view?usp=drive_link",
      des: "The Server base Telephone System for Medium to Large business. . It makes a simple to create and deploy a wide range of VoIP telephony applications.",
    },
    {
      id: 16,
      title: "Mini Billling",
      url: "https://drive.google.com/file/d/11BGDiuRNwBtop5y_j_FaqNMfDFiZW6s6/view?usp=drive_link",
      des: "The mini billing system. It makes a simple to implement billing report of Avaya, NEC and Panasonic IPBX system. This small, power effi- cient, cost friendly device. No need to install billing software. It ‘s real ready made with plug and play technology.",
    },
    {
      id: 17,
      title: "MPPT Solar Charger M10/M15/M30/M50",
      url: "https://drive.google.com/file/d/1811qa3Q6jGAMZsBK9-u1PqL3FC3vJioH/view?usp=drive_link",
      des: "The Ultra-fast Maximum Power Point Tracking (MPPT). It makes a simple to improve energy harvest by up to 30% from PWM technology.",
    },
  ];
  return (
    <div className="h-[100vh] w-full bg-white bg-grid-black/[0.2] relative flex">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="w-full mt-4 md:mt-8">
        <div className="relative">
          <div className="mt-24 md:mt-52 mb-10 max-w-screen-xl mx-auto">
            <div className="bg-white p-16 border rounded-lg">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>File</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {files.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-200">
                      <td className="hover:scale-125">
                        <div className="flex items-center gap-3 p-4">
                          <div className="avatar">
                            <div className="text-4xl text-red-500">
                              <a href={item.url} target="_blank">
                                {item.url ? (
                                  <FontAwesomeIcon icon={faFilePdf} />
                                ) : null}
                              </a>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="hover:scale-105 text-gray-500">
                        <div className="flex flex-col items-start gap-2">
                          {item.url ? (
                            <a
                              href={item.url}
                              target="_blank"
                              className="text-2xl hover:text-gray-800 hover:underline"
                            >
                              {item.title}
                            </a>
                          ) : (
                            <h2 className="text-2xl hover:text-gray-800">
                              {item.title}
                            </h2>
                          )}
                          <span className="hover:text-gray-800">
                            {item.des}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <Footer />
          </div>
          <div className="absolute -top-52 md:-top-60 w-full">
            <div className="">
              <Navbar />
            </div>
            <div className="h-32 flex justify-center items-center bg-slate-100 text-purple-700">
              <div className="breadcrumbs text-2xl font-bold">
                <ul>
                  <li>
                    <Link href="/" className="underline">
                      Home
                    </Link>
                  </li>
                  <li>Product Catalog</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
