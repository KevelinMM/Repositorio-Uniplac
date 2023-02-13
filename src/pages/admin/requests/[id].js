import Image from "next/image";
import { useState } from "react";

export default function request() {
  const [origin, setOrigin] = useState("Sistemas de Informação");
  const [category, setCategory] = useState("Graduação");
  const [tag, setTag] = useState("Exemplos Tag");
  const [name, setName] = useState("Nome do autor");

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
              onChange={(e)=> setName(e.target.value)}
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
              />
            </div>
            <div className="w-full flex">
              <div className="pr-3">
                <label className="sr-only" htmlFor="origin">
                  Origem
                </label>
                <select
                  className="rounded-lg border-gray-200 p-3 text-sm pr-8"
                  id="origin"
                >
                  <option selected disabled>
                    Selecione a origem
                  </option>
                  <option>Sistemas de informação</option>
                  <option>Direito</option>
                  <option>Medicina</option>
                  <option>Outros</option>
                </select>
              </div>
              <div>
                <label className="sr-only" htmlFor="category">
                  Categoria
                </label>
                <select
                  className="rounded-lg border-gray-200 p-3 text-sm pr-8"
                  id="category"
                >
                  <option selected disabled>
                    Selecione a categoria
                  </option>
                  <option>Graduação</option>
                  <option>Pos Graduação</option>
                  <option>Pesquisa</option>
                  <option>Evento</option>
                  <option>Outros</option>
                </select>
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
              ></textarea>
            </div>
            <div className="mx-2">
              <label
                className="mb-2 text-sm text-gray-700 flex items-center"
                htmlFor="file_input"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  className="w-3 mr-2"
                >
                  <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" />
                </svg>
                <p>Arquivo (apenas PDF)</p>
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 cursor-pointer bg-gray-50 focus:outline-none"
                aria-describedby="file_input_help"
                id="file_input"
                accept="application/pdf"
                type="file"
              />
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
