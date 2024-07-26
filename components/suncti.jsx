const SUNCTI = () => {
    return (
      <div>
        <div className="grid grid-cols-12 justify-center items-center bg-white shadow-xl rounded-lg py-20 px-20 gap-8 hover:bg-secondary hover:text-white"
        style={{
          backgroundImage: `url(${"/bg2.png"})`,
          backgroundSize: "cover",
        }}
        >
          <div className="col-span-12 md:col-span-6 mx-auto">
            <img src="/ab-2.jpg" alt="" className="rounded-lg"/>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="max-w-[500px] flex flex-col gap-4">
              <h4 className="text-xl font-semibold text-primary">Welcom To SUNCTI</h4>
              <h2 className="text-4xl font-semibold">We are trusted business partner</h2>
              <p className="font-medium text-gray-400 indent-10">
                SunCTI is a Microsoft Communications & Cloud partner. We offers
                Consultants, Implement and Operate of the Skype for Business
                (On-premise/Online) & Microsoft Teams in Thailand and ASEAN
                country. More than sixteen years our experiences in enterprise
                voice area. We target to be the best partner of customers to
                smooth transition the traditional telephone system to Skype for
                Business technology in order to improve their productivity.
              </p>
              <div>
                <button className="btn btn-primary text-white">Expore More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SUNCTI;