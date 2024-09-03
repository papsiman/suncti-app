import Image from "next/image";
import AnimatedShinyText from "../magicui/animated-shiny-text";
import Login from "@/app/login/page";
import Setting from "./setting";
import { useEffect, useState } from "react";
import { IContent, ISetting } from "@/app/db";
import ProductComponent from "../landing/product.component";

const Navbar = () => {

  const inputContent = {} as IContent;
  inputContent.Component = "product-main-";

  const [products, setProducts] = useState<IContent[]>([]);
  const [setting, setSetting] = useState<ISetting>();
  const [refresh, setRefresh] = useState(0);

  // get product
  useEffect(() => {
    fetch("/api/content", {
      method: "POST",
      body: JSON.stringify(inputContent),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.status === "ok") {
          setProducts(response.data);
        }
      });
  }, [refresh]);

  // get setting
  useEffect(() => {

    fetch("/api/setting", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => res.json())
    .then((response) => {
      if (response.status === "ok") {
        setSetting(response.data[0]);
      }
    });

  }, [refresh]);

  return (
    <div className="navbar bg-slate-100 rounded-xl border">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="/" className="text-slate-600">
                Home
              </a>
            </li>
            <li>
              <a href="/landing/about" className="text-slate-600">
                About
              </a>
            </li>
            <li>
              <a>Product</a>
              <ul className="p-2">
                {products.length > 0 && (products.map((product) => {
                  return (
                    <div key={product.Id}>
                      <li>
                        <a href={product?.Link} className="text-slate-600">
                          {product?.Title}
                        </a>
                      </li>
                    </div>
                  );
                }))}
              </ul>
            </li>
            {/* <li>
              <a href="/landing/catalog" className="text-slate-600">
                Product Catalog
              </a>
            </li> */}
            <li>
              <a href="/landing/contact" className="text-slate-600">
                Contact
              </a>
            </li>
            <li>
              <Login />
            </li>
            <li>
              <a href="/#contact" className="text-slate-600">
                Get A Quote
              </a>
            </li>
          </ul>
        </div>
        <a id="navbarlogo" href="/" className="text-black">
          <Image
            src={setting?.LogoBase64 ? setting?.LogoBase64 : (setting?.Logo ? setting?.Logo : "/suncti-black-logo.png")}
            alt=""
            width={125}
            height={0}
            style={{ height: "auto" }}
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a
              href="/"
              className="text-base font-medium btn shadow-none border-0 bg-transparent hover:bg-violet-100 visited:bg-violet-100 text-slate-600"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/landing/about"
              className="text-base font-medium btn shadow-none border-0 bg-transparent hover:bg-violet-100 visited:bg-violet-100 text-slate-600"
            >
              About
            </a>
          </li>
          <li>
            <ProductComponent products={products} setRefresh={setRefresh}/>
          </li>
          {/* <li>
            <a
              href="/landing/catalog"
              className="text-base font-medium btn shadow-none border-0 bg-transparent hover:bg-violet-100 visited:bg-violet-100 text-purple-700"
            >
              Product Catalog
            </a>
          </li> */}
          <li>
            <a
              href="/landing/contact"
              className="text-base font-medium btn shadow-none border-0 bg-transparent hover:bg-violet-100 visited:bg-violet-100 text-slate-600"
            >
              Contact
            </a>
          </li>
          <li>
            <Login />
            <Setting />
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="/#contact"
          className="hidden sm:flex border-2 border-purple-500 hover:border-0 hover:bg-gradient-to-r hover:from-indigo-200 hover:to-pink-200 rounded-2xl"
        >
          <AnimatedShinyText className="text-purple-500 hover:text-purple-700 inline-flex items-center justify-center px-8 py-2 transition ease-out hover:duration-300">
            <span>Get A Quote</span>
          </AnimatedShinyText>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
