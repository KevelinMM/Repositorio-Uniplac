import { useEffect, useState } from "react";

export default function Type(req) {
  const [type, setType] = useState(req.type);
  const [allTypes, setAllTypes] = useState(false);

  function OrderTypeByAlphabet() {
    var aux;

    aux = type.sort((a, b) => {
      const nameA = a.type.toUpperCase(); // ignore upper and lowercase
      const nameB = b.type.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });

    setType(aux);
  }

  function orderTypeByNum() {
    var aux;

    aux = type.sort((a, b) => b.num - a.num);

    setType(aux);
  }

  useEffect(
    (e) => {
      allTypes == true
        ? (document.getElementById("allTypes").innerHTML = "Ocultar")
        : (document.getElementById("allTypes").innerHTML = "Ver todos");
    },
    [allTypes]
  );

  useEffect((e) => {
    if (
      navigator.userAgentData != undefined &&
      navigator.userAgentData.mobile
    ) {
      OrderTypeByAlphabet()
    }
  }, []);

  return (
    <div className="lg:mt-6 px-4 w-full lg:px-6 lg:text-xl text-gray-800 leading-normal">
      <div className="lg:hidden h-[60px] flex items-center text-gray-700 ">
        <select
          defaultValue={0}
          onChange={(e) =>
            (window.location.href = "/filtro/type-" + e.target.value)
          }
          className="rounded-full text-xs p-2 border-none shadow-md mx-auto w-28  "
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
          {type.map((e, index) =>
            allTypes == true || index < 6 ? (
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
            ) : null
          )}
        </ul>
        <a
          className="block pl-1 align-middle text-gray-700 hover:text-blue-500 border-l-4 border-transparent lg:hover:border-gray-400"
          onClick={(e) =>
            setAllTypes(!allTypes) +
            (allTypes == true ? orderTypeByNum() : OrderTypeByAlphabet())
          }
        >
          <span
            id="allTypes"
            className=" text-sm cursor-pointer underline"
          ></span>
        </a>
      </div>
    </div>
  );
}
