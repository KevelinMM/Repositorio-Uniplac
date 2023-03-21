import { useEffect, useState } from "react";
import sendEmail from "../helpers/sendEmail";
import createDoc from "../helpers/createDoc";
import { Triangle } from "react-loader-spinner";
import { GiTrophyCup } from "react-icons/gi";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import mime from "mime-types"

export default function Form(req) {
  const [correctCode, setCorrectCode] = useState();
  const [allowed, setAllowed] = useState(true); //default false

  const [listName, setListName] = useState([]);
  const [name, setName] = useState();
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState();
  const [subTitle, setSubTitle] = useState();
  const [origin, setOrigin] = useState();
  const [type, setType] = useState();
  const [content, setContent] = useState();
  const [file, setFile] = useState();
  const [tagListId, setTagListId] = useState([]);
  const [lista, setLista] = useState([]);
  const [codeSubimited, setCodeSubimited] = useState(false);

  const [allTypes, setAllTypes] = useState(req.types);
  const [allOrigins, setAllOrigins] = useState(req.origins);
  const [allTagsSearch, setAllTagsSearch] = useState(req.tags);

  async function sendCode() {
    setCodeSubimited(true);
    document.getElementById("infoSendEmail").hidden = false;
    const randomNumber = Math.floor(Math.random() * 1000) + 9999;
    setCorrectCode(randomNumber);

    await sendEmail(
      email,
      "Seu código de ativação para envio de documento é " + randomNumber
    );
  }

  function validateCodde(code) {
    if (code.length == 5 && code == correctCode) {
      document.getElementById("codeOk").hidden = false;
      document.getElementById("code").readOnly = true;
      document.getElementById("email").readOnly = true;
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
    try {
      var authors = "";

      for (let i = 0; i <= listName.length - 1; i++) {
        //console.log(listName[i]);
        authors = authors.concat(listName[i] + ", ");
      }

      if (authors == "") {
        console.log("sem autor");
      }

      document.getElementById("loading").hidden = false;
      document.getElementById("formPubli").hidden = true;
      const create = await createDoc(
        authors,
        email,
        title,
        subTitle,
        content,
        origin,
        type,
        lista,
        file
      );
      if (create == false) {
        document.getElementById("loading").hidden = true;
        document.getElementById("error").hidden = false;
        return false;
      }
      const email1 = await sendEmail(
        allOrigins.filter((e) => e[0].origin_id == origin)[0][0].email,
        "Uma nova solicitação de " +
          name +
          " foi enviada e aguarda sua validação para ser publicado no Repositório Institucional Uniplac! <br/> acesse: https://repositorio.uniplaclages.edu.br/login"
      );
      const email2 = await sendEmail(
        email,
        "Sua solicitação para publicar o documento " +
          title +
          " no Repositório Institucional Uniplac foi enviada para analise, você será informado sobre o andamento da publicação pelo email! <br/> Segundo a Lei Geral de Proteção de Dados Pessoais, ao enviar a solicitação, você autorizou que seus dados fossem coletados pela instituição Uniplac."
      );
      if (email1 == false || email2 == false) {
        document.getElementById("loading").hidden = true;
        document.getElementById("error").hidden = false;
        return;
      }
      document.getElementById("loading").hidden = true;
      document.getElementById("success").hidden = false;
    } catch {
      document.getElementById("loading").hidden = true;
      document.getElementById("error").hidden = false;
    }
  }

  return (
    <div className=" py-5 lg:py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-x-10 gap-y-2 xl:grid-cols-5">
        <div className=" lg:col-span-2 px-2 lg:py-6 text-justify">
          <h3 className=" text-lg font-medium">Instruções aos autores</h3>
          <ul className="pl-6  text-sm  list-decimal">
            <li className="p-1">Realize a validação de seu email.</li>
            <li className="p-1">
              Preencha o formulário para deposito de trabalho (todos os campos
              são obrigatórios para publicação).
            </li>
            <li className="p-1">
              Envie e aguarde o retorno de seu orientador pelo email.
            </li>
            <li className="p-1">Apenas documentos em PDF são permitidos.</li>
          </ul>
          <div className="mt-8">
            <a className="text-2xl font-bold text-blue-600">
              Contato da Biblioteca
            </a>

            <p className="text-sm mt-2 not-italic mb-6 lg:mb-0">
              (Em caso de dúvidas, entre em contato)
            </p>
          </div>
        </div>

        <div className="rounded-lg bg-white shadow-lg lg:col-span-3 pb-6 lg:pt-4 px-4 lg:px-10">
          <div id="loading" hidden>
            <div className="flex flex-col col-span-1 my-16">
              <div className="mx-auto">
                <Triangle
                  height="80"
                  width="80"
                  color="#4fa94d"
                  ariaLabel="triangle-loading"
                  visible={true}
                />
              </div>
              <h1 className="mx-auto">Enviando documento...</h1>
            </div>
          </div>
          <div id="success" hidden>
            <div className="flex flex-col col-span-1 my-16">
              <div className="mx-auto">
                <GiTrophyCup className="text-6xl text-green-600 animate-bounce" />
              </div>
              <h1 className="mx-auto">Documento enviado com sucesso!</h1>
            </div>
          </div>
          <div id="error" hidden>
            <div className="flex flex-col col-span-1 my-16">
              <div className="mx-auto">
                <MdOutlineReportGmailerrorred className="text-6xl text-red-600 animate-bounce" />
              </div>
              <h1 className="mx-auto">
                Ocorreu um erro ao cadastrar seu documento!
              </h1>
            </div>
          </div>
          <form
            className="space-y-4"
            id="formPubli"
            onSubmit={(e) => sendDocument() + e.preventDefault()}
          >
            <div className="grid grid-cols-1 gap-3 ">
              <h1 className="page-title">Realizar publicação</h1>
              <div className="flex">
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
                {!codeSubimited ? (
                  <button
                    className="flex items-center"
                    onClick={(e) => email.length > 0 && sendCode()}
                  >
                    <label className="text-sm text-center bg-blue-400 hover:bg-blue-500 px-2 rounded-r-lg h-full text-white flex items-center cursor-pointer">
                      Validar email
                    </label>
                  </button>
                ) : (
                  <div
                    className="flex items-center"
                    onClick={(e) => sendCode()}
                  >
                    <label className="text-sm text-center bg-gray-400 hover:bg-gray-500 px-2 rounded-r-lg h-full text-white flex items-center cursor-pointer">
                      Reenviar código
                    </label>
                  </div>
                )}
              </div>
              <span id="infoSendEmail" hidden className="text-sm bg-blue-50 rounded px-2 text-gray-500">
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
            <p className="text-sm pl-2 pb-2 lg:pb-6">
              Após validação, siga com o formulário.
            </p>

            {allowed == true ? (
              <div className="space-y-4">
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Nome completo do autor *"
                  type="text"
                  id="name"
                  value={name || ""}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={(e) =>
                    (name != undefined ? listName.push(e.target.value) : "") +
                    setName()
                  }
                />
                <button
                  onClick={(e) =>
                    e.preventDefault() +
                    (name != undefined ? listName.push(name) : "") +
                    setName()
                  }
                ></button>
                {listName.map((autor, index) => (
                  <span
                    key={index}
                    className="flex flex-row items-center  bg-blue-200 hover:bg-gray-200 cursor-pointer rounded-full text-xs px-2 py-1 ml-2"
                    onClick={(e) =>
                      setListName(listName.filter((e, n) => n != index))
                    }
                  >
                    {autor} <span className="text-base pl-1">x</span>
                  </span>
                ))}
                <input
                  required
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Título do documento *"
                  type="text"
                  id="title"
                  onChange={(e) => setTitle(e.target.value)}
                />

                <input
                  required
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Sub-Título *"
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
                      defaultValue=""
                      onChange={(e) =>
                        setOrigin(e.target.value) +
                        setAllTypes(
                          req.types.filter(
                            (z) =>
                              e.target.value == z.origin_id || z.origin_id == 1
                          )
                        )
                      }
                    >
                      <option value="" disabled>
                        Selecione a origem *
                      </option>

                      {allOrigins.map((e) =>
                        e[0].origin_name == "Outros" ? null : (
                          <option key={e[0].origin_id} value={e[0].origin_id}>
                            {e[0].origin_name}
                          </option>
                        )
                      )}
                    </select>
                  </div>

                  <select
                    required
                    className="rounded-lg border-gray-200 p-3 text-sm pr-8 mt-4 sm:mt-0"
                    id="category"
                    defaultValue=""
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="" disabled>
                      Selecione a categoria *
                    </option>
                    {allTypes.map((e) => (
                      <option key={e.id} value={e.id}>
                        {e.type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Busque Tags referentes ao seu trabalho"
                    type="text"
                    id="tags"
                    onChange={(e) => {
                      setTagListId(
                        allTagsSearch.filter((element) =>
                          e.target.value.length > 0
                            ? element.tag
                                .toLowerCase()
                                .includes(e.target.value.toLowerCase()) &&
                              element.approved == true
                            : ""
                        )
                      );
                      e.target.value != ""
                        ? (document.getElementById(
                            "resultTags"
                          ).hidden = false) +
                          (document.getElementById("newTag").hidden = false)
                        : (document.getElementById(
                            "resultTags"
                          ).hidden = true) +
                          (document.getElementById("newTag").hidden = true);
                    }}
                  />
                  <div id="resultTags">
                    {tagListId.map((e) => (
                      <div
                        key={e.tag}
                        className="hover:bg-gray-200 px-2 border-b"
                        onClick={(y) =>
                          lista.indexOf(e.id) <= -1
                            ? (lista.length >= 5
                                ? (document.getElementById("tags").placeholder =
                                    "Número máximo de tags atingido")
                                : lista.push({ id: e.id, tag: e.tag }) +
                                  setAllTagsSearch(
                                    allTagsSearch.filter(
                                      (item) => item.id != e.id
                                    )
                                  )) +
                              (document.getElementById("tags").value = "") +
                              setTagListId([]) +
                              (document.getElementById("newTag").hidden = true)
                            : null
                        }
                      >
                        <a className="text-black text-base">{e.tag}</a>
                      </div>
                    ))}
                    <div
                      hidden
                      id="newTag"
                      className="bg-green-100 hover:bg-green-200 px-2 cursor-pointer"
                      onClick={(e) =>
                        document.getElementById("tags").value != ""
                          ? lista.push({
                              tag: document.getElementById("tags").value,
                            }) +
                            (document.getElementById("tags").value = "") +
                            setTagListId([]) +
                            (document.getElementById("newTag").hidden = true)
                          : null
                      }
                    >
                      <a className="text-black text-base">Adicionar nova tag</a>
                    </div>
                  </div>
                </div>

                <div className=" flex flex-row flex-wrap gap-2">
                  {lista.map((e, index) =>
                    e.id ? (
                      <span
                        key={index}
                        className="flex flex-row items-center  bg-blue-200 hover:bg-gray-200 cursor-pointer rounded-full text-xs px-2 py-1 ml-2"
                        onClick={(y) =>
                          allTagsSearch.push({
                            id: e.id,
                            tag: e.tag,
                            approved: true,
                          }) + setLista(lista.filter((item) => item.id != e.id))
                        }
                      >
                        {e.tag} <span className="text-base pl-1">x</span>
                      </span>
                    ) : (
                      <span
                        key={index}
                        className="flex flex-row items-center bg-orange-200 hover:bg-orange-200 cursor-pointer rounded-full text-xs px-2 py-1 ml-2"
                        onClick={(y) =>
                          setLista(lista.filter((item) => item.tag != e.tag))
                        }
                      >
                        {e.tag} <span className="text-base pl-1">x</span>
                      </span>
                    )
                  )}
                </div>
                <p className="px-2 text-md font-medium text-gray-700">Resumo</p>
                <textarea
                  required
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Escreva um breve resumo sobre seu trabalho."
                  rows="8"
                  id="resume"
                  maxLength={255}
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
                  onChange={(e) => (e.target.files[0].type == "application/pdf" ? setFile(e.target.files) : alert("Formato inválido") + (document.getElementById("file_input").value = "")) }
                />

                <div className="flex items-center mb-4 bg-slate-200 px-3 rounded-md">
                  <input
                    required
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 bg-gray-300 border-gray-600 rounded focus:ring-blue-600 "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-1 text-sm font-medium text-gray-600 text-justify p-4"
                  >
                    Lei Geral de Proteção de Dados Pessoais (LGPD): Declaro
                    estar ciente que os dados cadastrados serão coletados e
                    utilizados pela instituição de ensino Uniplac para realizar
                    a publicação do documento, controlar o credenciamento dos
                    participantes e enviar comunicados pelo Email informado.
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
              </div>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
