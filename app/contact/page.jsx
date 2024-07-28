import NAVBAR from '@/components/navbar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faPhone,
  faFax,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div className="flex flex-col bg-gray-50">
      {/* Header */}
      <div className="w-full h-[50vh] bg-secondary relative">
        <div className="absolute top-64 left-[calc(50vw-84px)] text-white flex flex-col justify-center items-center gap-4">
          <h2 className="text-5xl font-semibold">Contact</h2>
          <div className="breadcrumbs text-sm">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="absolute w-full">
          <NAVBAR />
        </div>
      </div>
      {/* Content */}
      <div className="mx-auto max-w-6xl py-32">
        <div className="grid grid-cols-12">
          <div className="col-span-1"></div>
          <div className="col-span-12 md:col-span-10">
            {/* Contact */}
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-4">
                <div className="shadow-md bg-white">
                  <div className="flex flex-col justify-center items-center gap-4 px-16 py-8 rounded-md">
                    <div className="px-6 py-6 bg-gray-100 rounded-full text-2xl">
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="text-gray-500"
                      />
                    </div>
                    <h2 className="text-3xl">Call Now</h2>
                    <h4 className="text-xl">+662-111-6066</h4>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-4">
                <div className="shadow-md bg-white">
                  <div className="flex flex-col justify-center items-center gap-4 px-16 py-8 rounded-md">
                    <div className="px-6 py-6 bg-gray-100 rounded-full text-2xl">
                      <FontAwesomeIcon
                        icon={faFax}
                        className="text-gray-500"
                      />
                    </div>
                    <h2 className="text-3xl">Fax</h2>
                    <h4 className="text-xl">+662-961-0600</h4>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-4">
                <div className="shadow-md bg-white">
                  <div className="flex flex-col justify-center items-center gap-4 px-16 py-8 rounded-md">
                    <div className="px-6 py-6 bg-gray-100 rounded-full text-2xl">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-gray-500"
                      />
                    </div>
                    <h2 className="text-3xl">Email Us</h2>
                    <h4 className="text-xl">kit@suncti.co.th</h4>
                  </div>
                </div>
              </div>
            </div>
            {/* Ititle */}
            <div className="max-w-md mx-auto pt-16">
              <h2 className="text-4xl text-center">Have Any Question?</h2>
            </div>
            {/* Send email */}
            <div>
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 bg-white shadow-md mt-10 p-10">
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
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* PHONE NUMBER */}
                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* YOUR WEBSITE */}
                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Your Website
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="website"
                      id="website"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      rows="3"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    ></textarea>
                  </div>
                </div>
                {/* BUTTON */}
                <div className="sm:col-span-6 text-center">
                  <button className="btn btn-primary text-white text-center">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
    </div>
  );
}
