function Frase(props) {

  return (
    <div>
      <h1 style={{color: props.cor}}>Olá, meu nome é {props.nome ? props.nome : "Fulano"}</h1>
      { props.paragrafo ?
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, hic.</p>
        :
        <p></p>
      }
      
    </div>
  );
}

export default Frase;
