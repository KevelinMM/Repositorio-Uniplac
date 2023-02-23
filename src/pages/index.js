import Back from "../components/Back";
import Tags from "../components/Tags";
import Origin from "../components/Origin";
import Type from "../components/Type";
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Form";
import { useState } from "react";
import axios from "axios";

export default function Home(props) {
  const [publis, setPublis] = useState(props.documents);
  const [tags, setTags] = useState(props.tags);
  const [allTags, setAllTags] = useState(props.allTags);
  const [types, setTypes] = useState(props.types);
  const [allTypes, setAllTypes] = useState(props.allTypes);
  const [origins, setOrigin] = useState(props.origins);
  const [allOrigins, setAllOrigin] = useState(props.allOrigins);

  return (
    <section>
      <Header />
      <div className="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16 lg:min-h-screen">
       <div className=" lg:w-1/5 lg:overflow-auto flex lg:flex-col ">
          <Tags tags={tags} />        
          <Origin origin={origins} />
          <Type type={types} />
       </div>

       <div className=" w-full lg:w-4/5 p-3 lg:p-6 text-gray-900 bg-gray-50 border-opacity-50 border border-gray-300 border-rounded">
          <h2 className="page-title">Sobre o RI Uniplac</h2>
          <div className="text-gray-600 text-justify text-base px-4">
            O Repositório Institucional da Universidade do Planalto Catarinense
            (Uniplac) é um sistema de informação que visa armazenar, preservar,
            organizar e disseminar amplamente a produção intelectual dos
            diversos setores e segmentos da comunidade da Universidade, provendo
            o acesso aberto à informação produzida na instituição e registrada
            como científica, tecnológica, didática, artístico-cultural e
            técnico-administrativa.
          </div>

          <h2 className="page-title">Submissões recentes</h2>
          {publis.map((e, index) =>
            index <= 4 ? <Card key={index} content={e} /> : ""
          )}

          <Form types={allTypes} origins={allOrigins} tags={allTags} />
        </div>

        

        <Back />
      </div>
      <Footer />
    </section>
  );
}

export async function getServerSideProps() {
  const getLatestDocuments = await axios.get(
    process.env.BACKEND + "documentsLatest"
  );
  const getTags = await axios.get(process.env.BACKEND + "tagsNum");
  const getAllTags = await axios.get(process.env.BACKEND + "tags");
  const getTypes = await axios.get(process.env.BACKEND + "typesNum");
  const getAllTypes = await axios.get(process.env.BACKEND + "types");
  const getOrigins = await axios.get(process.env.BACKEND + "originsNum");
  const getAllOrigins = await axios.get(process.env.BACKEND + "originWuser");

  const documents = getLatestDocuments.data;
  const types = getTypes.data;
  const allTypes = getAllTypes.data;
  const tags = getTags.data;
  const allTags = getAllTags.data;
  const origins = getOrigins.data;
  const allOrigins = getAllOrigins.data;

  return { props: { documents, tags, allTags, types, allTypes, origins, allOrigins } };
}
