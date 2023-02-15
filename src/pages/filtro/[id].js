import { useState } from "react";
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

  //pagination
  const [itensPerPage, setItensPerPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(publis.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = publis.slice(startIndex, endIndex);

  const [tags, setTags] = useState(props.tags);
  const [types, setTypes] = useState(props.types);
  const [origins, setOrigin] = useState(props.origins);

  const [title, setTitle] = useState("Titulo do documento");
  const [subTitle, setSubTitle] = useState("Sub Titulo do documento...");
  const [description, setDescription] = useState(
    "Descrição do documento informando um breve resumo do que se trata."
  );
  const [autor, setAutor] = useState("Autor Fulando de Tal");
  const [type, setType] = useState("Artigo");
  const [date, setDate] = useState("06/02/2023");

  const [downloadLink, setDownloadLink] = useState("#");
  const [urlPreview, setUrlPreview] = useState(
    "https://doem.org.br/ba/modelo/arquivos/pdfviewer/0b517cdc5f9850e3782051c82e7f3234?name=lorem-ipsum.pdf"
  );

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
          <div className="flex flex-row justify-center gap-2 mb-4">
            {Array.from(Array(pages), (item, index) => {
              return (
                <button
                  value={index}
                  onClick={(e) => setCurrentPage(e.target.value)}
                  className="text-blue-800 hover:underline bg-gray-100 hover:bg-gray-200 p-1 rounded"
                >
                  {index}
                </button>
              );
            })}
          </div>
          {currentItens.map((e, index) => (
            <Card key={index} content={e} />
          ))}
        </div>

        <Back />
      </div>
      <Footer />
    </section>
  );
}

export async function getServerSideProps() {
  const getApprovedDocs = await axios.get(
    process.env.BACKEND + "documentsApproved"
  );
  const getTags = await axios.get(process.env.BACKEND + "tagsNum");
  const getTypes = await axios.get(process.env.BACKEND + "types");
  const getOrigins = await axios.get(process.env.BACKEND + "origins");

  const documents = getApprovedDocs.data;
  const types = getTypes.data;
  const tags = getTags.data;
  const origins = getOrigins.data;

  return { props: { documents, tags, types, origins } };
}

//{publis.map((e, index) =>
//  index <= 4 ? <Card key={index} content={e} /> : ""
//)}
