import { useEffect, useState } from "react";
import db from "../db/db";
import axios from "axios";

export default function Origin(req) {
  const [origin, setOrigin] = useState(req.origin);

  return (
    <div className="lg:mt-6 px-4 w-full lg:px-6 lg:text-xl text-gray-800 leading-normal">
      <p className="text-base font-bold lg:py-2 lg:pb-6 text-gray-700 mt-4 lg:mt-0">
        Origem
      </p>

      <div className="lg:hidden h-[60px] flex items-center text-gray-700 ">
        {origin.map((e, index) => (
          <div
            key={index}
            className="bg-blue-200 rounded-full text-sm p-2 mx-1 text-center whitespace-nowrap"
          >
            {e.origin}
          </div>
        ))}
      </div>

      <ul className=" cursor-pointer hidden lg:flex lg:flex-col max-h-[650px] overflow-auto">
        {origin.map((e, index) => (
          <li
            key={index}
            className="py-2 md:my-0 hover:bg-blue-100 lg:hover:bg-transparent border-b"
          >
            <a
              href={"/filtro/origin-" + e.id}
              className="block pl-1 align-middle text-gray-700 no-underline hover:text-blue-500 border-l-4 border-transparent lg:hover:border-gray-400"
            >
              <span className=" text-sm cursor-pointer">{e.origin}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
