import Image from "next/image";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { FaCheck, FaTrash } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";
import Type from "../../components/Type";
import axios from "axios";
import Solicitations from "./components/Solicitations";
import Category from "./components/Category";

export default function superAdm(props) {
  const userInfo = useState(props.infoUser);
  const token = props.token;

  const [origin, setOrigin] = useState(
    userInfo[0].origin_id
      ? userInfo[0].origin_id.origin
      : userInfo[0].permission_id.name
  );  
  const [allTags, setAllTags] = useState(props.allTags);
  const [tagsSearch, setTagsSearch] = useState([]);

  const [allOrigins, setAllOrigins] = useState(props.allOrigins);
  const [originsSearch, setOriginsSearch] = useState([]);

  const [allTypes, setAllTypes] = useState(props.allTypes);
  const [typesSearch, setTypesSearch] = useState([]);

  const [allPermissions, setAllPermissions] = useState(props.allPermissions);
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
    <div className="bg-gradient-to-t from-blue-100 min-h-screen px-6 md:px-20 xl:px-52 py-12">
      <div className="flex justify-between pb-6 xl:pb-12 items-center">
        <p className="text-gray-700 text-lg md:text-3xl font-bold">Painel</p>
        <p className="text-gray-700 text-lg md:text-3xl font-bold pl-2">
          {origin}
        </p>
        <Image
          src={`/logoUniplac.png`}
          alt="Logo Uniplac"
          width={70}
          height={70}
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-4 md:gap-10">
        {userInfo[0].permission_id.id == 1 ? (
          <>
            <Category allTypes={allTypes} token={token}/>

            <form
              className="adminCards"
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
                    className="mb-2 p-2 bg-slate-50 flex justify-between shadow-md cursor-pointer items-center"
                  >
                    {e.origin}
                    <a
                      onClick={(z) => deleteOrigin(e.id)}
                      className="cursor-pointer"
                    >
                      <FaTrash />
                    </a>
                  </li>
                ))}
              </ul>
            </form>
          </>
        ) : null}
      </div>

      <form
        className="adminCards"
        onSubmit={(e) => e.preventDefault() + createTag()}
      >
        <div className="mb-4 ">
          <p className="font-semibold">Cadastrar Tag</p>
          <p className="text-sm pt-1">* Aperte "enter" para cadastrar.</p>
          <p className="text-sm pt-1">
            * Tags que já existem não poderão ser criadas novamente.
          </p>
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
            placeholder="Digite o nome da Tag"
            type="text"
            id="tag"
            onChange={(e) =>
              e.target.value.length > 1
                ? setTagsSearch(
                    allTags.filter((y) =>
                      y.tag.toLowerCase().includes(e.target.value.toLowerCase())
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
                <a onClick={(z) => deleteTag(e.id)} className="cursor-pointer">
                  <FaTrash />
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      </form>

      <Solicitations documents={props.documents} />

      <div className="adminCards">
        <p className="text-sm font-semibold">
          * Você só tem permissão para cadastrar Tags. Para adicionar
          categorias, solicite: niu.atendimento@uniplaclages.edu.br
        </p>
        <Type type={allTypes} />
      </div>
      {userInfo[0].permission_id.id == 1 ? (
        <form className="adminCards">
          <p className="font-semibold mb-4">Criar usuário</p>
          <div className="flex flex-row-reverse">
            <input
              required
              className="w-full rounded-lg border-gray-200 p-2 mb-2 text-sm"
              placeholder="Procure o usuário, digite espaço para ver todos"
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
                  : setUsersSearch([])
              }
            />
          </div>
          <ul className="mx-2 rounded">
            {usersSearch.map((e, index) => (
              <li
                key={index}
                className="mb-2 p-2 bg-slate-50 flex justify-between shadow-md cursor-pointer items-center"
                onClick={(z) =>
                  setUserName(e.name) +
                  setUserEmail(e.email) +
                  setUserPermission(e.permission_id.name) +
                  setUserOrigin(e.origin_id ? e.origin_id.origin : "Sem origin")
                }
              >
                {e.name}
                <a onClick={(z) => deleteUser(e.id)} className="cursor-pointer">
                  <FaTrash />
                </a>
              </li>
            ))}
          </ul>

          <div>
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
          </div>

          <div className="flex my-4 items-center">
            <div className="">
              <label htmlFor="userPermission" className="pr-2">
                Permição
              </label>
              <select
                className="px-6"
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
            </div>
            <div>
              <label htmlFor="userOrigin" className="px-2">
                Origem
              </label>
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
            </div>
          </div>

          <a className="btn" onClick={(e) => createUser()}>
            Criar
          </a>
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
