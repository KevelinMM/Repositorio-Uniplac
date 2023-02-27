import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import Back from "../components/Back";
import createCookie from "../helpers/createCookie";
import { deleteCookie } from "cookies-next";
import sendEmail from "../helpers/sendEmail";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export default function login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [newPassword, setNewPassword] = useState(false);
  const [code, setCode] = useState();
  const [correctCode, setCorrectCode] = useState();
  deleteCookie("auth");

  async function login(e) {
    e.preventDefault();
    try {
      const login = await axios.post(process.env.BACKEND + "login", {
        email: email,
        password: password,
      });
      createCookie(login.data.token);
      window.location.href = "/admin";
      document.getElementById("error").hidden = true;
    } catch (e) {
      document.getElementById("error").hidden = false;
    }
  }

  function sendCode() {
    setNewPassword(true);
    const randomNumber = Math.floor(Math.random() * 1000) + 9999;
    setCorrectCode(randomNumber);
    sendEmail(
      email,
      "Seu codigo para redefinir sua senha é " +
        randomNumber +
        "<br/>Caso não tenha sido você que solicitou a alteração apenas ignore este email."
    );
  }

  async function resetPassword() {
    if (correctCode == code) {
      console.log("Reset Password");
      await axios.put(process.env.BACKEND + "resetPassword/" + email, {
        password: password,
      });
      window.location.reload();
    } else {
      document.getElementById("wrongCode").hidden = false;
    }
  }

  return (
    <div className=" bg-gradient-to-t from-blue-100 min-h-screen">
      <div className="flex flex-col items-center mt-20 px-6 py-8 mx-auto md:h-screen ">
        <h1 className="text-2xl lg:text-3xl text-slate-700 mb-4 font-bold">
          Administradores do Repositório
        </h1>
        <div className="pb-10 pt-4">
          <Image
            src={`/logoUniplac.png`}
            alt="Logo Uniplac"
            width={90}
            height={90}
          />
        </div>

        <div className="w-full bg-white bg-opacity-90 rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Login
            </h1>
            <form className="space-y-4 md:space-y-3" onSubmit={(e) => login(e)}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Seu email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                  placeholder="exemplo@uniplac.net"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              {newPassword == true ? (
                <div>
                  <span className="text-sm">
                    Foi enviado um codigo para seu email.
                  </span>
                  <label
                    htmlFor="code"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Código
                  </label>
                  <input
                    type="code"
                    name="code"
                    id="code"
                    value={code}
                    placeholder="Código"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    onChange={(e) => setCode(e.target.value)}
                    required
                  />
                  <span id="wrongCode" hidden className="text-sm text-red-500">
                    Código incorreto.
                  </span>
                </div>
              ) : null}
              <div>
                <label
                  id="labelPassword"
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  {newPassword == true ? "Nova senha" : "Senha"}
                </label>
                <div className="justify-between flex flex-row-reverse items-center">
                  <div className="absolute" id="show">
                    <AiFillEyeInvisible
                      className="w-4  mr-3"
                      onClick={() =>
                        (document.getElementById("password").type = "text") +
                        (document.getElementById("show").hidden = true) +
                        (document.getElementById("hidden").hidden = false)
                      }
                    />
                  </div>

                  <div className="absolute" id="hidden" hidden>
                    <AiFillEye
                      hidden
                      className="w-4 mr-3"
                      onClick={() =>
                        (document.getElementById("password").type =
                          "password") +
                        (document.getElementById("show").hidden = false) +
                        (document.getElementById("hidden").hidden = true)
                      }
                    />
                  </div>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <span className="text-red-500" id="error" hidden>
                  Usuário ou senha invalido !
                </span>
              </div>
              <div className="flex items-center justify-between">
                {newPassword == true ? (
                  <a
                    onClick={(e) => resetPassword()}
                    className="cursor-pointer font-medium rounded-md bg-blue-800 bg-opacity-80 px-2 py-1 text-white hover:bg-blue-500 soft-transition"
                  >
                    Cadastrar nova senha
                  </a>
                ) : (
                  <>
                    <button
                      id="loginButton"
                      type="submit"
                      className=" font-medium rounded-md bg-blue-800 bg-opacity-80 px-2 py-1 text-white hover:bg-blue-500 soft-transition"
                    >
                      Entrar
                    </button>
                    <a
                      onClick={(e) => sendCode()}
                      className="cursor-pointer text-sm font-medium text-primary-600 hover:underline"
                    >
                      * Esqueci minha senha
                    </a>
                  </>
                )}
              </div>
              <p className="text-sm font-light text-gray-500 ">
                Página destinada à responsáveis das publicações do Repositório
                Institucional da Uniplac
              </p>
            </form>
          </div>
        </div>
        <Back />
      </div>
    </div>
  );
}
