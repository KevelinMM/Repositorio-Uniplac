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
  try {
    const fileId = await sendDoc(file[0]);
    if(fileId == false){
      return false;
    }
    const creat = await axios.post(process.env.BACKEND + "documents", {
      title: title,
      subtitle: subTitle,
      content: content,
      autor: name,
      autor_email: email,
      file: fileId,
      origin_id: origin,
      type_id: type,
    });

    const newTagsList = lista.filter((tag) => !tag.id);
    const tagsList = lista.filter((tag) => tag.id);

    const createNewTags = await axios.post(process.env.BACKEND + "tags", {
      tag: newTagsList,
    });
    createNewTags.data.map((e) => tagsList.push(e));

    const assosiateDocTags = await axios.post(
      process.env.BACKEND + "documentTags",
      {
        document_id: creat.data.id,
        tags: tagsList,
      }
    );

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

async function sendDoc(content) {
  try {
    let arquivo = new FormData();
    arquivo.append("arquivo", content);
    arquivo.append("service", "repositorio");
    const saveFile = await axios.post(
      process.env.FILESRV + "saveFile",
      arquivo,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return saveFile.data.image.id;
  } catch {
    return false;
  }
}

module.exports = createDoc;
