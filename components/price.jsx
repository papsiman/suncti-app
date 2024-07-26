const PRICE = () => {
    return (
      <div className="pt-32 pb-16 px-12">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-semibold">Add your Microsoft Teams plan today</h1>
          <div className="grid grid-cols-12 py-16 gap-8">
            {/* PRICE 1 */}
            <div className="col-span-12 md:col-span-6 lg:col-span-3 shadow-xl rounded-xl hover:scale-110">
              <div className="flex flex-col justify-center items-stretch">
                <div className="h-12 flex justify-center items-center bg-primary text-white rounded-t-xl">
                  <h4>Bring-your-own calling plan</h4>
                </div>
                <div className="p-4 pb-10 flex flex-col text-center">
                  <div className="h-28">
                    <h1 className="text-xl font-semibold">
                      Microsoft Teams Phone Standard
                    </h1>
                  </div>
                  <div className="h-16">
                    <p>$8.00 user/month</p>
                    <p>(Annual subscription–auto renews)</p>
                  </div>
                  <div>
                    <button className="btn btn-sm btn-primary text-white mt-8">
                      Buy now
                    </button>
                    {/* CHECKBOX */}
                    <div className="flex flex-col gap-2 text-left mt-8">
                      <div className="form-control">
                        <label className="flex justify-start items-center cursor-pointer gap-3">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="checkbox checkbox-primary"
                          />
                          <span className="label-text">
                            Cloud-based phone system
                          </span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="flex justify-start items-center cursor-pointer gap-3">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="checkbox checkbox-primary"
                          />
                          <span className="label-text">
                            Make and receive voice and video calls over PSTN or
                            an internet connection
                          </span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="flex justify-start items-center cursor-pointer gap-3">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="checkbox checkbox-primary"
                          />
                          <span className="label-text">
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
                            className="checkbox checkbox-primary"
                          />
                          <span className="label-text">
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
                            className="checkbox checkbox-primary"
                          />
                          <span className="label-text">
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
                            className="checkbox checkbox-primary"
                          />
                          <span className="label-text">99.999% uptime SLA</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* PRICE 2 */}
            <div className="col-span-12 md:col-span-6 lg:col-span-3 shadow-xl rounded-xl hover:scale-110">
              <div className="flex flex-col justify-center items-stretch">
                <div className="h-12 flex justify-center items-center bg-primary text-white rounded-t-xl">
                  <h4>Pay-as-you-go calling plan</h4>
                </div>
                <div className="p-4 flex flex-col text-center">
                  <div className="h-28">
                    <h1 className="text-xl font-semibold">
                      Teams Phone with pay-as-you-go calling (country zone 1 -
                      US)
                    </h1>
                  </div>
                  <div className="h-16">
                    <p>$11.00 user/month</p>
                    <p>(Annual subscription–auto renews)</p>
                  </div>
                  <div>
                    <button className="btn btn-sm btn-primary text-white mt-8">
                      Buy now
                    </button>
                    {/* CHECKBOX */}
                    <div className="flex flex-col gap-2 text-left mt-8">
                      <div className="form-control">
                        <label className="flex justify-start items-center cursor-pointer gap-3">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="checkbox checkbox-primary"
                          />
                          <span className="label-text">
                            Cloud-based phone system
                          </span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="flex justify-start items-center cursor-pointer gap-3">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="checkbox checkbox-primary"
                          />
                          <span className="label-text">
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
                            className="checkbox checkbox-primary"
                          />
                          <span className="label-text">
                            Unlimited inbound calling
                          </span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="flex justify-start items-center cursor-pointer gap-3">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="checkbox checkbox-primary"
                          />
                          <span className="label-text">
                            Call queue, auto attendant, recording,
                            transcription, transfer between devices
                          </span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="flex justify-start items-center cursor-pointer gap-3">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="checkbox checkbox-primary"
                          />
                          <span className="label-text">
                            Unlimited meetings and messaging
                          </span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="flex justify-start items-center cursor-pointer gap-3">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="checkbox checkbox-primary"
                          />
                          <span className="label-text">
                            File sharing, tasks, and polling
                          </span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="flex justify-start items-center cursor-pointer gap-3">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="checkbox checkbox-primary"
                          />
                          <span className="label-text">
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
            <div className="col-span-12 md:col-span-6 lg:col-span-3 shadow-xl rounded-xl hover:scale-110">
              <div className="flex flex-col justify-center items-stretch">
                <div className="h-12 flex justify-center items-center bg-primary text-white rounded-t-xl">
                  <h4>Domestic calling plan</h4>
                </div>
                <div className="p-4 flex flex-col text-center">
                  <div className="h-28">
                    <h1 className="text-xl font-semibold">
                      Teams Phone with Calling Plan (country zone 1 - US)
                    </h1>
                  </div>
                  <div className="h-16">
                    <p>$15.00 user/month</p>
                    <p>(Annual subscription–auto renews)</p>
                    <p>Price includes communication taxes and fees.</p>
                  </div>
                  <div>
                    <button className="btn btn-sm btn-primary text-white mt-8">
                      Buy now
                    </button>
                    <p className="label-text mt-8">
                      Everything included in Teams Phone Standard, plus:
                    </p>
                    {/* CHECKBOX */}
                    <div className="flex flex-col gap-2 text-left mt-2">
                      <div className="form-control">
                        <label className="flex justify-start items-center cursor-pointer gap-3">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="checkbox checkbox-primary"
                          />
                          <span className="label-text">
                            Phone number and PSTN service from Microsoft
                          </span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="flex justify-start items-center cursor-pointer gap-3">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="checkbox checkbox-primary"
                          />
                          <span className="label-text">
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
            <div className="col-span-12 md:col-span-6 lg:col-span-3 shadow-xl rounded-xl hover:scale-110">
              <div className="flex flex-col justify-center items-stretch">
                <div className="h-12 flex justify-center items-center bg-primary text-white rounded-t-xl">
                  <h4>International calling plan</h4>
                </div>
                <div className="p-4 flex flex-col text-center">
                  <div className="h-28">
                    <h1 className="text-xl font-semibold">
                      Teams Phone with international calling
                    </h1>
                  </div>
                  <div className="h-16">
                    <p>$32.00 user/month</p>
                    <p>(Annual subscription–auto renews)</p>
                  </div>
                  <div>
                    <button className="btn btn-sm btn-primary text-white mt-8">
                      Buy now
                    </button>
                    {/* CHECKBOX */}
                    <div className="flex flex-col gap-2 text-left mt-8">
                      <div className="form-control">
                        <label className="flex justify-start items-center cursor-pointer gap-3">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="checkbox checkbox-primary"
                          />
                          <span className="label-text">
                            Cloud-based phone system
                          </span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="flex justify-start items-center cursor-pointer gap-3">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="checkbox checkbox-primary"
                          />
                          <span className="label-text">
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
                            className="checkbox checkbox-primary"
                          />
                          <span className="label-text">
                            Unlimited inbound calling
                          </span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="flex justify-start items-center cursor-pointer gap-3">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="checkbox checkbox-primary"
                          />
                          <span className="label-text">
                            Call queue, auto attendant, recording,
                            transcription, transfer between devices
                          </span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="flex justify-start items-center cursor-pointer gap-3">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="checkbox checkbox-primary"
                          />
                          <span className="label-text">
                            Unlimited meetings and messaging
                          </span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="flex justify-start items-center cursor-pointer gap-3">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="checkbox checkbox-primary"
                          />
                          <span className="label-text">
                            File sharing, tasks, and polling
                          </span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="flex justify-start items-center cursor-pointer gap-3">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="checkbox checkbox-primary"
                          />
                          <span className="label-text">
                            10 GB of cloud storage per user
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PRICE;