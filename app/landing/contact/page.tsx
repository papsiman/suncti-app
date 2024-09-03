"use client";

import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope,
  faPhone,
  faFax,} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React, { FormEvent, useEffect, useState} from 'react';
import { IEmail, ISetting } from "@/app/db";
import SettingUpdate from "@/components/common/setting.update";

const Contact = () => {

    const [setting, setSetting] = useState<ISetting>();
    const [refresh, setRefresh] = useState(0);

    // get setting
    useEffect(() => {

      fetch("/api/setting", {
        method: "POST",
        body: JSON.stringify({Component: "product-main"}),
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => res.json())
      .then((response) => {
        if (response.status === "ok") {
          setSetting(response.data[0]);
        }
      });

    }, [refresh]);


    function onSubmit(event: FormEvent<HTMLFormElement>) {

      event.preventDefault();
      
      const data = new FormData(event.currentTarget);
      var body = 'Name = ' + data.get('name') + '<br/>';
      body += 'Email = ' + data.get('email') + '<br/>';
      body += 'Phone = ' + data.get('phone') + '<br/>';
      body += 'Message = ' + data.get('message') + '<br/>';
      // router.push('mailto:Kit@suncti.co.th?subject=Suncti website email from customer.&body='+msg);
      // location.reload();

      const input: IEmail = {
        to: setting?.Email!,
        subject: 'SunCTI.co.th new contact.',
        body: body,
      }

      //Create data
      fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(input),
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => res.json())
      .then((response: { status: string; message: string; }) => {
        if (response.status === "ok") {
          alert("Send mail success.");
          window.location.reload();
        } else {
          alert("Fail. " + response.message);
        }
      });

    };


  return (
    <div className="h-[100vh] w-full bg-white bg-grid-black/[0.2] relative flex">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="w-full mt-4 md:mt-8">
        <div className="relative">
          <div className="mt-48 md:mt-52 mb-10 max-w-[700px] mx-auto">
            <div className="relative bg-white border rounded-md py-4 md:py-16 px-4">
              {/* Content */}
              <div className="grid grid-cols-12">
                <div className="col-span-1"></div>
                <div className="col-span-12 md:col-span-10">
                  {/* Contact */}
                  <div className="flex flex-col md:flex-row justify-center items-stretch gap-4">
                    <div className="flex flex-col justify-center items-center rounded-md border gap-4 p-8">
                      <div className=" bg-gray-100 rounded-full text-2xl">
                        <FontAwesomeIcon
                          icon={faPhone}
                          className="text-gray-500 p-4"
                        />
                      </div>
                      <h2 className="text-2xl">Call Now</h2>
                      <h4 className="text-sm">{setting?.Tel}</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center rounded-md border gap-4 p-8">
                      <div className=" bg-gray-100 rounded-full text-2xl">
                        <FontAwesomeIcon
                          icon={faFax}
                          className="text-gray-500 p-4"
                        />
                      </div>
                      <h2 className="text-2xl">Fax</h2>
                      <h4 className="text-sm">{setting?.Fax}</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center rounded-md border gap-4 p-8">
                      <div className=" bg-gray-100 rounded-full text-2xl">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="text-gray-500 p-4"
                        />
                      </div>
                      <h2 className="text-2xl">Email Us</h2>
                      <h4 className="text-sm">{setting?.Email}</h4>
                    </div>
                  </div>
                  {/* Ititle */}
                  <div className="pt-16">
                    <h2 className="text-4xl text-center">Have Any Question?</h2>
                  </div>
                  {/* Send email */}
                  <form className="container px-0" onSubmit={onSubmit}>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 bg-white border mt-10 p-4 md:p-10">
                      {/* NAME */}
                      <div className="sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                          Name
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      {/* E-MAIL */}
                      <div className="sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                          E-Mail
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      {/* PHONE NUMBER */}
                      <div className="sm:col-span-6">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                          Phone Number
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      {/* MESSAGE */}
                      <div className="sm:col-span-6">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                          Your Message Here
                        </label>
                        <div className="mt-2">
                          <textarea
                            id="message"
                            name="message"
                            rows={3}
                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          ></textarea>
                        </div>
                      </div>
                      {/* BUTTON */}
                      <div className="sm:col-span-6 text-center">
                        <button
                          type="submit"
                          className="btn bg-slate-600 w-full md:w-32 text-white text-center"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-span-1"></div>
              </div>
              <div className="absolute top-2 right-2">
                <SettingUpdate setting={setting} setRefresh={setRefresh} />
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
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
