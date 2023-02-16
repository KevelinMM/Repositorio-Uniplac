import { useEffect, useState } from "react";

export default function Tags(req) {
  const [tags, setTags] = useState(req.tags);

  return (
    <div className="px-4 w-full lg:px-6 lg:text-xl text-gray-800 leading-normal">
      <p className="hidden lg:flex text-base font-bold lg:py-2 lg:pb-6 text-gray-700 mt-4 lg:mt-0">
        TAGs
      </p>
      <ul className="cursor-pointer hidden lg:flex lg:flex-col max-h-[650px] overflow-auto">
        {tags.map((e, index) => (
          <li
            key={index}
            className="py-2 md:my-0 hover:bg-blue-100 lg:hover:bg-transparent border-b"
          >
            <a
              href={"/filtro/tag-"+ e.tag}
              className="block pl-1 align-middle text-gray-700 no-underline hover:text-blue-500 border-l-4 border-transparent lg:hover:border-gray-400"
            >
              <span className=" text-sm cursor-pointer">{e.tag}</span>
              <span className="bg-blue-200 rounded-full text-xs p-1 ml-2 ">
                {e.num < 10 ? "0" + e.num : e.num}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
