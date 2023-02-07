export default function Footer() {
  return (
    <div className="w-full lg:w-1/5 lg:px-6 text-xl text-gray-800 leading-normal">
      <p className="text-base font-bold py-2 lg:pb-6 text-gray-700">TAGs</p>
      <div className="block lg:hidden sticky inset-0 ">
        <button
          id="menu-toggle"
          className="flex w-full justify-end px-3 py-3 bg-white lg:bg-transparent border rounded border-gray-600 hover:border-blue-500 appearance-none focus:outline-none"
        >
          <svg
            className="fill-current h-3 float-right"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
      <div
        className="w-full sticky inset-0 hidden h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent"
        id="menu-content"
      >
        <ul className="list-reset cursor-pointer">
          <li className="py-2 md:my-0 hover:bg-blue-100 lg:hover:bg-transparent">
            <a
              href="#"
              className="block pl-4 align-middle text-gray-700 no-underline hover:text-blue-500 border-l-4 border-transparent lg:hover:border-gray-400"
            >
              <span className="pb-1 md:pb-0 text-sm cursor-pointer">
                Educação
              </span>
              <span className="bg-blue-200 rounded-full text-xs p-1 ml-2">
                {25}
              </span>
            </a>
          </li>
          <li className="py-2 md:my-0 hover:bg-blue-100 lg:hover:bg-transparent">
            <a
              href="#"
              className="block pl-4 align-middle text-gray-700 no-underline hover:text-blue-500 border-l-4 border-transparent lg:hover:border-gray-400"
            >
              <span className="pb-1 md:pb-0 text-sm cursor-pointer">
                Pedagogico
              </span>
              <span className="bg-blue-200 rounded-full text-xs p-1 ml-2">
                {37}
              </span>
            </a>
          </li>
          <li className="py-2 md:my-0 hover:bg-blue-100 lg:hover:bg-transparent">
            <a
              href="#"
              className="block pl-4 align-middle text-gray-700 no-underline hover:text-blue-500 border-l-4 border-transparent lg:hover:border-gray-400"
            >
              <span className="pb-1 md:pb-0 text-sm cursor-pointer">
                Filosofia
              </span>
              <span className="bg-blue-200 rounded-full text-xs p-1 ml-2">
                {42}
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
