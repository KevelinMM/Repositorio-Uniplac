import axios from "axios";

async function sendEmail(email, content) {
  try {
    const send = await axios.post(process.env.BACKEND + "sendEmail", {
      destino: email,
      assunto: "Repositório Institucional Uniplac",
      conteudo: content + "",
    });
    return true
  } catch (e) {
    console.log(e);
    return false
  }
}

module.exports = sendEmail;
