import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import Solicitations from "./components/Solicitations";
import Category from "./components/Category";
import Origin from "./components/Origin";
import Tag from "./components/Tag";
import User from "./components/User";
import { MdOutlineLogout } from "react-icons/md";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import Link from "next/link";
import { signOut } from "next-auth/react";

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
  const [allTypes, setAllTypes] = useState(
    userInfo[0].origin_id != null
      ? props.allTypes.filter(
          (e) => e.origin_id == userInfo[0].origin_id.id || e.origin_id == 1
        )
      : props.allTypes
  );

  console.log(allTypes);

  const [allPermissions, setAllPermissions] = useState(props.allPermissions);
  const [allUsers, setAllUsers] = useState(props.allUsers);

  const [documents, setDocuments] = useState(props.documents);

  const origin_id = userInfo[0].origin_id ? userInfo[0].origin_id.id : "";

  return (
    <>
      <div className="bg-gradient-to-t from-blue-100 min-h-screen px-2 sm:px-5 lg:px-10 xl:px-24 pt-8 md:pt-16 pb-6">
        <div className="flex justify-between pb-6 xl:pb-12 items-center lg:px-4">
          <div className="flex items-center page-title">
            <p>{origin}</p>
            <p
              onClick={() => signOut()}
              className="rounded text-xl hover:text-red-700 cursor-pointer ml-2"
            >
              <MdOutlineLogout />
            </p>
          </div>
          <Link href={"/"}>
            <h1 className="cursor-pointer md:text-3xl page-title">
              Repositório Institucional
            </h1>
          </Link>
          <Image
            src={`/logoUniplac.png`}
            alt="Logo Uniplac"
            width={70}
            height={70}
          />
        </div>
        <div className="px-4 pb-4 text-justify">
          <p>
            Página destinada a administração de publicações no repositório da
            Instituição Uniplac.
          </p>
          <a
            className="underline cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/document/d/1km6T0_OrD2quYkzHoDMGXYUrf3tvk2ytGvf0juUaFT0/edit?usp=share_linkhttps://docs.google.com/document/d/1km6T0_OrD2quYkzHoDMGXYUrf3tvk2ytGvf0juUaFT0/edit?usp=share_link"
          >
            {" "}
            Instruções aos administradores do RI{" "}
          </a>
        </div>

        {userInfo[0].permission_id.id == 1 || userInfo[0].origin_id.id == 1 ? (
          <select
            defaultValue={"all"}
            id="countries"
            className="ml-2 md:ml-5 pr-10 pl-3 border border-gray-100 text-gray-900 rounded-md shadow-lg block py-2 "
            onChange={(e) =>
              setDocuments(
                e.target.value == 1 || e.target.value == "all"
                  ? props.documents
                  : props.documents.filter(
                      (z) => e.target.value * 1 == z.origin_id.id
                    )
              )
            }
          >
            <option value="all">Solicitações por usuários</option>
            {allOrigins.map((e) => (
              <option key={e.id} value={e.id}>
                {e.origin}
              </option>
            ))}
          </select>
        ) : null}

        <Solicitations documents={documents} allOrigins={allOrigins} />
        <Category
          permission={userInfo[0].permission_id.id}
          allTypes={allTypes}
          token={token}
          origin_id={origin_id}
        />
        <Tag allTags={allTags} token={token} infoUser={userInfo} />

        <div>
          {userInfo[0].permission_id.id == 1 ? (
            <>
              <div className="page-title ml-4">
                {" "}
                Área restrita para Super Admin
              </div>
              <div className="grid lg:grid-cols-2 ">
                <Origin allOrigins={allOrigins} token={token} />
                <User
                  allUsers={allUsers}
                  allPermissions={allPermissions}
                  allOrigns={allOrigins}
                  token={token}
                />
              </div>
            </>
          ) : null}
        </div>
      </div>
      <footer className="bg-white text-center lg:text-left text-base w-full bottom-0 ">
        <div className="text-gray-700 text-center p-3 flex justify-center cursor-default">
          Copyright &copy; {new Date().getFullYear()}{" "}
          <p className="text-blue-500 hover:text-blue-700 ">{" <NIU/>"}</p>
        </div>
      </footer>
    </>
  );
}
export async function getServerSideProps(context) {
  const loggedUser = await getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!loggedUser) {
    return {
      redirect: {
        destination: "/login",
        permanent: true,
      },
    };
  }

  const token = loggedUser.user.token;
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
    const doc = await axios.get(process.env.BACKEND + "documentsByOrigin/" + 1);
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
  const allOrigins = getAllOrigins.data.filter((e)=> e.id != 1);
  const allTypes = getAllTypes.data;
  const allPermissions = getAllPermissions.data;
  const allUsers = getAllUsers.data;

  return {
    props: {
      loggedUser,
      infoUser,
      token,
      documents,
      allTags,
      allOrigins,
      allTypes,
      allPermissions,
      allUsers,
    },
  };
}
