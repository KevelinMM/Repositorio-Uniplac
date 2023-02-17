import { useEffect, useState } from "react";

export default function Origin(req) {
  const [origin, setOrigin] = useState(req.origin);
  const [allOrigins, setAllOrigins] = useState(false);

  function orderOriginByAlphabet() {
    var aux;

    aux = origin.sort((a, b) => {
      const nameA = a.origin.toUpperCase(); // ignore upper and lowercase
      const nameB = b.origin.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });

    setOrigin(aux) 
  }

  function orderOriginByNum() {
    var aux;

    aux = origin.sort((a, b) => b.num - a.num);

    setOrigin(aux) 
  }

  useEffect((e) => {
    allOrigins == true ?
    document.getElementById("allOrigins").innerHTML = "Ocultar"
    :
    document.getElementById("allOrigins").innerHTML = "Ver todos"
  },[allOrigins])

  return (
    <div className="lg:mt-6 px-4 w-full lg:px-6 lg:text-xl text-gray-800 leading-normal">
     <div className="lg:hidden h-[60px] flex items-center text-gray-700">
        <select
          defaultValue={0}
          onChange={(e) => window.location.href = "/filtro/origin-" + e.target.value}
          className="bg-orange-200 rounded-full text-xs p-2 mx-1 pr-6"
        >
          <option
            value={0}
            disabled
            className="text-sm flex items-center text-center"
          >
            Origem
          </option>
          {origin.map((e, index) => (
            <option
              key={index}
              value={e.id}
              className="text-sm flex items-center text-center "
            >
              {e.origin}
            </option>
          ))}{" "}
        </select>
      </div>

      <div className="hidden lg:flex lg:flex-col">
        <p className="text-base font-bold lg:py-2 lg:pb-6 text-gray-700 mt-4 lg:mt-0">
          Origem
        </p>
        <ul className=" cursor-pointer  max-h-[650px] overflow-auto">
          {origin.map((e, index) => index < 6 || allOrigins == true ?(
            <li
              key={index}
              className="py-2 md:my-0 hover:bg-orange-100 lg:hover:bg-transparent border-b"
            >
              <a
                href={"/filtro/origin-" + e.id}
                className="block pl-1 align-middle text-gray-700 no-underline hover:text-orange-500 border-l-4 border-transparent lg:hover:border-gray-400"
              >
                <span className=" text-sm cursor-pointer">{e.origin}</span>
                <span className="bg-orange-200 rounded-full text-xs p-1 ml-2 ">
                  {e.num < 10 ? "0" + e.num : e.num}
                </span>
              </a>
            </li>
          ): null )}
        </ul>
        <a
          className="block pl-1 align-middle text-gray-700 hover:text-blue-500 border-l-4 border-transparent lg:hover:border-gray-400"
          onClick={(e) => setAllOrigins(!allOrigins) + (allOrigins == true ? orderOriginByNum() : orderOriginByAlphabet())}
        >
          <span id="allOrigins" className=" text-sm cursor-pointer underline"></span>
        </a>
      </div>
    </div>
  );
}
