import axios from "axios";

async function createDoc(
  name,
  email,
  title,
  subTitle,
  content,
  origin,
  type,
  lista,
  file
) {
  console.log("chamou a função");
  try {
    console.log(
      name,
      email,
      title,
      subTitle,
      content,
      origin,
      type,
      lista,
      file[0]
    );
    sendDoc(file[0]);
  } catch (e) {
    console.log(e);
  }
}

async function sendDoc(content) {
  let arquivo = new FormData();
  arquivo.append('arquivo', content)
  arquivo.append('service', 'repositorio')
  console.log(arquivo);
  const retorno = await axios.post(
    process.env.FILESRV + "saveFile", arquivo,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },

  );
  console.log(retorno);
}

module.exports = createDoc;
