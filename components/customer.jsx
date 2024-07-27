import Image from "next/image";

const customers = [
    {
        id: 1,
        img: "/customer/c-1.png",
        name: "DTAC"
    },
    {
        id: 2,
        img: "/customer/c-2.png",
        name: "Bangchak Corporation PCL."
    },
    {
        id: 3,
        img: "/customer/c-3.png",
        name: "Department of Provincial Administration"
    },
    {
        id: 4,
        img: "/customer/c-4.png",
        name: "Thailand Institute of Nuclear Technology (Public Organization)"
    },
    {
        id: 5,
        img: "/customer/c-5.png",
        name: "Traffic Radio for Society FM99.5"
    },
    {
        id: 6,
        img: "/customer/c-6.png",
        name: "Nok Airlines PCL."
    },
    {
        id: 7,
        img: "/customer/c-7.png",
        name: "PTT Global Chemical PCL."
    },
    {
        id: 8,
        img: "/customer/c-8.png",
        name: "Jardine Engineering Corporation"
    }
]

const CUSTOMER = () => {
    return (
      <div className="pt-16 pb-32 px-5 flex justify-center">
        <div className="max-w-5xl flex flex-col items-center">
          <h2 className="text-4xl font-semibold">
            Our <span className="text-primary">Customers</span> in Thailand
          </h2>
          <div className="flex flex-wrap flex-grow-0 justify-center gap-8 py-16">
            {customers.map((customer) => (
              <div key={customer.id} className="w-56 shadow-xl rounded-xl bg-gray-50 hover:scale-105 cursor-pointer">
                <div className="flex h-40 justify-center items-center">
                  <Image src={customer.img} alt="" loading = 'lazy' width={128} height={128} style={{ width: '128px', height: 'auto', maxHeight: '128px'}}/>
                </div>
                <div className="text-center py-3 px-3">
                  <span>{customer.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default CUSTOMER;