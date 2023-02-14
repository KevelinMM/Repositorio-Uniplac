import Image from "next/image";
import { useState } from "react";
import { MdOutlineAdd } from "react-icons/md";
import { BiTrashAlt } from "react-icons/bi";
import Modal from "./component/Modal";
import Back from "../../components/Back";

export default function superAdm() {
  const [origin, setOrigin] = useState("Sistemas de Informação");
  const [category, setCategory] = useState("Graduação");
  const [tag, setTag] = useState("Exemplos Tag");
  const [request, setrequest] = useState("Solicitação");

  return (
    <section className="bg-gradient-to-t from-blue-100 min-h-screen p-3 lg:p-24">
      <div className="flex justify-between mb-2 md:mb-10">
        <p className="text-gray-700 text-lg md:text-3xl font-bold">Painel</p>
        <p className="text-gray-700 text-lg md:text-3xl font-bold pl-2">
          {origin}
        </p>
        <Image
          src={`/logoUniplac.png`}
          alt="Logo Uniplac"
          width={80}
          height={80}
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-4 md:gap-10 mb-4 md:mb-16 ">
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
                  label: "Cancelar",
                },
                {
                  role: "confirm",
                  toClose: false,
                  classes:
                    "bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-200",
                  label: "Confirmar",
                },
              ]}
            >
              <button className="rounded-full px-1 py-1 text-xl bg-green-500 bg-opacity-80">
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
                  label: "Cancelar",
                },
                {
                  role: "confirm",
                  toClose: false,
                  classes:
                    "bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-200",
                  label: "Confirmar",
                },
              ]}
            >
              <button className="rounded-full px-1 py-1 text-xl bg-green-500 bg-opacity-80">
                <MdOutlineAdd />
              </button>
            </Modal>
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
                  label: "Cancelar",
                },
                {
                  role: "confirm",
                  toClose: false,
                  classes:
                    "bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-200",
                  label: "Confirmar",
                },
              ]}
            >
              <button className="rounded-full px-1 py-1 text-xl bg-green-500 bg-opacity-80">
                <MdOutlineAdd />
              </button>
            </Modal>
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
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        >
          <option selected>Pendêntes</option>
          <option value="US">Todos</option>
          <option value="CA">Aprovados</option>
          <option value="FR">Não aprovados</option>
        </select>
        <ul className="mt-4 text-sm bg-slate-200 rounded-md">
          <li className="cursor-pointer mx-5 my-3 p-2  flex justify-between shadow-md">
            <a href="admin/requests/123">{request}</a>
          </li>
          <li className="cursor-pointer mx-5 my-3 p-2 flex justify-between shadow-md">
            <a>{request}</a>
          </li>
          <li className="cursor-pointer mx-5 my-3 p-2 flex justify-between shadow-md">
            <a>{request}</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
