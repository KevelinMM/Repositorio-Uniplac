import { useState } from "react";
import Back from "../../components/Back";
import Tags from "../../components/Tags";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import publi from "../../db/db";

export default function Home() {
  const [publis, setPublis] = useState(publi.documents);

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
        <Tags />
        <div className="w-full lg:w-4/5 p-8 mt-6 lg:mt-0 text-gray-900 leading-normal bg-white border border-gray-400 border-rounded">
          <h1 className="page-title">Resultado da Pesquisa</h1>{" "}
          {publis.map((e, index) =>
            index <= 4 ? <Card key={index} content={e} /> : ""
          )}
        </div>

        <Back />
      </div>
      <Footer />
    </section>
  );
}
