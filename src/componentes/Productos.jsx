import Cards from "./Carts";
import data from "../data/api.json"

const Productos = () =>{

    const {libros} = data

/*     "titulo":
    "libro" : 
    "imagen": 
    "precio":
    "descripcion" */
    return(
        <div>
            {
                libros.map(libro => {
                    return(
                        <Cards id={libro.libro} 
                            imagen={libro.imagen}
                            precio={libro.precio}
                            titulo={libro.titulo}
                            descripcion={libro.descripcion}
                            />
                    )
                })
            }
        </div>
    )
}

export default Productos;