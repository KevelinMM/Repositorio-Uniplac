import Image from "next/image";
import { useState } from "react";
import db from "../db/db"

const base = db.documents


export default function Header() {
  const [result, setResult] = useState(base);
  const [valueSearch, setValueSearch] = useState();
  return (
    <header>
      <nav
        id="header"
        className="fixed w-full top-0 bg-white border-b border-gray-300"
      >
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-4 ">
          <div className="pl-4 flex items-center cursor-pointer ">
            <Image
              src={`/logoUniplac.png`}
              alt="Logo Uniplac"
              width={60}
              height={60}

            />
            <a
              className="text-normal ml-2 text-gray-900 no-underline hover:no-underline font-bold md:text-xl"
              href="/"
            >
              Repositório Institucional
            </a>
          </div>
          <div className="block lg:hidden pr-4">
            <button
              id="nav-toggle"
              className=" bg-gray-300 flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600  hover:border-blue-500 appearance-none focus:outline-none"
              onClick={(e) =>
                (document.getElementById("nav-content").hidden =
                  !document.getElementById("nav-content").hidden)
              }
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className="w-full flex-grow lg:flex  lg:content-center lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 z-20"
            id="nav-content"
            hidden
          >
            <div className="flex-1 w-full mx-auto max-w-sm content-center py-4 lg:py-0">
              <div className="relative pull-right pl-4 pr-4 md:pr-0">
                <div className="absolute search-icon pt-2 pl-3">
                  <svg
                    className="fill-current pointer-events-none text-gray-800 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="search"
                  placeholder="Pesquise por autor ou titulo do documento"
                  className=" w-full bg-gray-100 text-sm text-gray-800 transition border focus:outline-none focus:border-blue-500 rounded py-1 px-2 pl-10 appearance-none leading-normal"
                  onChange={(e) => {
                    setResult(
                      base.filter(
                        (element) =>
                        e.target.value.length > 0 ?
                          element.title
                            .toLowerCase()
                            .includes(e.target.value.toLowerCase()) ||
                          element.subtitle
                            .toLowerCase()
                            .includes(e.target.value.toLowerCase()) ||
                          element.autor
                            .toLowerCase()
                            .includes(e.target.value.toLowerCase())
                            : ''
                      )
                    )
                    setValueSearch(e.target.value);
                    e.target.value != "" ? document.getElementById("result").hidden = false : document.getElementById("result").hidden = true
                  }}
                />
                <div className="flex w-full absolute cursor-pointer ">
                  <div className="bg-gray-100 shadow border-l border-r border-b border-gray-500 rounded-b w-full mr-4" hidden id="result">
                    {result.map((e) => {
                      return (
                        <div key={e.title} className="hover:bg-gray-200 px-2 border-b">
                          <p className="text-black text-base">{e.title}</p>

                          <p className="text-black font-thin text-xs text-end">{e.autor}</p>
                        </div>
                      );
                    })}
                    <div className="hover:bg-gray-200 px-2 w-full">
                      <a href={"/filtro/search-" + valueSearch} >
                        {result.length >= 1 ? "Ver todos..." : "Nenhum resultado"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ul className="list-reset lg:flex justify-end items-center">
              <li className="mr-3 py-2 lg:py-0">
                <a
                  className="inline-block py-2 px-4 text-gray-900 font-bold no-underline"
                  href="/#formPubli"
                >
                  Publicar
                </a>
              </li>
              <li className="mr-3 py-2 lg:py-0">
                <a
                  className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:underline py-2 px-4"
                  href="/login"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
