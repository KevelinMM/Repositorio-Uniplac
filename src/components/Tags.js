import { useEffect, useState } from "react";

export default function Tags(req) {
  const [tags, setTags] = useState(req.tags);
  const [allTags, setAllTags] = useState(false);

  function orderTagsByAlphabet() {
    var aux;

    aux = tags.sort((a, b) => {
      const nameA = a.tag.toUpperCase(); // ignore upper and lowercase
      const nameB = b.tag.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });

    setTags(aux) 
    console.log(tags)
    console.log("num")
  }

  function orderTagsByNum() {
    var aux;

    aux = tags.sort((a, b) => b.num - a.num);

    setTags(aux) 
    console.log(tags)
    console.log("num")
  }

  useEffect(
    (e) => {
      allTags == true
        ? (document.getElementById("allTags").innerHTML = "Ocultar")
        : (document.getElementById("allTags").innerHTML = "Ver todos");
    },
    [allTags]
  );

  return (
    <div className="px-4 w-full lg:px-6 lg:text-xl text-gray-800 leading-normal">
      <p className="hidden lg:flex text-base font-bold lg:py-2 lg:pb-6 text-gray-700 mt-4 lg:mt-0">
        TAGs
      </p>
      <ul className="cursor-pointer hidden lg:flex lg:flex-col">
        {tags.map((e, index) =>
          index < 12 || allTags == true ? (
            <li
              key={index}
              className="py-2 md:my-0 hover:bg-blue-100 lg:hover:bg-transparent border-b"
            >
              <a
                href={"/filtro/tag-" + e.tag}
                className="block pl-1 align-middle text-gray-700 no-underline hover:text-blue-500 border-l-4 border-transparent lg:hover:border-gray-400"
              >
                <span className=" text-sm cursor-pointer">{e.tag}</span>
                <span className="bg-blue-200 rounded-full text-xs p-1 ml-2 ">
                  {e.num < 10 ? "0" + e.num : e.num}
                </span>
              </a>
            </li>
          ) : null
        )}
        <a
          className="block pl-1 align-middle text-gray-700 hover:text-blue-500 border-l-4 border-transparent lg:hover:border-gray-400"
          onClick={(e) => setAllTags(!allTags) + (allTags == true ? orderTagsByNum() : orderTagsByAlphabet())}
        >
          <span
            id="allTags"
            className=" text-sm cursor-pointer underline"
          ></span>
        </a>
      </ul>
    </div>
  );
}
