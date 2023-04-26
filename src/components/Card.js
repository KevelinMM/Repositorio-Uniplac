import { useState } from "react";

export default function Card(req) {
  const publi = req.content;

  const id = publi.id;
  const title = publi.title;
  const date = new Date(publi.created_at);
  const autor = publi.autor;
  const content = publi.content;
  const type = publi.type_id.type;
  const origin = publi.origin_id.origin;
  const [tags, setTags] = useState(publi.tag);

  return (
    <a
      href={"/documento/" + id}
      className=" mb-4 block cursor-pointer rounded-md border shadow-xl transition [animation-duration:_6s] hover:shadow-sm"
    >
      <div className=" bg-white p-4 lg:p-5 md:px-10">
        <div className="flex justify-between space-x-2 items-center">
          <span className="text-sm text-gray-600">{autor}</span>
          <time dateTime={date} className="block text-xs text-gray-500">
            {date.toLocaleDateString()}
          </time>
        </div>
        <h3 className="mt-0.5 text-lg font-medium text-gray-900 hover:underline">
          {title}
        </h3>
        <div className="text-base text-gray-600 text-justify indent-6" dangerouslySetInnerHTML={{ __html: content.length > 290 ? (content.slice(0, 290) + "...") : content}} />

        <div className="mt-4 flex flex-wrap gap-1">
          <span className="bg-orange-200 rounded-full text-xs px-3 py-1 ml-2">
            {origin}
          </span>
          <span className="bg-orange-200 rounded-full text-xs px-3 py-1 ml-2">
            {type}
          </span>
          {tags.map((e, index) => (
            <span
              key={index}
              className="bg-blue-200 rounded-full text-xs px-3 py-1 ml-2"
            >
              {e}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

