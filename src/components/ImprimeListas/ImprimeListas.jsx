import './ImprimeListas.css'

function ImprimeListas({ lista }) {
  return (
    <>
      <h2 className='titulo'>Imprimindo Listas</h2>
      <div className='container'>
        {lista.map((item, id) => (
          <p className='item' key={id}>{item}</p>
        ))}
      </div>
    </>
  )
}

export default ImprimeListas;