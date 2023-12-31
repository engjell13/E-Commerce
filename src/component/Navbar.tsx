const Navbar = (): JSX.Element => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-[10px_-2px_10px_#efefef] fixed top-0 left-0 right-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 font-semibold">
            <li>
              <a
                href="/"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 group  transition duration-300"
              >
                Home
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
              </a>
            </li>
            <li>
              <a
                href="/About"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 group  transition duration-300"
              >
                About
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
              </a>
            </li>
            <li>
              <a
                href="/Store"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 group  transition duration-300"
              >
                Store
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-10">
          <button className=" p-2 flex text-3xl bg-[#FFD4D4] hover:bg-[#f79191] transition-all active:bg-[#f79191] text-white rounded-full relative">
            <i className="bx bxs-heart"></i>
            <span className="absolute top-7 left-7 bg-black text-sm py-0.5 px-2 rounded-full ">
              3
            </span>
          </button>
          <button className=" p-2 flex text-3xl bg-[#FFD4D4] hover:bg-[#f79191] transition-all active:bg-[#f79191] text-white rounded-full relative">
            <i className="bx bxs-store"></i>
            <span className="absolute top-7 left-7 bg-black text-sm py-0.5 px-2 rounded-full ">
              3
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
