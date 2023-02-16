import { useEffect, useState } from "react";
import db from "../db/db";
import axios from "axios";

export default function Type(req) {
  const [type, setType] = useState(req.type);

  return (
    <div className="lg:mt-6 px-4 w-full lg:px-6 lg:text-xl text-gray-800 leading-normal">
      <p className="text-base font-bold lg:py-2 lg:pb-6 text-gray-700 mt-4 lg:mt-0">
        Categoria
      </p>
      
      <div className="lg:hidden h-[60px] flex items-center text-gray-700 ">
        {type.map((e, index) => (
          <div
          key={index}
          className="bg-orange-200 rounded-full text-xs p-2 mx-1 "
        >
          <div className="text-sm flex items-center text-center whitespace-nowrap">
            {e.type}{" "}
            <span className="text-xs bg-orange-100 rounded-full ml-1 p-0.5 ">
              {e.num < 10 ? "0" + e.num : e.num}
            </span>
          </div>
        </div>
        ))}
      </div>
      
      <ul className=" cursor-pointer hidden lg:flex lg:flex-col max-h-[650px] overflow-auto">
        {type.map((e, index) => (
          <li
          key={index}
          className="py-2 md:my-0 hover:bg-orange-100 lg:hover:bg-transparent border-b"
        >
          <a
            href={"/filtro/type-"+ e.id}
            className="block pl-1 align-middle text-gray-700 no-underline hover:text-orange-500 border-l-4 border-transparent lg:hover:border-gray-400"
          >
            <span className=" text-sm cursor-pointer">{e.type}</span>
            <span className="bg-orange-200 rounded-full text-xs p-1 ml-2 ">
              {e.num < 10 ? "0" + e.num : e.num}
            </span>
          </a>
        </li>
        ))}
      </ul>
    </div>
  );
}
