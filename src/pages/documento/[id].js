import { useState } from "react";
import Back from "../../components/Back";
import Tags from "../../components/Tags";
import Origin from "../../components/Origin";
import Type from "../../components/Type";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";

export default function Detail(props) {
  const [tags, setTags] = useState(props.tags);
  const [allTags, setAllTags] = useState(props.allTags);
  const [types, setTypes] = useState(props.types);
  const [origins, setOrigin] = useState(props.origins);

  const title = props.document[0].title;
  const subTitle = props.document[0].subtitle;
  const content = props.document[0].content;
  const autor = props.document[0].autor;
  const curator = props.document[0].curator;
  const typeId = props.document[0].type_id.type;
  const origemId = props.document[0].origin_id.origin;
  const date = new Date(props.document[0].created_at);

  const [tagsId, setTagsId] = useState([]);

  const [fileLink, setFileLink] = useState(
    process.env.FILESRV + "showFile/" + props.document[0].file
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
          <div className="font-sans">
            <div className="flex flex-row-reverse gap-2">
              {tagsId.map((e, index) => (
                <div key={index}>
                  <div className="bg-blue-200 rounded-full px-2">
                    <p>{e}</p>
                  </div>
                </div>
              ))}
            </div>
            <h1 className="font-sans break-normal text-gray-900 pt-6 text-xl">
              {title}
            </h1>
            <h1 className="font-sans break-normal text-gray-700 pb-2 text-base">
              {subTitle}
            </h1>
            <hr className="border-b border-gray-400" />
          </div>

          <p className="py-6">{content}</p>

          <a
            className="hover:bg-green-500 bg-green-600 cursor-pointer flex flex-row px-2 rounded text-white w-32"
            href={fileLink}
            download={title}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="w-4 mx-1 invert"
            >
              <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>

            <p className="text-lg">Download</p>
          </a>

          <div className="flex flex-row items-center mt-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="w-4"
            >
              <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z" />
            </svg>
            <p className="ml-1 font-semibold">Prévia</p>
          </div>
          <div className="bg-gray-200 w-full border-black border ">
            <iframe src={fileLink} width="100%" height="700px"></iframe>
          </div>

          <blockquote className="border-l-4 border-blue-500 italic my-8 pl-4 md:pl-8">
            <p className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-3 mr-2"
              >
                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>
              Autor: {autor}
            </p>
            <p className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-3 mr-2"
              >
                <path d="M366.4 18.3L310.7 74.1 435.9 199.3l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2L445.6 18.3c-21.9-21.9-57.3-21.9-79.2 0zM286 94.6l-9.2 2.8L132.7 140.6c-19.9 6-35.7 21.2-42.3 41L1.8 445.8c-3.8 11.3-1 23.9 7.3 32.4L162.7 324.7c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L31.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 2.8-9.2L286 94.6z" />
              </svg>
              Curador: {curator}
            </p>
            <p className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="w-3 mr-2"
              >
                <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" />
              </svg>
              Tipo: {typeId}
            </p>
            <p className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="w-3 mr-2"
              >
                <path d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32v96V384c0 35.3 28.7 64 64 64H256V384H64V160H256V96H64V32zM288 192c0 17.7 14.3 32 32 32H544c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H445.3c-8.5 0-16.6-3.4-22.6-9.4L409.4 9.4c-6-6-14.1-9.4-22.6-9.4H320c-17.7 0-32 14.3-32 32V192zm0 288c0 17.7 14.3 32 32 32H544c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H445.3c-8.5 0-16.6-3.4-22.6-9.4l-13.3-13.3c-6-6-14.1-9.4-22.6-9.4H320c-17.7 0-32 14.3-32 32V480z" />
              </svg>
              Origem: {origemId}
            </p>
            <p className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-3 mr-2"
              >
                <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
              </svg>
              Data: {date.toLocaleDateString()}
            </p>
          </blockquote>
        </div>

        <Back />
      </div>
      <Footer />
    </section>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;
  const getDoc = await axios.get(process.env.BACKEND + "documents/" + id);
  const getTags = await axios.get(process.env.BACKEND + "tagsNum");
  const getAllTags = await axios.get(process.env.BACKEND + "tags");
  const getTypes = await axios.get(process.env.BACKEND + "types");
  const getOrigins = await axios.get(process.env.BACKEND + "origins");

  const document = getDoc.data;
  const types = getTypes.data;
  const tags = getTags.data;
  const allTags = getAllTags.data;
  const origins = getOrigins.data;

  return { props: { document, tags, allTags, types, origins } };
}
