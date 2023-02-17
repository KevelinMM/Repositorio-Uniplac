import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import Back from "../components/Back";
import createCookie from "../helpers/createCookie";
import { deleteCookie } from 'cookies-next';


export default function login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  deleteCookie('auth');

  async function login(e) {
    console.log(email, password);
    e.preventDefault();
    try {
      const login = await axios.post(process.env.BACKEND + "login", {
        email: email,
        password: password,
      });
      createCookie(login.data.token)
      window.location.href = "/admin"
      document.getElementById("error").hidden = true
    } catch (e) {
      document.getElementById("error").hidden = false
    }
  }

  return (
    <div className=" bg-gradient-to-t from-blue-100 min-h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen ">
        <h1 className="text-2xl lg:text-3xl text-slate-700 mb-4 font-bold">
          Administradores do Repositório
        </h1>
        <div className="pb-10 pt-4">
          <Image
            src={`/logoUniplac.png`}
            alt="Logo Uniplac"
            width={100}
            height={100}
          />
        </div>

        <div className="w-full bg-white bg-opacity-90 rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Login
            </h1>
            <form
              className="space-y-4 md:space-y-3"
              onSubmit={(e) =>  login(e)}
            >
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
                  placeholder="name@company.com"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Senha
                </label>
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
              <div>
                <span className="text-red-500" id="error" hidden>Usuário ou senha invalido !</span>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className=" font-medium rounded-md bg-blue-800 bg-opacity-80 px-2 py-1 text-white hover:bg-blue-500 soft-transition"
                >
                  Entrar
                </button>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline"
                >
                  * Esqueci minha senha
                </a>
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
