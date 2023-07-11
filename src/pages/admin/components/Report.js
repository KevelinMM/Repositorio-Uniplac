import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import BugReportIcon from "@mui/icons-material/BugReport";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import html2canvas from "html2canvas";
import axios from "axios";
import { useEffect } from "react";

const style = {
  position: "absolute",
  bottom: "0px",
  right: "0px",
  width: 380,
  color: "black",
  bgcolor: "background.paper",
  border: "0px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Report({ user }) {
  const [open, setOpen] = useState(false);
  const [reportMessage, setReportMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [userReport, setUserReport] = useState("");
  const [errorExist, setErrorExist] = useState(false);
  const [errorImage, setErrorImage] = useState();
  const [loading, setLoading] = useState(false);
  const [send, setSend] = useState(false);

  const captureScreenshot = () => {
    const element = document.body;
    element.style.backgroundColor = "#304556";

    html2canvas(element).then((canvas) => {
      const dataUrl = canvas.toDataURL();
      setErrorImage(dataUrl);
    });
  };

  const handleClose = () => {
    setOpen(false);
    setSend(false);
  };

  const handleClickOpen = () => {
    captureScreenshot();
    setErrorExist(false);
    setOpen(true);
  };

  async function sendReport() {
    setLoading(true);
    if (reportMessage.length >= 900) {
      return;
    }

    try {
      await axios.post(process.env.BACKEND + "sendEmail", {
        destino: "niu.atendimento@uniplaclages.edu.br",
        assunto: "Problema relatado no REPOSITÓRIO UNIPLAC",
        conteudo: `${userReport} </br>  <h3><strong>Mensagem do usuário: </strong></h3><p>${reportMessage}</p> </br> <img src='${errorImage}'/>`,
      });
      setReportMessage("");
      setSend(true);
    } catch (err) {
      console.log(err.message);
    }
    setLoading(false);
  }

  useEffect(() => {
    setUserReport(
      "<p> " +
        window.location +
        "</p>" +
        "<p>Usuário: " +
        user.id +
        " - " +
        user.name +
        " - Perm: " +
        user.permission_id.name +
        "</p>"
    );
  }, []);


  return (
    <div className="rounded-full bg-orange-400 animate-pulse cursor-pointer fixed right-4 bottom-4">
      <Tooltip
        open={errorExist}
        title={
          errorExist
            ? "Parece que ocorreu um erro. Clique aqui para reportar"
            : "Reportar"
        }
        placement="left"
        arrow
      >
        <BugReportIcon className="text-2xl" onClick={handleClickOpen} />
      </Tooltip>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h5" component="h2">
          Contate-nos!
          </Typography>

          <p className="text-justify my-2 font-">
            Sua mensagem será encaminhada para o setor responsável para que o problema seja
            resolvido.
          </p>

          {send ? (
            <div>
              <p className="text-justify font-thin mb-4">
                <TaskAltIcon color="success" />
                 Mensagem enviada. Aguarde, iremos resolver o problema assim que
                possível.
              </p>
            </div>
          ) : (
            <div>
              {" "}
              <TextField
                label="Cite brevemente o que aconteceu"
                placeholder="Ex: 'Estava tentando realizar uma ação e ...' "
                multiline
                error={reportMessage.length >= 900}
                className="w-full"
                value={reportMessage}
                maxRows={21}
                onChange={(e) => setReportMessage(e.target.value)}
                helperText={
                  reportMessage.length > 500 &&
                  "Sua mensagem está muito extensa, se possível simplifique-a"
                }
              />
              <div className="flex justify-between mt-2">
                <Button onClick={() => setOpen(false)}>Cancelar</Button>
                <Button onClick={() => sendReport()}>Reportar</Button>
              </div>
              {loading && (
                <div className="flex justify-center">
                  <CircularProgress />
                </div>
              )}
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}
