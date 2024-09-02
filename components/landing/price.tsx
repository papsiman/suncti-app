"use client";

import { IContent } from "@/app/db";
import { useEffect, useState } from "react";
import ContentEdit from "./content.edit";

const Price = () => {

  const inputContent = {} as IContent;
  inputContent.Component = "price";

  const [priceTitle, setPriceTitle] = useState<IContent>();
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    fetch("/api/content", {
      method: "POST",
      body: JSON.stringify(inputContent),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.status === "ok") {
          const title = response.data.filter((item: IContent) => item.Component === "price-title")[0];
          setPriceTitle(title);
        }
      });
  }, [refresh]);

  return (
    <div className="">
      <div className="flex flex-col items-center mt-16 md:mt-32 mx-4 md:mx-0">
        <div className="flex flex-row justify-center items-center">
          <h1 className="text-2xl sm:text-3xl font-semibold text-slate-600 underline decoration-slate-500 underline-offset-8">
            {priceTitle?.Title}
          </h1>
          <ContentEdit content={priceTitle} setRefres={setRefresh} />
        </div>
        <div className="w-full grid grid-cols-12 py-10 md:py-16 gap-4">
          <div className="col-span-12 xl:col-span-2"></div>
          {/* PRICE 1 */}
          <div className="col-span-12 md:col-span-6 xl:col-span-2 shadow-md xl:hover:scale-105">
            <div className="flex flex-col justify-center items-stretch">
              <div className="h-14 text-sm font-semibold flex justify-center items-center bg-slate-200 text-slate-600">
                <h4 className="text-center">Bring-your-own calling plan</h4>
              </div>
              <div className="p-4 pb-10 flex flex-col text-center">
                <div className="">
                  <h1 className="text-md font-semibold text-slate-600">
                    Microsoft Teams Phone Standard
                  </h1>
                </div>
                <div>
                  {/* CHECKBOX */}
                  <div className="flex flex-col gap-2 text-left mt-4">
                    <div className="form-control">
                      <label className="flex justify-start items-center cursor-pointer gap-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="checkbox checkbox-xs [--chkbg:theme(colors.slate.500)] [--chkfg:white] checked:border-slate-500"
                        />
                        <span className="text-xs text-slate-600">
                          Cloud-based phone system
                        </span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="flex justify-start items-center cursor-pointer gap-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="checkbox checkbox-xs [--chkbg:theme(colors.slate.500)] [--chkfg:white] checked:border-slate-500"
                        />
                        <span className="text-xs text-slate-600">
                          Make and receive voice and video calls over PSTN or an
                          internet connection
                        </span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="flex justify-start items-center cursor-pointer gap-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="checkbox checkbox-xs [--chkbg:theme(colors.slate.500)] [--chkfg:white] checked:border-slate-500"
                        />
                        <span className="text-xs text-slate-600">
                          Join calls from a range of devices and seamlessly
                          transfer calls between devices
                        </span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="flex justify-start items-center cursor-pointer gap-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="checkbox checkbox-xs [--chkbg:theme(colors.slate.500)] [--chkfg:white] checked:border-slate-500"
                        />
                        <span className="text-xs text-slate-600">
                          Add operator PSTN service with Operator Connect or
                          Direct Routing
                        </span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="flex justify-start items-center cursor-pointer gap-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="checkbox checkbox-xs [--chkbg:theme(colors.slate.500)] [--chkfg:white] checked:border-slate-500"
                        />
                        <span className="text-xs text-slate-600">
                          Combine mobile calling plans with Operator Connect
                          Mobile
                        </span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="flex justify-start items-center cursor-pointer gap-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="checkbox checkbox-xs [--chkbg:theme(colors.slate.500)] [--chkfg:white] checked:border-slate-500"
                        />
                        <span className="text-xs text-slate-600">
                          99.999% uptime SLA
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* PRICE 2 */}
          <div className="col-span-12 md:col-span-6 xl:col-span-2 shadow-md xl:hover:scale-105">
            <div className="flex flex-col justify-center items-stretch">
              <div className="h-14 text-sm font-semibold flex justify-center items-center bg-slate-200 text-slate-600">
                <h4 className="text-center">Pay-as-you-go calling plan</h4>
              </div>
              <div className="p-4 flex flex-col text-center">
                <div className="">
                  <h1 className="text-md font-semibold text-slate-600">
                    Teams Phone with pay-as-you-go calling
                  </h1>
                </div>
                <div>
                  {/* CHECKBOX */}
                  <div className="flex flex-col gap-2 text-left mt-4">
                    <div className="form-control">
                      <label className="flex justify-start items-center cursor-pointer gap-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="checkbox checkbox-xs [--chkbg:theme(colors.slate.500)] [--chkfg:white] checked:border-slate-500"
                        />
                        <span className="text-xs text-slate-600">
                          Cloud-based phone system
                        </span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="flex justify-start items-center cursor-pointer gap-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="checkbox checkbox-xs [--chkbg:theme(colors.slate.500)] [--chkfg:white] checked:border-slate-500"
                        />
                        <span className="text-xs text-slate-600">
                          Includes phone number with metered outbound calling
                          minutes from Microsoft
                        </span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="flex justify-start items-center cursor-pointer gap-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="checkbox checkbox-xs [--chkbg:theme(colors.slate.500)] [--chkfg:white] checked:border-slate-500"
                        />
                        <span className="text-xs text-slate-600">
                          Unlimited inbound calling
                        </span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="flex justify-start items-center cursor-pointer gap-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="checkbox checkbox-xs [--chkbg:theme(colors.slate.500)] [--chkfg:white] checked:border-slate-500"
                        />
                        <span className="text-xs text-slate-600">
                          Call queue, auto attendant, recording, transcription,
                          transfer between devices
                        </span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="flex justify-start items-center cursor-pointer gap-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="checkbox checkbox-xs [--chkbg:theme(colors.slate.500)] [--chkfg:white] checked:border-slate-500"
                        />
                        <span className="text-xs text-slate-600">
                          Unlimited meetings and messaging
                        </span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="flex justify-start items-center cursor-pointer gap-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="checkbox checkbox-xs [--chkbg:theme(colors.slate.500)] [--chkfg:white] checked:border-slate-500"
                        />
                        <span className="text-xs text-slate-600">
                          File sharing, tasks, and polling
                        </span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="flex justify-start items-center cursor-pointer gap-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="checkbox checkbox-xs [--chkbg:theme(colors.slate.500)] [--chkfg:white] checked:border-slate-500"
                        />
                        <span className="text-xs text-slate-600">
                          10 GB of cloud storage per user
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* PRICE 3 */}
          <div className="col-span-12 md:col-span-6 xl:col-span-2 shadow-md  xl:hover:scale-105">
            <div className="flex flex-col justify-center items-stretch">
              <div className="h-14 text-sm font-semibold flex justify-center items-center bg-slate-200 text-slate-600">
                <h4 className="text-center">Domestic calling plan</h4>
              </div>
              <div className="p-4 flex flex-col text-center">
                <div className="">
                  <h1 className="text-md font-semibold text-slate-600">
                    Teams Phone with Calling Plan
                  </h1>
                </div>
                <div>
                  <p className="text-left text-xs text-slate-600 mt-4">
                    Everything included in Teams Phone Standard, plus:
                  </p>
                  {/* CHECKBOX */}
                  <div className="flex flex-col gap-2 text-left mt-2">
                    <div className="form-control">
                      <label className="flex justify-start items-center cursor-pointer gap-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="checkbox checkbox-xs [--chkbg:theme(colors.slate.500)] [--chkfg:white] checked:border-slate-500"
                        />
                        <span className="text-xs text-slate-600">
                          Phone number and PSTN service from Microsoft
                        </span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="flex justify-start items-center cursor-pointer gap-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="checkbox checkbox-xs [--chkbg:theme(colors.slate.500)] [--chkfg:white] checked:border-slate-500"
                        />
                        <span className="text-xs text-slate-600">
                          Inclusive of domestic calling
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* PRICE 4 */}
          <div className="col-span-12 md:col-span-6 xl:col-span-2 shadow-md  xl:hover:scale-105">
            <div className="flex flex-col justify-center items-stretch">
              <div className="h-14 text-sm font-semibold flex justify-center items-center bg-slate-200 text-slate-600">
                <h4>International calling plan</h4>
              </div>
              <div className="p-4 flex flex-col text-center">
                <div className="">
                  <h1 className="text-md font-semibold text-slate-600">
                    Teams Phone with international calling
                  </h1>
                </div>
                <div>
                  {/* CHECKBOX */}
                  <div className="flex flex-col gap-2 text-left mt-4">
                    <div className="form-control">
                      <label className="flex justify-start items-center cursor-pointer gap-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="checkbox checkbox-xs [--chkbg:theme(colors.slate.500)] [--chkfg:white] checked:border-slate-500"
                        />
                        <span className="text-xs text-slate-600">
                          Cloud-based phone system
                        </span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="flex justify-start items-center cursor-pointer gap-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="checkbox checkbox-xs [--chkbg:theme(colors.slate.500)] [--chkfg:white] checked:border-slate-500"
                        />
                        <span className="text-xs text-slate-600">
                          Includes phone number with outbound international
                          calling minutes from Microsoft
                        </span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="flex justify-start items-center cursor-pointer gap-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="checkbox checkbox-xs [--chkbg:theme(colors.slate.500)] [--chkfg:white] checked:border-slate-500"
                        />
                        <span className="text-xs text-slate-600">
                          Unlimited inbound calling
                        </span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="flex justify-start items-center cursor-pointer gap-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="checkbox checkbox-xs [--chkbg:theme(colors.slate.500)] [--chkfg:white] checked:border-slate-500"
                        />
                        <span className="text-xs text-slate-600">
                          Call queue, auto attendant, recording, transcription,
                          transfer between devices
                        </span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="flex justify-start items-center cursor-pointer gap-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="checkbox checkbox-xs [--chkbg:theme(colors.slate.500)] [--chkfg:white] checked:border-slate-500"
                        />
                        <span className="text-xs text-slate-600">
                          Unlimited meetings and messaging
                        </span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="flex justify-start items-center cursor-pointer gap-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="checkbox checkbox-xs [--chkbg:theme(colors.slate.500)] [--chkfg:white] checked:border-slate-500"
                        />
                        <span className="text-xs text-slate-600">
                          File sharing, tasks, and polling
                        </span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="flex justify-start items-center cursor-pointer gap-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="checkbox checkbox-xs [--chkbg:theme(colors.slate.500)] [--chkfg:white] checked:border-slate-500"
                        />
                        <span className="text-xs text-slate-600">
                          10 GB of cloud storage per user
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Price;
