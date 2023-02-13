import { useState } from "react";

export default function Form(req) {
  const [correctCode, setCorrectCode] = useState("11111");
  const [allowed, setAllowed] = useState(true); //default false

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [title, setTitle] = useState();
  const [subTitle, setSubTitle] = useState();
  const [origin, setOrigin] = useState();
  const [type, setType] = useState();
  const [content, setContent] = useState();
  const [file, setFile] = useState();
  const [tagList, setTagList] = useState([1,2,3]);

  const [allTypes, setAllTypes] = useState(req.types);
  const [allOrigins, setAllOrigins] = useState(req.origins);
  const [allTags, setAllTags] = useState(req.tags);

  function sendCode() {
    document.getElementById("infoSendEmail").hidden = false;
  }

  function validateCodde(code) {
    if (code.length == 5 && code == correctCode) {
      document.getElementById("codeOk").hidden = false;
      document.getElementById("code").readOnly = true;
      document.getElementById("codeWrong").hidden = true;
      setAllowed(true);
    } else {
      document.getElementById("codeWrong").hidden = false;
      document.getElementById("codeOk").hidden = true;
      setAllowed(false);
    }
    return;
  }

  async function sendDocument() {
    console.log("mandou");
  }

  return (
    <div className=" py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-x-10 gap-y-2 xl:grid-cols-5">
        <div className="lg:col-span-2 lg:py-12">
          <h3 className=" text-lg">Etapas de publicação</h3>
          <ul className="pl-6  text-sm  list-decimal">
            <li className="p-1">Valide seu email.</li>
            <li className="p-1">
              Preencha o formulário (todos os campos são obrigatórios para
              publicação).
            </li>
            <li className="p-1">
              Aguarde o retorno pelo seu email cadastrado.
            </li>
          </ul>
          <div className="mt-8">
            <a href="" className="text-2xl font-bold text-blue-600">
              Contato da Biblioteca
            </a>

            <p className="text-sm mt-2 not-italic">
              (Em caso de dúvidas, entre em contato)
            </p>
          </div>
        </div>

        <div className="rounded-lg bg-white p-4 shadow-lg lg:col-span-3 md:p-8 lg:p-12">
          <form
            className="space-y-4"
            id="formPubli"
            onSubmit={(e) => sendDocument() + e.preventDefault()}
          >
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
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="flex items-center" onClick={(e) => sendCode()}>
                  <label className="text-sm text-center bg-blue-400 hover:bg-blue-500 px-2 rounded-r-lg h-full text-white flex items-center cursor-pointer">
                    Validar email
                  </label>
                </div>
              </div>
              <span id="infoSendEmail" hidden className="text-sm text-gray-500">
                Foi enviado um código para validação no seu e-mail.
              </span>
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
              <section className="space-y-4">
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Nome completo do autor"
                  type="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  required
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Título do documento"
                  type="text"
                  id="title"
                  onChange={(e) => setTitle(e.target.value)}
                />

                <input
                  required
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Sub-Título"
                  type="text"
                  id="subTitle"
                  onChange={(e) => setSubTitle(e.target.value)}
                />

                <div className="w-full sm:flex">
                  <div className="pr-3">
                    <select
                      required
                      className="rounded-lg border-gray-200 p-3 text-sm pr-8"
                      id="origin"
                      onChange={(e) => setOrigin(e.target.value)}
                    >
                      <option selected disabled>
                        Selecione a origem
                      </option>
                      {allOrigins.map((e) =>
                        e.origin == "Outros" ? null : (
                          <option key={e.id} value={e.id}>
                            {e.origin}
                          </option>
                        )
                      )}
                      <option value={1}>Outros</option>
                    </select>
                  </div>

                  <select
                    required
                    className="rounded-lg border-gray-200 p-3 text-sm pr-8 mt-4 sm:mt-0"
                    id="category"
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option selected disabled>
                      Selecione a categoria
                    </option>
                    {allTypes.map((e) =>
                      e.type == "Outros" ? null : (
                        <option key={e.id} value={e.id}>
                          {e.type}
                        </option>
                      )
                    )}
                    <option value="1">Outros</option>
                  </select>
                </div>

                <select
                  className="rounded-lg border-gray-200 p-3 text-sm pr-8 w-full"
                  placeholder="Sugerir 3 palavras chaves para seu trabalho."
                  onChange={(e) => tagList.push(e.target.value*1) + console.log(tagList)}
                >
                  {allTags.map((e) => (
                    <option key={e.id} value={e.id}>
                      {e.tag}
                    </option>
                  ))}
                </select>

                <div className="md:my-0">
                  {tagList.map((e, index) => 
                    <span key={index} className="bg-blue-200 rounded-full text-xs p-2 ml-2 ">
                      {e}
                    </span>
                  )}
                </div>
                <textarea
                  required
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Escreva um breve resumo sobre seu trabalho."
                  rows="8"
                  id="resume"
                  onChange={(e) => setContent(e.target.value)}
                ></textarea> 

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
                  <p>Anexar (apenas PDF)</p>
                </label>
                <input
                  required
                  className="block w-full text-sm text-gray-900 border border-gray-300 cursor-pointer bg-gray-50 focus:outline-none"
                  aria-describedby="file_input_help"
                  id="file_input"
                  accept="application/pdf"
                  type="file"
                  onChange={(e) => setFile(e.target.value)}
                />

                <div className="flex items-center mb-4">
                  <input
                    required
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4  bg-gray-300 border-gray-600 rounded focus:ring-blue-600 "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-medium text-gray-600 text-justify p-4"
                  >
                    Declaro estar ciente que os meus dados pessoais são
                    coletados e utilizados pela instituição de ensino para
                    realizar a publicação do documento, controlar o
                    credenciamento dos participantes e enviar comunicados.
                  </label>
                </div>

                <button className="mt-4 inline-flex items-center justify-center rounded-lg bg-green-500 px-3 py-2 md:px-5 md:py-3 text-white ">
                  <span className="md:font-medium"> Enviar </span>

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
              </section>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
