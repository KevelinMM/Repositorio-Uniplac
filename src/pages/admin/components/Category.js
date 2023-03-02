import { useState, useEffect } from "react";
import { FaCheck, FaTrash } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import axios from "axios";

export default function Category(req) {
  const [allTypes, setAllTypes] = useState(req.allTypes);
  const [typesSearch, setTypesSearch] = useState([]);
  const token = req.token;

  async function deleteType(typeId) {
    await axios.delete(process.env.BACKEND + "types/" + typeId, {
      headers: { Authorization: `bearer ${token}` },
    });
    setAllTypes(allTypes.filter((e) => e.id != typeId));
    setTypesSearch(typesSearch.filter((e) => e.id != typeId));

    document.getElementById("typeCheck").hidden = true;
    document.getElementById("typeAlert").hidden = true;
    document.getElementById("typeDelete").hidden = false;
  }

  async function createType() {
    var typeName = document.getElementById("type").value;
    typeName = typeName[0].toUpperCase() + typeName.slice(1);

    var truncadeType = false;
    typesSearch.map((e) =>
      e.type.toLowerCase() == typeName.toLowerCase()
        ? (truncadeType = true)
        : null
    );
    if (truncadeType) {
      document.getElementById("typeCheck").hidden = true;
      document.getElementById("typeAlert").hidden = false;
      document.getElementById("typeDelete").hidden = true;
    } else {
      const typeCreate = await axios.post(
        process.env.BACKEND + "types",
        {
          type: typeName,
        },
        {
          headers: { Authorization: `bearer ${token}` },
        }
      );
      allTypes.push({ id: typeCreate.data.id, type: typeName });
      setTypesSearch([{ id: typeCreate.data.id, type: typeName }]);
      document.getElementById("typeCheck").hidden = false;
      document.getElementById("typeAlert").hidden = true;
      document.getElementById("typeDelete").hidden = true;
    }
  }

  useEffect(
    (e) => {
      typesSearch.length > 0
        ? (document.getElementById("showType").innerHTML = "Ocultar")
        : (document.getElementById("showType").innerHTML = "Ver todos");
    },
    [typesSearch]
  );

  return (
    <form
      className="adminCards"
      onSubmit={(e) => e.preventDefault() + createType()}
    >
      <div className="flex justify-between mb-4">
      <div>
          <p className="font-semibold">Cadastrar Categoria</p>
          <p className="text-sm pt-1">
            * Categorias que já existem não poderão ser criadas novamente.
          </p>
        </div>
        
        <span
          id="showType"
          onClick={() => setTypesSearch(typesSearch.length > 0 ? [] : allTypes)}
          className="text-blue-500 underline cursor-pointer mr-2 mb-1"
        ></span>
      </div>
      <div className="flex">
        <div hidden id="typeCheck" className="absolute">
          <FaCheck className="m-4 w-4 text-green-500" />
        </div>
        <div hidden id="typeDelete" className="absolute">
          <MdClose className="m-4 w-4 text-red-500" />
        </div>
        <div hidden id="typeAlert" className="absolute">
          <FiAlertCircle className="m-4 w-4 font-bold text-yellow-500" />
        </div>
        <input
          required
          className="w-full rounded-md shadow-lg border-gray-200 p-2 text-sm"
          placeholder="Digite a categoria"
          type="text"
          id="type"
          onChange={(e) =>
            e.target.value.length > 0
              ? setTypesSearch(
                  allTypes.filter((y) =>
                    y.type.toLowerCase().includes(e.target.value.toLowerCase())
                  )
                )
              : setTypesSearch([]) +
                (document.getElementById("typeCheck").hidden = true) +
                (document.getElementById("typeDelete").hidden = true) +
                (document.getElementById("typeAlert").hidden = true)
          }
        />
         <button className="btn ml-2">Adicionar</button>
      </div>
      
      <ul className="mx-2 rounded">
        {typesSearch.map((e, index) => (
          <li
            key={index}
            className="rounded-md p-2 bg-slate-50 flex justify-between shadow-md mt-1"
          >
            {e.type}
            <a onClick={(z) => deleteType(e.id)} className="cursor-pointer">
              <FaTrash />
            </a>
          </li>
        ))}
      </ul>
    </form>
  );
}
