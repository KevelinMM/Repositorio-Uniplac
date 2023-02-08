export default function Tags() {
  return (
    <div className="px-4 w-full lg:w-1/5 lg:px-6 lg:text-xl text-gray-800 leading-normal">
      <p className="text-base font-bold py-2 lg:pb-6 text-gray-700 mt-4 lg:mt-0">
        TAGs
      </p>

      <div className=" space-y-1 lg:hidden flex flex-wrap items-center rounded-b-xl border-t-2  text-gray-700 border-transparent ">
        <div className="bg-blue-200 rounded-full text-xs px-3 py-1 ml-2">
          <span className=" text-sm cursor-pointer">Educação</span>
        </div>
        <div className="bg-blue-200 rounded-full text-xs px-3 py-1 ml-2">
          <span className=" text-sm cursor-pointer">Educação</span>
        </div>
      </div>

      <ul className="cursor-pointer hidden lg:flex lg:flex-col">
        <li className="py-2 md:my-0 hover:bg-blue-100 lg:hover:bg-transparent">
          <a
            href="#"
            className="block pl-4 align-middle text-gray-700 no-underline hover:text-blue-500 border-l-4 border-transparent lg:hover:border-gray-400"
          >
            <span className=" text-sm cursor-pointer">Educação</span>
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
            <span className=" text-sm cursor-pointer">Pedagogico</span>
            <span className="bg-blue-200 rounded-full text-xs p-1 ml-2">
              {37}
            </span>
          </a>
        </li>

      </ul>
    </div>
  );
}
