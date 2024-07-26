import Image from "next/image";

const services = [
    {
        id:1,
        title:'Microsoft Team',
        des:'Microsoft Teams is a team collaboration application developed by Microsoft as part of the Microsoft 365 family of products, offering workspace chat and video conferencing, file storage, and integration of proprietary and third-party applications and services.',
        img:'/service/1.png',
    },
    {
        id:2,
        title:'Audiocodes',
        des:'"AudioCodes’ reliable and versatile products have played a major part in the project, giving us the flexibility and scalability we require to ensure that all our voice connectivity needs are met." Ralph Schepke, Head of User Experience at UCB',
        img:'/service/2.png',
    },
    {
        id:3,
        title:'Paradoxes',
        des:'VoIP Gateway products used to effectively implement the smooth VoIP network. The VoIP gateway is designed for comfort, ease-of-use to satisfied necessary of customers. It’s a cost-effective gateway for call termination and origination. It is fully compatible with leading Softswitch and SIP servers.',
        img:'/service/3.png',
    },
]

export default function SERVICE() {
  return (
    <div className="pt-16 pb-32 px-12">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold">What We Do?</h1>
      </div>
      <div className="flex flex-wrap justify-center items-stretch pt-16 gap-8">
        {services.map((service)=>(
          <div key={service.id} className="card card-compact bg-base-100 w-96 shadow-lg">
            <figure className="h-32 rounded-t-lg">
              <Image
                src={service.img}
                loading = 'lazy'
                alt=""
                width={128}
                height={0}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service.title}</h2>
              <p>{service.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
