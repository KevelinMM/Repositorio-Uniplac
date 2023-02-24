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
        <div className="flex shadow opacity-70 space-x-4 px-4 justify-center mt-6 w-full rounded border items-center bg-red-200 border-red-300 dark:bg-[rgba(174,124,20,0.2)] dark:border-[#966600]">
          <span>{erro}</span>
          <GoAlert className="my-2 animate-pulse text-lg" />
        </div>
      )}
    </>
  );
}
