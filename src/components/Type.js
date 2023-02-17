import { useEffect, useState } from "react";

export default function Type(req) {
  const [type, setType] = useState(req.type);

  return (
    <div className="lg:mt-6 px-4 w-full lg:px-6 lg:text-xl text-gray-800 leading-normal">
      <div className="lg:hidden h-[60px] flex items-center text-gray-700 ">
        <select
          defaultValue={0}
          onChange={(e) => window.location.href = "/filtro/type-" + e.target.value}
          className="bg-orange-200 rounded-full text-xs p-2 mx-1 pr-6"
        >
          <option
            value={0}
            disabled
            className="text-sm flex items-center text-center"
          >
            Categoria
          </option>
          {type.map((e, index) => (
            <option
              key={index}
              value={e.id}
              className="text-sm flex items-center text-center "
            >
              {e.type}
            </option>
          ))}{" "}
        </select>
      </div>

      <div className="hidden lg:flex lg:flex-col">
        <p className="text-base font-bold lg:py-2 lg:pb-6 text-gray-700 mt-4 lg:mt-0">
          Categoria
        </p>
        <ul className=" cursor-pointer  max-h-[650px] overflow-auto">
          {type.map((e, index) => (
            <li
              key={index}
              className="py-2 md:my-0 hover:bg-orange-100 lg:hover:bg-transparent border-b"
            >
              <a
                href={"/filtro/type-" + e.id}
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
    </div>
  );
}
