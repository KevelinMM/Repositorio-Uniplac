import { useEffect, useState } from "react";
import Back from "../../components/Back";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import publi from "../../db/db";
import Tags from "../../components/Tags";
import Origin from "../../components/Origin";
import Type from "../../components/Type";
import axios from "axios";

export default function Home(props) {
  const [publis, setPublis] = useState(props.documents);

  //filto
  const [filter, setFilter] = useState(props.search);
  const [aux, setAux] = useState([]);
  const [allPageTags, setAllPageTags] = useState([]);
  const [allPageOrigins, setAllPageOrigins] = useState([]);
  const [allPageTypes, setAllPageTypes] = useState([]);
  const [teste, setTeste] = useState();

  function tagFilter(tag) {
    const secondArray = [];
    const auxArray = aux;
    const newTags = [];

    for (let i = 0; i < auxArray.length; i++) {
      if ((auxArray[i].tag.indexOf(tag) != -1) == false) {
        secondArray.push(auxArray[i]);
      }
    }
    setAux(secondArray);
    secondArray.map((e) => e.tag.map((y) => newTags.push(y)));
    setAllPageTags(newTags);
  }

  useEffect((e) => {
    if (filter) {
      const findType = filter.split("-")[0];
      const findContent = filter.split("-")[1];

      if (findType == "search") {
        setAux(
          publis.filter(
            (element) =>
              element.title.toLowerCase().includes(findContent.toLowerCase()) ||
              element.subtitle
                .toLowerCase()
                .includes(findContent.toLowerCase()) ||
              element.autor.toLowerCase().includes(findContent.toLowerCase())
          )
        );
      } else if (findType == "tag") {
        setAux(
          publis.filter((element) => element.tag.indexOf(findContent) >= 0)
        );
      } else if (findType == "origin") {
        setAux(publis.filter((element) => element.origin_id.id == findContent));
      } else if (findType == "type") {
        setAux(publis.filter((element) => element.type_id.id == findContent));
      }
    }
    setAllPageTags(
      allPageTags.filter((este, i) => allPageTags.indexOf(este) === i)
    );
    setAllPageTypes(
      allPageTypes.filter((este, i) => allPageTypes.indexOf(este) === i)
    );
    setAllPageOrigins(
      allPageOrigins.filter((este, i) => allPageOrigins.indexOf(este) === i)
    );
  }, []);

  aux.map((e) =>
    e.tag.map((y) =>
      allPageTags.indexOf(y) == -1 ? allPageTags.push(y) : null
    )
  );
  aux.map((e) =>
    allPageOrigins.indexOf(e.origin_id.origin) == -1
      ? allPageOrigins.push(e.origin_id.origin)
      : null
  );
  aux.map((e) =>
    allPageTypes.indexOf(e.type_id.type) == -1
      ? allPageTypes.push(e.type_id.type)
      : null
  );

  //pagination
  const [itensPerPage, setItensPerPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(aux.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = aux.slice(startIndex, endIndex);

  const [tags, setTags] = useState(props.tags);
  const [types, setTypes] = useState(props.types);
  const [origins, setOrigin] = useState(props.origins);

  return (
    <section className="bg-gray-100 tracking-normal">
      <Header />
      <div className="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16 min-h-screen">
        <div className="lg:w-1/5 overflow-auto">
          <Tags tags={tags} />
          <Origin origin={origins} />
          <Type type={types} />
        </div>
        <div className="w-full lg:w-4/5 p-8 mt-6 lg:mt-0 text-gray-900 leading-normal bg-white border border-gray-400 border-rounded">
          <h1 className="page-title">Resultado da Pesquisa</h1>{" "}
          <div className="flex flex-row flex-wrap gap-1 mb-2">
            {allPageOrigins.map((e, index) => (
              <span
                key={index}
                className="bg-orange-200 hover:bg-orange-100 cursor-pointer rounded-full text-xs px-2 py-1"
                onClick={(event) =>
                  setAux(currentItens.filter((z) => z.origin_id.origin != e)) +
                  setAllPageOrigins(allPageOrigins.filter((z) => z != e))
                }
              >
                {e} x
              </span>
            ))}
            {allPageTypes.map((e, index) => (
              <span
                key={index}
                className="bg-orange-200 hover:bg-orange-100 cursor-pointer rounded-full text-xs px-2 py-1"
                onClick={(event) =>
                  setAux(currentItens.filter((z) => z.type_id.type != e)) +
                  setAllPageTypes(allPageTypes.filter((z) => z != e))
                }
              >
                {e} x
              </span>
            ))}
            {allPageTags.map((e, index) => (
              <span
                key={index}
                className="bg-blue-200 hover:bg-blue-100 cursor-pointer rounded-full text-xs px-2 py-1"
                onClick={(event) => tagFilter(e)}
              >
                {e} x
              </span>
            ))}
          </div>
          <div className="flex flex-row justify-end gap-2 mb-4">
            {Array.from(Array(pages), (item, index) => {
              return (
                <button
                  value={index}
                  key={index}
                  onClick={(e) => setCurrentPage(e.target.value)}
                  className=" text-blue-800 hover:underline bg-gray-100 hover:bg-gray-200 py-1 px-2 rounded"
                >
                  {index}
                </button>
              );
            })}
          </div>
          {currentItens.map((e, index) => {
            e.tag.map((z) =>
              allPageTags.indexOf(z) === -1 ? allPageTags.push(z) : null
            );
            allPageOrigins.indexOf(e.origin_id.origin) === -1
              ? allPageOrigins.push(e.origin_id.origin)
              : null;
            allPageTypes.indexOf(e.type_id.type) === -1
              ? allPageTypes.push(e.type_id.type)
              : null;
            return <Card key={e.id} content={e} />;
          })}
        </div>

        <Back />
      </div>
      <Footer />
    </section>
  );
}

export async function getServerSideProps(context) {
  const getApprovedDocs = await axios.get(
    process.env.BACKEND + "documentsApproved"
  );
  const getTags = await axios.get(process.env.BACKEND + "tagsNum");
  const getTypes = await axios.get(process.env.BACKEND + "typesNum");
  const getOrigins = await axios.get(process.env.BACKEND + "originsNum");

  const documents = getApprovedDocs.data;
  const types = getTypes.data;
  const tags = getTags.data;
  const origins = getOrigins.data;
  const search = context.params.search;

  return { props: { search, documents, tags, types, origins } };
}

//{publis.map((e, index) =>
//  index <= 4 ? <Card key={index} content={e} /> : ""
//)}
