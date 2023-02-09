import Image from "next/image";
import { useState } from "react";
import { MdOutlineAdd } from "react-icons/md";
import { BiTrashAlt } from "react-icons/bi";
import Modal from "./component/Modal";

export default function superAdm() {
  const [origin, setOrigin] = useState("Sistemas de Informação");
  const [category, setCategory] = useState("Graduação");
  const [tag, setTag] = useState("Exemplos Tag");
  return (
    <section className=" bg-gray-150 min-h-screen p-3 lg:p-24">
      <div className="flex justify-between mb-10">
        <p className="text-gray-700 text-3xl  font-bold">Painel</p>
        <p className="text-gray-700 text-3xl font-bold">{origin}</p>
        <Image
          src={`/logoUniplac.png`}
          alt="Logo Uniplac"
          width={80}
          height={80}
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-10 mb-16 ">
        <div className="bg-slate-300 p-4 rounded-md">
          <div className="flex justify-between mb-4">
            <p className="font-semibold">Categorias</p>
            <Modal
              title={"Adicionar Categoria"}
              onConfirm={() => console.log("Button confirm")}
              onDiscard={() => console.log("Button discard")}
              buttons={[
                {
                  role: "discard",
                  toClose: true,
                  classes:
                    "bg-zinc-500/20 px-4 py-2 rounded-lg hover:bg-zinc-500/30 transition-all duration-200",
                  label: "Discard",
                },
                {
                  role: "confirm",
                  toClose: false,
                  classes:
                    "bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-200",
                  label: "Confirm",
                },
              ]}
            >
              <button className="rounded-full px-2 py-1 text-xl bg-green-500 bg-opacity-80">
                <MdOutlineAdd />
              </button>
            </Modal>
          </div>
          <ul className="pl-2 rounded">
            <li className="rounded-md p-2 bg-slate-50 mb-2 flex justify-between shadow-md">
              {category}
              <button>
                <BiTrashAlt />
              </button>
            </li>
          </ul>
        </div>

        <div className="bg-slate-300 p-4 rounded-md">
          <div className="flex justify-between mb-4">
            <p className="font-semibold">Origem</p>
            <button className="rounded-full px-2 py-1 text-xl bg-green-500 bg-opacity-80">
              <MdOutlineAdd />
            </button>
          </div>
          <ul className="pl-2 rounded">
            <li className="rounded-md p-2 bg-slate-50 mb-2 flex justify-between shadow-md">
              {origin}
              <button>
                <BiTrashAlt />
              </button>
            </li>
          </ul>
        </div>

        <div className="bg-slate-300 p-4 rounded-md">
          <div className="flex justify-between mb-4">
            <p className="font-semibold">Tags</p>
            <button className="rounded-full px-2 py-1 text-xl bg-green-500 bg-opacity-80">
              <MdOutlineAdd />
            </button>
          </div>
          <ul className="pl-2 rounded">
            <li className="rounded-md p-2 bg-slate-50 mb-2 flex justify-between shadow-md">
              {tag}
              <button>
                <BiTrashAlt />
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid col-1 bg-slate-300 p-4 rounded-md w-full">
        <p className="font-semibold mb-4">Solicitações</p>
        <select
          id="countries"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        >
          <option selected>Pendêntes</option>
          <option value="US">Todos</option>
          <option value="CA">Aprovados</option>
          <option value="FR">Não aprovados</option>
        </select>
      </div>
    </section>
  );
}
