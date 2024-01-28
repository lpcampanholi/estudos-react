import RecebeInput from "./RecebeInput/RecebeInput";
import ImprimeInput from "./ImprimeInput/ImprimeInput";
import { useState } from "react";

function StateLift() {

  const [nome, setNome] = useState();

  return (
    <>
      <h2>State Lift</h2>
      <RecebeInput setNome={setNome} />
      <ImprimeInput nome={nome} />
    </>
  )
}

export default StateLift;