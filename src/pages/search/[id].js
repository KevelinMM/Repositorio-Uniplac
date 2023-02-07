import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("Titulo do documento");
  const [subTitle, setSubTitle] = useState("Sub Titulo do documento...");
  const [description, setDescription] = useState(
    "Descrição do documento informando um breve resumo do que se trata."
  );
  const [autor, setAutor] = useState("Autor Fulando de Tal");
  const [type, setType] = useState("Artigo");
  const [date, setDate] = useState("06/02/2023");

  const [downloadLink, setDownloadLink] = useState("#");
  const [urlPreview, setUrlPreview] = useState(
    "https://doem.org.br/ba/modelo/arquivos/pdfviewer/0b517cdc5f9850e3782051c82e7f3234?name=lorem-ipsum.pdf"
  );

  return (
    <section className="bg-gray-100 tracking-normal">
      <div className="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16 min-h-screen">
        <div className="w-full lg:w-1/5 lg:px-6 text-xl text-gray-800 leading-normal">
          <p className="text-base font-bold py-2 lg:pb-6 text-gray-700">TAGs</p>
          <div className="block lg:hidden sticky inset-0 ">
            <button
              id="menu-toggle"
              className="flex w-full justify-end px-3 py-3 bg-white lg:bg-transparent border rounded border-gray-600 hover:border-blue-500 appearance-none focus:outline-none"
            >
              <svg
                className="fill-current h-3 float-right"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
          </div>
          <div
            className="w-full sticky inset-0 hidden h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent"
            id="menu-content"
          >
            <ul className="list-reset">
              <li className="py-2 md:my-0 hover:bg-blue-100 lg:hover:bg-transparent">
                <a
                  href="#"
                  className="block pl-4 align-middle text-gray-700 no-underline hover:text-blue-500 border-l-4 border-transparent lg:hover:border-gray-400"
                >
                  <span className="pb-1 md:pb-0 text-sm">Educação</span>
                  <span className="bg-blue-200 rounded-full text-xs p-1 ml-2">
                    {25}
                  </span>
                </a>
              </li>
              <li className="py-2 md:my-0 hover:bg-blue-100 lg:hover:bg-transparent">
                <a
                  href="#"
                  className="block pl-4 align-middle text-gray-700 no-underline hover:text-blue-500 border-l-4 border-transparent lg:hover:border-gray-400"
                >
                  <span className="pb-1 md:pb-0 text-sm">Pedagogico</span>
                  <span className="bg-blue-200 rounded-full text-xs p-1 ml-2">
                    {37}
                  </span>
                </a>
              </li>
              <li className="py-2 md:my-0 hover:bg-blue-100 lg:hover:bg-transparent">
                <a
                  href="#"
                  className="block pl-4 align-middle text-gray-700 no-underline hover:text-blue-500 border-l-4 border-transparent lg:hover:border-gray-400"
                >
                  <span className="pb-1 md:pb-0 text-sm">Filosofia</span>
                  <span className="bg-blue-200 rounded-full text-xs p-1 ml-2">
                    {42}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-4/5 p-8 mt-6 lg:mt-0 text-gray-900 leading-normal bg-white border border-gray-400 border-rounded">
          <div className="font-sans">
            <span className="text-base text-blue-500 font-bold">&laquo;</span>{" "}
            <a
              href="javascript:history.back()"
              className="text-base md:text-sm text-blue-500 font-bold no-underline hover:underline"
            >
              Voltar
            </a>
            <div className="flex flex-row-reverse flex-wrap gap-1">
              <div className="bg-blue-200 hover:bg-blue-300 cursor-pointer rounded-full px-2">
                <p>Educação</p>
              </div>

            </div>
            <h1 className="font-sans break-normal text-gray-900 pt-6 text-xl">
              {title}
            </h1>
            <h1 className="font-sans break-normal text-gray-700 pb-2 text-base">
              {subTitle}
            </h1>
            <hr className="border-b border-gray-400" />
          </div>

          <p className="py-6">{description}</p>

          <a
            className="hover:bg-green-500 bg-green-600 cursor-pointer flex flex-row px-2 rounded text-white w-32"
            href={downloadLink}
            download={title}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="w-4 mx-1 invert"
            >
              <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>

            <p className="text-lg">Download</p>
          </a>

          <div className="flex flex-row items-center mt-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="w-4"
            >
              <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z" />
            </svg>
            <p className="ml-1 font-semibold">Prévia</p>
          </div>
          <div className="bg-gray-200 w-full border-black border ">
            <iframe src={urlPreview} width="100%" height="700px"></iframe>
          </div>

          <blockquote className="border-l-4 border-blue-500 italic my-8 pl-4 md:pl-8">
            <p className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-3 mr-2"
              >
                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>
              Autor: {autor}
            </p>
            <p className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="w-3 mr-2"
              >
                <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" />
              </svg>
              Tipo: {type}
            </p>
            <p className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-3 mr-2"
              >
                <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
              </svg>
              Data: {date}
            </p>
          </blockquote>
        </div>

        <div className="w-full lg:w-4/5 lg:ml-auto text-base md:text-sm text-gray-500 px-4 py-6">
          <span className="text-base text-blue-500 font-bold">&laquo;</span>{" "}
          <a
            href="javascript:history.back()"
            className="text-base md:text-sm text-blue-500 font-bold no-underline hover:underline"
          >
            Voltar
          </a>
        </div>
      </div>
    </section>
  );
}
