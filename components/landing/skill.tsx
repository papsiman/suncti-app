import Container from "../common/container";
import ContainerLeft from "../common/containerleft";
import Wrapper from "../common/warpper";

const Skill = () => {
    return (
      <div
        className="bg-slate-600 py-32 px-8 md:px-16"
        style={{
          backgroundImage: `url(${"/bg2.png"})`,
          backgroundSize: "cover",
        }}
      >
        <div className="grid grid-cols-12 items-center max-w-screen-xl mx-auto gap-8 relative">
          <div className="col-span-12 md:col-span-6 mx-4 text-white">
            <Wrapper>
              <ContainerLeft>
                <h4 className="text-xl font-semibold">
                  Our Professional Skill’s
                </h4>
                <h1 className="text-2xl sm:text-3xl font-bold pt-3 text-purple-500">
                  Professional Skill of{" "}
                  <span className="text-white">SunCTI.</span>
                </h1>
              </ContainerLeft>
            </Wrapper>
          </div>
          <div className="col-span-12 md:col-span-6 mx-4">
            <div className="flex flex-col gap-8">
              {/* PROGRESS1 */}
              <div className="flex flex-col">
                <Wrapper>
                  <Container delay={0.5}>
                    <div className="flex flex-row justify-between text-lg">
                      <h5 className="items-start text-white">MS Teams Phone Implementor</h5>
                      <h5 className="items-end text-primary text-xl font-semibold">90%</h5>
                    </div>
                    <progress
                      className="progress progress-primary w-full bg-white"
                      value="90"
                      max="100"
                    ></progress>
                  </Container>
                </Wrapper>
              </div>
              {/* PROGRESS2 */}
              <div className="flex flex-col">
                <Wrapper>
                  <Container delay={0.6}>
                    <div className="flex flex-row justify-between text-lg">
                      <h5 className="items-start text-white">VOIP Implementor</h5>
                      <h5 className="items-end text-primary text-xl font-semibold">85%</h5>
                    </div>
                    <progress
                      className="progress progress-primary w-full bg-white"
                      value="85"
                      max="100"
                    ></progress>
                  </Container>
                </Wrapper>
              </div>
              {/* PROGRESS2 */}
              <div className="flex flex-col">
                <Wrapper>
                  <Container delay={0.7}>
                  <div className="flex flex-row justify-between text-lg">
                      <h5 className="items-start text-white">Profestional Service Support</h5>
                      <h5 className="items-end text-primary text-xl font-semibold">80%</h5>
                    </div>
                    <progress
                      className="progress progress-primary w-full bg-white"
                      value="80"
                      max="100"
                    ></progress>
                  </Container>
                </Wrapper>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Skill;