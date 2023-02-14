import axios from "axios";

async function sendEmail(email, title, content) {
  console.log("chamou a função");
  try {
    const send = await axios.post(process.env.BACKEND + "sendEmail", {
      destino: email,
      assunto: title,
      conteudo: "Seu código de ativação para permição de envio de documente é " + content + "",
    });
    console.log("enviou")
  } catch (e) {
    console.log(e);
  }
}

module.exports = sendEmail;
