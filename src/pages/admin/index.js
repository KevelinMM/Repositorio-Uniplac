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
  const [documents, setDocuments] = useState(props.documents);
  const [allTags, setAllTags] = useState(props.allTags);
  const [tagsSearch, setTagsSearch] = useState([]);

  const [allOrigins, setAllOrigins] = useState(props.allOrigins);
  const [originsSearch, setOriginsSearch] = useState([]);

  const [allTypes, setAllTypes] = useState(props.allTypes);
  const [typesSearch, setTypesSearch] = useState([]);

  async function createTag() {
    const tagName = document.getElementById("tag").value;
    var truncadeTag = false;
    tagsSearch.map((e) => (e.tag == tagName ? (truncadeTag = true) : null));
    if (truncadeTag) {
      document.getElementById("tagCheck").hidden = true;
      document.getElementById("tagAlert").hidden = false;
      document.getElementById("tagDelete").hidden = true;
    } else {
      const tagCreate = await axios.post(process.env.BACKEND + "tags", {
        tag: [{ tag: tagName, approved: 1 }],
      });
      allTags.push({ id: tagCreate.data[0].id, tag: tagName, approved: true });
      setTagsSearch([
        { id: tagCreate.data[0].id, tag: tagName, approved: true },
      ]);
      document.getElementById("tagCheck").hidden = false;
      document.getElementById("tagAlert").hidden = true;
      document.getElementById("tagDelete").hidden = true;
    }
  }

  async function createOrigin() {
    const originName = document.getElementById("origin").value;
    var truncadeOrigin = false;
    originsSearch.map((e) =>
      e.origin == originName ? (truncadeOrigin = true) : null
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

  async function createType() {
    const typeName = document.getElementById("type").value;
    var truncadeType = false;
    typesSearch.map((e) => (e.type == typeName ? (truncadeType = true) : null));
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

  async function deleteTag(tagId) {
    await axios.delete(process.env.BACKEND + "tags/" + tagId, {
      headers: { Authorization: `bearer ${token}` },
    });
    setAllTags(allTags.filter((e) => e.id != tagId));
    setTagsSearch(tagsSearch.filter((e) => e.id != tagId));

    document.getElementById("tagCheck").hidden = true;
    document.getElementById("tagAlert").hidden = true;
    document.getElementById("tagDelete").hidden = false;
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
        <form
          className="bg-slate-300 p-4 rounded-md"
          onSubmit={(e) => e.preventDefault() + createType()}
        >
          <div className="flex justify-between mb-4">
            <p className="font-semibold">Categorias</p>
          </div>
          <div className="flex flex-row-reverse">
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
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Digite a categoria"
              type="text"
              id="type"
              onChange={(e) =>
                e.target.value.length > 1
                  ? setTypesSearch(
                      allTypes.filter((y) =>
                        y.type
                          .toLowerCase()
                          .includes(e.target.value.toLowerCase())
                      )
                    )
                  : setTypesSearch([]) +
                    (document.getElementById("typeCheck").hidden = true) +
                    (document.getElementById("typeDelete").hidden = true) +
                    (document.getElementById("typeAlert").hidden = true)
              }
            />
          </div>
          <ul className="mx-2 rounded">
            {typesSearch.map((e, index) => (
              <li
                key={index}
                className="rounded-md p-2 bg-slate-50 flex justify-between shadow-md"
              >
                {e.type}
                {userInfo[0].permission_id.id == 1 ? (
                  <a
                    onClick={(z) => deleteType(e.id)}
                    className="cursor-pointer"
                  >
                    <BiTrashAlt />
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        </form>

        <form
          className="bg-slate-300 p-4 rounded-md"
          onSubmit={(e) => e.preventDefault() + createOrigin()}
        >
          <div className="flex justify-between mb-4">
            <p className="font-semibold">Origens</p>
          </div>
          <div className="flex flex-row-reverse">
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
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Digite a origin"
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
          <ul className="mx-2 rounded">
            {originsSearch.map((e, index) => (
              <li
                key={index}
                className="rounded-md p-2 bg-slate-50 flex justify-between shadow-md"
              >
                {e.origin}
                {userInfo[0].permission_id.id == 1 ? (
                  <a
                    onClick={(z) => deleteOrigin(e.id)}
                    className="cursor-pointer"
                  >
                    <BiTrashAlt />
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        </form>

        <form
          className="bg-slate-300 p-4 rounded-md"
          onSubmit={(e) => e.preventDefault() + createTag()}
        >
          <div className="flex justify-between mb-4">
            <p className="font-semibold">Tags</p>
          </div>
          <div className="flex flex-row-reverse">
            <div hidden id="tagCheck" className="absolute">
              <FaCheck className="m-4 w-4 text-green-500" />
            </div>
            <div hidden id="tagDelete" className="absolute">
              <MdClose className="m-4 w-4 text-red-500" />
            </div>
            <div hidden id="tagAlert" className="absolute">
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
                    (document.getElementById("tagCheck").hidden = true) +
                    (document.getElementById("tagDelete").hidden = true) +
                    (document.getElementById("tagAlert").hidden = true)
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
    const getAllOrigins = await axios.get(process.env.BACKEND + "origins");
    const getAllTypes = await axios.get(process.env.BACKEND + "types");

    const allTags = getAllTags.data;
    const allOrigins = getAllOrigins.data;
    const allTypes = getAllTypes.data;

    return {
      props: { infoUser, documents, allTags, allOrigins, allTypes, token },
    };
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
