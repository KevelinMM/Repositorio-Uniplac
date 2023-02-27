import { useState, useEffect } from "react";
import { FaCheck, FaTrash } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import axios from "axios";

export default function User(req) {
  const [allUsers, setAllUsers] = useState(req.allUsers);
  const [usersSearch, setUsersSearch] = useState([]);
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPermission, setUserPermission] = useState(0);
  const [userOrigin, setUserOrigin] = useState(0);
  const [allPermissions, setAllPermissions] = useState(req.allPermissions);
  const [allOrigins, setAllOrigins] = useState(req.allOrigns);

  const token = req.token;

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
  useEffect(
    (e) => {
      usersSearch.length > 0
        ? (document.getElementById("showUser").innerHTML = "Ocultar")
        : (document.getElementById("showUser").innerHTML = "Ver todos");
    },
    [usersSearch]
  );

  return (
    <form className="adminCards">
      <div className="flex justify-between">
        <p className="font-semibold mb-4">Usuários</p>
        <span
          id="showUser"
          onClick={() => setUsersSearch(usersSearch.length > 0 ? [] : allUsers)}
          className="text-blue-500 underline cursor-pointer mr-2 mb-1"
        ></span>
      </div>

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
                    y.name.toLowerCase().includes(e.target.value.toLowerCase())
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
            className="rounded-md p-2 bg-slate-50 flex justify-between shadow-md mt-1"
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
      <p className="font-semibold my-4">Cadastrar usuário</p>

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
  );
}
