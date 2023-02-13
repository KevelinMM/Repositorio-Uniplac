import { useState } from "react";
import db from "../db/db";

export default function Tags() {
  const [tags, setTags] = useState(db.tags);

  tags.sort(function(a, b) {
    return parseFloat(b.num) - parseFloat(a.num);
});



  return (
    <div className="px-4 w-full lg:w-1/5 lg:px-6 lg:text-xl text-gray-800 leading-normal">
      <p className="text-base font-bold py-2 lg:pb-6 text-gray-700 mt-4 lg:mt-0">
        TAGs
      </p>

      <div className="lg:hidden overflow-auto h-[60px] flex items-center text-gray-700">
        {tags.map((e) => (
          <div
            key={e.id}
            className="bg-blue-200 rounded-full text-xs p-2 mx-1 "
          >
            <span className=" text-sm flex items-center">
              {e.tag} <span className="text-xs bg-blue-100 rounded-full ml-1 p-0.5">{e.num}</span>
            </span>
          </div>
        ))}
      </div>

      <ul className="cursor-pointer hidden lg:flex lg:flex-col max-h-[650px] overflow-auto">
        {tags.map((e) => (
          <li
            key={e.id}
            className="py-2 md:my-0 hover:bg-blue-100 lg:hover:bg-transparent border-b"
          >
            <a
              href="#"
              className="block pl-4 align-middle text-gray-700 no-underline hover:text-blue-500 border-l-4 border-transparent lg:hover:border-gray-400"
            >
              <span className=" text-sm cursor-pointer">{e.tag}</span>
              <span className="bg-blue-200 rounded-full text-xs p-1 ml-2">
                {e.num}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
