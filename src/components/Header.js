import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import db from "../db/db";
import { signIn, signOut, useSession } from "next-auth/react";
import axios from "axios";

const base = db.documents;

export default function Header() {
  const [result, setResult] = useState(base);
  const [valueSearch, setValueSearch] = useState();
  const [pending, setPeding] = useState(false);

  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      getPending(session.user.originId ? session.user.originId.id : 0);
    }
  }, [session]);

  async function getPending(perm) {
    const getPendencias = await axios.get(
      process.env.BACKEND + "documentsByOrigin/" + perm
    );
    const pendentes = getPendencias.data.filter(
      (document) => document.approved == false
    );
    setPeding(pendentes.length > 0);
  }

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
            <div className="text-normal ml-2 text-gray-900 no-underline hover:no-underline font-bold md:text-xl">
              <Link href="/">Repositório Institucional</Link>
            </div>
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
            className="w-full flex-grow lg:flex  lg:content-center lg:items-center lg:w-auto mt-2 lg:mt-0 z-20"
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

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.location.href = "/filtro/search-" + valueSearch;
                  }}
                >
                  <input
                    type="search"
                    id="search"
                    placeholder="Pesquise por autor ou titulo do documento"
                    className=" w-full bg-gray-100 text-sm text-gray-800 transition border focus:outline-none focus:border-blue-500 rounded py-1 px-2 pl-10 appearance-none leading-normal"
                    onChange={(e) => setValueSearch(e.target.value)}
                  />
                </form>
                <div className="flex w-full absolute cursor-pointer ">
                  <div
                    className="bg-gray-100 shadow border-l border-r border-b border-gray-500 rounded-b w-full mr-4"
                    hidden
                    id="result"
                  >
                    {result.map((e) => {
                      return (
                        <div
                          key={e.title}
                          className="hover:bg-gray-200 px-2 border-b"
                        >
                          <p className="text-black text-base">{e.title}</p>

                          <p className="text-black font-thin text-xs text-end">
                            {e.autor}
                          </p>
                        </div>
                      );
                    })}
                    <div className="hover:bg-gray-200 px-2 w-full">
                      <Link href={"/filtro/search-" + valueSearch}>
                        {result.length >= 1
                          ? "Ver todos..."
                          : "Nenhum resultado"}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ul className="list-reset lg:flex justify-end items-center">
              <li className="mr-3 py-2 lg:py-0">
                <div className=" rounded inline-block py-1 px-3 text-gray-900 font-bold soft-transition ">
                  <Link href="/#formPubli">Publicar</Link>
                </div>
              </li>
              <li className="mr-3 py-2 lg:py-0">
                {!session ? (
                  <div className="cursor-pointer  inline-block text-gray-600 no-underline hover:text-gray-900 hover:underline py-2 px-4">
                    <button onClick={() => signIn()}>Login</button>
                  </div>
                ) : (
                  <div className="cursor-pointer inline-block text-gray-600 no-underline hover:text-gray-900 hover:underline py-2 px-4 group">
                    <div className="flex items-center justify-center  ">
                      <div className="relative inline-block text-left ">
                        <button
                          type="button"
                          className="inline-flex justify-center w-full rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2"
                          id="dropdown-button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <div>Olá, {session.user.name.split(" ")[0]}</div>
                          {pending && (
                            <span className="relative flex h-2 w-2 opacity-70">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                            </span>
                          )}

                          <svg
                            className="-mr-1 ml-1 mb h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.292 14.292a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 11.586l3.293-3.292a1 1 0 011.414 1.414l-4 4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                        <div
                          className="hidden group-hover:block origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="dropdown-button"
                          tabIndex="-1"
                        >
                          <div className="py-1" role="none">
                            <Link href="/admin" role="menuitem" tabIndex="-1">
                              <div className="w-full cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                Painel
                              </div>
                            </Link>
                            <div
                              onClick={() => signOut()}
                              role="menuitem"
                              tabIndex="-1"
                            >
                              <p className="w-full cursor-pointer px-4 py-2 text-sm text-red-700 hover:bg-red-50 hover:text-red-900">
                                Sair
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
