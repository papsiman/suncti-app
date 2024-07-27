import Image from "next/image";

export default function SERVICE2() {
  return (
    <div className="pt-16 pb-32 px-12">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold">What We Do?</h1>
      </div>
      <div className="flex flex-wrap justify-center items-stretch pt-16 gap-8">
        <div className="card card-compact bg-base-100 w-96 shadow-2xl hover:bg-secondary hover:text-white p-10 relative overflow-hidden">
          <figure className="h-32">
            <Image src="/service/1.png" alt="" width={128} height={0} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Microsoft Team</h2>
            <p>
              Microsoft Teams is a team collaboration application developed by
              Microsoft as part of the Microsoft 365 family of products,
              offering workspace chat and video conferencing, file storage, and
              integration of proprietary and third-party applications and
              services.
            </p>
          </div>
          <div className="absolute -bottom-16 -right-6 bg-primary w-24 h-48 rotate-45"></div>
        </div>
        <div className="card card-compact bg-base-100 w-96 shadow-2xl hover:bg-secondary hover:text-white p-10 relative overflow-hidden">
          <figure className="h-32">
            <Image src="/service/2.png" alt="" width={186} height={0} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Audiocodes</h2>
            <p>
            AudioCodes' reliable and versatile products have played a major part in the project, giving us the flexibility and scalability we require to ensure that all our voice connectivity needs are met. Ralph Schepke, Head of User Experience at UCB.
            </p>
          </div>
          <div className="absolute -bottom-16 -right-6 bg-primary w-24 h-48 rotate-45"></div>
        </div>
        <div className="card card-compact bg-base-100 w-96 shadow-2xl hover:bg-secondary hover:text-white p-10 relative overflow-hidden">
          <figure className="h-32">
            <Image src="/service/3.png" alt="" width={300} height={0} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Paradoxes</h2>
            <p>
            VoIP Gateway products used to effectively implement the smooth VoIP network. The VoIP gateway is designed for comfort, ease-of-use to satisfied necessary of customers. It's a cost-effective gateway for call termination and origination. It is fully compatible with leading Softswitch and SIP servers.
            </p>
          </div>
          <div className="absolute -bottom-16 -right-6 bg-primary w-24 h-48 rotate-45"></div>
        </div>
      </div>
    </div>
  );
}
