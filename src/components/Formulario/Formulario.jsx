import Styles from "./Formulario.module.css"

function Formulario () {

    function SubmeterFormulario(e){
        e.preventdefault()
    }

    return (
        <form onSubmit={SubmeterFormulario}>
            <div>
                <label htmlFor="nome">Nome</label>
                <input type="text"placeholder="nome" id="nome" />
            </div>
            <div>
                <label htmlFor=""></label>
                <input type="text" />
            </div>
        </form>
        

    )

}

export default Formulario;
