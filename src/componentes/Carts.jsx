

/*     "titulo":
    "libro" : 
    "imagen": 
    "precio":
    "descripcion" */

const Cards = (props) =>{

    const {titulo , id , imagen , precio , descripcion} = props;

    return(
        <div className={'Libro' + id}>
            <img src={imagen} alt="libro" />
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
            <p>{'$'+precio}</p>
            <button>Agregar a carrito</button>
        </div>
    )
}

export default Cards;