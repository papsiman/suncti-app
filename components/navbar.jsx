import Image from "next/image";

const NAVBAR = () => {
    return (
      <div className="absolute w-full px-8 lg:px-32 mt-10">
        <div className="navbar bg-base-100 px-10 py-4 rounded-md">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a>Product</a>
                  <ul className="p-2">
                  <li>
                      <a href="/msteam">Microsoft Team</a>
                    </li>
                    <li>
                      <a href="/audiocode">Audiocodes</a>
                    </li>
                    <li>
                      <a href="/paradox">Paradoxes</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/catalog">Product Catalog</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/quote">Get A Quote</a>
                </li>
              </ul>
            </div>
            <a href="/" className="text-black"><Image src="/suncti-black-logo.png" alt="" width={128} height={0}/></a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a href="/" className="text-lg font-semibold">Home</a>
              </li>
              <li>
                <a href="/about" className="text-lg font-semibold">About</a>
              </li>
              <li>
                <details>
                  <summary className="text-lg font-semibold">Product</summary>
                  <ul className="p-2 w-40 h-32">
                    <li>
                      <a href="/msteam">Microsoft Team</a>
                    </li>
                    <li>
                      <a href="/audiocode">Audiocodes</a>
                    </li>
                    <li>
                      <a href="/paradox">Paradoxes</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a href="/catalog" className="text-lg font-semibold">Product Catalog</a>
              </li>
              <li>
                <a href="/contact" className="text-lg font-semibold">Contact</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a href="/quote" className="btn btn-secondary hover:btn-primary hover:text-white">
              Get A Quote
            </a>
          </div>
        </div>
      </div>
    );
};

export default NAVBAR;