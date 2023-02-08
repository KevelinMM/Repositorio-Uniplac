import { useState } from "react";
import Back from "../components/Back";
import Tags from "../components/Tags";

export default function Home() {
  const [correctCode, setCorrectCode] = useState("11111");
  const [allowed, setAllowed] = useState(false);

  function sendCode(){
    document.getElementById("infoSendEmail").hidden = false;
  }

  function validateCodde(code) {
    if (code.length == 5 && code == correctCode) {
      document.getElementById("codeOk").hidden = false;
      document.getElementById("codeWrong").hidden = true;
      setAllowed(true);
    } else {
      document.getElementById("codeWrong").hidden = false;
      document.getElementById("codeOk").hidden = true;
      setAllowed(false);
    }
    return;
  }

  return (
    <section className="bg-gray-100 tracking-normal">
      <div className="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16 min-h-screen">
        <Tags />
        <div className="w-full lg:w-4/5 p-8 mt-6 lg:mt-0 text-gray-900 leading-normal bg-white border border-gray-400 border-rounded">
          Pagina Inicial
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
              <div className="lg:col-span-2 lg:py-12">
                <p className="max-w-xl text-lg">
                  At the same time, the fact that we are wholly owned and
                  totally independent from manufacturer and other group control
                  gives you confidence that we will only recommend what is right
                  for you.
                </p>

                <div className="mt-8">
                  <a href="" className="text-2xl font-bold text-pink-600">
                    0151 475 4450
                  </a>

                  <address className="mt-2 not-italic">
                    282 Kevin Brook, Imogeneborough, CA 58517
                  </address>
                </div>
              </div>

              <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                <form action="" className="space-y-4">
                  <div>
                    <label className="sr-only" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Name"
                      type="text"
                      id="name"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 ">
                    <div className="flex ">
                      <label className="sr-only" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="w-full rounded-l-lg border-gray-200 p-3 text-sm"
                        placeholder="Email"
                        type="email"
                        id="email"
                      />
                      <div className="flex items-center" onClick={(e) => sendCode()}>
                        <label className="text-center bg-blue-400 hover:bg-blue-500 px-2 rounded-r-lg h-full text-white flex items-center cursor-pointer">
                          Validar email
                        </label>
                      </div>
                    </div>
                    <span id="infoSendEmail" hidden className="text-sm text-gray-500">Foi enviado um código para validação no seu e-mail.</span>
                  </div>
                  <div className="flex flex-row-reverse">
                    <label className="sr-only" htmlFor="code">
                      Código
                    </label>

                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Código"
                      type="text"
                      id="code"
                      maxLength={5}
                      onChange={(e) => validateCodde(e.target.value)}
                    />
                    <div
                      className="absolute search-icon pt-4 pr-3"
                      id="codeOk"
                      hidden
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="fill-current pointer-events-none text-green-600 w-4"
                      >
                        <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                      </svg>
                    </div>
                    <div
                      className="absolute search-icon pt-2 pr-4"
                      id="codeWrong"
                      hidden
                    >
                      <p className="text-red-600 text-xl">x</p>
                    </div>
                  </div>

                  {allowed == true ? (
                    <section>
                      <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                        <div>
                          <input
                            className="sr-only"
                            id="option1"
                            type="radio"
                            tabIndex="-1"
                          />
                          <label
                            htmlFor="option1"
                            className="block w-full rounded-lg border border-gray-200 p-3"
                            tabIndex="0"
                          >
                            <span className="text-sm font-medium">
                              {" "}
                              Option 1{" "}
                            </span>
                          </label>
                        </div>

                        <div>
                          <input
                            className="sr-only"
                            id="option2"
                            type="radio"
                            tabIndex="-1"
                          />
                          <label
                            htmlFor="option2"
                            className="block w-full rounded-lg border border-gray-200 p-3"
                            tabIndex="0"
                          >
                            <span className="text-sm font-medium">
                              {" "}
                              Option 2{" "}
                            </span>
                          </label>
                        </div>

                        <div>
                          <input
                            className="sr-only"
                            id="option3"
                            type="radio"
                            tabIndex="-1"
                          />
                          <label
                            htmlFor="option3"
                            className="block w-full rounded-lg border border-gray-200 p-3"
                            tabIndex="0"
                          >
                            <span className="text-sm font-medium">
                              {" "}
                              Option 3{" "}
                            </span>
                          </label>
                        </div>
                      </div>

                      <div>
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
                          <p>Arquivo</p>
                        </label>
                        <input
                          className="block w-full text-sm text-gray-900 border border-gray-300 cursor-pointer bg-gray-50 focus:outline-none"
                          aria-describedby="file_input_help"
                          id="file_input"
                          type="file"
                        />
                        <p
                          className="mt-1 text-sm text-gray-500"
                          id="file_input_help"
                        >
                          Apenas arquivos PDF.
                        </p>
                      </div>

                      <div>
                        <label className="sr-only" htmlFor="message">
                          Message
                        </label>
                        <textarea
                          className="w-full rounded-lg border-gray-200 p-3 text-sm"
                          placeholder="Mensagem"
                          rows="8"
                          id="message"
                        ></textarea>
                      </div>

                      <div className="mt-4">
                        <button
                          type="submit"
                          className="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
                        >
                          <span className="font-medium"> Enviar </span>

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
                  ) : (
                    ""
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>

        <Back />
      </div>
    </section>
  );
}
