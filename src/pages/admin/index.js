import Image from "next/image";
import { useState } from "react";
import { MdOutlineAdd } from "react-icons/md";
import { BiTrashAlt } from "react-icons/bi";
import Modal from "./component/Modal";
import axios from "axios";

export default function superAdm(props) {
  const userInfo = useState(props.infoUser);

  const [origin, setOrigin] = useState(
    userInfo[0].origin_id
      ? userInfo[0].origin_id.origin
      : userInfo[0].permission_id.name
  );
  const [name, setName] = useState(userInfo[0].name);
  const [originId, setOriginId] = useState(
    userInfo[0].origin_id ? userInfo[0].origin_id.id : 0
  );
  const [category, setCategory] = useState("Graduação");
  const [tag, setTag] = useState("Exemplos Tag");
  const [request, setrequest] = useState("Solicitação");
  const [documents, setDocuments] = useState(props.documents);

  return (
    <div className="bg-gradient-to-t from-blue-100 min-h-screen p-3 lg:pt-24 lg:px-24">
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
      <p className="text-gray-700 text-lg pb-4">{name}</p>
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
          defaultValue={"all"}
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          onChange={(e) =>
            setDocuments(
              e.target.value == "all"
                ? props.documents
                : props.documents.filter(
                    (z) => e.target.value * 1 == z.approved
                  )
            )
          }
        >
          <option value="all">Todos</option>
          <option value={0}>Pendêntes</option>
          <option value={1}>Aprovados</option>
        </select>
        <ul className="mt-4 text-sm bg-slate-200 rounded-md">
          {documents.map((e) => (
            <li
              key={e.id}
              className="cursor-pointer mx-5 my-3 p-2  flex justify-between shadow-md"
            >
              <a href={"admin/requests/" + e.id}>{e.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  try {
    const token = context.req.cookies["auth"];
    const user = await axios.get(process.env.BACKEND + "userInfo", {
      headers: { Authorization: `bearer ${token}` },
    });

    const infoUser = user.data.shift();
    var documents;

    if (infoUser.origin_id) {
      const doc = await axios.get(
        process.env.BACKEND + "documentsByOrigin/" + infoUser.origin_id.id
      );
      documents = doc.data;
    } else {
      const doc = await axios.get(
        process.env.BACKEND + "documentsByOrigin/" + 0
      );
      documents = doc.data;
    }

    return { props: { infoUser, documents } };
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  }
}
