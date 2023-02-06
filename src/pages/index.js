export default function Home() {
  return (
    <section className="bg-gray-100 tracking-wider tracking-normal">
      <nav
        id="header"
        className="fixed w-full top-0 bg-white border-b border-gray-400 z-20"
      >
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-4 ">
          <div className="pl-4 flex items-center">
            <svg
              className="h-5 pr-3 fill-current text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M0 2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm14 12h4V2H2v12h4c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2zM5 9l2-2 2 2 4-4 2 2-6 6-4-4z" />
            </svg>
            <a
              className="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl"
              href="#"
            >
              Help Article
            </a>
          </div>
          <div className="block lg:hidden pr-4">
            <button
              id="nav-toggle"
              className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-blue-500 appearance-none focus:outline-none"
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
                <title>Menu</title>
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
                  placeholder="Search"
                  className=" w-full bg-gray-100 text-sm text-gray-800 transition border focus:outline-none focus:border-blue-500 rounded py-1 px-2 pl-10 appearance-none leading-normal"
                />
              </div>
            </div>
            <ul className="list-reset lg:flex justify-end items-center">
              <li className="mr-3 py-2 lg:py-0">
                <a
                  className="inline-block py-2 px-4 text-gray-900 font-bold no-underline"
                  href="#"
                >
                  Active
                </a>
              </li>
              <li className="mr-3 py-2 lg:py-0">
                <a
                  className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:underline py-2 px-4"
                  href="#"
                >
                  link
                </a>
              </li>
              <li className="mr-3 py-2 lg:py-0">
                <a
                  className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:underline py-2 px-4"
                  href="#"
                >
                  link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
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
                    {Math.floor(Math.random() * 100)}
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
                    {Math.floor(Math.random() * 100)}
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
                    {Math.floor(Math.random() * 100)}
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
              href="#"
              className="text-base md:text-sm text-blue-500 font-bold no-underline hover:underline"
            >
              Back Link
            </a>
            <h1 className="font-sans break-normal text-gray-900 pt-6 pb-2 text-xl">
              Help page title
            </h1>
            <hr className="border-b border-gray-400" />
          </div>

          <p className="py-6">
            👋 Welcome fellow{" "}
            <a
              className="text-blue-500 no-underline hover:underline"
              href="https://www.tailwindcss.com"
            >
              Tailwind CSS
            </a>{" "}
            fan. This starter template provides a starting point to create your
            own helpdesk / faq / knowledgebase articles using Tailwind CSS and
            vanilla Javascript.
          </p>
          <p className="py-6">
            The basic help article layout is available and all using the default
            Tailwind CSS classes (although there are a few hardcoded style
            tags). If you are going to use this in your project, you will want
            to convert the classes into components.
          </p>
          <h1 className="py-2 font-sans">Heading 1</h1>
          <h2 className="py-2 font-sans">Heading 2</h2>
          <h3 className="py-2 font-sans">Heading 3</h3>
          <h4 className="py-2 font-sans">Heading 4</h4>
          <h5 className="py-2 font-sans">Heading 5</h5>
          <h6 className="py-2 font-sans">Heading 6</h6>
          <p className="py-6">
            Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus
            purus, in mattis tortor sollicitudin pretium. Phasellus at diam
            posuere, scelerisque nisl sit amet, tincidunt urna. Cras nisi diam,
            pulvinar ut molestie eget, eleifend ac magna. Sed at lorem
            condimentum, dignissim lorem eu, blandit massa. Phasellus eleifend
            turpis vel erat bibendum scelerisque. Maecenas id risus dictum,
            rhoncus odio vitae, maximus purus. Etiam efficitur dolor in dolor
            molestie ornare. Aenean pulvinar diam nec neque tincidunt, vitae
            molestie quam fermentum. Donec ac pretium diam. Suspendisse sed odio
            risus. Nunc nec luctus nisi. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Duis nec nulla
            eget sem dictum elementum.
          </p>
          <ol>
            <li className="py-3">
              Maecenas accumsan lacus sit amet elementum porta. Aliquam eu
              libero lectus. Fusce vehicula dictum mi. In non dolor at sem
              ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse quam
              quam, commodo sit amet placerat in, interdum a ipsum. Morbi sit
              amet tellus scelerisque tortor semper posuere.
            </li>
            <li className="py-3">
              Morbi varius posuere blandit. Praesent gravida bibendum neque eget
              commodo. Duis auctor ornare mauris, eu accumsan odio viverra in.
              Proin sagittis maximus pharetra. Nullam lorem mauris, faucibus ut
              odio tempus, ultrices aliquet ex. Nam id quam eget ipsum luctus
              hendrerit. Ut eros magna, eleifend ac ornare vulputate, pretium
              nec felis.
            </li>
            <li className="py-3">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Nunc vitae pretium elit. Cras leo mauris,
              tristique in risus ac, tristique rutrum velit. Mauris accumsan
              tempor felis vitae gravida. Cras egestas convallis malesuada.
              Etiam ac ante id tortor vulputate pretium. Maecenas vel sapien
              suscipit, elementum odio et, consequat tellus.
            </li>
          </ol>
          <blockquote className="border-l-4 border-blue-500 italic my-8 pl-8 md:pl-12">
            Example of blockquote - Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit
            amet ligula.
          </blockquote>
          <p className="py-6">Example code block:</p>

          <hr className="border-b border-gray-400 py-4" />
          <div className="flex items-center">
            <svg
              className="h-16 fill-current text-gray-600 hover:shadow hover:bg-blue-100 hover:text-green-500 p-4 mr-2 border rounded"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z" />
            </svg>
            <svg
              className="h-16 fill-current text-gray-600 hover:shadow hover:bg-blue-100 hover:text-red-500 p-4 mr-2 border rounded"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z" />
            </svg>
            <div className="pl-4">
              <p className="text-gray-800 font-bold">
                Did you find this article useful?
              </p>
              <p className="text-xs text-gray-600 pt-2">
                0 out of 0 found this useful
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-4/5 lg:ml-auto text-base md:text-sm text-gray-500 px-4 py-6">
          <span className="text-base text-blue-500 font-bold">&lt;</span>{" "}
          <a
            href="#"
            className="text-base md:text-sm text-blue-500 font-bold no-underline hover:underline"
          >
            Back to Help
          </a>
        </div>
      </div>

      <footer className="bg-white border-t border-gray-400 shadow">
        <div className="container mx-auto flex py-8">
          <div className="w-full mx-auto flex flex-wrap">
            <div className="flex w-full lg:w-1/2 ">
              <div className="px-8">
                <h3 className="font-bold text-gray-900">About</h3>
                <p className="py-4 text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas vel mi ut felis tempus commodo nec id erat.
                  Suspendisse consectetur dapibus velit ut lacinia.
                </p>
              </div>
            </div>
            <div className="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
              <div className="px-8">
                <h3 className="font-bold text-gray-900">Social</h3>
                <ul className="list-reset items-center text-sm pt-3">
                  <li>
                    <a
                      className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:underline py-1"
                      href="#"
                    >
                      Add social links
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
