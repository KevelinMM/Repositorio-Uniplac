import axios from "axios";
import Image from "next/image";
import { useState } from "react";

export default function request(props) {
  const [origin, setOrigin] = useState(props.document[0].origin_id.origin);
  const [category, setCategory] = useState(props.document[0].type_id.type);
  const [tag, setTag] = useState("Exemplos Tag");
  const [name, setName] = useState(props.document[0].autor);
  const [email, setEmail] = useState(props.document[0].autor_email);
  const [title, setTitle] = useState(props.document[0].title);
  const [subTitle, setSubTitle] = useState(props.document[0].subtitle);
  const [content, setContent] = useState(props.document[0].content);
  const [fileLink, setLink] = useState(process.env.FILESRV + "showFile/" + props.document[0].file);

  console.log(props.document);

  return (
    <section className=" bg-gray-150 min-h-screen p-3 lg:p-24">
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

      <div className="grid col-1 bg-slate-300 p-4 rounded-md w-full">
        <p className="font-semibold mb-4">Solicitações</p>
        <form action="" className="space-y-4" id="formPubli">
          <div>
            <label className="sr-only" htmlFor="name">
              Nome completo do autor
            </label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Nome completo do autor"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              readOnly
            />
          </div>

          <div className="grid grid-cols-1 gap-4 ">
            <div className="flex">
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                className="w-full rounded-l-lg border-gray-200 p-3 text-sm"
                placeholder="Email"
                type="email"
                id="email"
                value={email}
              />
            </div>
          </div>

          <section className="space-y-4">
            <div>
              <label className="sr-only" htmlFor="title">
                Titulo
              </label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Título do documento"
                type="text"
                id="title"
                value={title}
              />
            </div>
            <div className="">
              <label className="sr-only" htmlFor="subTitle">
                Sub Titulo
              </label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Sub Título do documento"
                type="text"
                id="subTitle"
                value={subTitle}
              />
            </div>
            <div className="w-full flex">
              <div className="pr-3">
                <label className="sr-only" htmlFor="origin">
                  Origem
                </label>
                {category}
              </div>
              <div>
                <label className="sr-only" htmlFor="category">
                  Categoria
                </label>
                {origin}
              </div>
            </div>

            <div>
              <label className="sr-only" htmlFor="resume">
                resumo
              </label>
              <textarea
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Escreva um breve resumo sobre seu trabalho."
                rows="8"
                id="resume"
                value={content}
              ></textarea>
            </div>
            <div className="flex flex-row items-center">
            <a href={fileLink} target="_blank" rel="noopner" className="mr-1 font-semibold">Prévia</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="w-4"
            >
              <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z" />
            </svg>
          </div>
            <div className="mt-4">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-lg bg-green-600 px-5 py-3 text-white sm:w-auto"
              >
                <span className="font-medium"> Publicar </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-3 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </section>
        </form>
      </div>
    </section>
  );
}

export async function getServerSideProps(context) {
  const infoUser = [];

  try {
    const token = context.req.cookies["auth"];
    const user = await axios.get(process.env.BACKEND + "userInfo", {
      headers: { Authorization: `bearer ${token}` },
    });

    const infoUser = user.data.shift();
    var document;

    const doc = await axios.get(
      process.env.BACKEND + "documents/" + context.params.id
    );
    document = doc.data;

    return { props: { infoUser, document } };

    infoUser.push(user.data);
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  }

  return { props: { infoUser } };
}
