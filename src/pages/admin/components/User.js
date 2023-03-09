import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
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
    await axios.post(
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

  //async function deleteUser(userId) {
  //  await axios.delete(
  //    process.env.BACKEND + "users/" + userId,
  //    {
  //      headers: { Authorization: `bearer ${token}` },
  //    }
  //  );
  //  window.location.reload();
  //}
  //useEffect(
  //  (e) => {
  //    usersSearch.length > 0
  //      ? (document.getElementById("showUser").innerHTML = "Ocultar")
  //      : (document.getElementById("showUser").innerHTML = "Ver todos");
  //  },
  //  [usersSearch]
  //);

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
          className="w-full rounded-md shadow-lg border-gray-200 p-2 mb-2 text-sm"
          placeholder="Procure o usuário."
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
      <ul className="mx-2 rounded">{"2"}</ul>
      <p className="font-semibold my-4">Cadastrar</p>

      <div className="space-y-2">
        <input
          required
          className="w-full rounded-md shadow-lg border-gray-200 p-2 text-sm"
          placeholder="Nome"
          type="text"
          id="userName"
          value={userName || ""}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          required
          className="w-full rounded-md shadow-lg border-gray-200 p-2 text-sm"
          placeholder="Email Institucional"
          type="email"
          id="userEmail"
          value={userEmail || ""}
          onChange={(e) => setUserEmail(e.target.value)}
        />
      </div>
      <div className=" sm:flex sm:space-x-4 mb-2">
        <div className="flex items-center justify-center my-3">
          <select
            className="w-full rounded-md shadow-lg pr-7 border-none"
            defaultValue={userPermission || ""}
            id="userPermission"
            onChange={(e) => setUserPermission(e.target.value)}
          >
            <option value="0" disabled>
              {userPermission == "0" ? "Permissão" : userPermission}
            </option>
            {allPermissions && allPermissions.map((e) => (
              <option key={e.id} value={e.id || ""}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-center my-3 ">{"1"}</div>
      </div>

      <a className="btn " onClick={(e) => createUser()}>
        Criar
      </a>
    </form>
  );
}

//<select
//className="w-full rounded-md shadow-lg pr-5 border-none"
//defaultValue={userOrigin}
//id="userOrigin"
//onChange={(e) => setUserOrigin(e.target.value)}
//>
//<option value="0" disabled>
//  {userOrigin == "0" ? "Origem" : userOrigin}
//</option>
//{allOrigins.map((e) => (
//  <option key={e.id} value={e.id}>
//    {e.origin}
//  </option>
//))}
//</select>

//{usersSearch.map((e, index) => (
//  <li
//    key={index}
//    className="cursor-pointer rounded-md p-2 bg-slate-50 flex justify-between shadow-md mt-1"
//    onClick={(z) =>
//      setUserName(e.name) +
//      setUserEmail(e.email) +
//      setUserPermission(e.permission_id.name) +
//      setUserOrigin(e.origin_id ? e.origin_id.origin : "Sem origin")
//    }
//  >
//    {e.name}
//    <a onClick={(z) => deleteUser(e.id)} className="cursor-pointer">
//      <FaTrash />
//    </a>
//  </li>
//))}
