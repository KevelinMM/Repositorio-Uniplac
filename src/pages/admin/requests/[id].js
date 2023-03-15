import axios from "axios";
import Image from "next/image";
import Router from "next/router";
import { useEffect, useState } from "react";
import sendEmail from "../../../helpers/sendEmail";
import { useSession, getSession, signIn } from "next-auth/react";
import Back from "../../../components/Back";

export default function Request(props) {
  const [origin, setOrigin] = useState(props.document[0].origin_id.origin);
  const [approved, setApproved] = useState(props.document[0].approved);
  const [id, setId] = useState(props.document[0].id);
  const [category, setCategory] = useState(props.document[0].type_id.type);
  const [autor, setAutor] = useState(props.document[0].autor);
  const [curator, setCurator] = useState(
    props.document[0].curator ? props.document[0].curator : "Sem curador"
  );
  const [email, setEmail] = useState(props.document[0].autor_email);
  const [title, setTitle] = useState(props.document[0].title);
  const [subTitle, setSubTitle] = useState(props.document[0].subtitle);
  const [content, setContent] = useState(props.document[0].content);
  const [fileLink, setLink] = useState(
    process.env.FILESRV + "showFile/" + props.document[0].file
  );
  const [reason, setReason] = useState();

  const [lista, setLista] = useState([props.document[0].tag.slice(1)]);
  const date = new Date(props.document[0].created_at);

  const { data: session, status } = useSession();

  const [user, setUser] = useState();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return (
      <div class="text-center container mx-auto my-8 px-4 py-6 bg-white shadow-lg rounded-lg max-w-lg">
        <h1 class="text-2xl font-bold text-center mb-4">Erro de permissão</h1>
        <p class="text-gray-700 text-center">
          Desculpe, você não tem permissão para acessar esta página.
        </p>
        <button
          className="bg-green-400 hover:bg-green-300 rounded py-1 px-2 mt-4"
          onClick={() => signIn()}
        >
          Logar
        </button>
      </div>
    );
  }

  const token = session.user.token;

  async function getUserInfo() {
    const user = await axios.get(process.env.BACKEND + "userInfo", {
      headers: { Authorization: `bearer ${token}` },
    });

    const infoUser = user.data.shift();
    //console.log(infoUser.id);

    return infoUser.id;
  }

  async function approveDoc() {
    const userId = await getUserInfo();
    approveTags();
    await axios.post(
      process.env.BACKEND + "documentApprove/" + id,

      {
        user_id: userId,
      },
      {
        headers: { Authorization: `bearer ${token}` },
      }
    );
    sendEmail(
      email,
      "Seu documento " +
        title +
        " foi publicado! <br/>Acesse em: http://localhost:3000/documento/" +
        id
    );
  }

  async function deleteDoc() {
    await axios.delete(process.env.BACKEND + "documents/" + id, {
      headers: { Authorization: `bearer ${token}` },
    });
    sendEmail(
      email,
      "Seu documento " +
        title +
        " não foi aprovado! <br/>Motivo: " +
        reason +
        "<br/> Faça as alterações necessárias e envie novamente sua socilitação em: www.repositorio.uniplaclages.edu.br/#formPubli, ou entre em contato com " +
        user.email +
        " ."
    );
  }

  async function approveTags() {
    const forApprove = lista.filter((e) => e.approved == false);
    for (let i = 0; i < forApprove.length; i++) {
      await axios.get(process.env.BACKEND + "tagApprove/" + forApprove[i].id, {
        headers: { Authorization: `bearer ${token}` },
      });
    }
  }

  async function deleteTag(tagId) {
    await axios.delete(process.env.BACKEND + "tags/" + tagId, {
      headers: { Authorization: `bearer ${token}` },
    });
  }

  return (
    <section className="bg-gray-150 min-h-screen p-3 lg:p-24">
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
      <Back />

      <div className="w-full lg:w-4/5 p-8  mt-2 text-gray-900 leading-normal border-opacity-50 bg-white border border-gray-400 border-rounded mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="font-sans break-normal text-gray-900 pt-2 text-xl mb-8">
            {title}
          </h1>
          <div className=" flex flex-row flex-wrap gap-2">
            {lista &&
              lista.map((e, index) =>
                e.approved == true ? (
                  <span
                    key={index}
                    className="flex flex-row items-center bg-blue-200  rounded-full text-xs px-2 py-1 ml-2"
                  >
                    {e.tag}
                  </span>
                ) : (
                  <span
                    key={index}
                    className="flex flex-row items-center bg-red-200 hover:bg-gray-200 cursor-pointer rounded-full text-xs px-2 py-1 ml-2"
                    onClick={(y) =>
                      setLista(lista.filter((item) => item.tag != e.tag)) +
                      deleteTag(e.id)
                    }
                  >
                    {e.tag + " x"}
                  </span>
                )
              )}
          </div>
        </div>
        <h1 className="font-sans break-normal text-gray-700 pb-2 text-base">
          {subTitle}
        </h1>
        <hr className="border-b border-gray-400" />

        <p className="py-6">{content}</p>

        <div className="flex flex-row items-center">
          <a
            href={fileLink}
            target="_blank"
            rel="noreferrer"
            className="mr-1 font-semibold"
          >
            Prévia
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            className="w-4"
          >
            <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z" />
          </svg>
        </div>
        <div className="flex">
          <iframe
            className="hidden md:flex"
            src={fileLink}
            width="50%"
            height="700px"
          ></iframe>
          <blockquote className=" italic p-4 ">
            <p className="flex ml-6 border-l-2 border-blue-500 pl-2">
              Autor: {autor}
            </p>
            <p className="flex ml-6 border-l-2 border-blue-500 pl-2 ">
              Curador: {curator}
            </p>
            <p className="flex ml-6 border-l-2 border-blue-500 pl-2">
              Tipo: {category}
            </p>
            <p className="flex ml-6 border-l-2 border-blue-500 pl-2">
              Origem: {origin}
            </p>
            <p className="flex ml-6 border-l-2 border-blue-500 pl-2">
              Data: {date.toLocaleDateString()}
            </p>
          </blockquote>
        </div>

        {approved == true ? null : (
          <div className="">
            <div className="py-2 space-x-4 flex justify-end items-center">
              <button
                className="btn"
                onClick={(e) => approveDoc() + Router.push("/admin")}
              >
                Aprovar
              </button>

              <button
                className="btn "
                onClick={(e) =>
                  (document.getElementById("deleteForm").hidden = false)
                }
              >
                Não permitir publicação
              </button>
            </div>
            <form
              hidden
              id="deleteForm"
              onSubmit={(e) =>
                e.preventDefault() + deleteDoc() + Router.push("/admin")
              }
            >
              <textarea
                placeholder="É obrigatório informar a razão pela qual a publicação foi negada. O aluno receberá um retorno em seu email com o conteúdo desse comentário."
                className=" w-full"
                required
                onChange={(e) => setReason(e.target.value)}
              ></textarea>{" "}
              <button className="btn">Enviar</button>
            </form>{" "}
          </div>
        )}
      </div>
    </section>
  );
}

//export async function getServerSidePorps(context) {
//  var document;
//
//  const doc = await axios.get(
//    process.env.BACKEND + "documents/" + context.params.id
//  );
//  document = doc.data;
//
//  const getAllTags = await axios.get(process.env.BACKEND + "tags");
//  const allTags = getAllTags.data;
//
//  return { props: { document, allTags } };
//}

export async function getStaticProps(context) {
  try {
    var document;

    const doc = await axios.get(
      process.env.BACKEND + "documents/" + context.params.id
    );
    document = doc.data;

    const getAllTags = await axios.get(process.env.BACKEND + "tags");
    const allTags = getAllTags.data;

    return { props: { document, allTags } };
  } catch (e) {
    return {
      paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
      fallback: false,
    };
  }
}

export async function getStaticPaths() {
  try {
    const getDoc = await axios.get(process.env.BACKEND + "documents");

    const document = getDoc.data;
    const paths = document.map((post) => ({
      params: { id: post.id.toString() },
    }));
    console.log(paths)

    return {
      paths,
      fallback: false,
    };
  } catch (e) {
    return {
      paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
      fallback: false,
    };
  }
}
