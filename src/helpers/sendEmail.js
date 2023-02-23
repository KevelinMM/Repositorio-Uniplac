import axios from "axios";

async function sendEmail(email, content) {
  try {
    const send = await axios.post(process.env.BACKEND + "sendEmail", {
      destino: email,
      assunto: "Repositório Institucional Uniplac",
      conteudo: content + "",
    });
  } catch (e) {
    console.log(e);
  }
}

module.exports = sendEmail;
