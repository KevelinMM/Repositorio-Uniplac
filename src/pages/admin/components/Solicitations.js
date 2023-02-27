import { useState } from "react";
import { GrDocumentTime, GrDocumentVerified } from "react-icons/gr";

export default function Solicitations(req) {
  const [documents, setDocuments] = useState(
    req.documents.filter((e) => e.approved == 0)
  ); 
  
  return (
    <div className="adminCards">

      <p className="font-semibold mb-4">Solicitações</p>
      <select
        defaultValue={0}
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 "
        onChange={(e) =>
          setDocuments(
            e.target.value == "all"
              ? req.documents
              : req.documents.filter((z) => e.target.value * 1 == z.approved)
          )
        }
      >
        <option value="all">Todos</option>
        <option value={0}>Pendêntes</option>
        <option value={1}>Aprovados</option>
      </select>
      <ul className="mt-2 text-sm rounded-md space-y-1">
        {documents.map((e) => (
          <li
            key={e.id}
            className="cursor-pointer p-2 flex items-center space-x-2 hover:underline "
          >
            {e.approved == true ?  <div className="text-lg rounded bg-green-100"><GrDocumentVerified/></div> : <div className="text-lg rounded bg-yellow-100"><GrDocumentTime/></div>}<a href={"admin/requests/" + e.id}>{e.title +  " - " + e.autor} </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
