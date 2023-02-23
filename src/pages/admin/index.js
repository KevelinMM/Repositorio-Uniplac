import Image from "next/image";
import { useState } from "react";
import { MdOutlineAdd, MdClose } from "react-icons/md";
import { BiTrashAlt } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";
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

  const [allPermissions, setAllPermissions] = useState(props.allPermissions);
  const [userId, setUserId] = useState();
  const [allUsers, setAllUsers] = useState(props.allUsers);
  const [usersSearch, setUsersSearch] = useState([]);

  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPermission, setUserPermission] = useState(0);
  const [userOrigin, setUserOrigin] = useState(0);

  async function createTag() {
    var tagName = document.getElementById("tag").value;
    tagName = tagName[0].toUpperCase() + tagName.slice(1);
    var truncadeTag = false;
    tagsSearch.map((e) =>
      e.tag.toLowerCase() == tagName.toLowerCase() ? (truncadeTag = true) : null
    );
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

  async function createUser() {
    const createUser = await axios.post(
      process.env.BACKEND + "users",
      {
        name: userName,
        email: userEmail,
        password: "Uniplac_2023",
        permission_id: userPermission,
        origin_id: userOrigin == 0 ? null : userOrigin,
      },
      {
        headers: { Authorization: `bearer ${token}` },
      }
    );
    window.location.reload();
  }

  async function deleteUser(userId) {
    const deleteUser = await axios.delete(
      process.env.BACKEND + "users/" + userId,
      {
        headers: { Authorization: `bearer ${token}` },
      }
    );
    window.location.reload();
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
        {userInfo[0].permission_id.id == 1 ? (
          <>
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
                        (document.getElementById(
                          "originDelete"
                        ).hidden = true) +
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
          </>
        ) : null}

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
      {userInfo[0].permission_id.id == 1 ? (
        <form className="grid col-1 bg-slate-300 p-4 rounded-md w-full mt-4">
          <div className="flex flex-row-reverse">
            <div hidden id="userCheck" className="absolute">
              <FaCheck className="m-4 w-4 text-green-500" />
            </div>
            <div hidden id="userDelete" className="absolute">
              <MdClose className="m-4 w-4 text-red-500" />
            </div>
            <div hidden id="userAlert" className="absolute">
              <FiAlertCircle className="m-4 w-4 font-bold text-yellow-500" />
            </div>
            <input
              required
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Digite o user"
              type="text"
              id="user"
              onChange={(e) =>
                e.target.value.length > 0
                  ? setUsersSearch(
                      allUsers.filter((y) =>
                        y.name
                          .toLowerCase()
                          .includes(e.target.value.toLowerCase())
                      )
                    )
                  : setUsersSearch([]) +
                    (document.getElementById("userCheck").hidden = true) +
                    (document.getElementById("userDelete").hidden = true) +
                    (document.getElementById("userAlert").hidden = true)
              }
            />
          </div>
          <ul className="mx-2 rounded">
            {usersSearch.map((e, index) => (
              <li
                key={index}
                className="rounded-md p-2 bg-slate-50 flex justify-between shadow-md cursor-pointer"
                onClick={(z) =>
                  setUserName(e.name) +
                  setUserEmail(e.email) +
                  setUserPermission(e.permission_id.name) +
                  setUserOrigin(e.origin_id ? e.origin_id.origin : "Sem origin")
                }
              >
                {e.name}
                <a onClick={(z) => deleteUser(e.id)} className="cursor-pointer">
                  <BiTrashAlt />
                </a>
              </li>
            ))}
          </ul>
          <p className="font-semibold mb-4">Criar usuário</p>
          <label htmlFor="userName">Nome</label>
          <input
            required
            className="w-full rounded-lg border-gray-200 p-3 text-sm"
            placeholder="Digite o nome"
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label htmlFor="userEmail">Email</label>
          <input
            required
            className="w-full rounded-lg border-gray-200 p-3 text-sm"
            placeholder="Digite o email"
            type="email"
            id="userEmail"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <label htmlFor="userPermission">Permição</label>
          <select
            defaultValue={userPermission}
            id="userPermission"
            onChange={(e) => setUserPermission(e.target.value)}
          >
            <option value="0" disabled>
              {userPermission == "0" ? "Selecione" : userPermission}
            </option>
            {allPermissions.map((e) => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
          <label htmlFor="userOrigin">Origin</label>
          <select
            defaultValue={userOrigin}
            id="userOrigin"
            onChange={(e) => setUserOrigin(e.target.value)}
          >
            <option value="0" disabled>
              {userOrigin == "0" ? "Selecione" : userOrigin}
            </option>
            {allOrigins.map((e) => (
              <option key={e.id} value={e.id}>
                {e.origin}
              </option>
            ))}
          </select>
          <div className="mt-2 flex justify-between">
            <a
              className="bg-green-400 hover:bg-green-300 rounded px-2 py-1 cursor-pointer"
              onClick={(e) => createUser()}
            >
              Criar
            </a>
          </div>
        </form>
      ) : null}
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
    const getAllPermissions = await axios.get(
      process.env.BACKEND + "permissions",
      {
        headers: { Authorization: `bearer ${token}` },
      }
    );
    const getAllUsers = await axios.get(process.env.BACKEND + "users", {
      headers: { Authorization: `bearer ${token}` },
    });

    const allTags = getAllTags.data;
    const allOrigins = getAllOrigins.data;
    const allTypes = getAllTypes.data;
    const allPermissions = getAllPermissions.data;
    const allUsers = getAllUsers.data;

    return {
      props: {
        infoUser,
        documents,
        allTags,
        allOrigins,
        allTypes,
        allPermissions,
        allUsers,
        token,
      },
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
