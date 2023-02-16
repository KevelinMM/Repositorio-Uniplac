import axios from "axios";

async function sendEmail(email, content) {
  console.log("chamou a função");
  try {
    const send = await axios.post(process.env.BACKEND + "sendEmail", {
      destino: email,
      assunto: "Repositório Institucional Uniplac",
      conteudo: "Seu código de ativação para envio de documento é " + content + "",
    });
    console.log("enviou")
  } catch (e) {
    console.log(e);
  }
}

module.exports = sendEmail;
