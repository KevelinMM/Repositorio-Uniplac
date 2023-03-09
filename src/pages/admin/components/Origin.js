import { useState, useEffect } from "react";
import { FaCheck, FaTrash } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import axios from "axios";

export default function Origin(req) {
  const [allOrigins, setAllOrigins] = useState(req.allOrigins);
  const [originsSearch, setOriginsSearch] = useState([]);
  const token = req.token;

  async function createOrigin() {
    var originName = document.getElementById("origin").value;
    originName = originName[0].toUpperCase() + originName.slice(1);

    var truncadeOrigin = false;
    originsSearch.map((e) =>
      e.origin.toLowerCase() == originName.toLowerCase()
        ? (truncadeOrigin = true)
        : null
    );
    if (truncadeOrigin) {
      document.getElementById("originCheck").hidden = true;
      document.getElementById("originAlert").hidden = false;
      document.getElementById("originDelete").hidden = true;
    } else {
      const originDelete = await axios.post(process.env.BACKEND + "origins", {
        origin: originName,
      });
      console.log(originDelete);
      allOrigins.push({ id: originDelete.data.id, origin: originName });
      setOriginsSearch([{ id: originDelete.data.id, origin: originName }]);
      document.getElementById("originCheck").hidden = false;
      document.getElementById("originAlert").hidden = true;
      document.getElementById("originDelete").hidden = true;
    }
  }

  async function deleteOrigin(originId) {
    await axios.delete(process.env.BACKEND + "origins/" + originId, {
      headers: { Authorization: `bearer ${token}` },
    });
    setAllOrigins(allOrigins.filter((e) => e.id != originId));
    setOriginsSearch(originsSearch.filter((e) => e.id != originId));

    document.getElementById("originCheck").hidden = true;
    document.getElementById("originAlert").hidden = true;
    document.getElementById("originDelete").hidden = false;
  }

  useEffect(
    (e) => {
      originsSearch.length > 0
        ? (document.getElementById("showOrigin").innerHTML = "Ocultar")
        : (document.getElementById("showOrigin").innerHTML = "Ver todos");
    },
    [originsSearch]
  );

  return (
    <form
      className="adminCards"
      onSubmit={(e) => e.preventDefault() + createOrigin()}
    >
      <div className="flex justify-between mb-4">
        <p className="font-semibold">Origens</p>
        <span
          id="showOrigin"
          onClick={() =>
            setOriginsSearch(originsSearch.length > 0 ? [] : allOrigins)
          }
          className="text-blue-500 underline cursor-pointer mr-2 mb-1"
        ></span>
      </div>
      <div className="flex">
        <div className="flex flex-row-reverse w-full items-center">
          <div hidden id="originCheck" className="absolute">
            <FaCheck className="m-4 w-4 text-green-500" />
          </div>
          <div hidden id="originDelete" className="absolute">
            <MdClose className="m-4 w-4 text-red-500" />
          </div>
          <div hidden id="originAlert" className="absolute">
            <FiAlertCircle className="m-4 w-4 font-bold text-yellow-500" />
          </div>
          <input
            required
            className="w-full rounded-md border-gray-200 p-2 text-sm shadow-lg"
            placeholder="Aperte enter para Cadastrar Origem"
            type="text"
            id="origin"
            onChange={(e) =>
              e.target.value.length > 1
                ? setOriginsSearch(
                    allOrigins.filter((y) =>
                      y.origin
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase())
                    )
                  )
                : setOriginsSearch([]) +
                  (document.getElementById("originCheck").hidden = true) +
                  (document.getElementById("originDelete").hidden = true) +
                  (document.getElementById("originAlert").hidden = true)
            }
          />
        </div>
        <button className="btn ml-2">Adicionar</button>
      </div>
      <ul className="mx-2 rounded">
        {originsSearch.map((e, index) => (
          <li
            key={index}
            className="rounded-md p-2 bg-slate-50 flex justify-between shadow-md mt-1"
          >
            {e.origin}
            <a onClick={(z) => deleteOrigin(e.id)} className="cursor-pointer">
              <FaTrash />
            </a>
          </li>
        ))}
      </ul>
    </form>
  );
}
