"use client"

import Image from 'next/image';
import React, { FormEvent } from 'react'
import Wrapper from '../common/warpper';
import Container from '../common/container';
import ContainerUpper from '../common/containerup';
import { useRouter } from 'next/navigation';

export default function Quote() {

  const router = useRouter()
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget);
    var msg = 'Name = ' + data.get('name') + '<br/>';
    msg += 'Email = ' + data.get('email') + '<br/>';
    msg += 'Phone = ' + data.get('phone') + '<br/>';
    msg += 'Message = ' + data.get('message') + '<br/>';
    router.push('mailto:Kit@suncti.co.th?subject=Suncti website email from customer.&body='+msg);
    location.reload();
  };

  return (
    <div id="contact">
      <div className="relative max-w-screen-xl mx-auto bg-base-100">
        <div className="mx-4 my-4 md:my-16">
          <Wrapper>
            <div className="flex flex-col lg:flex-row justify-center items-stretch gap-4">
              {/* Left */}
              <ContainerUpper className="w-full bg-white border border-base-200 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] rounded-xl">
                <div>
                  <div className="py-4 md:py-16">
                    <h1 className="text-2xl sm:text-3xl font-semibold text-center text-slate-600">
                      Get A Quote
                    </h1>
                  </div>
                  <div className="bg-slate-600 mr-10 mb-10 rounded-tr-xl rounded-br-xl shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
                    <div className="grid grid-cols-12 justify-center items-center p-4 md:p-12">
                      {/* Pic */}
                      <div className="col-span-3">
                        <div className="avatar">
                          <div className="ring-primary ring-offset-base-100 w-20 rounded-full">
                            <Image
                              src="/test.jpg"
                              alt=""
                              width={80}
                              height={0}
                              style={{ height: "auto" }}
                            />
                          </div>
                        </div>
                      </div>
                      {/* Name */}
                      <div className="col-span-9 px-4">
                        <h4 className="text-lg font-semibold text-purple-500">
                          Thaweesak Limsardsanakij
                        </h4>
                        <span className="text-white">Senior Engineer</span>
                      </div>
                      <div className="col-span-12 pt-3">
                        <p className="text-white">
                          To best serve you, let&apos;s get to know your
                          requirements first. Tell us about your project, and
                          we&apos;ll arrange a free consultation call to discuss
                          how we can help.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ContainerUpper>
              {/* Right */}
              <Container className="w-full bg-white border border-base-200 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] rounded-xl p-8">
                <form className="container px-0" onSubmit={onSubmit}>
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12">
                      {/* CompanyName */}
                      <label className="input input-bordered flex items-center">
                        <input
                          type="text"
                          id="company"
                          name="compnay"
                          className=""
                          placeholder="Company name"
                        />
                      </label>
                    </div>
                    <div className="col-span-12">
                      {/* First name */}
                      <label className="input input-bordered flex items-center">
                        <input
                          type="text"
                          className=""
                          id="name"
                          name="name"
                          placeholder="Name"
                        />
                      </label>
                    </div>
                    <div className="col-span-12">
                      {/* Email */}
                      <label className="input input-bordered flex items-center">
                        <input
                          type="text"
                          className=""
                          id="email"
                          name="email"
                          placeholder="Email"
                        />
                      </label>
                    </div>
                    <div className="col-span-12">
                      {/* Phone */}
                      <label className="input input-bordered flex items-center">
                        <input
                          type="text"
                          className=""
                          id="phone"
                          name="phone"
                          placeholder="Phone number"
                        />
                      </label>
                    </div>
                    <div className="col-span-12">
                      {/* Tell us */}
                      <textarea
                        className="textarea textarea-bordered w-full h-36"
                        id="message"
                        name="message"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>
                    <div className="col-span-12">
                      <button
                        type="submit"
                        className="btn bg-slate-600 hover:bg-slate-900 text-white w-full"
                      >
                        Get a Free Consult
                      </button>
                    </div>
                  </div>
                </form>
              </Container>
            </div>
          </Wrapper>
        </div>
      </div>
    </div>
  );
}
