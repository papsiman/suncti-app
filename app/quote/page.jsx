import NAVBAR from '@/components/navbar'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faPhone,
  faFax
} from "@fortawesome/free-solid-svg-icons";

export default function Quote() {
  return (
    <div className="flex flex-col bg-gray-50">
      {/* Heder */}
      <div className="w-full h-[50vh] bg-secondary relative">
        <div className="absolute top-64 left-[calc(50vw-162px)] text-white flex flex-col justify-center items-center gap-4">
          <h2 className="text-6xl font-semibold">Get A Quote</h2>
          <div className="breadcrumbs text-sm">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Get A Quote</li>
            </ul>
          </div>
        </div>
        <div className="absolute top-10 w-full">
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
                    <div className="px-6 py-6 bg-gray-100 rounded-full">
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="text-secondary"
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
                    <div className="px-6 py-6 bg-gray-100 rounded-full">
                      <FontAwesomeIcon
                        icon={faFax}
                        className="text-secondary"
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
                    <div className="px-6 py-6 bg-gray-100 rounded-full">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-secondary"
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
              <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 bg-white shadow-md mt-10 p-10">
                {/* NAME */}
                <div class="sm:col-span-3">
                  <label class="block text-sm font-medium leading-6 text-gray-900">
                    name
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* E-MAIL */}
                <div class="sm:col-span-3">
                  <label class="block text-sm font-medium leading-6 text-gray-900">
                    E-Mail
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* PHONE NUMBER */}
                <div class="sm:col-span-3">
                  <label class="block text-sm font-medium leading-6 text-gray-900">
                    Phone Number
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* YOUR WEBSITE */}
                <div class="sm:col-span-3">
                  <label class="block text-sm font-medium leading-6 text-gray-900">
                    Your Website
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="website"
                      id="website"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* MESSAGE */}
                <div class="sm:col-span-6">
                  <label class="block text-sm font-medium leading-6 text-gray-900">
                    Your Message Here
                  </label>
                  <div class="mt-2">
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    ></textarea>
                  </div>
                </div>
                {/* BUTTON */}
                <div class="sm:col-span-6 text-center">
                  <button className="btn btn-primary text-white">
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
  )
}
