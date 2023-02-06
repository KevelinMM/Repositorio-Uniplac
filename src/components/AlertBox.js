import { GoAlert } from "react-icons/go";
import react, { useState, useEffect } from "react";

export default function Alert(props) {
  const [erro, setErro] = useState(props.msg);

  useEffect(() => {
    setErro(props.msg);
  }, [props.msg]);

  return (
    <>
      {erro == undefined ? null : (
        <div className="alert-box">
          <span>{erro}</span>
          <GoAlert className="my-2 animate-pulse text-lg" />
        </div>
      )}
    </>
  );
}
