function RecebeInput({ setNome }) {
  return (<input type="text" onChange={(e) => setNome(e.target.value)} />)
}

export default RecebeInput;