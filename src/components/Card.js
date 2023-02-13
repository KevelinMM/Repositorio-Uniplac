import { useState } from "react";
import db from "../db/db";

export default function Card(req) {
  const publi = req.content;

  const id = publi.id;
  const title = publi.title;
  const date = publi.date;
  const autor = publi.autor;
  const content = publi.content;

  const allTags = db.tags;
  const docTags = db.documents_tags.filter((e) => e.document_id === publi.id);
  

  const [tagsId, setTagsId] = useState(
    docTags.map((tag) => {
      return allTags.filter((e) => e.id === tag.tag_id)[0].tag;
    })
  );

  return (
    <a
      href={"/documento/" + id}
      className="block cursor-pointer mt-4 rounded-md bg-gradient-to-r from-blue-700 via-blue-200 to-gray-100 bg-[length:400%_400%] p-0.5 shadow-xl transition [animation-duration:_6s] hover:shadow-sm"
    >
      <div className="rounded-[5px] bg-white p-5 md:px-10">
        <div className="flex justify-between space-x-2 items-center">
          <span className="text-sm text-gray-600">{autor}</span>
          <time dateTime={date} className="block text-xs text-gray-500">
            {date}
          </time>
        </div>
        <h3 className="mt-0.5 text-lg font-medium text-gray-900 hover:underline">
          {title}
        </h3>
        <p className="text-base text-gray-600">
          {content.length > 290 ? content.slice(0, 290) + "..." : content}
        </p>
        <div className="mt-4 flex flex-wrap gap-1">
          {tagsId.map((e, index) => (
            <span key={index} className="bg-blue-200 rounded-full text-xs px-3 py-1 ml-2">
              {e}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
