import axios from "axios";

async function sendEmail(email, title, content) {
  console.log("chamou a função");
  console.log(content)
  try {
    //const send = await axios.post(process.env.API_EMAIL, {
    //  destino: email,
    //  assunto: title,
    //  conteudo: content,
    //});
  } catch (e) {
    console.log(e);
  }
}

module.exports = sendEmail;
