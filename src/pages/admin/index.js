import Image from "next/image";
import { useState } from "react";
import Type from "../../components/Type";
import axios from "axios";
import Solicitations from "./components/Solicitations";
import Category from "./components/Category";
import Origin from "./components/Origin";
import Tag from "./components/Tag";
import User from "./components/User";
import Router from "next/router";
import { MdOutlineLogout } from "react-icons/md";

export default function SuperAdm(props) {
  const userInfo = useState(props.infoUser);
  const token = props.token;

  const [origin, setOrigin] = useState(
    userInfo[0].origin_id
      ? userInfo[0].origin_id.origin
      : userInfo[0].permission_id.name
  );

  const [allTags, setAllTags] = useState(props.allTags);

  const [allOrigins, setAllOrigins] = useState(props.allOrigins);

  const [allTypes, setAllTypes] = useState(props.allTypes);

  const [allPermissions, setAllPermissions] = useState(props.allPermissions);
  const [allUsers, setAllUsers] = useState(props.allUsers);

  const [documents, setDocuments] = useState(props.documents);

  return (
    <div className="bg-gradient-to-t from-blue-100 min-h-screen px-6 md:px-20 xl:px-52 py-12">
      <div className="flex justify-between pb-6 xl:pb-12 items-center">
        <div>
          <p className="text-gray-700 text-lg md:text-3xl font-bold">Painel</p>
          <p
            onClick={() => Router.push("/login")}
            className="rounded text-xl hover:text-red-700 cursor-pointer "
          >
            <MdOutlineLogout/>
          </p>
        </div>
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
            <Category allTypes={allTypes} token={token} />
            <Origin allOrigins={allOrigins} token={token} />
          </>
        ) : null}
      </div>

      <Tag allTags={allTags} token={token} infoUser={userInfo} />

      {userInfo[0].permission_id.id == 1 || userInfo[0].origin_id.id == 1 ? (
        <select
          defaultValue={0}
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 "
          onChange={(e) =>
            setDocuments(
              e.target.value == 1
                ? props.documents
                : props.documents.filter(
                    (z) => e.target.value * 1 == z.origin_id.id
                  )
            )
          }
        >
          <option value="all">Todos</option>
          {allOrigins.map((e) => (
            <option key={e.id} value={e.id}>{e.origin}</option>
          ))}
        </select>
      ) : null}

      <Solicitations documents={documents} allOrigins={allOrigins} />

      <div className="adminCards">
        <p className="text-sm font-semibold">
          * Você só tem permissão para cadastrar Tags. Para adicionar
          categorias, solicite: niu.atendimento@uniplaclages.edu.br
        </p>
        <Type type={allTypes} />
      </div>
      {userInfo[0].permission_id.id == 1 ? (
        <User
          allUsers={allUsers}
          allPermissions={allPermissions}
          allOrigns={allOrigins}
          token={token}
        />
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
        process.env.BACKEND + "documentsByOrigin/" + 1
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
