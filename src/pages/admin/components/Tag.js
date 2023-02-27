import { useState, useEffect } from "react";
import { FaCheck, FaTrash } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import axios from "axios";

export default function Origin(req) {
  const userInfo = useState(req.infoUser);
  const [allTags, setAllTags] = useState(req.allTags);
  const [tagsSearch, setTagsSearch] = useState([]);
  const token = req.token;

  async function createTag() {
    var tagName = document.getElementById("tag").value;
    tagName = tagName[0].toUpperCase() + tagName.slice(1);
    var truncadeTag = false;
    tagsSearch.map((e) =>
      e.tag.toLowerCase() == tagName.toLowerCase() ? (truncadeTag = true) : null
    );
    if (truncadeTag) {
      document.getElementById("tagCheck").hidden = true;
      document.getElementById("tagAlert").hidden = false;
      document.getElementById("tagDelete").hidden = true;
    } else {
      const tagCreate = await axios.post(process.env.BACKEND + "tags", {
        tag: [{ tag: tagName, approved: 1 }],
      });
      allTags.push({ id: tagCreate.data[0].id, tag: tagName, approved: true });
      setTagsSearch([
        { id: tagCreate.data[0].id, tag: tagName, approved: true },
      ]);
      document.getElementById("tagCheck").hidden = false;
      document.getElementById("tagAlert").hidden = true;
      document.getElementById("tagDelete").hidden = true;
    }
  }

  useEffect(
    (e) => {
      tagsSearch.length > 0
        ? (document.getElementById("showTag").innerHTML = "Ocultar")
        : (document.getElementById("showTag").innerHTML = "Ver todos");
    },
    [tagsSearch]
  );

  async function deleteTag(tagId) {
    await axios.delete(process.env.BACKEND + "tags/" + tagId, {
      headers: { Authorization: `bearer ${token}` },
    });
    setAllTags(allTags.filter((e) => e.id != tagId));
    setTagsSearch(tagsSearch.filter((e) => e.id != tagId));

    document.getElementById("tagCheck").hidden = true;
    document.getElementById("tagAlert").hidden = true;
    document.getElementById("tagDelete").hidden = false;
  }

  return (
    <form
      className="adminCards"
      onSubmit={(e) => e.preventDefault() + createTag()}
    >
      <div className="mb-4 flex justify-between">
        <div>
          <p className="font-semibold">Cadastrar Tag</p>
          <p className="text-sm pt-1">* Aperte enter para cadastrar.</p>
          <p className="text-sm pt-1">
            * Tags que já existem não poderão ser criadas novamente.
          </p>
        </div>
        <span id="showTag"
          onClick={() => setTagsSearch(tagsSearch.length > 0 ? [] : allTags)}
          className="text-blue-500 underline cursor-pointer mr-2 mb-1"
        >
          Ver todos
        </span>
      </div>
      <div className="flex flex-row-reverse">
        <div hidden id="tagCheck" className="absolute">
          <FaCheck className="m-4 w-4 text-green-500" />
        </div>
        <div hidden id="tagDelete" className="absolute">
          <MdClose className="m-4 w-4 text-red-500" />
        </div>
        <div hidden id="tagAlert" className="absolute">
          <FiAlertCircle className="m-4 w-4 font-bold text-yellow-500" />
        </div>
        <input
          required
          className="w-full rounded-lg border-gray-200 p-3 text-sm"
          placeholder="Digite o nome da Tag"
          type="text"
          id="tag"
          onChange={(e) =>
            e.target.value.length > 1
              ? setTagsSearch(
                  allTags.filter((y) =>
                    y.tag.toLowerCase().includes(e.target.value.toLowerCase())
                  )
                )
              : setTagsSearch([]) +
                (document.getElementById("tagCheck").hidden = true) +
                (document.getElementById("tagDelete").hidden = true) +
                (document.getElementById("tagAlert").hidden = true)
          }
        />
      </div>
      <ul className="mx-2 rounded">
        {tagsSearch.map((e, index) => (
          <li
            key={index}
            className="rounded-md p-2 bg-slate-50 flex justify-between shadow-md mt-1"
          >
            {e.tag}
            {userInfo[0][0].permission_id.id == 1 ? (
              <a onClick={(z) => deleteTag(e.id)} className="cursor-pointer">
                <FaTrash />
              </a>
            ) : null}
          </li>
        ))}
      </ul>
    </form>
  );
}
