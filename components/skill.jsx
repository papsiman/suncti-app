const SIKLL = () => {
    return (
      <div className="bg-secondary py-32 px-5"
        style={{
          backgroundImage: `url(${"/bg2.png"})`,
          backgroundSize: "cover",
        }}
      >
        <div className="grid grid-cols-12 items-center max-w-6xl mx-auto gap-8 relative">
          <div className="col-span-12 md:col-span-6 text-white">
            <h4 className="text-xl font-semibold text-primary">Our Professional Skill’s</h4>
            <h1 className="text-4xl font-semibold pt-3">
              Professional Skill of <span className="text-primary">SUNCTI.</span>
            </h1>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="flex flex-col gap-8">
              {/* PROGRESS1 */}
              <div className="flex flex-col">
                <div className="flex flex-row justify-between text-white">
                  <h5 className="items-start">Skill 1</h5>
                  <h5 className="items-end">56%</h5>
                </div>
                <progress
                  className="progress progress-primary w-full bg-white"
                  value="56"
                  max="100"
                ></progress>
              </div>
              {/* PROGRESS2 */}
              <div className="flex flex-col">
                <div className="flex flex-row justify-between text-white">
                  <h5 className="items-start">Skill 2</h5>
                  <h5 className="items-end">80%</h5>
                </div>
                <progress
                  className="progress progress-primary w-full bg-white"
                  value="80"
                  max="100"
                ></progress>
              </div>
              {/* PROGRESS2 */}
              <div className="flex flex-col">
                <div className="flex flex-row justify-between text-white">
                  <h5 className="items-start">Skill 3</h5>
                  <h5 className="items-end">37%</h5>
                </div>
                <progress
                  className="progress progress-primary w-full bg-white"
                  value="37"
                  max="100"
                ></progress>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SIKLL;