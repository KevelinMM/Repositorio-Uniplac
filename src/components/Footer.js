import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-300 shadow">
      <div className="container mx-auto flex py-4">
        <div className="w-full mx-auto flex flex-wrap">
          <div className="flex w-full lg:w-1/2 ">
            <div className="px-8">
              <h3 className="font-bold text-gray-900">Repositório</h3>
              <p className="py-4 text-gray-600 text-sm">
                Repositório institucional da Uniplac, voltado ao armazenamento,
                à divulgação, ao acesso e à preservação da produção da
                instituição.
              </p>
            </div>
          </div>
          <div className="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
            <div className="px-8">
              <ul className="list-reset items-start md:items-center text-sm pt-3 flex flex-col md:flex-row">
                <li className="text-black flex cursor-default pr-2">
                  {" "}
                  Copyright &copy; {new Date().getFullYear()}{" "}
                  <p className="text-blue-700 hover:text-blue-700 pl-2">
                    {" <NIU/>"}
                  </p>
                </li>
                <li className="hidden lg:flex">
                  <Image
                    src={`/logoUniplac.png`}
                    alt="Logo Uniplac"
                    width={70}
                    height={70}
                  />
                </li>{" "}
                <li className="flex items-center md:pl-4">
                  <p className="">Apoio </p>
                  <Image
                    src={`/fapesc.png`}
                    alt="Logo Uniplac"
                    width={160}
                    height={70}
                  />
                </li>{" "}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
