function CapsLock (props) {

    const textoInserido = props.children;
    const textoMaiusculo = textoInserido.toUpperCase();

    return (
      <>
        <h2>CapsLock</h2>
        <p>{textoMaiusculo}</p>
      </>
    )
}

export default CapsLock;