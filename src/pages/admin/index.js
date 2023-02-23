import Image from "next/image";
import { useState } from "react";
import { MdOutlineAdd, MdClose } from "react-icons/md";
import { BiTrashAlt } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";
import Modal from "./component/Modal";
import axios from "axios";

export default function superAdm(props) {
  const userInfo = useState(props.infoUser);
  const token = props.token;

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
  const [allTags, setAllTags] = useState(props.allTags);
  const [tagsSearch, setTagsSearch] = useState([]);

  async function createTag() {
    const tagName = document.getElementById("tag").value;
    var truncadeTag = false;
    tagsSearch.map((e) => (e.tag == tagName ? (truncadeTag = true) : null));
    if (truncadeTag) {
      document.getElementById("check").hidden = true;
      document.getElementById("alert").hidden = false;
      document.getElementById("delete").hidden = true;

    } else {
      const tagDelete = await axios.post(process.env.BACKEND + "tags", {
        tag: [{ tag: tagName, approved: 1 }],
      });
      allTags.push({ id: tagDelete.data[0].id, tag: tagName, approved: true });
      setTagsSearch([
        { id: tagDelete.data[0].id, tag: tagName, approved: true },
      ]);
      document.getElementById("check").hidden = false;
      document.getElementById("alert").hidden = true;
      document.getElementById("delete").hidden = true;

    }
  }

  async function deleteTag(tagId) {
    await axios.delete(process.env.BACKEND + "tags/" + tagId, {
      headers: { Authorization: `bearer ${token}` },
    });
    setAllTags(allTags.filter((e) => e.id != tagId));
    setTagsSearch(tagsSearch.filter((e) => e.id != tagId));

    document.getElementById("check").hidden = true;
    document.getElementById("alert").hidden = true;
    document.getElementById("delete").hidden = false;
  }

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

        <form
          className="bg-slate-300 p-4 rounded-md"
          onSubmit={(e) => e.preventDefault() + createTag()}
        >
          <div className="flex justify-between mb-4">
            <p className="font-semibold">Tags</p>
          </div>
          <div className="flex flex-row-reverse">
            <div hidden id="check" className="absolute">
              <FaCheck className="m-4 w-4 text-green-500" />
            </div>
            <div hidden id="delete" className="absolute">
              <MdClose className="m-4 w-4 text-red-500" />
            </div>
            <div hidden id="alert" className="absolute">
              <FiAlertCircle className="m-4 w-4 font-bold text-yellow-500" />
            </div>
            <input
              required
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Digite a tag"
              type="text"
              id="tag"
              onChange={(e) =>
                e.target.value.length > 1
                  ? setTagsSearch(
                      allTags.filter((y) =>
                        y.tag
                          .toLowerCase()
                          .includes(e.target.value.toLowerCase())
                      )
                    )
                  : setTagsSearch([]) +
                    (document.getElementById("check").hidden = true) +
                    (document.getElementById("delete").hidden = true) +
                    (document.getElementById("alert").hidden = true) 
              }
            />
          </div>
          <ul className="mx-2 rounded">
            {tagsSearch.map((e, index) => (
              <li
                key={index}
                className="rounded-md p-2 bg-slate-50 flex justify-between shadow-md"
              >
                {e.tag}
                {userInfo[0].permission_id.id == 1 ? (
                  <a
                    onClick={(z) => deleteTag(e.id)}
                    className="cursor-pointer"
                  >
                    <BiTrashAlt />
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        </form>
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

    const getAllTags = await axios.get(process.env.BACKEND + "tags");

    const allTags = getAllTags.data;

    return { props: { infoUser, documents, allTags, token } };
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
